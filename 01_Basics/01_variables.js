const accountId = 144553;
let accountEmail = "priyank@test.com";
var accountPassword = "123456";
accountCity = "Baroda";
let accountState; // Give us a undefiend beacuase we can not give any value for this variable to store information

// accountId = 2; // Note Allowed

accountEmail =  "Patel@test.com";
accountPassword = "121212";
accountCity = "Bagaluru";
/*
    Prefer not to use var

    Beacuase of issue in block scope and functional scope
*/ 

console.table([accountId,accountEmail,accountPassword, accountCity,accountState])