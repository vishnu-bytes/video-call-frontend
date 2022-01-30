import "./index.scss";

import { logoWithTitle } from "../../Assets";

const SplashScreen = () => {
  return (
    <div className="splashSreen">
      <img src={logoWithTitle} alt="logo" />
    </div>
  );
};

export default SplashScreen;
