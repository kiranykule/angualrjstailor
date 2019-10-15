<?php
//header('Content-Type: application/json');
$connect=mysqli_connect("localhost","root","","coders_tailor");
$data=json_encode(file_get_contents("php://input"));
$data1=json_decode(file_get_contents("php://input"));
if($data1)
{
	//customer table data
	  $name=mysqli_real_escape_string($connect,$data1->name);
	  $mobile=mysqli_real_escape_string($connect,$data1->number);
	  $address=mysqli_real_escape_string($connect,$data1->address);
	  
	  
	  $query="INSERT INTO customer VALUES('','$name','$mobile','$address')";
	  $result=mysqli_query($connect, $query);
	  $id=mysqli_insert_id($connect);
	//delivery details data	
	   $sh_type=mysqli_real_escape_string($connect,$data1->shtype);
	   $shquantity=mysqli_real_escape_string($connect,$data1->shquantity);
	    $s_total=mysqli_real_escape_string($connect,$data1->sh_total);
	  $sh_rate=mysqli_real_escape_string($connect,$data1->sh_rate);
	   $deldate=mysqli_real_escape_string($connect,$data1->deldate);
	  $pt_type=mysqli_real_escape_string($connect,$data1->pt_type);
	  $pnquantity=mysqli_real_escape_string($connect,$data1->pnquantity);
	  $pn_total=mysqli_real_escape_string($connect,$data1->pt_total);
	  $pn_rate=mysqli_real_escape_string($connect,$data1->pt_rate);
	 
	  $description=mysqli_real_escape_string($connect,$data1->description);
	 
	  $gtotal=mysqli_real_escape_string($connect,$data1->grandtotal);
	  
	 if($result){
		 $query1="INSERT INTO tbl_delivery_details VALUES('','$id','$shquantity','$pnquantity','$deldate','$description','$sh_type','$pt_type','$sh_rate','$s_total','$pn_rate','$pn_total','$gtotal','pending')";
		 $result1=mysqli_query($connect, $query1);
	 }
	 //shirt measurement data
	   $height=mysqli_real_escape_string($connect,$data1->height);
	   $chest=mysqli_real_escape_string($connect,$data1->chest);
	   $shoulder=mysqli_real_escape_string($connect,$data1->shoulder);
	   $collar=mysqli_real_escape_string($connect,$data1->collar);
	   $sleaves=mysqli_real_escape_string($connect,$data1->sleaves);
	   $front=mysqli_real_escape_string($connect,$data1->front);
	   $cough=mysqli_real_escape_string($connect,$data1->cough);
	   $myani=mysqli_real_escape_string($connect,$data1->myani);
	   $other=mysqli_real_escape_string($connect,$data1->other);
	  
	  if($result1){
		 $query2="INSERT INTO tbl_shirt_measure VALUES('','$id','$height','$chest','$shoulder','$sleaves','$front','$collar','$cough','$myani','$other')";
		 $result2=mysqli_query($connect, $query2);
	 }
	  //pant measurement data
	   $ptheight=mysqli_real_escape_string($connect,$data1->ptheight);
	   $waist=mysqli_real_escape_string($connect,$data1->waist);
	   $thyce=mysqli_real_escape_string($connect,$data1->thyce);
	   $knee=mysqli_real_escape_string($connect,$data1->knee);
	   $bottom=mysqli_real_escape_string($connect,$data1->bottom);
	   $seat=mysqli_real_escape_string($connect,$data1->seat);	
	  if($result2)
	  {		  
		$query3="INSERT INTO tbl_pant_measure VALUES('','$id','$ptheight','$waist','$thyce','$knee','$bottom','$seat')";
		$result3=mysqli_query($connect,$query3);
	  }
		
		if($result3)
		{
		
		 $query4="INSERT INTO tbl_advance_details VALUES('','$id','$name','$mobile','',0,'','$gtotal')";
		 $result4=mysqli_query($connect, $query4);
		 if($result4)
		 {
			 echo"Data inserted successfully";
		 }
		 else
		 {
			echo "Error";
		 }
	 
		}
		
		
		
	  
}	  
echo "welcome";

?>
