

#将其他类型转换为字符串类型
##强制类型转换
方式一： 数据.toString();
方式二： string(数据);
注意：undefined 和 null 无法通过toString 进行转换    但用string就可以。
##隐士类型转换
console.log(100 + "");  


#将其他类型转换为数值类型
##强制类型转换
number(数据);
parseInt(数据);
paseFloat(数据);
##隐士类型转换
console.log("100" - 0);
console.log("100" * 1);
console.log("100" / 1);
console.log("100" % Infinity);
console.log( + "100");

#将其他类型转换为布尔类型
##强制类型转换  Boolean()
false ,  "空" , 0 , NaN , null , undefined  除了这6个值外，其他数据的转换均为true
##隐士转换
！！数据