const BASE_URL = "https://tutor-function-app123-haffbcbyasdpfgcq.centralindia-01.azurewebsites.net/api";


/* ───────── LOGIN ───────── */
export async function loginUser(email, password) {
  try {
    const res = await fetch(
      `${BASE_URL}/Login?email=${email}&password=${password}`
    );

    if (!res.ok) throw new Error("Login failed");

    return await res.json();
  } catch (err) {
    console.error("Login error:", err);
    return null;
  }
}

/* ───────── GET TUTORS ───────── */
export async function getTutors() {
  try {
    const res = await fetch(`${BASE_URL}/GetTutors`);

    if (!res.ok) throw new Error("Failed to fetch tutors");

    return await res.json();
  } catch (err) {
    console.error("GetTutors error:", err);
    return [];
  }
}

/* ───────── GET BOOKINGS ───────── */
export async function getBookings(email) {
  try {
    const res = await fetch(`${BASE_URL}/GetBookings?email=${email}`);

    if (!res.ok) throw new Error("Failed to fetch bookings");

    return await res.json();
  } catch (err) {
    console.error("GetBookings error:", err);
    return [];
  }
}

/* ───────── CREATE BOOKING ───────── */
export async function createBooking(data) {
  try {
    const res = await fetch(`${BASE_URL}/CreateBooking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Booking failed");

    return await res.json();
  } catch (err) {
    console.error("CreateBooking error:", err);
    return null;
  }
}
