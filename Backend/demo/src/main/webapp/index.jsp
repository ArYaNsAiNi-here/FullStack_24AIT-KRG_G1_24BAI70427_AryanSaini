<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Servlet Dispatcher Demo</title>
</head>
<body>
<h1>Servlet Demo</h1>
<br/>
<a href="${pageContext.request.contextPath}/first">Call FirstServlet (forwards to SecondServlet)</a>
<br/>
<a href="${pageContext.request.contextPath}/second">Call SecondServlet directly</a>
<br/>
<a href="${pageContext.request.contextPath}/hello-servlet">Existing Hello Servlet</a>
</body>
</html>