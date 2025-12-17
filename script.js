// ================= script.js =================
const inputs=[s1,s2,s3,s4,s5,s6,s7,s8];


window.onload=()=>{
inputs.forEach((i,idx)=>{
const v=localStorage.getItem('s'+(idx+1));
if(v) i.value=v;
});
const mode=localStorage.getItem('mode');
if(mode) document.body.className=mode;
};


function toggleMode(){
const m=document.body.classList.contains('dark')?'light':'dark';
document.body.className=m;
localStorage.setItem('mode',m);
}


function calculate(){
const w=[5,5,10,10,20,20,20,10];
let total=0;
for(let i=0;i<inputs.length;i++){
if(inputs[i].value===''){alert('সব GPA দিন');return;}
localStorage.setItem('s'+(i+1),inputs[i].value);
total+=parseFloat(inputs[i].value)*w[i];
}
const cgpa=(total/100).toFixed(2);
result.innerText='Final CGPA: '+cgpa;
bar.style.width=(cgpa/4*100)+'%';
}


function clearData(){
localStorage.clear();
location.reload();
}