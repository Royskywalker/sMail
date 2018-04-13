(function(){
	
	// 1 从save.json中读取数据
	
	function getList(callback){
		
		$.ajax({
			type:"get",
			url:"data/save.json",
			async:true,
			success:function(data){
				callback(data);
			}
		});
		
	}
	
	getList(function(data){
		
		var $ul=$(".savedlist");
		var li=$(".savedItem").html();
		
		for(var id in data){
			
			if(id=="maxid") {continue;}
			
			var $li=$(li);
			$li.find("a").attr("href","#wmail?id="+id);
			$li.find("a").click(function(){
				router("wmail",$(".content"));
			})
			$li.find(".rec").html(data[id].rec);
			$li.find(".tit").html(data[id].tit);
			$li.find(".time").html("2017-06-30");
			$li.appendTo($ul)
			
		}
		
		
	});

	
	
	
})()
