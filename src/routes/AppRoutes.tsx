import { Route, Routes } from 'react-router-dom';

import Home from 'src/pages/home/Home';
import Heroe from 'src/pages/hero/Hero';
import NotFound from 'src/pages/notFound/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:heroName/:heroId" element={<Heroe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
