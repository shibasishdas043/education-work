CREATE DATABASE IF NOT EXISTS startersql;
USE startersql;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    gender ENUM('Male', 'Female', 'Other'),
    date_of_birth DATE,
    salary DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SELECT * FROM users WHERE gender='female';

SELECT * FROM users WHERE id>10; 

SELECT * FROM users WHERE date_of_birth IS NULL;

SELECT * FROM users WHERE date_of_birth BETWEEN '1990-09-09' AND '1999-09-09';

SELECT * FROM users WHERE gender='Male' OR salary>'60000';

SELECT * FROM users ORDER BY salary BETWEEN 60000 AND 70000  DESC LIMIT 2 ;