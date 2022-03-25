const pg = require('pg');
const express = require('express');
const app = express();
app.use(express.json());

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades" `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score);
  const params = [name, course, score];
  if (params.includes(undefined)) {
    res.status(400).json({
      error: 'Invalid grade—missing name, course, or score.'
    });
    return;
  } else if (!Number.isInteger(score) || score > 100 || score < 0) {
    res.status(400).json({
      error: 'Score has to be an INTEGER between 0 and 100.'
    });
    return;
  }

  const sql = `
  insert into "grades"("name", "course", "score")
    values ($1, $2, $3)
  returning *
  `;

  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score);
  const gradeId = parseInt(req.params.gradeId);
  const params = [name, course, score, gradeId];
  if (isNaN(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId has to be a positive INTEGER.'
    });
    return;
  } else if (params.includes(undefined)) {
    res.status(400).json({
      error: 'Invalid grade—missing name, course, or score.'
    });
    return;
  } else if (!Number.isInteger(score) || score > 100 || score < 0) {
    res.status(400).json({
      error: 'Score has to be an INTEGER between 0 and 100.'
    });
    return;
  }

  const sql = `
    update  "grades"
       set  "name" = $1,
            "course" = $2,
            "score" = $3
      where "gradeId" = $4
    returning *
     `;

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  const params = [gradeId];
  if (isNaN(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId has to be a positive INTEGER.'
    });
    return;
  }
  const sql = `
    delete from "grades"
      where "gradeId" = $1
      returning *
     `;

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on Port 3000!');
});
