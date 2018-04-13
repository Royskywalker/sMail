<?php

// "1003":{rec:"",tit:"",mcon:""}

// 1 从json文件中获取数据

// 2 修改获取到的json数据(插入一条记录);

// 3 将修改的json数据保存到json文件中;

// 1 取数据
$json_str = file_get_contents("data.json");

// 2 转换为数组
$data=json_decode($json_str,true);


$data["maxid"]=$data["maxid"]+1;

$maxid=$data["maxid"];


// 3 修改数据
$data[$maxid]=$_POST;

//"1003":{"rec":"","tit":'',"mcon":""}

// 4 转换为json字符串
$json_str=json_encode($data);

// 5 保存数据
file_put_contents("data.json",$json_str);

echo "保存成功";

?>