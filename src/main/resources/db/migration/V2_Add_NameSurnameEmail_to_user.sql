ALTER TABLE user ADD COLUMN name VARCHAR(50) NOT NULL;
ALTER TABLE user ADD COLUMN surname VARCHAR(50) NOT NULL;
ALTER TABLE user ADD COLUMN email VARCHAR(50) NOT NULL UNIQUE;