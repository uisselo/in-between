const Layout = ({ children }) => {
  return (
    <div class="d-flex flex-column min-vh-100 bg-black justify-content-center align-items-center">
      {children}
    </div>
  );
};

export default Layout;
