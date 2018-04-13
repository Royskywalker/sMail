<?php  
  
    // 1从本地文件中取读取数据
    $json_string = file_get_contents('data.json');

    // 2 把JSON字符串转成PHP数组
    $data = json_decode($json_string, true);
  
  // 3 修改数组内容
   $data["name"]="rose";
   $data["age"]=19;
   

   // 4 将php数组转换为json字符串
   
    $json_string = json_encode($data);
    
    // 5 将json字符串存入json文件;
    
     file_put_contents('data.json', $json_string);
   
    echo "<br>保存成功";
    
   
?>