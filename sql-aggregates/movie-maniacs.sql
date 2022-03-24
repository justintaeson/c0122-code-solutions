select "firstName",
       "lastName",
       sum("p"."amount")
  from "customers"
  join "rentals" as "r" using ("customerId")
  join "payments" as "p" using ("rentalId")
  group by "firstName","lastName"
  order by sum("p"."amount") desc
