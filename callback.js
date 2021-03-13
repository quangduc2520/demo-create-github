const test = (hello)=>
{
    setTimeout(()=>{
    console.log("Login thanh cong");
    const username = "Duc";
    hello(username);
    }, 1000)
}


const hello = (name)=>
{
    console.log(`Chuc mung ${name}`);
}
test(hello);


