import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './views/Home';
import Layout from './components/Layout';
import { Suspense } from 'react';
import Loading from './components/common/Loading';

function App() {
  const { i18n } = useTranslation();

  // 다국어 처리 Handler
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout onLanguageChange={handleLanguageChange} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App