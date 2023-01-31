import Destacado from "./components/Destacado";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import PromoApp from "./components/PromoApp";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"No se encontraron Productos!"} />
      <Destacado />
      <PromoApp />
      <Footer />
    </div>
  );
}

export default App;