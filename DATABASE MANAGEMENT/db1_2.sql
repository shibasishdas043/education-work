use db1;

SELECT * FROM user;

ALTER TABLE user DROP COLUMN created_at;

INSERT INTO user VALUES (1, 'shiba@gmail.com', 'SHIBA', 'MALE', '07-02-2003');