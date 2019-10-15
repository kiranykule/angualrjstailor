<?php
//header('Content-Type: application/json');
$connect=mysqli_connect("localhost","root","","coders_tailor");
$data=json_encode(file_get_contents("php://input"));
$data1=json_decode(file_get_contents("php://input"));
if($data1)
{
	//customer table data
	   $username=mysqli_real_escape_string($connect,$data1->username);
	   $pass=mysqli_real_escape_string($connect,$data1->password);
	  $query="Select name from login where user='$username' and password='$pass'";
	  $res=mysqli_query($connect,$query);
	  if(mysqli_num_rows($res) > 0)
	  {
		 while($res1=mysqli_fetch_array($res)){
			 $uname=$res1['name'];
		 }
		 echo json_encode($uname);
	  }
	  else
	  {
		  
		  echo"error";
	  }
	  
	 
}	  
//echo "welcome";

?>
