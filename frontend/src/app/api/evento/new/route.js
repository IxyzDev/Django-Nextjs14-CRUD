import axios from "axios";

export const POST = async (req, res) => {
  const { title, description, date, location } = await req.json();
  try {
    const newEvent = {
      title,
      description,
      date,
      location,
    };

    const response = await axios.post(
      "http://127.0.0.1:8000/eventApp/api/events/",
      newEvent,
      {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": process.env.CSRF_TOKEN,
        },
      }
    );

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
