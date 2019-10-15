<?php 
 $shtype=$_GET['shtype'];
 $conn=mysqli_connect('localhost','root','','coders_tailor');
$query="select sh_rate from tbl_shirt_rate where sh_type_id='$shtype'";
$res=mysqli_query($conn,$query);

if($res)
{
	while($res1=mysqli_fetch_assoc($res))
	{
		 echo $result_rate['sh_rate']=$res1['sh_rate'];
	}
	
}
?>