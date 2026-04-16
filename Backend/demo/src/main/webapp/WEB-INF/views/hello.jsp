<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Form</title>
</head>
<body>
<h1>Form</h1>
<form action="${pageContext.request.contextPath}/saveUser" method="post">
    <div>
        <label for="name">Name:</label>
        <input id="name" type="text" name="name" required>
    </div>
    <div>
        <label for="age">Age:</label>
        <input id="age" type="number" name="age" required>
    </div>
    <div>
        <label for="email">Email:</label>
        <input id="email" type="email" name="email" required>
    </div>
    <div>
        <label for="mobile">Mobile:</label>
        <input id="mobile" type="number" name="mobile" required>
    </div>
    <div>
        <input type="submit" value="Submit">
    </div>
</form>
</body>
</html>


