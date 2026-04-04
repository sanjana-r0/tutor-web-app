const API_BASE = "https://tutor-function-app123.azurewebsites.net/api";

// LOGIN
export async function loginUser(email, password) {
  const res = await fetch(`${API_BASE}/Login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return await res.json();
}

// GET TUTORS
export async function getTutors() {
  const res = await fetch(`${API_BASE}/GetTutors`);
  return await res.json();
}

// CREATE BOOKING
export async function createBooking(data) {
  const res = await fetch(`${API_BASE}/CreateBooking`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await res.json();
}

// GET BOOKINGS
export async function getBookings(email) {
  const res = await fetch(`${API_BASE}/GetBookings?email=${email}`);
  return await res.json();
}
