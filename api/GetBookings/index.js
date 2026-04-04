module.exports = async function (context, req) {

  const bookings = [
    {
      tutorName: "Dr. Rajan Nair",
      subject: "Math",
      date: "2026-04-15",
      time: "9:00 AM",
      status: "confirmed"
    }
  ];

  context.res = {
    body: bookings
  };
};
