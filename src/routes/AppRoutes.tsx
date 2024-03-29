import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'src/components/layout/Layout';
import Home from 'src/pages/home/Home';


// const Home = lazy(() => import('../pages/home/Home'));
const Heroe = lazy(() => import('../pages/hero/Hero'));
const NotFound = lazy(() => import('../pages/notFound/NotFound'));


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:heroName/:heroId" element={<Heroe />} />
        <Route path="*" element={<NotFound />} />        
      </Route>
    </Routes>
  );
};

export default AppRoutes;
