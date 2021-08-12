# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?

SQL is a domain specific language used for database management.

2. What the PostgreSQL query that would return all the content in a particular table?

SELECT *

3. What is the command to create a new Rails application with a PostgreSQL database?

rails new application-name -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

rails generate model Meals breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one?

A migration is a file created through the rails db:migration command and is used to modify the database.


6. What is the command to generate a migration file?

rails db:migrate


7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The naming convention is PascalCase for a Rails model. The naming convention for the table that is generated is snake_case.


8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

The schema file is the actual shape of the database. This should not be modified directly because you cant keep record of exact changes and time when modifying directly.

9. What is the Rails console?

The Rails console is used within terminal to work directly with the Rails application.


10. What is the Rails console command to see all the content in a particular table?

The command for Rails console is "rails c".
