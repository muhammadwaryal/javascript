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
})

pr.then(data =>console.log(data))
pr.catch(error=> console.log(error));


