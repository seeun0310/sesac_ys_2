import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';
import RouterPrac from './pages/RouterPrac';

function App() {
  return (
    <BrowserRouter>
    {/* Routes, Route 감싸야 함. */}
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/product/:id' element={<ProductDetailPage />} />
          <Route path='/photo' element={<RouterPrac />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
