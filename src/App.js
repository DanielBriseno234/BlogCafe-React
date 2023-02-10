import BarraNav from './componentes/BarraNav';
import Principal from './componentes/Principal';
import QuienesSomos from './componentes/QuienesSomos';
import Compras from './componentes/Compras';
import Contacto from './componentes/Contacto';
import Error404 from './componentes/Error404';
import Footer from './componentes/Footer';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <BarraNav />
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/BlogCafe' element={<Navigate to="/" />} />
        <Route path='/QuienesSomos' element={<QuienesSomos />} />
        <Route path='/Compras' element={<Compras />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
