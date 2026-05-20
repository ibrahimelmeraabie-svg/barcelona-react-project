import Lewandowski from "../assets/Lewandowskijpg.jpg";
import Pedri from "../assets/Pedri.jpg.webp";
import Gavi from "../assets/Gavi.jpg";
import Squad from "../assets/Squad.jpg";

const players = [
  { name: "Lewandowski", position: "Striker", img: Lewandowski },
  { name: "Pedri", position: "Midfielder", img: Pedri },
  { name: "Gavi", position: "Midfielder", img: Gavi },
];

export default function Team() {
  return (
    <section className="container section page-section">
      <h2>Barcelona Squad</h2>

      <img className="wide-image" src={Squad} alt="Barcelona squad" />

      <div className="grid players-grid">
        {players.map((player) => (
          <article className="player-card" key={player.name}>
            <img src={player.img} alt={player.name} />
            <h3>{player.name}</h3>
            <p>{player.position}</p>
          </article>
        ))}
      </div>
    </section>
  );
}