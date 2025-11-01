const name1 = 'charan' ;
console.log(`hello ${name1}`)
const accountId = 3767859 ;
let accountName = 'Charan Putel';
var email = 'charan@gmail.com';
accountPassword = '12345';
let accountstate;

console.table([accountId , accountName , email ,accountPassword , accountstate]);

//Const -- value cannot be changed
//let -- value can be changed
//var - value can be changed but avoid using it because it break the scope rules
// let and const follow scope rules
//accountstate is undefined because we have not assigned any value to it yet 
//console.table -- to print values of multiple variables in table format 