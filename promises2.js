
function UserInfo(username) {
  return new Promise((resolve, reject) => {
    console.log("Fetching User Data");
    setTimeout(() => {
      resolve({
        _id: "12345",
        username,
        age: 21,
        email: "helloworld@gmail.com",
      });
    });
  }, 2000);
}
function getPosts(id) {
  return new Promise((resolve, reject) => {
    console.log("Fetching Post");
    resolve({
      _id: id,
      posts: ["Hello", "Hee", "Hai"],
    });
  });
}
UserInfo("Ahmed")
  .then((user) => {
    console.log(user);
    return getPosts(user._id);
  })
  .then((posts) => {
    console.log(posts);
  });
