import axios from "axios";

export const GET = async (req, res) => {
  try {
    const { data } = await axios.get(
      "http://127.0.0.1:8000/eventApp/api/events/",
      {
        headers: {
          "X-CSRFToken": process.env.CSRF_TOKEN, // Accede a la variable de entorno aquí
        },
      }
    );

    //console.log(data);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
