const { default: Navigation } = require("./Navigation");
const { default: Footer } = require("./Footer");

const AppLayout = ({children}) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
