import "./assets/styles/index.css";

import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import ProductImageZoom from "./pages/ProductImageZoom/ProductImageZoom";
import ProductsCarousel from "./components/ProductsCarousel/ProductsCarousel";

function App() {
  return (
    <div className="App">
      {/* <HeroCarousel /> */}
      <ProductImageZoom />
    </div>
  );
}

export default App;
