const num1=Math.ceil(Math.random()*15);
const num2=Math.ceil(Math.random()*13);

const question=document.getElementById("quest");
const input=document.getElementById("answer");
const form=document.getElementById("formx");
const score_elm=document.getElementById("score");
const btn=document.getElementById("btn_reset");
const back_btn=document.getElementById("btnn");
let score=JSON.parse(localStorage.getItem("score"))||0;
score_elm.innerText=`score:${score}`;
question.innerText=`What is ${num1} product ${num2} ?`;
const res=num1*num2;
form.addEventListener("submit",()=>{
         const user_inp=+input.value;
         if(user_inp===res)
         {
             score++;
             updatelocalstorage();
         }
         else
         {
              score--;
              updatelocalstorage();
         }
});
function updatelocalstorage()
{
       localStorage.setItem("score",JSON.stringify(score));
}
btn.addEventListener("click",reset);
function reset()
{
       score_elm.innerText=`score:0`;
       score=0;
       updatelocalstorage();
}
back_btn.addEventListener("click",()=>{
       history.back();
});


