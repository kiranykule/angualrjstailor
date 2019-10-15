<?php 
 //$pt_type=$_GET['pt_type'];
 $conn=mysqli_connect('localhost','root','','coders_tailor');
$query="select sh_rate from tbl_pant_rate where sh_type_id=2";
$res=mysqli_query($conn,$query);

if($res)
{
	while($res1=mysqli_fetch_assoc($res))
	{
		 echo $result_rate1['pt_rate']=$res1['pt_rate'];
	}
	
}
?>