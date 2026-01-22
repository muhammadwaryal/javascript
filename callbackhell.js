function USerInfo(username ,cb){
 setTimeout(()=>{
          cb({ _id:12212 ,username,age:15, email:"helloworld@gmail.com"},2000);
 })
}
 function GetAllPost(id,cb){
          console.log("Fetching all Posts");
          setTimeout(()=>{
    cb({_id:id ,posts:["Hello","Hee", "Hoo"]})
          },3000)

 }
 function SavedPost (id,cb){
          console.log("Fetched All Saved Posts");
          setTimeout(()=>{
                    cb({_id:id ,saved:[1,2,2,333,444,555,66666]});
      
          },3000)

 }
 function Anotherposts(id,cb){
  setTimeout(()=>{
    console.log("Fetching Another ");
    cb({_id:id,username:"Muzammil",another:["Helll0 ji" ,"Kia karraha ho","Theek ho"]});
  })

 }
USerInfo("Ahmed",function(data){
          console.log(data);
GetAllPost(data._id,function(posts){
          console.log(posts);

SavedPost(data._id,function(saved){
          console.log(saved);

  Anotherposts(data._id,function(another){
    console.log(another);
  })        
})
})
})

