(function(){
   
    // 如果点击"写信" ,直接加载 wmail
    
    // 如果点击"草稿箱列表项" , #wmail?id=123;
    
    var m=getM();
    
    if(m=="wmail"){
    	
    	// 获取url中的id号码,ajax请求 json文件 id对应数据
    	var p=getUrlParams();
    	
    	$.ajax({
    		type:"get",
    		url:"data/save.json",
    		async:true,
    		success:function(data){
    			var data=data[p.id];
    			$("#rec").val(data.rec);
    			$("#tit").val(data.tit);
    			$("#mcontent").val(data.mcontent);
    		}
    	});
    	
    	
    }else{
    	console.log("写信");
    }

    $("#save").click(function(){
    	
    	//将当前页面的数据json文件
    	
    	var data={};
    	data.rec=$("#rec").val();
    	data.tit=$("#tit").val();
    	data.mcontent=$("#mcontent").val();
    	
    	$.ajax({
    		type:"post",
    		data:data,
    		url:"data/save.php",
    		async:true,
    		success:function(data){
    			if(data.trim()=="ok"){
    				console.log("草稿保存成功");
    			}
    		}
    	});
    	
    	
    	
    });


})()
