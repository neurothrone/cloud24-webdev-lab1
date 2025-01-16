function Home() {
  return (
    <>
      <header className="container-fluid text-center bg-dark py-5">
        <h1 className="display-3">The Chuckling Abyss</h1>
        <p className="lead">"Because life is a joke, and so are we."</p>
      </header>
      <main className="container-fluid py-4">
        <img src="/images/landing.webp"
             alt="A surreal corporate meeting room with quirky objects like a rubber chicken and a cactus in place of people, reflecting the absurdity of modern life."
             className="img-fluid rounded d-block mx-auto"/>
        <p className="text-center mt-4">
          Welcome to The Chuckling Abyss, where we turn your existential crises into delightful opportunities to laugh
          at the absurdity of it all.
        </p>
      </main>
    </>
  );
}

export default Home;