// JavaScript Document

// http://localhost/music/index.html?a=1&b=2&c=3;

// 获取路径参数
function getUrlParams(){
	
	var params={};
	
	var url=window.location.href;
	
	var arr=url.split("?");

    if(arr.length==2){
	    var p=arr[1]; 	
	}else{
	   console.log(params)
	   return params;	
	}
	
	// p="a=1&b=2&c=3"
	var parr=p.split("&"); // index.html#detail?id=12345
	
	
	for(var i=0;i<parr.length;i++){

		var kv=parr[i].split("=");
		      
		params[kv[0]]=kv[1];

	}
	
	return params;

	// {a:1,b:2,c:3}
	
}

//getUrlParams();

// 获取模块名;
function getM(){
   
   var url=window.location.href;
   
   var arr=url.split("#");
   
   if(arr.length!=2){
	   return false;     
   }
   
   var p=arr[1];
   
   p=p.split("?");  
   
   return p[0]
   
}

// 加载模块函数
function router(m,container){
	
	container=container||$("#share");
	
	// 请求模块结构
	$.ajax({
	    url:"views/"+m+".html",
		success: function(data){
			container.html(data);
		}
	})
	
	// 请求js文件
	loadJs(m);
	
}

function loadJs(m){
   $.ajax({
	   url:"js/"+m+".js",
   })	
}


$(function(){
  
  $(".rmail").click(function(){
  	    router("rmail",$(".content")); 
  })
  
   $(".wmail").click(function(){
  	   router("wmail",$(".content")); 
  	  
  })
   
   $(".sended").click(function(){
   	   router("sended",$(".content")); 
   });
   
   
  $(".save").click(function(){
  	   router("save",$(".content"));
  });
	
	
	
   
})
