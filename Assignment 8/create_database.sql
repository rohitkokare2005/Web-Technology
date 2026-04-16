-- SQL script to create the database and table for student information

-- Create database (if not exists)
CREATE DATABASE IF NOT EXISTS student_db;

-- Use the database
USE student_db;

-- Create the students_info table
CREATE TABLE IF NOT EXISTS students_info (
    stud_id INT PRIMARY KEY,
    stud_name VARCHAR(50) NOT NULL,
    class VARCHAR(10) NOT NULL,
    division VARCHAR(5) NOT NULL,
    city VARCHAR(50) NOT NULL
);

-- Insert sample data
INSERT INTO students_info (stud_id, stud_name, class, division, city) VALUES
(1, 'John Doe', '10', 'A', 'New York'),
(2, 'Jane Smith', '9', 'B', 'Los Angeles'),
(3, 'Bob Johnson', '11', 'A', 'Chicago'),
(4, 'Alice Brown', '10', 'C', 'Houston'),
(5, 'Charlie Wilson', '9', 'A', 'Phoenix');