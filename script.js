const btn = document.getElementById('log-btn'); 
const home = document.getElementById('home-link');
const intro = document.getElementById('about-link');

const head =  document.getElementById('header');
const foot = document.getElementById('footer');
const hero = document.getElementById('Hero-section');
const data = document.getElementById('Data');
const about = document.getElementById('About-me');

function me(event){
  event.preventDefault();
  hero.style.display = 'none';
  data.style.display = 'none';
  about.style.display = 'flex';
  
}

intro.addEventListener('click', me);  

function landing(event){
  event.preventDefault();
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
               
