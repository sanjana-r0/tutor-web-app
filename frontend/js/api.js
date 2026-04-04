const API_BASE = "https://tutor-function-app123.azurewebsites.net/api";

export async function getTutors() {
  const res = await fetch(`${API_BASE}/GetTutors`);
  return await res.json();
}
