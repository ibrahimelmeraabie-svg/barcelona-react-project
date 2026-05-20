import Campnou from "../assets/Campnou.jpg";

export default function Home({ setPage }) {
  return (
    <>
      <section className="hero">
        <div className="hero-card">
          <p className="eyebrow">More Than a Club</p>
          <h2>FC Barcelona Fan Hub</h2>
          <p>
            Explore the squad, matches, gallery, stadium information,
            and contact form in one responsive React web app.
          </p>
          <button onClick={() => setPage("team")}>View Team</button>
        </div>
      </section>

      <section className="container section">
        <h2>Project Features</h2>
        <div className="grid">
          <article className="card">
            <h3>Responsive Design</h3>
            <p>Works smoothly on mobile, tablet, and desktop screens.</p>
          </article>

          <article className="card">
            <h3>React Pages</h3>
            <p>Includes Home, About, Team, Matches, Gallery, and Contact pages.</p>
          </article>

          <article className="card">
            <h3>Real Task</h3>
            <p>A fan web app that organizes football club information clearly.</p>
          </article>
        </div>
      </section>

      <section className="container section stadium-preview">
        <div>
          <h2>Camp Nou</h2>
          <p>
            The app highlights the club stadium and creates a modern sports
            website experience.
          </p>
        </div>

        <img src={Campnou} alt="Camp Nou Stadium" />
      </section>
    </>
  );
}