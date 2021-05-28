const questions = [
    {
        question:'How old am I',
        a:'10',
        b:'11',
        c:'31',
        d:'20',
        correct:'c',
    }
    ,
    {
        question:'Bruh',
        a:'m',
        b:'o',
        c:'m',
        d:'y',
        correct:'c',
    }
]
const question_text = document.getElementById('question_text');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll(".answer");

var questionIndex = 0;
var score = 0;

loadQuestions();
function loadQuestions() {
    deselectAnswers();
    const currentQuizzData = questions[questionIndex];
    question_text.innerText = currentQuizzData.question;
    a_text.innerText = currentQuizzData.a;
    b_text.innerText = currentQuizzData.b;
    c_text.innerText = currentQuizzData.c;
    d_text.innerText = currentQuizzData.d;
    
}
submitBtn.addEventListener("click",()=>{
    //checkAnswer();
    let answer = checkAnswer();
    console.log(answer);
    if (answer==questions[questionIndex].correct) {
        score+=1;
    }
    questionIndex++;
    if (questionIndex<questions.length) {
        loadQuestions();
    }else{
        alert("All questions are done!");
        alert("Your score is:"+score);
    }
})
function checkAnswer() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
            //console.log(answer)
        }
    });
    //console.log(answer)
    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}