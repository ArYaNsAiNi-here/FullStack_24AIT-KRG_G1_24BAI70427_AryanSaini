package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnector {
    private static final String URL = "jdbc:mysql://localhost:3306/servlet";
    private static final String USER = "root";
    private static final String PASSWORD = "2202";

    private DBConnector() {

    }

    public static Connection getConnection() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new IllegalStateException("MySQL JDBC driver not found in classpath.", e);
        }

        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
