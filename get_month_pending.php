<?php
//echo"Nikhil";
$conn=mysqli_connect('localhost','root','','coders_tailor');
$todaydate=date('Y/m/d');
$monthdate=date('Y/m/d',strtotime("-30 days"));

$query="SELECT * FROM `tbl_delivery_details` LEFT JOIN customer ON tbl_delivery_details.c_id=customer.c_id  WHERE deliver_date BETWEEN '$monthdate' AND '$todaydate' AND status='pending'";
$res=mysqli_query($conn,$query);
$arr=array();
if($res)
{
	while($res1=mysqli_fetch_assoc($res))
	{
		 array_push($arr,$res1);
		
	}
	print json_encode($arr);
}
?>