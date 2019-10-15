<?php 

$conn=mysqli_connect('localhost','root','','coders_tailor');
$c_id=$_GET['c_id'];
$query="select * from customer where c_id='$c_id'";
$res=mysqli_query($conn,$query);
$rows=array();
if($res)
{
	while($row1=mysqli_fetch_assoc($res))
	{
		$rows['c_name']=$row1['c_name'];
		$rows['c_id']=$row1['c_id'];
		$rows['mobile']=$row1['mobile'];
		$rows['address']=$row1['address'];
		
	}
	echo json_encode($rows);
}