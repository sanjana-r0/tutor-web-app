import { loginUser } from './api.js';

export let CUR = null;
let loginRole = 'student';

export function setRole(r, el) {
  loginRole = r;
  document.querySelectorAll('.role-tab').forEach(b=>b.classList.remove('on'));
  el.classList.add('on');
}

export async function doLogin() {
  const email = document.getElementById('lEmail').value.trim();
  const pw = document.getElementById('lPass').value;

  const user = await loginUser(email, pw);

  if (!user) {
    alert("Invalid login");
    return;
  }

  CUR = user;

  if(user.role === 'student') showScreen('studentScreen');
  if(user.role === 'tutor') showScreen('tutorScreen');
  if(user.role === 'admin') showScreen('adminScreen');
}

export function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
