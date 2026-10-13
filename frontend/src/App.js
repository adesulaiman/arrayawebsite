import { useEffect } from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { LanguageProvider } from '@/context/LanguageContext';
import { initLenis } from '@/lib/scroll';
import HomePage from '@/pages/HomePage';
import ProductPage from '@/pages/ProductPage';

function App() {
  useEffect(() => initLenis(), []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/jewelry-management" element={<ProductPage productKey="jewelry" />} />
          <Route path="/products/loge-knowledge-ai" element={<ProductPage productKey="loge" />} />
        </Routes>
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
