

function ResolveAfter2Min(x){
    return new Promise( resolve =>{
        setTimeout(()=>{
            resolve(x);
        }, 2000);

    });
}


async function AddNumber(a){

    var x= await ResolveAfter2Min(10);

    var y =await ResolveAfter2Min(20);

    return a  + x + y;
}



AddNumber(4).then(v => {
    console.log(v);
})


async function add2(x) {
    const p_a = resolveAfter2Seconds(20);
    const p_b = resolveAfter2Seconds(30);
    return x + await p_a + await p_b;
}
  