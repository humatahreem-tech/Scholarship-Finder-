const btn = document.getElementById('log-btn'); 
const home = document.getElementById('home-link');
const intro = document.getElementById('about-link');

const head =  document.getElementById('header');
const foot = document.getElementById('footer');
const hero = document.getElementById('Hero-section');
const data = document.getElementById('Data');
const about = document.getElementById('About-me');
const loginpage = document.getElementById('Login-page');

function login(event){
  event.preventDefault();
let email = document.getElementById('email');  let pass = document.getElementById('pass');

 const mail = email.value;
 const lock = pass.value;

  if(mail==="" || lock===""){
    alert('please fill in all the details !')
  }else if(mail.includes('@') &&   mail.includes('.') && lock.length >= 6 ){
    alert('login successful !')
  
  loginpage.style.display = 'none';
  hero.style.display = 'flex';
  head.style.display = 'flex';
  foot.style.display = 'block';
  }else{
    alert('Invalid email or password please try again !')
  }
}            

btn.addEventListener('click', login);

console.log(login);

function me(event){
  event.preventDefault();

loginpage.style.display = 'none';
  hero.style.display = 'none';
  data.style.display = 'none';
  about.style.display = 'flex';
  
}

intro.addEventListener('click', me);  

function landing(event){
  event.preventDefault();

loginpage.style.display = 'none';
  about.style.display = 'none';
  data.style.display = 'none';
  hero.style.display = 'flex';
}
home.addEventListener('click', landing);   



const findBtn = document.getElementById('find-btn'); 

 function findScholarship(event) {
   hero.style.display = 'none';
   data.style.display = 'flex';
 }

findBtn.addEventListener('click', findScholarship);   
               
