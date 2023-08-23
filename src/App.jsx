import "./assets/styles/index.scss";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ minHeight: "100vh" }}>
        <h1>every thing is up to date</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
