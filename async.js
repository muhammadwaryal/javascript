let pr = new Promise((resolve,reject)=>{
setTimeout(()=>{
          let number = Math.floor(Math.random() * 10);
          if(number > 5){
                    resolve("Resolve with "+number);
          }
          else{
                    reject("REject with" +number);
          }
},2000)
});


async function Abcd() {
          try{
                    let val = await pr;
                    console.log(val)
          }
          catch(err){
                    console.log(err);
          }
          
}

Abcd();