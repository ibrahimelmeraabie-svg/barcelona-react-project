import Squad from "../assets/Squad.jpg";
import Celebration from "../assets/Celebration.jpg";
import Campnou from "../assets/Campnou.jpg";
import Pedri from "../assets/Pedri.jpg.webp";

export default function Gallery() {
  const images = [Squad, Celebration, Campnou, Pedri];

  return (
    <section className="container section page-section">
      <h2>Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Barcelona gallery ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}