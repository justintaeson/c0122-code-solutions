const takeAChance = require('./take-a-chance');

const justinPromise = takeAChance('Justin');

justinPromise.then(success => {
  console.log(success);
});

justinPromise.catch(error => {
  console.log(error.message);
});
