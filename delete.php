<?php
$cid=$_GET['c_id'];
$conn=mysqli_connect('localhost','root','','coders_tailor');
$query="DELETE FROM customer where c_id='$cid'";
$res=mysqli_query($conn,$query);
if($res)
{
	echo"Record Deleted Successfully";
}
else
{
	echo"Something went wrong";
}
?>