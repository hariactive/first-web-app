// const res = require("express/lib/response");

// var msg="hello";
// console.log(msg);
// var resultDiv = document.getElementById("results");
// resultDiv.innerHTML ="<p>Injected</p>";
// console.log(resultDiv);

$(document).ready(function(){
    var resultList = $("#resultList");
    resultList.text("Please login to see results");
    console.log(resultList);

    var togglebutton = $("#togglebutton");
    togglebutton.on("click",function(){
    console.log("button clicked");
    resultList.toggle(500);
    if(togglebutton.text() === "Hide"){
        togglebutton.text("Show");
    }else{
        togglebutton.text("Hide");
    }
});

    var results = [];
//     var results = [{
//         title: "Java",
//         teacher: "hari",
//         level:"beginner",
//         total_videos:10
//     },
//     {
//         title: "C++",
//         teacher: "hari",
//         level:"MOderate",
//         total_videos:14
//     },
//     {
//         title: "JQuery",
//         teacher: "Hari Shukla",
//         level:"Hard",
//         total_videos:13
//     },
//     {
//         title: "SpringBoot",
//         teacher: "Hari Shukla",
//         level:"Beginner",
//         total_videos:12
//     }
// ];
   

  

  

        function displayResults(results){
            resultList.empty();
            $.each(results,function(i,item){
                var newResult = $("<div class ='result'>" +
                "<div class='title'>" + item.title + "</div>" + 
                "<div>" +  "Level: " + item.level + "</div>" + 
                "<div>" +  "Total Videos: " + item.total_videos + "</div>" + 
                "<div>" +  "Instrcuter: " + item.teacher + "</div>" +
                "</div>");
        
                resultList.append(newResult); 
        
                newResult.hover(function (){
                    $(this).css("background-color","lightgray");
                    $(this).css("color","blue");
                    $(this).css("border-color","blue");
                },
                function(){
                    $(this).css("background-color","transparent");
                    $(this).css("color","black");
                    $(this).css("border-color","#999");
                })
                
            });
        }

    
    $("#loginForm").on("submit",function(){
        var username = $("#username").val();
        var password = $("#password").val();

        if(username && password){
            $.post("/api/login",{},function(data){
                console.log("Success "+ data);
                displayResults(data);
                $("#loginForm").hide();
                $("#logoutSection").show();
                $("#errorMessage").empty();
            })
            .fail(function(data){
                console.log("something bad happen");
            })
            .done(function(){
                
            })
        }else{
            $("#errorMessage").text("Username and password are mandatory");
        }
        return false;
    });
    $("#logoutButton").on('click',function(){
        $("#loginForm").show();
        $("#logoutSection").hide();
        resultList.empty();
        resultList.text("Please login to see all courses");
                

    })
});

