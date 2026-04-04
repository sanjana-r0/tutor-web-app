module.exports = async function (context, req) {

  const tutors = [
    {
      id: "t1",
      name: "Dr. Rajan Nair",
      subject: "Mathematics",
      rate: 800,
      status: "approved"
    },
    {
      id: "t2",
      name: "Priya Krishnan",
      subject: "Physics",
      rate: 650,
      status: "approved"
    }
  ];

  context.res = {
    headers: { "Content-Type": "application/json" },
    body: tutors
  };
};
