function USerInfo(username ,cb){
 setTimeout(()=>{
          cb({ _id:12212 ,username,age:15, email:"helloworld@gmail.com"},2000);
 })
}

UserInfo("Ahmed",function(data){
          console.log(data);
});
