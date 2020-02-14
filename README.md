# Online ATM

This system is build using Express.js as back end and React.js as front end.

All interaction between back end and front end is done via API calls.

### Notice

This project was done as part of a coding test, it is not secure or robust enough to use in _any_ production environment.

## Installation

### Dependencies outside of package.json

- yarn
- NodeJS
- MySQL or MariaDB database with at least one existing user. There needs to be a database named `users`

To generate the tables run the [userschema.sql](./config/userschema.sql)
from the config folder in the users database
Example SQL query to insert the one required user:

```SQL
INSERT INTO atmUsers (UserID, CreatedAt, Address, SSN, fName, lName) VALUES (0,"1991-03-25 10:11:12","Pilestredet 52", 110391387, "Anna", "Sethnes");
```

#### Back end installation

From root folder run `yarn`

#### Front end installation

From client folder run `yarn`

## Running instrucions

Client and back end can run independantly and will both function on their own, how ever front end would get no data from the back end. It is a good idea to run both front end and back end at the same time, this can be done manually by running client and back end or use the included concurrency script in this project. To run the entire project, from root of this project in terminal run

`yarn dev`, see [package.json](./package.json) in project root folder for more scripts.

## Security

All registered PINs for usercard are encrypted with a hash and 15 salt rounds. Data is _not_ encrypted in transit by default in this application. The application works with HTTPS, some data is stored as normal session variables in cleartext. Implementation of further security using JWS and Passport.js had to be halted due to project timeline limitation. As previously stated this system is not secure or robust enought for _any_ production system

## Notes

If getting `"Node.JS: Getting error : [nodemon] Internal watch failed: watch ENOSPC"` in Linux run
`echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` from the terminal. See this [StackOverflow post](https://stackoverflow.com/questions/34662574/node-js-getting-error-nodemon-internal-watch-failed-watch-enospc) for more information.
