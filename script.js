// const kuchDerBaadCHalunga = (val)=>{
//  setTimeout(()=>{
//  console.log(val);
//  },3000)
// }
// kuchDerBaadCHalunga(15);



// // const number = Math.floor(Math.random() *10);
// // console.log(number);


// // Callback
// function KuchDerbaad(func){
//           setTimeout(func,Math.floor(Math.random()* 20)*1000);

                    
//           }
//           KuchDerbaad(function(){
//                     console.log("Hey");
//           })



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
USerInfo("Ahmed",function(data){
          console.log(data);
GetAllPost(data._id,function(posts){
          console.log(posts);

SavedPost(data._id,function(saved){
          console.log(saved);
})
})
})

