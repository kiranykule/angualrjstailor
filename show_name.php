<?php
//header('Content-Type: application/json');
$connect=mysqli_connect("localhost","root","","coders_tailor");

	
	    $a_id=$_GET['a_id'];
	   $query="Select * from tbl_advance_details where c_id='$a_id'";
	  $res=mysqli_query($connect,$query);
	  if(mysqli_num_rows($res) > 0)
	  {
		 while($res1=mysqli_fetch_array($res)){
			 $uname['name']=$res1['name'];
			 $uname['previous_amt']=$res1['previous_amt'];
		 }
		 echo json_encode($uname);
	  }
	  else
	  {
		  echo"error";
	  } 
	  
	 
	  
//echo "welcome";

?>
