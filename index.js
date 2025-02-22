const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static( path.join(__dirname, "public")));
app.use(methodOverride("_method"));

let posts = [
    { id: uuidv4(), username: "MayurTamanke", content: "I love coding" },
    { id: uuidv4(), username: "CodeMaster", content: "JavaScript is amazing!" },
    { id: uuidv4(), username: "TechGeek", content: "Just built my first web app!" },
    { id: uuidv4(), username: "AI_Enthusiast", content: "Machine learning is the future." },
];


app.get("/", (req,res)=>{
    res.render("index.ejs", {posts})
})

// Rendering main.ejs
app.get("/posts", (req,res)=>{
    res.render("index.ejs", {posts})
})

// Rendering Create new page
app.get("/posts/new", (req,res)=>{
    res.render("new.ejs")
})

//Creatinig new Post
app.post("/post", (req,res)=>{
    let {username,content} = req.body
    let id = uuidv4();
    posts.push({id,username,content})
    res.redirect("/posts")
})

//view post in details
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params
    let post = posts.find((p)=> id == p.id);
    res.render("show.ejs", {post})
})

// Edit Post
app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params
    let newContent = req.body.content
    let post = posts.find((p)=> id === p.id);
    post.content=newContent;
    console.log(post)
    res.redirect("/posts")
})

//open edit page
app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params
    let post = posts.find((p)=> id === p.id);
    console.log(post)
    res.render("edit.ejs", {post})
})

//delete Post
app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts")
})

app.listen(port,()=>{
    console.log(`Listening on Port:${port}`);
})