const form = document.querySelector('.form_main');
let answer = ['B','A','A',"A"];



let result = document.querySelector('.result');








form.addEventListener('submit',e =>{
    e.preventDefault();
   // console.log('hello welcome ');
    let score =0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
   // console.log(userAnswers);
    // check answer 
    userAnswers.forEach((real,index)=>{
        if(real === answer[index])
        score+=25; 
    });
    // console.log(score);
    scrollTo(0,0);

   
   result.classList.remove('result');
   result.classList.add('final_result');

   let ans =0;
const timer = setInterval(()=>{
    result.querySelector('span').textContent=`Score is ${ans}%`;
    
    if(ans===score){
        clearInterval(timer);
    }else{
    ans++; }
},10);
 
});
  // so don't need to use the window every time 
// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// alert('hello');
// window.alert('hello');

// setTimeout(()=>{
// alert('hello value');
// },3000);

// animation 
// let i =0;
// const timer = setInterval(()=>{
//     console.log('hello');
//     i++;
//     if(i===5){
//         clearInterval(timer);
//     }
// },1000);

//  setInterval(()=>{
//     console.log('hello');
//     i++;
//     if(i===5){
//         clearInterval();  // this doesn't work you need to store it in the some variable;
//     }
// },1000);