CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_type VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE randevu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    description TEXT,
    title VARCHAR(100),
    location VARCHAR(100),
    reminder_settings VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    category_name VARCHAR(50) NOT NULL,
    color_code VARCHAR(7),
    FOREIGN KEY (user_id) REFERENCES user(id)
);
