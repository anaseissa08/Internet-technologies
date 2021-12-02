let result = 2 < 3 ;
console.log(result);
console.log(typeof result);
let message = "90";
console.log(typeof message);
let m ;
console.log(typeof m);
let value = 5 ;
console.log(value);
let language = "JavaScript" ;
//console.log(language + message+" Anas");
console.log(language[1]);
let colors = ['red','green','blue','broun'];
console.log(colors);
colors[1]='black' ;
console.log(colors.length);
console.log(colors.includes('blck'));
colors.unshift('bb');
console.log(colors);
colors.push('pp');
console.log(colors);
let s = colors.pop();
colors.pop();
colors.pop();
colors.pop();
colors.pop();
colors.pop();
colors.pop();
console.log(colors);
console.log(s);
const values = [[1,2,3] , [4,5,6] , [7,8,9]];
let x = 'black';
let y = ['red' , 'green' , 'blue'];
console.log(Array.isArray(y));
console.log(values[2][2]);
let mes = 'welcom to javaScript';
let res = mes.split(' ');
console.log(res);
let tt = [ 'welcom', 'to', 'javaScript' ];
let rr = tt.join('@');
console.log(rr);
let i = 1 ;
/*while(i<6){
    console.log(i);
    i++;
}*/
for(let u = 5 ; u >= 1 ; u--){
    console.log(u);
}
console.log("sk");
let co2 = ['r' , 'g'];
for(let e  of co2 ){ //easy to forArray
    console.log(e);
}
let k = 0 ;
while(k <co2.length){
    console.log(co2[k]);
    break;
    k++;
}
let f = 0 ;
do{
    console.log(co2[f])
    f++;
}while(f<co2.length)
let ag = 14 ;
if(ag<12)
console.log("sorry");
else{
    console.log("welcome");
}

