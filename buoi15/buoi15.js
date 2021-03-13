// function is_string(input)
// {
//     if(typeof input === 'string')
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// console.log(is_string([1, 2, 4, 0]));


// function is_Blank(input)
// {
//     if(input=='')
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(is_Blank('abc')); 


// function string_to_array(input)
// {
//     return input.split(" ");
// }
// console.log(string_to_array("Robin Singh"));


// function truncate_string(input,a)
// {
//     let str="";
//     str= input.substring(0,a);
//     return str;
// }
// console.log(truncate_string("Robin Singh",4));


// function abbrev_name(input)
// {
//     var array = input.split(" ");
//     let str = "";
//     array[array.length-1] = array[array.length-1].substring(0,1);
//     for(let i=0;i<array.length;i++)
//     {
//         str = str+array[i]+" ";
//     }
//     return str.trim();
// }
// console.log(abbrev_name("Nguyen Xuan Hung"));


// function protect_email(input)
// {
//     let pass = input.length;
//     return input.substring(0,5).padEnd(pass,"*");
// }
// console.log(protect_email("xuanhungptithcm@gmail.com"));
