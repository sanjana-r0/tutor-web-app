import { doLogin, setRole } from './auth.js';
import { renderTutorGrid } from './student.js';

window.doLogin = doLogin;
window.setRole = setRole;

window.onload = () => {
  console.log("App loaded");
};
