//TASK 1
//print odd numbers in an Array
var res=[];
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
console.log(a([1,2,3,4,5]));
  
2.
 var res1=[];
(function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
    if(arr[i]%2!==0)
    {
        res1.push(arr[i]);
    }}
console.log(result);}
    ([1,2,3,4,5]));

3. 
  var res1=[];
 var  odd=(arr)=>{
{
    for(var i=0;i<arr.length;i++)
    {
    if(arr[i]%2!==0)
    {
        res1.push(arr[i]);
    }}return result;

console.log(odd([1,2,3,4,5]));
    
//convert all strings in titlecase
1.var a=function(str)
{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  {}
  console.log(toTitleCase("welcome to javascript"));

 2.   (function(str)
    {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  })
  console.log(toTitleCase("welcome to javascript"));

  3. var a=(str)=>{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(toTitleCase("welcome to javascript"));

//sum of all numbers in an array

var b=function(arr)
{
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

}
console.log(b[1,2,3,5,7,10]);


(function(arr)
{
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

})
console.log(sum);

var b=(arr=>{

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
}
console.log(b[1,2,3,5,7,10]);

//return palindrome in an array

var c=function (str) 
{ 
    return str == str.split('').reverse().join('');
{

const result = words.filter(word => checkPalindrom(word)); 

}}

(function (str) 
{ 
    return str == str.split('').reverse().join('');
{

const result = words.filter(word => checkPalindrom(word)); 

}})

var c=(str) =>
{ 
    return str == str.split('').reverse().join('');
{

const result = words.filter(word => checkPalindrom(word)); 

}}

//prime numbers in an array

var a=function(arr)
        return false; 
{
    for (let i = 2; i < n; i++) 
        if (n % i == 0) 
            return false; 

    return true; 
} }


(function(arr)
        return false; 
{
    for (let i = 2; i < n; i++) 
        if (n % i == 0) 
            return false; 

    return true; )
} }

var a=(arr)=>{
        return false; 
{
    for (let i = 2; i < n; i++) 
        if (n % i == 0) 
            return false; 

    return true; )
} }









