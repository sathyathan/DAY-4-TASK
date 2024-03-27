//TASK 1
//print odd numbers in an Array
//anonymous
/*var res=[];
var a=function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
    if(arr[i]%2!==0)
    {
        res.push(arr[i]);
    }}
    return res;
    }
console.log(a([1,2,3,4,5]));*/
  
/*2.IIFE
 var res1=[];
(function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
    if(arr[i]%2!==0)
    {
        res1.push(arr[i]);
    }}
console.log(res1);
   }) ([1,2,3,4,5]);*/

/*3. arrow
 var res1=[];
 var  odd=(arr)=>
{
    for(var i=0;i<arr.length;i++)
    {
    if(arr[i]%2!==0)
    {
        res1.push(arr[i]);
    }}
    return res1;
  }
   console.log(odd([1,2,3,4,5]));*/

//convert string into titlecase

//anonymous
/*var a=function(str)
{
  str=str.toLowerCase().split(" ");
  for(var i=0;i<str.length;i++)
  {
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
  }
  return str.join(" ");
}
    console.log(a("javascript is a  programming language"));*/

//IIFE
   /* (function(str)
{
  str=str.toLowerCase().split(" ");
  for(var i=0;i<str.length;i++)
  {
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
  }
  str.join(" ");
})
  console.log("javascript is a  programming language");*/

  //arrow

 /*var titlecase= (str)=>
{
  str=str.toLowerCase().split(" ");
  for(var i=0;i<str.length;i++)
  {
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
  }
  return str.join(" ");
}
  console.log("javascript is a  programming language");*/

//sum of elements in an array
//anonymous

/*var a=function(arr)
{
  var sum=0;
  for(var i=0;i<arr.length;i++)
  {
    sum+=arr[i];
}
return sum;}
console.log(a([1,3,5,6,7,8]));*/
//iife

/*(function(arr)
{
  var sum=0;
  for(var i=0;i<arr.length;i++)
  {
    sum+=arr[i];
  }
console.log(sum);
})
([1,3,5,6,7,8]);*/
//arrow

/*var sum=(arr)=>
{
  var sum=0;
  for(var i=0;i<arr.length;i++)
  {
    sum+=arr[i];
  }return sum;
}
console.log(sum([1,3,5,6,7,8]));*/

//prime numbers in an array
//anonymous
/*var res=[];
var num=function(arr)
{
for(var i=2;i<arr.length;i++)
{
  if(num%2===0&&num%1===0)
{
  res.push(num[i]);
}}
return res;
}
console.log(num([1,3,4,5,8,9]));*/

/*var res=[];
(function(arr)
{
for(var i=2;i<arr.length;i++)
{
  if(num%2===0&&num%1===0)
{
  res.push(num[i]);
}}

console.log(res)});
([1,3,4,5,8,9]);*/

/*var a=(arr)=>
{
for(var i=2;i<arr.length;i++)
{
  if(num%2===0&&num%1===0)
{
  res.push(num[i]);
}}
return res;}
console.log(a([1,3,4,5,8,9]));*/

//palindrome in an array

//anonymous
/*var a=function(str)
{
var rev=str.split("").reverse().join("");
if(rev==str)
{
  return true;

}
else{
  return false;
}}
let str1="dad";
console.log(a(str1));*/

//IIFE

/*(function(str)
{
var rev=str.split("").reverse().join("");
if(rev==str)
{
console.log(str);
}
})
let str1="dad";
console.log(str1)*/

//arrow function
/*var a=(str)=>
{
var rev=str.split("").reverse().join("");
if(rev==str)
{
  return true;

}
else{
  return false;
}}
let str1="dad";
console.log(a(str1));*/


