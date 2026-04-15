package com.example.demo;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(name = "secondServlet", value = "/second")
public class SecondServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String message = (String) request.getAttribute("message");
        if (message == null) {
            message = "Direct call to SecondServlet.";
        }

        // Server-side log so you can verify dispatch in console as well.
        System.out.println("SecondServlet executed. Message: " + message);

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>SecondServlet Response</h2>");
        out.println("<p>" + message + "</p>");
        out.println("</body></html>");
    }
}

