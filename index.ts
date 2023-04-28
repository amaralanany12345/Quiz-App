let question:HTMLCollection=document.getElementsByClassName("question")
let theQustion:HTMLCollection=document.getElementsByClassName("theQustion")

let answer_a:HTMLCollection=document.getElementsByClassName("answer_a")
let answer_b:HTMLCollection=document.getElementsByClassName("answer_b")
let answer_c:HTMLCollection=document.getElementsByClassName("answer_c")
let answer_d:HTMLCollection=document.getElementsByClassName("answer_d")
let answer_e:HTMLCollection= document.getElementsByClassName("answer_e")
let answer_f:HTMLCollection=document.getElementsByClassName("answer_f")

let answers:any[]=[answer_a,answer_b,answer_c,answer_d,answer_e]

let Answer_A:any[]=[]
let Answer_B:any[]=[]
let Answer_C:any[]=[]
let Answer_D:any[]=[]
let Answer_E:any[]=[]

let score:any=document.querySelector(".score")
let Score:number=0

const apiKey='bv7Ixknq4KRtsfaGp8PGztwYNpE5TA9zRYpxw5e2';
const baseURL=`https://quizapi.io/api/v1/questions?apiKey=${apiKey}`;

fetch(baseURL+ `&appid=${apiKey}`)
.then(response => response.json())
.then(data => {
  console.log(data)

  for(let i=0;i<data.length;i++){
    theQustion[i].innerHTML=data[i].question
    answer_a[i].innerHTML=data[i].answers.answer_a
    answer_b[i].innerHTML=data[i].answers.answer_b
    answer_c[i].innerHTML=data[i].answers.answer_c
    answer_d[i].innerHTML=data[i].answers.answer_d
    answer_e[i].innerHTML=data[i].answers.answer_e
    Answer_A.push(data[i].correct_answers.answer_a_correct)
    Answer_B.push(data[i].correct_answers.answer_b_correct)
    Answer_C.push(data[i].correct_answers.answer_c_correct)
    Answer_D.push(data[i].correct_answers.answer_d_correct)
    Answer_E.push(data[i].correct_answers.answer_e_correct)

    if(data[i].answers.answer_c===null){
      answer_c[i].setAttribute("style","display:none")
    }

    if(data[i].answers.answer_d===null){
      answer_d[i].setAttribute("style","display:none")
    }

    if(data[i].answers.answer_e===null){
      answer_e[i].setAttribute("style","display:none")
    }

  }

  let The_Correct_Answers:any[]=[Answer_A,Answer_B,Answer_C,Answer_D,Answer_E] 

  for (let i=0;i<answers.length;i++){
    
    for(let j=0;j<answer_a.length;j++){
      
      answers[i][j].addEventListener("click",function(){
        if (The_Correct_Answers[i][j]==="true"){
          Score+=2
          score.innerHTML=+Score
        } 
        else {
          Score--
          score.innerHTML=+Score
        }
      })
    }
    }

})
.catch(error => console.error('Error fetching weather', error));
