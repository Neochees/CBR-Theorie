document.getElementById("theresult").style.display="none";

function mark(){
 document.getElementById("quizpage").style.display="none";
 var c = 0;
  var q1 = document.quiz.q1.value;
  var q2 = document.quiz.q2.value;
  var q3 = document.quiz.q3.value;
  var q4 = document.quiz.q4.value;
  
  if (q1 == 1) {c++;};
  if (q2 == 3) {c++;};
  if (q3 == 2) {c++;};
  if (q4 == 4) {c++;};
  
 document.getElementById("theresult").style.display="block";
 
 if (c == 4){
document.getElementById("result").innerHTML = "Your Result is " + c + "/4. You have done well";
document.getElementById("try1").style.display="none";  
   } 
  else { document.getElementById("result").innerHTML = "Your Result is " + c + "/4. Please Try again";
        
  }
}

function tryagain(){
  document.getElementById("quizpage").style.display="block";
  document.getElementById("theresult").style.display="none";
}