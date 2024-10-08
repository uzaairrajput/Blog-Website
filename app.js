//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var posts = [];



const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const app = express();


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var users = [
  {
    id: 1,
    name: "Uzair",
    age: 22,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9LYQ7HP3zcjRexbo1DRZ-jxDN-Y7gLoBcWg&s",
  },
  {
    id: 2,
    name: "Safeer",
    age: 26,
    image:
      "https://media.licdn.com/dms/image/D4D03AQFC4vnbvfB7TQ/profile-displayphoto-shrink_200_200/0/1686310301596?e=2147483647&v=beta&t=PeTxObvj2rMwWrrlFNEjHK5c4MTWB0s4bfyOTtBeeFc",
  },
];

app.get("/", (req, res) => {
  res.render("home", { 
    StartingContent: homeStartingContent,
    posts: posts,

  });
  
});
app.get('/posts/:postName', function(req,res){
  console.log(req.params.postName);
  
})
app.get("/about", (req, res) => {
  var user = res.render("About", { Acontent: aboutContent });
});
app.get("/contact", (req, res) => {
  res.render("Contact", { Bcontent: contactContent });
});
app.get("/compose", (req, res) => {
  res.render("compose");
});
 
app.post("/compose", function (req, res) {

  var post = {
    title: req.body.postTitle,
    content: req.body.postContent
  };
  
  posts.push(post);
  res.redirect("/")
  
});
app.get("/profile/:id", (req, res) => {
  console.log(req.params.id);
  let user = users.find((user) => user.id == req.params.id);

  // return res.send(user);

  res.render("profile", { user });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
