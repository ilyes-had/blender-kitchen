<?php
$server = "localhost";
$user = "root";
$pwd = "";
$db = "blender";

$con = new mysqli($server, $user, $pwd, $db) or die("error");

if(isset($_POST["submit"])){
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $state = $_POST["state"];
    $delivery_type = $_POST["delivery_option"];
    $address = $_POST["address"];
    $phone_number = $_POST["phone_number"];
    $quantity = $_POST["quantity"];

    $sql = "INSERT INTO customers (`first-name`, `last-name`, `delivery-type`, `state`, `phone-number`, `adress`, `quantity`)
        VALUES ('$first_name', '$last_name', '$delivery_type', '$state', '$phone_number', '$address', '$quantity')";
    
    if ($con->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $con->error;
    }
    
    $con->close();
}
?>
