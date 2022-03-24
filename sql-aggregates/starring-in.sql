select "g"."name" as "Genre",
       count("filmId")
  from "genres" as "g"
  join "filmGenre" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
  group by "g"."name"
