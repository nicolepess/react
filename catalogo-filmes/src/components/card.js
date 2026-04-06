function CardFilme({ titulo, ano, imagem }) {
  return (
    <div style={styles.card}>
      <img
        src={imagem !== "N/A" ? imagem : "https://via.placeholder.com/150"}
        alt={titulo}
        style={styles.img}
      />

      <h3>{titulo}</h3>
      <p>{ano}</p>
    </div>
  );
}


const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    width: "150px",
    textAlign: "center",
  },
  img: {
    width: "100%",
    borderRadius: "8px",
  },
};

export default CardFilme;