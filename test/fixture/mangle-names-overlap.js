let aaa = 5;
const fn = (a) => a();
fn((a, b)=>{
    console.log(b, aaa);
});
