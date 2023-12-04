import axios from "axios";

export const GET = async (req, { params }) => {
  try {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/eventApp/api/events/${params.id}`,
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

export const DELETE = async (req, { params }) => {
  try {
    const { data } = await axios.delete(
      `http://127.0.0.1:8000/eventApp/api/events/${params.id}`,
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

export const PATCH = async (req, { params }) => {
  const { title, description, date, location } = await req.json();
  try {
    const updateEvent = {
      title,
      description,
      date,
      location,
    };

    const { data } = await axios.patch(
      `http://127.0.0.1:8000/eventApp/api/events/${params.id}/`,
      updateEvent,
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

// export const PATCH = async (request, { params }) => {
//   const { prompt, tag } = await request.json();

//   try {
//     await connectToDatabase();

//     // Find the existing prompt by ID
//     const existingPrompt = await Prompt.findById(params.id);

//     if (!existingPrompt) {
//       return new Response("Prompt not found", { status: 404 });
//     }

//     // Update the prompt with new data
//     existingPrompt.prompt = prompt;
//     existingPrompt.tag = tag;

//     await existingPrompt.save();

//     return new Response("Successfully updated the Prompts", { status: 200 });
//   } catch (error) {
//     return new Response("Error Updating Prompt", { status: 500 });
//   }
// };
