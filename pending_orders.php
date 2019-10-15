<?php 
  //$shtype=$_GET['shtype'];
$conn=mysqli_connect('localhost','root','','coders_tailor');
$query="SELECT * FROM `tbl_delivery_details` LEFT JOIN `customer` ON tbl_delivery_details.c_id=customer.c_id where status='pending'";
$type_shirt=array();
$type_pant=array();
$data=array();
$res=mysqli_query($conn,$query);
$rows=array();
foreach ($res as $row) {
	array_push($data, $row);
	// echo "<pre>";
	// print_r($row);
	$shirt_type=$row['shirt_type'];
	$pant_type=$row['pant_type'];
	$query2="SELECT shirt_type from tbl_shirt_rate where sh_type_id='$shirt_type'";
	$result2=mysqli_query($conn, $query2);
	$s_type="";
	foreach ($result2 as $row2) {
		$s_type=$row2['shirt_type']; 	
	}
	$type_shirt[]=$s_type;

	$query3="SELECT pant_type from tbl_pant_rate where pt_type_id='$pant_type'";
	$result3=mysqli_query($conn, $query3);
	$p_type="";
	foreach ($result3 as $row3) {
		$p_type=$row3['pant_type']; 	
	}
	$type_pant[]=$p_type;
}

$datass = array('shirt1' => $type_shirt,'pant1'=>$type_pant,'datas1'=>$data );
	  	
	echo json_encode($datass);

?>	