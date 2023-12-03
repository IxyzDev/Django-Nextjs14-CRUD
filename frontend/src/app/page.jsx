import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="solid-bg text-center py-10">
      <h1 className="text-4xl font-bold mb-4">¡Bienvenidos!</h1>
      {/* <p className="text-lg">
        Promptopia is an open-source AI prompting tool for the modern world to
        discover, create, and share creative prompts.
      </p> */}

      <Feed />
    </section>
  );
};

export default Home;
