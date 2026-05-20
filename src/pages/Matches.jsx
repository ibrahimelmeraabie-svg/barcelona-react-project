export default function Matches() {
  const matches = [
    { date: "25 March", match: "Barcelona vs Real Madrid", stadium: "Camp Nou" },
    { date: "1 April", match: "Barcelona vs Atletico Madrid", stadium: "Camp Nou" },
    { date: "8 April", match: "Barcelona vs Sevilla", stadium: "Camp Nou" },
  ];

  return (
    <section className="container section page-section">
      <h2>Upcoming Matches</h2>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Match</th>
              <th>Stadium</th>
            </tr>
          </thead>

          <tbody>
            {matches.map((game) => (
              <tr key={game.match}>
                <td>{game.date}</td>
                <td>{game.match}</td>
                <td>{game.stadium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}