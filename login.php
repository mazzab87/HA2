
<?php
     require('db.php');
     session_start();

     if ($_SERVER['REQUEST_METHOD'] == 'POST') {
         $username = $_POST['username'];
         $password = $_POST['password'];
         $md5password = md5($password);

         $query = "SELECT * FROM users WHERE username = '$username' AND password = '$md5password'";

         $result = mysqli_query($connection, $query);

         $rows = mysqli_num_rows($result);

         if ($rows == 1) {
            $_session['username'] = $username;
            echo "you have logged in as ". $_session['username'];
         }

         else {
             echo "There was problem";
         }
        }
?>