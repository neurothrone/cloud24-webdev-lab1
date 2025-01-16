import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Layout/Navbar.tsx";
import Footer from "./components/Layout/Footer.tsx";
import AppRoutes from "./AppRoutes.tsx";

function App() {
  return (
    <>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </>
  );
}

export default App
