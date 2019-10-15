<?php 
	//$ptype=$_GET['p0type'];
	$ptype=$_GET['ptype'];
 $conn=mysqli_connect('localhost','root','','coders_tailor');
$query="select pant_type from tbl_pant_rate where pt_type_id='$ptype'";
$res=mysqli_query($conn,$query);

if($res)
{
	while($res1=mysqli_fetch_assoc($res))
	{
		 echo $res2['pant_type']=$res1['pant_type'];
	}

} 
?>