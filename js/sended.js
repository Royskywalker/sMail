(function(){
	
	// 定义获取数据列表函数
	function getList(callback){
		
		$.ajax({
			type:"get",
			url:"data/data.json",
			async:true,
			success:function(data){
				callback(data);
			}
		});
		
	}
	
	// 调用获取数据函数
	getList(function(data){
		
		 var $ul=$(".sendedlist");
		 var li=$(".sendedItem").html();

		 for(var id in data){
		 	
		 	if(id=="maxid"){
		 		 continue;
		 	}
		 	
		 	var $li=$(li);
		 	$li.find(".rec").html(data[id].rec);
		 	$li.find(".tit").html(data[id].tit);
		 	$li.find(".time").html("2017-07-06");
		 	
		 	$li.appendTo($ul);
		 	
		 }
		 
		 
	})
	
	
})()
