import CardFilme from "./components/card";

function App() {
  return (
    <div>
      <h1>🎬 Catálogo de Filmes</h1>

      <CardFilme
        titulo="O Poderoso Chefão"
        ano="1972"
        imagem="https://via.placeholder.com/150"
      />

    </div>
  );
}

export default App;
