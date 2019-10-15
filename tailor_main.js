
var app=angular.module("myApp",["ngRoute","angularUtils.directives.dirPagination"])

app.config(function($routeProvider)
{
	//$locationProvider.html5Mode(true);
$routeProvider


.when("/",{
templateUrl:"home.html"
})

.when("/addCustomer",{
templateUrl:"form.html",

	
})

.when("/orderList",{
templateUrl:"datatable.html"
})
.when("/customerList",{
templateUrl:"customer_list.html"
})

.when("/update",{
templateUrl:"add_cust_order.html"
})

.when("/profile",{
templateUrl:"profile.html"
})

.when("/delete",{
templateUrl:"profile.html"
})
.when("/pendingOrder",{
templateUrl:"pending_order.html"
})

.when("/deliveryOrder",{
templateUrl:"deliver_order.html"
})

.when("/advance_form",{
templateUrl:"advance_form.html"
})

.when("/advanceView",{
templateUrl:"advane_details.html"
})

.when("/monthDeliveryReport",{
templateUrl:"month_data.html"
})

.when("/selectedDeliverData",{
templateUrl:"deliver_date_selected.html"
})

.when("/monthPendingReport",{
templateUrl:"month_pending_data.html"
})

.when("/selectedPendingData",{
templateUrl:"pending_date_selected.html"
})

.when("/monthIncomeReport",{
templateUrl:"month_income_data.html"
})
});

app.controller("myCtrl",function($scope,$http,$window,$filter){


	$scope.customer={
		name:'',
		mobile:'',
		address:'',
		deldate:'',
		shtype:'',
		shquantity:'',
		p_type:'',
		pnquantity:'',
		description:'',
		o_date:$filter("date")(new Date(), "dd/MM/yyyy")
	}
	
	$scope.sh_measurement={
		height:'',
		chest:'',
		shoulder:'',
		collar:'',
		sleaves:'',
		front:'',
		cough:'',
		myani:'',
		other:''
	}
	
	$scope.pt_measurement={
		ptheight:'',
		waist:'',
		thyce:'',
		knee:'',
		bottom:'',
		seat:''
		
	}
	
	
	$scope.add_order=function()
	{
	delidate=$scope.customer.deldate;
	$scope.del=$filter('date')(delidate,'yyyy/MM/dd');
	$http.post("registration.php",{
	"name":$scope.customer.name,
	"number":$scope.customer.mobile,
	"o_date":$scope.customer.date,
	"pt_type":$scope.customer.pt_type,
	"address":$scope.customer.address,
	"deldate":$scope.del,
	"shtype":$scope.customer.shtype,
	"shquantity":$scope.customer.shquantity,
	"ptype":$scope.customer.p_type,
	"pnquantity":$scope.customer.pnquantity,
	"description":$scope.customer.description,
	"sh_rate":$scope.rate_value,
	"sh_total":$scope.total_data,
	"pt_rate":$scope.pant_rate_value,
	"pt_total":$scope.pant_total_value,
	"grandtotal":$scope.grTotal,
	"height":$scope.sh_measurement.height,
	"chest":$scope.sh_measurement.chest,
	"shoulder":$scope.sh_measurement.shoulder,
	"collar":$scope.sh_measurement.collar,
	"sleaves":$scope.sh_measurement.sleaves,
	"front":$scope.sh_measurement.front,
	"cough":$scope.sh_measurement.cough,
	"myani":$scope.sh_measurement.myani,
	"other":$scope.sh_measurement.other,
	
	"ptheight":$scope.pt_measurement.ptheight,
	"waist":$scope.pt_measurement.waist,
	"thyce":$scope.pt_measurement.thyce,
	"knee":$scope.pt_measurement. knee,
	"bottom":$scope.pt_measurement.bottom,
	"seat":$scope.pt_measurement.seat
	
	}).then(function(response){
		//alert(response.data);
		$window.location.href = "#!orderList";
		$scope.customer={};
		$scope.sh_measurement={};
		$scope.pt_measurement={};
		
		
	});
	
	};
	
	//Shirt rate calculation and total calculation
	
	$scope.rate_value;
	$scope.display_rate=function(shtype){
		
		var shtype=shtype;
		//alert(shtype);
		$http.get("http://localhost/Tailor/get_rate.php?shtype="+shtype).then(function(response){
			$scope.rate_value=response.data;
		$scope.show_shirt_name(shtype);
		//alert($scope.shirt_name);
		});	
		
		
	};
	$scope.total_data;
	$scope.total_cal=function(shquantity){
		
		var squant=shquantity;
		$scope.total_data=squant * $scope.rate_value;
		//alert($scope.total_data);
	}
	
	
	
	
	//pant rate calculation and total calculation
	$scope.pant_rate_value;
	$scope.display_pant_rate=function(pt_type){
		pt_type=pt_type;
		
		$http.get("http://localhost/Tailor/get_rate2.php?pt_type="+pt_type).then(function(response){
			$scope.pant_rate_value=response.data;
			//alert(JSON.parse($scope.pant_rate_value.pt_rate));
			$scope.show_pant_name(pt_type);
		});
		//alert(pt_type);
	};
	$scope.pant_total_value;
	$scope.pant_total_cal=function(pnquantity){
		
		pnquantity=pnquantity;
		//alert(pnquantity);
		var pt_rate=$scope.pant_rate_value;
		//alert(pt_rate)
		$scope.pant_total_value=pnquantity * pt_rate;
		//alert($scope.pant_total_value);
	};
	$scope.grTotal;
	$scope.grandTotal=function(){
		if($scope.total_data==null)
		{
			$scope.grTotal=$scope.pant_total_value;
			//alert("KIran");
		}
		 if($scope.pant_total_value==null)
			 {
			$scope.grTotal=$scope.total_data;
			//alert("Waykule");
		}
		if($scope.pant_total_value !=null && $scope.total_data!=null )
		{
			$scope.grTotal=$scope.total_data + $scope.pant_total_value;
			//alert("Pune");
		}
		//alert($scope.grTotal);
	};
	
	$scope.data_details={};
	$scope.shirt;
	$scope.pant;
	$scope.data;
	$scope.delvery_list=function(){
	
		$http.get("http://localhost/Tailor/fet_deldetails.php").then(function(response){
			 $scope.data_details=response.data;
			
			$scope.shirt=$scope.data_details['shirt'];
			$scope.data=$scope.data_details['datas'];
			$scope.pant=$scope.data_details['pant'];
		});
	};
	$scope.customer_data;
	$scope.customer_list=function(){
		
	$http.get("http://localhost/Tailor/fetch_customer.php").then(function(response){
		$scope.customer_data=response.data;
		//alert(JSON.stringify($scope.customer_data));
	});
	};
	//$scope.add_cust_order_data={};
	$scope.add_cust_order=function(c_id){
		
		var  c_id=c_id;
		$http.get("http://localhost/Tailor/get_customer.php?c_id="+c_id).then(function(response){
	$scope.add_cust_order_data=response.data;
	//alert(JSON.stringify($scope.add_cust_order_data));
	$window.location.href = "#!update"; 
	
	})
	};
	$scope.add_cust_order_data={};
	$scope.add_existing_order=function(){
		$http.post("registration.php",
		{
			"c_id":$scope.add_cust_order_data.c_id,
			"name":$scope.add_cust_order_data.c_name,
			"number":$scope.add_cust_order_data.mobile,
			"pt_type":$scope.add_cust_order_data.pt_type,
			"address":$scope.add_cust_order_data.address,
			"deldate":$scope.add_cust_order_data.deldate,
			"shtype":$scope.add_cust_order_data.shtype,
			"shquantity":$scope.add_cust_order_data.shquantity,
			"ptype":$scope.add_cust_order_data.p_type,
			"pnquantity":$scope.add_cust_order_data.pnquantity,
			"description":$scope.add_cust_order_data.description,
			"sh_rate":$scope.rate_value,
			"sh_total":$scope.total_data,
			"pt_rate":$scope.pant_rate_value,
			"pt_total":$scope.pant_total_value,
			"grandtotal":$scope.grTotal,
			"height":$scope.add_cust_order_data.height,
			"chest":$scope.add_cust_order_data.chest,
			"shoulder":$scope.add_cust_order_data.shoulder,
			"collar":$scope.add_cust_order_data.collar,
			"sleaves":$scope.add_cust_order_data.sleaves,
			"front":$scope.add_cust_order_data.front,
			"cough":$scope.add_cust_order_data.cough,
			"myani":$scope.add_cust_order_data.myani,
			"other":$scope.add_cust_order_data.other,
			
			"ptheight":$scope.add_cust_order_data.ptheight,
			"waist":$scope.add_cust_order_data.waist,
			"thyce":$scope.add_cust_order_data.thyce,
			"knee":$scope.add_cust_order_data. knee,
			"bottom":$scope.add_cust_order_data.bottom,
			"seat":$scope.add_cust_order_data.seat
		}).then(function(response){
			//console.log(response.data);
			$window.location.href = "#!orderList";
		})
		
		//alert(JSON.stringify($scope.add_cust_order_data));
		
	};
	$scope.profile_display={};
	$scope.display_profile=function(c_id){
		var c_id=c_id;
	//	alert(c_id);
		$http.get("http://localhost/Tailor/profile.php?c_id="+c_id).then(function(response){
	$scope.profile_display=response.data;
	//alert(JSON.stringify($scope.profile_display));
	$window.location.href = "#!profile"; 
	
		});
		//alert("Kiran Waykule");
	};
	
	
	
	$scope.delete=function(c_id){
		c_id=c_id;
		//alert(c_id)
		$http.get("http://localhost/Tailor/delete.php?c_id="+c_id).then(function(response){
			$window.location.href = "#!customerList";
		})
	};
	
	$scope.pending_data={};
	$scope.pending_shirt={};
	$scope.pending_pant={};
	$scope.pending_order_list=function(){
		
		//alert(c_id)
		$http.get("http://localhost/Tailor/pending_orders.php").then(function(response){
			//alert(JSON.stringify(response.data));
			$scope.data_details1=response.data;
			$scope.pending_shirt=$scope.data_details1['shirt1'];
			$scope.pending_data=$scope.data_details1['datas1'];
			
			$scope.pending_pant=$scope.data_details1['pant1'];
			//alert(JSON.stringify($scope.data_details1['datas1']));
	//$window.location.href = "#!customerList";
		})
	};
	
	$scope.change_status=function(cl_id){
		//alert("Kiran Waykule");
		var cl_id=cl_id;
		//alert(cl_id);
		$http.post("http://localhost/Tailor/get_cloth_data.php?cl_id="+cl_id).then(function(response){
			
			//alert(response.data);
			$window.location.href = "#!deliveryOrder";
		})
	};
	$scope.data_details2={};
	$scope.deliver_shirt={};
	$scope.deliver_data={};
	$scope.deliver_pant={};
	$scope.deliver_order_list=function(){
		//alert("Kiran Waykule");
		var cl_id=cl_id;
		//alert(cl_id);
		$http.get("http://localhost/Tailor/delivered_order.php").then(function(response){
			$scope.data_details2=response.data;
			$scope.deliver_shirt=$scope.data_details2['shirt2'];
			$scope.deliver_data=$scope.data_details2['datas2'];
			
			$scope.deliver_pant=$scope.data_details2['pant2'];
			//alert(JSON.stringify(response.data));
			
		})
	};
	
	$scope.date;
	$scope.adv_details={};
	$scope.update_advance=function(cl_id){
		//alert(cl_id);
		$http.post("http://localhost/Tailor/adv_amount.php?cl_id="+cl_id).then(function(response){
			//alert(JSON.stringify(response.data));
		$scope.adv_details=response.data;
		$window.location.href='#!advance_form';
		$scope.date=$filter('date')(new Date(), 'yyyy/MM/dd');
		})
		
	}
	$scope.adv_details={
		c_id:'',
		a_name:'',
		a_prev_amt:'',
		a_pay_amt:'',
		date:'',
		a_rem_amt:''
	};

	$scope.record_update=function(){
	 $http.post("update_advance.php",{
			"c_id":$scope.adv_details.c_id,
			"a_name":$scope.adv_details.name,
			"a_prev_amt":$scope.adv_details.pre_amt,
			"a_pay_amt":$scope.adv_details.pay_amt,
			"a_rem_amt":$scope.adv_details.grtotal,
			"date":$scope.date
		}).then(function(response){
			//$scope.advance={};
			alert(response.data);
			$window.location.href='#!advanceView';
			
		}); 
	};
	
	$scope.advance_list1=function(){
		//alert('kiran');
		$http.post("http://localhost/Tailor/get_advance_details.php").then(function(response){
			//alert(JSON.stringify(response.data));
			$scope.advance_list=response.data;
			
		})
	};
	
$scope.shirt_name;
$scope.show_shirt_name=function(shtype){
	//alert(shtype);
	var stype=shtype;
	$http.get("show_type_name.php?stype="+stype).then(function(response){
		//alert(response.data);
		$scope.shirt_name=response.data;
	});
};

$scope.pant_name;
$scope.show_pant_name=function(pt_type){
	//alert(shtype);
	var ptype=pt_type;
	$http.get("show_type_name2.php?ptype="+ptype).then(function(response){
		//alert(response.data);
		$scope.pant_name=response.data;
	});
};
  


$scope.printDiv = function(divName,p_type,s_type) {
	 
	 
	   var printContents = document.getElementById('printable').innerHTML;
	  var popupWin = window.open('', '_blank', 'width=300,height=300');
	  popupWin.document.open();
	  popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
	  popupWin.document.close(); 
	  $scope.add_order(); 
	
	
}; 

$scope.printDiv_data = function(divName,p_type,s_type) {
	 
	 
	   var printContents = document.getElementById('printable').innerHTML;
	  var popupWin = window.open('', '_blank', 'width=300,height=300');
	  popupWin.document.open();
	  popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
	  popupWin.document.close(); 
	  $scope.add_existing_order(); 
	
	
} 

	$scope.today_order=function(){
		var date=$filter("date")(new Date(), "dd/MM/yyyy");
		//alert(date);
		$http.get("get_today_order.php?date="+date).then(function(response){
			alert(response.data);
		})
	};
	$scope.deliver_month;
	$scope.todaydate;
	
	$scope.month_deliver_report=function(){
		//alert("kiran");
		$http.get("get_month_delivery.php").then(function(response){
			//alert(JSON.stringify(response.data));
			$scope.deliver_month=response.data;
			$scope.todaydate=$filter("date")(new Date(), "dd/MM/yyyy");
			
		})
	};
	$scope.date_selected;
	$scope.show_date_report=function(from_date,to_date){
		//alert("kiran");
		var from_date=from_date;
		
		var to_date=to_date;
		$http.get("get_selected_date_data.php?from_date="+from_date+"&to_date="+to_date).then(function(response){
			$scope.date_selected=response.data;
			//alert(JSON.stringify(response.data));
			$window.location.href="#!selectedDeliverData";
			
		})
	};
	$scope.pending_month;
	$scope.today;
	$scope.month_pending_report=function(){
		//alert("kiran");
		$http.get("get_month_pending.php").then(function(response){
			//alert(JSON.stringify(response.data));
			$scope.pending_month=response.data;
			$scope.today=$filter("date")(new Date(), "dd/MM/yyyy");
			
		})
	};
	
	$scope.date_pending_selected;
	$scope.show_date_pending_report=function(from_date,to_date){
		//alert("kiran");
		var from_date1=from_date;
		
		var to_date1=to_date;
		$http.get("get_selected_date_pending.php?from_date="+from_date1+"&to_date="+to_date1).then(function(response){
			$scope.date_pending_selected=response.data;
			//alert(JSON.stringify(response.data));
			$window.location.href="#!selectedPendingData";
			
		})
	};
	$scope.inc;
	$scope.inc2;
	$scope.today1;
	$scope.month_income_report=function(){
		//alert("kiran");
		$http.get("get_month_income.php").then(function(response){
			//alert(JSON.stringify(response.data));
		$scope.income_month=response.data;
		$scope.inc=$scope.income_month['all_data'];
		$scope.inc2=$scope.income_month['total'];
		//alert(JSON.stringify($scope.inc2));
			//$scope.pending_month=response.data;
			$scope.today1=$filter("date")(new Date(), "dd/MM/yyyy");
			
		})
		
	};
		
});