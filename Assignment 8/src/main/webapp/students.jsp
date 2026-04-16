<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <title>Student Information Portal</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Student Information</h1>

    <%
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {
            // Load MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Database connection parameters
            String url = "jdbc:mysql://localhost:3306/student_db?useSSL=false&serverTimezone=UTC";
            String username = "root";
            String password = ""; // Change this to your MySQL password

            // Establish connection
            conn = DriverManager.getConnection(url, username, password);

            // Create statement
            stmt = conn.createStatement();

            // Execute query
            String sql = "SELECT * FROM students_info";
            rs = stmt.executeQuery(sql);
    %>

    <table>
        <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Division</th>
            <th>City</th>
        </tr>
        <%
            // Process result set
            while (rs.next()) {
                int studId = rs.getInt("stud_id");
                String studName = rs.getString("stud_name");
                String className = rs.getString("class");
                String division = rs.getString("division");
                String city = rs.getString("city");
        %>
        <tr>
            <td><%= studId %></td>
            <td><%= studName %></td>
            <td><%= className %></td>
            <td><%= division %></td>
            <td><%= city %></td>
        </tr>
        <%
            }
        %>
    </table>

    <%
        } catch (Exception e) {
            out.println("<p>Error: " + e.getMessage() + "</p>");
        } finally {
            // Close resources
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                out.println("<p>Error closing resources: " + e.getMessage() + "</p>");
            }
        }
    %>

</body>
</html>