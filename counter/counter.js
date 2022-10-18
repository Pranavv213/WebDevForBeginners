var count =0;
function inc(){
    count++
    console.log(count)
    document.getElementById("count-heading").innerText=`value after increment is :${count}`
}
function dec(){
    count--
    console.log(count)
    document.getElementById("count-heading").innerText=`value after decrement is :${count}`
}

// document.getElementById("button1").onclick(inc())
// document.getElementById("button2").onclick(dec())