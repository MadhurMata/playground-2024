import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'src/components/header/Header';

const Layout = (): JSX.Element => {
  return (
    <div className="layout" >
        <Header />
        <Suspense fallback={<h1>loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
  );
};

export default Layout;
