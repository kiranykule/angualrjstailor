<?php 
 $date=$_GET['date'];
 $conn=mysqli_connect('localhost','root','','coders_tailor');
$query="SELECT * FROM `tbl_delivery_details` LEFT JOIN `customer` ON tbl_delivery_details.c_id=customer.c_id where deliver_date='$date'";

$res=mysqli_query($conn,$query);

$result=mysqli_num_rows($res);
echo json_encode($result);	
?>	