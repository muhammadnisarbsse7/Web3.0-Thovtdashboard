import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Treasury from './pages/Treasury';
import TreasuryAsset from './pages/TreasuryAsset';
import MyPortfolio from './pages/Dashboard/MyPortfolio';
import Thovt from './pages/Thovt';
import Links from './pages/Links';
import Dao from './pages/Dao';
import Calculator from './pages/Calculator';

import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Thovt Dashboard" />
              <MyPortfolio />
            </>
          }
        />
        <Route
          path="/Treasury"
          element={
            <>
              <PageTitle title="Treasury" />
              <Treasury />
            </>
          }
        />
        <Route
          path="/thovt"
          element={
            <>
              <PageTitle title="thovt" />
              <Thovt />
            </>
          }
        />
        <Route
          path="/Calculator"
          element={
            <>
              <PageTitle title="Calculator" />
              <Calculator />
            </>
          }
        />
        <Route
          path="/Dao"
          element={
            <>
              <PageTitle title="Dao" />
              <Dao />
            </>
          }
        />
        <Route
          path="/links"
          element={
            <>
              <PageTitle title="Links" />
              <Links />
            </>
          }
        />
        <Route
          path="/treasuryAsset"
          element={
            <>
              <PageTitle title="Treasury Asset" />
              <TreasuryAsset />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
