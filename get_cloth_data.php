<?php 

$conn=mysqli_connect('localhost','root','','coders_tailor');
$cl_id=$_GET['cl_id'];
$query="UPDATE tbl_delivery_details SET status='deliver' where cl_id='$cl_id'";
$res=mysqli_query($conn,$query);

if($res)
{
	echo"Status Changed Successfully";
}
else
{
	echo "Error";
}