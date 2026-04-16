package com.example.demo;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/saveUser")
public class UserController extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().println("Submit the form from /hello-servlet using POST.");
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        int age;
        long mobile;

        try {
            age = Integer.parseInt(request.getParameter("age"));
            mobile = Long.parseLong(request.getParameter("mobile"));
        } catch (NumberFormatException ex) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Age and mobile must be numeric values.");
            return;
        }

        System.out.println(name + " " + email + " " + age + " " + mobile);

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>User saved successfully</h2>");
        out.println("<p>Name: " + name + "</p>");
        out.println("<p>Email: " + email + "</p>");
        out.println("<p>Age: " + age + "</p>");
        out.println("<p>Mobile: " + mobile + "</p>");
        out.println("<a href='" + request.getContextPath() + "/hello-servlet'>Back to form</a>");
        out.println("</body></html>");
        try {
            UserDAO.saveUser(name, email, age, (int) mobile);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}