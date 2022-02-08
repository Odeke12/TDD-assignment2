function factorial(num)   
{  
if (num == 0) {  
return 1;  
}else if(num < 0){
return undefined;
}  
else {  
return num * factorial( num - 1 );  
}  
}  

module.exports = factorial