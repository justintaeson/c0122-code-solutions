select count("cityId") as "Cities",
        "countries"."name" as "Country"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name"
