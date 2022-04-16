import { Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, KungFu, Leon, Profesores, Sanda } from './pages';

function App() {
  return (
    <>
      <Header />
      <div style={{ height: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="kung-fu" element={<KungFu />} />
          <Route path="leon" element={<Leon />} />
          <Route path="profesores" element={<Profesores />} />
          <Route path="sanda" element={<Sanda />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
