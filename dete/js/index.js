/* ===== Tooltips ===== */

$('#tooltip').tooltip();
 
// function onProductOver(){
// 	document.getElementById('dropdown-menu_product').style.display = "block";
// 	//case none;
// 	document.getElementById('dropdown-menu_case').style.display = "none";
// 	document.getElementById('dropdown-menu_case').style.color = "#FFFFFF";
// 	//servet none;
// 	document.getElementById('dropdown-menu_server').style.display = "none";
// 	document.getElementById('dropdown-menu_server').style.color = "#FFFFFF";
// 	//com none;
// 	document.getElementById('dropdown-menu_com').style.display = "none";
// 	document.getElementById('dropdown-menu_com').style.color = "#FFFFFF";

// }

// function onProductOut(){
// 	if(document.getElementById('dropdown-menu_product_select').className == "dropdown open"){
// 		document.getElementById('dropdown-menu_product').style.display = "block";
// 	}else{
// 		document.getElementById('dropdown-menu_product').style.display = "none";
// 		document.getElementById('dropdown-menu_product').style.color = "#FFFFFF";
// 	}
// }

// function onCaseOver(){
// 	document.getElementById('dropdown-menu_case').style.display = "block";
// 	//servet none;
// 	document.getElementById('dropdown-menu_server').style.display = "none";
// 	document.getElementById('dropdown-menu_server').style.color = "#FFFFFF";
// 	//com none;
// 	document.getElementById('dropdown-menu_com').style.display = "none";
// 	document.getElementById('dropdown-menu_com').style.color = "#FFFFFF";
// 	//product none;
// 	document.getElementById('dropdown-menu_product').style.display = "none";
// 	document.getElementById('dropdown-menu_product').style.color = "#FFFFFF";
// }

// function onCasetOut(){
// 	if(document.getElementById('dropdown-menu_case_select').className == "dropdown open"){
// 		document.getElementById('dropdown-menu_case').style.display = "block";
// 	}else{
// 		document.getElementById('dropdown-menu_case').style.display = "none";
// 		document.getElementById('dropdown-menu_case').style.color = "#FFFFFF";
// 	}
// }

// function onServerOver(){
// 	document.getElementById('dropdown-menu_server').style.display = "block";
// 	//case none;
// 	document.getElementById('dropdown-menu_case').style.display = "none";
// 	document.getElementById('dropdown-menu_case').style.color = "#FFFFFF";
// 	//com none;
// 	document.getElementById('dropdown-menu_com').style.display = "none";
// 	document.getElementById('dropdown-menu_com').style.color = "#FFFFFF";
// 	//product none;
// 	document.getElementById('dropdown-menu_product').style.display = "none";
// 	document.getElementById('dropdown-menu_product').style.color = "#FFFFFF";
// }

// function onServerOut(){
// 	if(document.getElementById('dropdown-menu_server_select').className == "dropdown open"){
// 		document.getElementById('dropdown-menu_server').style.display = "block";
// 	}else{
// 		document.getElementById('dropdown-menu_server').style.display = "none";
// 		document.getElementById('dropdown-menu_server').style.color = "#FFFFFF";
// 	}
// }

// function onComOver(){
// 	document.getElementById('dropdown-menu_com').style.display = "block";
// 	//case none;
// 	document.getElementById('dropdown-menu_case').style.display = "none";
// 	document.getElementById('dropdown-menu_case').style.color = "#FFFFFF";
// 	//servet none;
// 	document.getElementById('dropdown-menu_server').style.display = "none";
// 	document.getElementById('dropdown-menu_server').style.color = "#FFFFFF";
// 	//product none;
// 	document.getElementById('dropdown-menu_product').style.display = "none";
// 	document.getElementById('dropdown-menu_product').style.color = "#FFFFFF";
// }

// function onComOut(){
// 	if(document.getElementById('dropdown-menu_com_select').className == "dropdown open"){
// 		document.getElementById('dropdown-menu_com').style.display = "block";
// 	}else{
// 		document.getElementById('dropdown-menu_com').style.display = "none";
// 		document.getElementById('dropdown-menu_com').style.color = "#FFFFFF";
// 	}
// }

function onMenuTelOverClick(){
	$("#telMsgOpen").show();
}
function onMenuTelOutClick(){
	$("#telMsgOpen").hide();
}
function onMenuUserOverClick(){
	$("#userMsgOpen").show();
}
function onMenuUserOutClick(){
	$("#userMsgOpen").hide();
}
function onMenuSearchOverClick(){
	$("#searchMsgOpen").show();
}
function onMenuSearchOutClick(){
	$("#searchMsgOpen").hide();
}
function onDDOSSystem(productType){
	$("#contentWrapper").hide();
	var proHtml = "";
	var mainHtml = "";
	//document.getElementById('mainImageSlider').style.display = "none";
	//document.getElementById('dropdown-menu_product').style.display = "none";
	//document.getElementById('main_ourProduct').style.display = "none";
	//document.getElementById('earseBGImageID').style.display = "none";
	$('contentWrapper').innerHTML = "";
	if(productType!=-1){
		$("#contentWrapper").show();
		$("#mainImageSlider_Product").hide();
	}
	if(productType == 3){
		//DDOS 
		proHtml +='<div id="mian_menuProductDDOS_'+i+'"><img style="width:100%;" src="img/DDOS/ddos.jpg"></div>';
		//for(var i = 2;i < 7;i++){
//			proHtml +='<div id="mian_menuProductDDOS_'+i+'"><img style="width:100%;" src="img/DDOS/DDOS_'+i+'.png"></div>';
//		}SS
		location.href = "#contentWrapper";
	}else if(productType == 2){
		mainHtml +='<div id="mian_menuProductIT_'+i+'"><img style="width:100%;" src="img/IT/IT_1.png"></div>';
		for(var i = 2;i < 6;i++){
			proHtml +='<div id="mian_menuProductIT_'+i+'"><img style="width:100%;" src="img/IT/IT_'+i+'.png"></div>';
		}
		location.href = "#contentWrapper";
	}else if(productType == 1){
		mainHtml +='<div id="mian_menuProductServer_'+i+'"><img style="width:100%;" src="img/LineServer/Server_1.png"></div>';
		for(var i = 2;i < 7;i++){
			proHtml +='<div id="mian_menuProductServer_'+i+'"><img style="width:100%;" src="img/LineServer/Server_'+i+'.png"></div>';
		}
		location.href = "#contentWrapper";
	}else if(productType == 0){
		proHtml +='<div id="mian_menuProductData_'+i+'"><img style="width:100%;" src="img/Data/dataCenter.jpg"></div>';
		//for(var i = 2;i < 4;i++){
//			proHtml +='<div id="mian_menuProductData_'+i+'"><img style="width:100%;" src="img/Data/Data_'+i+'.png"></div>';
//		}
		location.href = "#contentWrapper";
	}
	else if(productType == 5){
		mainHtml +='<div id="mian_menuProductServer_'+i+'"><img style="width:100%;" src="img/Data/Data_1.png"></div>';
		for(var i = 2;i < 4;i++){
			proHtml +='<div id="mian_menuProductServer_'+i+'"><img style="width:100%;" src="img/Data/Data_'+i+'.png"></div>';
		}
		location.href = "#contentWrapper";
	}
	else if(productType == -1){
		$("#contentWrapper").hide();
		$("#mainImageSlider_Product").show();
		//document.getElementById('main_ourProduct').style.display = "block";
//		document.getElementById('earseBGImageID').style.display = "block";
//		document.getElementById('mainImageSlider').style.display = "block";
		location.href = "#mainImageSlider_Product";
	}
	else if(productType==4){
		proHtml+='<div class="clearfix main">'+        
	    	'<div id="sidebar" class="aside">'+
	    		'<div class="inside">'+
		    		'<img src="images/left_bar.jpg"/>'+
	    		'</div>'+
	    	'</div>'+
	    	'<div class="main_content" id="content">'+
	    		'<img src="images/about_us_1.jpg">'+
                '<img src="images/about_us_2.jpg">'+
	    	'</div>'+
	    '</div>'
	    $("#contentWrapper").css("background-color","rgb(239,239,239)");
	    location.href = "#contentWrapper";
	}
	// document.getElementById('mainImageSlider_Product').innerHTML = mainHtml;
	document.getElementById('contentWrapper').innerHTML =mainHtml + proHtml;	
}

function onProductSystem(){
	onDDOSSystem(-1);
	location.href = "#mainImageSlider_Product";
	$('html, body').stop().animate({
        scrollTop: $("#main_ourProduct").offset().top
     }, 1000);
}
var width=$(window).width();
var height=$(window).height();
console.log(width);
$(".navbar-toggle").bind("click",function(){
	if($(this).hasClass("showMenu")){
		$(this).removeClass("showMenu");
		$(".container").css("min-height","inherit");
	}
	else{
		$(this).addClass("showMenu");
		if(width<500){
			$(".container").css("min-height",height);
		}
	}
})
if(width<500){
	$(".bar_item").bind("click",function(){
		$(".bar_menu").hide();
		$(".bar_item").not(this).removeClass("showMenu");
		if($(this).hasClass("showMenu")){
			$(this).removeClass("showMenu");
			$(this).find(".bar_menu").hide();
		}
		else{
			$(this).addClass("showMenu");
			$(this).find(".bar_menu").show();
		}
	})
}
