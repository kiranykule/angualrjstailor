<?php 
 //$date=$_GET['date'];
 $conn=mysqli_connect('localhost','root','','coders_tailor');
$query="SELECT * FROM `tbl_delivery_details`";

$res=mysqli_query($conn,$query);

$result=mysqli_num_rows($res);
echo json_encode($result);	
?>	