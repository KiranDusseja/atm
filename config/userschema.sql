CREATE TABLE atmUsers
(
  UserID INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
  CreatedAt DATETIME NOT NULL,
  Address VARCHAR
  (250),
  SSN VARCHAR
  (11),
  fName VARCHAR
  (250),
  lName VARCHAR
  (250)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;;

  CREATE TABLE userCards
  (
    AccountID INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    BankNumber INT,
    CardNumber INT,
    CVC INT
    (3),
    PIN VARCHAR
    (255),
    Status BOOLEAN,
    Balance INT, 
    Type VARCHAR
    (50),
    ExpirationDate VARCHAR
    (50),
    FOREIGN KEY
    (UserID) REFERENCES atmUsers
    (UserID)

  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;;

    CREATE TABLE transactions
    (
      TransactionID INT NOT NULL
      AUTO_INCREMENT PRIMARY KEY,
    Amount INT,
    Reason VARCHAR
      (255),
    UserID INT NOT NULL,
    Date DATETIME NOT NULL,
    FOREIGN KEY
      (UserID) REFERENCES atmUsers
      (UserID)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;