<?php
//header('Content-Type: application/json');
$connect=mysqli_connect("localhost","root","","coders_tailor");
$data=json_encode(file_get_contents("php://input"));
$data1=json_decode(file_get_contents("php://input"));
if($data1)
{
		$id=mysqli_real_escape_string($connect,$data1->c_id);
	    $name=mysqli_real_escape_string($connect,$data1->a_name);
	    $date=mysqli_real_escape_string($connect,$data1->date);
	    $pay_amt=$data1->a_pay_amt;
	    $pre_amt=mysqli_real_escape_string($connect,$data1->a_prev_amt);
	    $total_amt=mysqli_real_escape_string($connect,$data1->a_rem_amt);
		
		$query="SELECT * FROM tbl_advance_details WHERE c_id='$id'";
		$result=mysqli_query($connect, $query);
		foreach($result as $row)
		{
			$paid_amt=$row['payable_amt'];
			$total_amt=$row['total_amt'];
		}
		$paid=$pay_amt + $pre_amt;
		if($pay_amt>0 && $paid>$total_amt)
		{
			echo"Please Enter Valid Payable Amount";
			
		}
		
		else
		{
		$query="UPDATE tbl_advance_details SET `date`='$date', `previous_amt`='$paid', `payable_amt`='$pay_amt' WHERE c_id='$id'";
		$result=mysqli_query($connect, $query);
		if($result)
		{
			echo"Data Updated Successfully";
		}
		else
		{
			echo"error";
		}
		}
	  
}	  
//echo "welcome";

?>
