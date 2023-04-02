var express = require('express');
var app = express();

var port =3001;
app.use(express.static(__dirname + '/'));
app.listen(port);

console.log("Server started at " + port);

app.get('/api/login',function(req,res){
    var results = [{title: "Java",
        teacher: "hari",
        level:"beginner",
        total_videos:10
    },
    {
        title: "C++",
        teacher: "hari",
        level:"MOderate",
        total_videos:14
    },
    {
        title: "JQuery",
        teacher: "Hari Shukla",
        level:"Hard",
        total_videos:13
    },
    {
        title: "SpringBoot",
        teacher: "Hari Shukla",
        level:"Beginner",
        total_videos:12
    },
    {
        title: "SpringBoot",
        teacher: "Hari Shukla",
        level:"Beginner",
        total_videos:12
    }];
    res.json(results);
     
});
