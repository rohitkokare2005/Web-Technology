# Student Information Portal - JSP Web Application

This is a JSP-based web application that demonstrates database connectivity and dynamic content display. The application connects to a MySQL database, retrieves student information, and displays it in a web page.

## Prerequisites

- Java 11 or higher
- Apache Tomcat 9 or 10
- MySQL Server
- Maven

## Setup Instructions

### 1. Database Setup

1. Install and start MySQL Server
2. Open MySQL command line or a MySQL client (like MySQL Workbench)
3. Run the SQL script `create_database.sql` to create the database and table:

   ```sql
   source create_database.sql;
   ```

   Or copy and paste the contents of `create_database.sql` into your MySQL client.

### 2. Project Build

1. Navigate to the project root directory
2. Run Maven to build the project:

   ```bash
   mvn clean package
   ```

   This will create a WAR file in the `target` directory.

### 3. Deploy to Tomcat

1. Copy the generated WAR file (`student-portal-1.0-SNAPSHOT.war`) to Tomcat's `webapps` directory
2. Start Tomcat server
3. Access the application at: `http://localhost:8080/student-portal-1.0-SNAPSHOT/students.jsp`

   (The exact URL may vary based on your Tomcat configuration)

## Configuration

If your MySQL setup is different from the default:

- **Database URL**: Update the `url` variable in `students.jsp`
- **Username/Password**: Update the `username` and `password` variables in `students.jsp`

Default configuration assumes:
- MySQL running on localhost:3306
- Database name: `student_db`
- Username: `root`
- Password: (empty)

## Project Structure

```
src/
├── main/
│   ├── java/          # Java source files (empty for this demo)
│   ├── resources/     # Resources (empty)
│   └── webapp/        # Web application files
│       ├── WEB-INF/
│       │   └── web.xml
│       └── students.jsp
├── test/              # Test files (not included)
pom.xml                # Maven configuration
create_database.sql    # Database setup script
README.md              # This file
```

## Technologies Used

- Java Server Pages (JSP)
- MySQL Database
- JDBC (Java Database Connectivity)
- Maven for build management
- Apache Tomcat for deployment

## Notes

- This is a basic demonstration and uses scriptlets in JSP, which is not recommended for production applications.
- In a real-world scenario, consider using servlets, MVC pattern, or frameworks like Spring MVC.
- Database connection details are hardcoded for simplicity; use connection pooling and configuration files in production.