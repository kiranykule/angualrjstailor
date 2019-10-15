<?php 
	$stype=$_GET['stype'];
	//$ptype=$_GET['ptype'];
 $conn=mysqli_connect('localhost','root','','coders_tailor');
$query="select shirt_type from tbl_shirt_rate where sh_type_id='$stype'";
$res=mysqli_query($conn,$query);

if($res)
{
	while($res1=mysqli_fetch_assoc($res))
	{
		 echo $res2['shirt_type']=$res1['shirt_type'];
	}

} 
?>