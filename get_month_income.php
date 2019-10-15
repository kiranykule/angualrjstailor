<?php
//echo"Nikhil";
$conn=mysqli_connect('localhost','root','','coders_tailor');
$todaydate=date('Y/m/d');
$monthdate=date('Y/m/d',strtotime("-30 days"));

$query="SELECT * FROM `customer` LEFT JOIN tbl_advance_details ON tbl_advance_details.c_id=customer.c_id  WHERE date BETWEEN '$monthdate' AND '$todaydate'";
$res=mysqli_query($conn,$query);
$arr=array();
$query1="SELECT SUM(previous_amt) as sum FROM  tbl_advance_details WHERE date BETWEEN '$monthdate' AND '$todaydate'";
$result=mysqli_query($conn,$query1);
$arr2=array();
while($result1=mysqli_fetch_array($result))
{
	$arr2['total']=$result1['sum'];
}
while($res1=mysqli_fetch_assoc($res))
{
	array_push($arr,$res1);
}
//echo json_encode($arr2);
$res_data = array('all_data' => $arr,'total'=>$arr2);

print json_encode($res_data);
?>