import React from "react";
import AppLogo from "../app-logo/app-logo";


const AppFooter = () => {
  return (
    <footer className="page-footer">
      <AppLogo
        className={`logo__link--light`}
      />
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default AppFooter;
