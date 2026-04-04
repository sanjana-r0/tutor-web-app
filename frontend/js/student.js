import { getTutors, getBookings, createBooking } from './api.js';
import { CUR } from './auth.js';

export async function renderTutorGrid() {
  const tutors = await getTutors();

  const approved = tutors.filter(t => t.status === 'approved');
  const g = document.getElementById('tutorGrid');

  g.innerHTML = approved.map(t => `
    <div class="tutor-card">
      <div>${t.name}</div>
      <div>${t.subject}</div>
      <div>₹${t.rate}</div>
      <button onclick="openModal('${t.id}')">Book</button>
    </div>
  `).join('');
}

export async function renderBookings() {
  const data = await getBookings(CUR.email);

  const tb = document.getElementById('stuBookTbl');

  tb.innerHTML = data.map(b => `
    <tr>
      <td>${b.tutorName}</td>
      <td>${b.date}</td>
      <td>${b.time}</td>
      <td>${b.status}</td>
    </tr>
  `).join('');
}

export async function confirmBooking(tutorId, date, time, notes) {
  await createBooking({
    tutorId,
    studentEmail: CUR.email,
    date,
    time,
    notes
  });

  alert("Booking success");
}
