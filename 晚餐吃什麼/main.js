

$(function(){
    $("input").on("click",function(){
    //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        $("#image").attr("src","images/"+(randomChildNumber+1)%4+".jfif");
        //document.getElementById("img").src="0"+randomChildNumber+".jpg";
    });
});