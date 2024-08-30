import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
// import SignIn from './pages/Authentication/SignIn';
// import SignUp from './pages/Authentication/SignUp';
import Treasury from './pages/Treasury';
import Chart from './pages/Chart';
import MyPortfolio from './pages/Dashboard/MyPortfolio';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Thovt from './pages/Thovt';
import Links from './pages/Links';
import Dao from './pages/Dao';
// import Alerts from './pages/UiElements/Alerts';
// import Buttons from './pages/UiElements/Buttons';
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
          path="/treasury"
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
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements " />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout" />
              <FormLayout />
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
        {/* <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart " />
              <Chart />
            </>
          }
        /> */}
        {/* <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts " />
              <Alerts />
            </>
          }
        /> */}
        {/* <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons " />
              <Buttons />
            </>
          }
        /> */}
        {/* <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin " />
              <SignIn />
            </>
          }
        /> */}
        {/* <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup" />
              <SignUp />
            </>
          }
        /> */}
      </Routes>
    </DefaultLayout>
  );
}

export default App;
