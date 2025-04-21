const form=document.querySelector("form")
const input1=document.querySelector("#input1")
const input2=document.querySelector("#input2")
const result=document.querySelector(".result")

let arr=[]

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let fInp=Number(input1.value)
//     let lInp=Number(input2.value)
//     if(fInp>lInp){
//         console.log("hello");
//         result.innerHTML=fInp-lInp
        
//             // RandomNumber()
//     }else {
//         alert("Please Enter the Grater Value")
//         input1.value=""
//         input2.value=""
//     }

// })

// function RandomNumber(){
//     const Random=Math.floor(Math.random())
//     console.log(Random);
    
// }


form.addEventListener("submit",function(e){
    e.preventDefault()
    let fInp=Number(input1.value)
    let lInp=Number(input2.value)
    if(fInp<lInp){
        for(let i=fInp;i<=lInp;i++){
           arr.push(i)
           
        }
        RandomNumber()
    }else {
        alert("Please Enter the Grater Value")
        input1.value=""
        input2.value=""
    }
    
})

function RandomNumber(){

    const Random=Math.floor(Math.random()*arr.length)
    let RandomIndex=arr[Random]
   
    console.log(RandomIndex);
    result.innerHTML=RandomIndex
    
}

console.log(arr);
