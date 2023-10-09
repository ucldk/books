# Books

Simple example code for a Book project. Created as simple boilerplate code for Web Development students at UCL University College.

## Getting Started

### Prerequisites

* A database

### Setup

1. Clone the project to your own machine
    ```sh
    git clone git@github.com:ucldk/books.git && cd books
    ```
2. Download dependencies for the project
    ```sh
    npm install
    ```
3. Setup project database. Go to the database config `./config/config.json`, and change the following, so it matches your connection:
    ```json
	  "development": {
		"username": "root",
		"password": null,
		"database": "database_development",
		"host": "127.0.0.1",
		"dialect": "mysql"
	  }
	```
	* For Microsoft SQL Server the configuration could be like:
        * username: `sa`
        * password: `Ladida.12`
        * database: `books_dev`
        * host: `127.0.0.1`
        * dialect: `mssql`
4. Now run the following command to setup the database:
    ```sh
    npm run db:reset
    ```
5. Start the server
    ```sh
    npm run dev
    ```
