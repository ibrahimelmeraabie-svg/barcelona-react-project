export default function About() {
  return (
    <section className="container section page-section">
      <h2>About The Club</h2>

      <p className="lead">
        FC Barcelona is one of the most famous football clubs in the world,
        known for its history, football style, legends, and strong identity.
      </p>

      <div className="grid">
        <article className="card">
          <h3>Mission</h3>
          <p>
            To inspire football fans through teamwork, passion,
            and beautiful football.
          </p>
        </article>

        <article className="card">
          <h3>History</h3>
          <p>
            The club has built a global reputation through trophies,
            talent development, and loyal supporters.
          </p>
        </article>

        <article className="card">
          <h3>Identity</h3>
          <p>
            The phrase “More Than a Club” reflects the connection between
            the team, fans, and community.
          </p>
        </article>
      </div>
    </section>
  );
}