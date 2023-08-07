let count = 0;

MyUpdate();

document.getElementById("decrease").onclick = 
function(){
    count --;
MyUpdate()
}
document.getElementById("increase").onclick = 
function(){
    count ++;
MyUpdate()
}
document.getElementById("reset").onclick = 
function(){
    count = 0;
MyUpdate()
}


function MyUpdate(){
    document.getElementById("MyNumber").innerHTML
     = count;


}






//2
// document.getElementById("MyButton").onclick = 
// function(){
// let n = document.getElementById("MyNumber").value;

//     document.getElementById("MyLabel").innerHTML =
//         n*8;
// }


//1
// let answer = Math.floor(Math.random() * 10 +1 )



// document.getElementById("MyButton").onclick = 
// function()
// {
//       let guess = document.getElementById
//       ('MyText').value;

//  if(guess < answer){
//     document.getElementById("MyLabel").innerHTML =
//     "Введеное число меньше загаданного";
//  }  
//  else if(guess > answer){
//     document.getElementById("MyLabel").innerHTML =
//     "Введеное число больше загаданного";
//  }   
//  else {
//     document.getElementById("MyLabel").innerHTML =
//     "Вы угадали!";
//  }      

// }
