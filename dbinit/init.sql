CREATE DATABASE IF NOT EXISTS patientsdb;
USE patientsdb;
DROP TABLE IF EXISTS patientsdb;

CREATE TABLE patients
(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) DEFAULT NULL,
    last_name VARCHAR(255) DEFAULT NULL,
    address VARCHAR(255) DEFAULT NULL,
    diagnosis VARCHAR(255) DEFAULT NULL,
    phone VARCHAR(30) DEFAULT NULL,
    status VARCHAR(30) DEFAULT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    image_url VARCHAR(255) DEFAULT NULL,

    PRIMARY KEY (id),
    CONSTRAINT UQ_patients_Email UNIQUE (email)
)AUTO_INCREMENT=1;