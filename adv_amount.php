<?php
//header('Content-Type: application/json');
$connect=mysqli_connect("localhost","root","","coders_tailor");

	
	    $cl_id=$_GET['cl_id'];
	   $query="SELECT * FROM `tbl_advance_details`,`customer`,`tbl_delivery_details` WHERE tbl_delivery_details.cl_id='$cl_id' AND tbl_delivery_details.c_id=customer.c_id AND tbl_delivery_details.c_id=tbl_advance_details.c_id";
	  $res=mysqli_query($connect,$query);
	  if(mysqli_num_rows($res) > 0)
	  {
		 while($res1=mysqli_fetch_array($res)){
			 $uname['name']=$res1['c_name'];
			 $uname['c_id']=$res1['c_id'];
			 $uname['grtotal']=$res1['grandTotal'];
			 $uname['pre_amt']=$res1['previous_amt'];
			 //$uname['cl_id']=$res1['cl_id'];
		 }
		 echo json_encode($uname);
	  }
	  else
	  {
		  echo"error";
	  } 
	  
	 
	  
//echo "welcome";

?>
