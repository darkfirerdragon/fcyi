player1=localStorage.getItem("player1");
player2=localStorage.getItem("player1");
player1_score=0;
player2_score=0;
document.getElementById("player1").innerHTML=player1+":";
document.getElementById("player2").innerHTML=player2+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn"+player1;
document.getElementById("player_answer").innerHTML="answer turn"+player2;
function send(){
get_word=document.getElementById("word").value
word=get_word.toLowercase();
c1=word.charAt(1);
l1=Math.floor(word.length/2);
c2=word.charAt(l1);
l2=word.length-1;
c3=word.charAt(l2);
r1=word.replace(c1,"_");
r2=word.replace(c2,"_");
r3=word.replace(c3,"_");
q1="<h4 id='worddisplay'> Q.'+r3+'</h4>"
input1="<br>answer:<input type='text' id='inputcheck'>";
button1="<br><br><button class='btn btn-info'onclick='check()'>check</button>";
row1=q1+input1+button1;
document.getElementById("output").innerHTML=row1;
document.getElementById("word").innerHTML="";
}
q2="p1";
a1="p2";
function check(){
get_answer=document.getElementById("inputcheck").value;
answer=get_answer.toLowerCase();
if(answer==word){
if(a1=="p1"){
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
}
else{
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;
}
}
if(q2=="p1"){
q2="p2";
document.getElementById("player_question").innerHTML="question turn"+player2
}
else{
    q2="p1";
    document.getElementById("player_question").innerHTML="question turn"+player1
}
}