import MapLocation from "../components/About/MapLocation.tsx";

function About() {
  return (
    <main className="container-fluid py-4">
      <section>
        <h2>About Us</h2>
        <p>Founded on the belief that life is a tragic comedy, we
          offer humor-filled solutions for existential dread.</p>
      </section>
      <section className="mt-4">
        <h3>Contact Info</h3>
        <p>Email: laugh@thechucklingabyss.com</p>
        <p>Phone: +46 123 456 789</p>
      </section>
      <section className="mt-4">
        <h3>Our Location</h3>
        <MapLocation address="Gothenburg+Central+Station"
                     width={600}
                     height={300}/>
      </section>
    </main>
  );
}

export default About;