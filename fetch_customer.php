<?php

$conn=mysqli_connect('localhost','root','','coders_tailor');
$query="select * from customer";
$res=mysqli_query($conn,$query);
$cust_arr=array();
if($res)
{
	while($res1=mysqli_fetch_assoc($res))
	{
		 array_push($cust_arr,$res1);
	}
	print json_encode($cust_arr);
}

?>