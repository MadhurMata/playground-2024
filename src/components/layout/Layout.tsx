import Header from 'src/components/header/Header';

interface LayoutProps {
  children: JSX.Element | undefined;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="layout">
      <Header />
      <main className="wrapper">{children}</main>
    </div>
  );
};

export default Layout;
