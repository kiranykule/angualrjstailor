<?php
//echo"Nikhil";
$conn=mysqli_connect('localhost','root','','coders_tailor');
$from_date = $_GET['from_date'];
$chkfrom=explode("GMT",$from_date);
$newdrom= strtotime($chkfrom[0]);

 $final_from=date("Y/m/d",$newdrom);

$to_date = $_GET['to_date'];
$chkto=explode("GMT",$to_date);
$newto= strtotime($chkto[0]);
$final_to=date("Y/m/d",$newto);

$query="SELECT * FROM `tbl_delivery_details` LEFT JOIN customer ON tbl_delivery_details.c_id=customer.c_id  WHERE deliver_date BETWEEN '$final_from' AND '$final_to' AND status='deliver'";
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