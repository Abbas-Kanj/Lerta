import "./landing.css";

function Landing() {
  return (
    <div className="landing ">
      <section className="hero">
        <div className="content flex-center column">
          <h1>welcome to </h1>
          <div className="image">
            <img src="./Group 633088.png" alt="lgoo" />
          </div>
        </div>
        <div className="two flex-center">
          <div className="right">
            <img src="./05 1.png" alt="one" />
          </div>
          <h3>
            We believe that preparation is the key to safety and security in the
            face of natural disasters. Our subscription-based mobile application
            is designed to empower individuals, families, and communities with
            the tools and information they need to prevent, prepare for, and
            navigate through emergencies.
          </h3>

          <div className="left">
            <img src="./05 1.png" alt="one" />
          </div>
        </div>
      </section>
      <section className="home">
        <div className="meshe">
          <div className="title">
            <h1>What de we offer?</h1>
          </div>
          <div className="all flex">
            <div className=" flex column">
              <h2>Real-time Monitoring</h2>
              <p>
                Stay informed about seismic activity and environmental changes
                with our live frequency updates.
              </p>
            </div>
            <div className="flex column">
              <h2>Interactive Maps</h2>
              <p>
                Access detailed maps that highlight safe zones, evacuation
                routes, and essential facilities in your area.
              </p>
            </div>
            <div className="flex column">
              <h2>Family Locator</h2>
              <p>
                See the real-time locations of family members, ensuring that
                everyone stays connected and safe.
              </p>
            </div>
            <div className="flex column">
              <h2>Risk Assessment</h2>
              <p>
                Get insights into the severity of seismic events, along with the
                time needed for them to occur, allowing you to take proactive
                measures.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="three flex">
        <div className="imgs">
          <img src="./05 1.png" alt="" />
        </div>
        <div className="twos flex column">
          <h1>hello we are here to help you </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium quis aut animi facere consequuntur sed, nisi illum
            maxime fugiat accusamus.
          </p>
          <h3>houssien musa skdlash k</h3>
          <button className="button">Button</button>
        </div>
      </section>
    </div>
  );
}

export default Landing;
