var sum:number=1;
function Allah(num:number) {
  for (let i = 1; i < num; num--)
  {
    sum=sum+num*i;
  }
}Allah(99);
console.log(sum);
function Kabir(... nums:number[]){
 var sum:number=1;
  var t=nums.length;
  for(let i=0;i<t;i++)
    {
      sum=sum+nums[i];
      console.log(sum);
    }
  console.log(sum);
  
}
  
  Kabir(23,4,5,6,8);

*/
var k=function(p,k,a ?) {
 return p+k;
  
  
}
console.log(k("Syed","Kabbri"));


var k2=function(j,k,a=10)
  {

    return j+k+a;
  }
console.log(k2(12,3,4));

