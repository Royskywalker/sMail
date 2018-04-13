<?php


// 1 从json中取出数据并转换格式 data

$str = file_get_contents("save.json");

$data = json_decode($str,true); // 将json字符串转换为数组;

$data["maxid"]=$data["maxid"]+1;

$mid=$data["maxid"];


// 2 将前台传来的数据保存到 data 中

$data[$mid] = $_POST; //["rec":'',"tit":"","mcontent":""]

// 3 将已经添加新内容的data保存到json文件;
$str=json_encode($data);

file_put_contents("save.json",$str);

echo "ok";


?>