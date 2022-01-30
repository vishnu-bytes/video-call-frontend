import "./index.scss";

import { FeatherIcon } from "../../Assets";

const BackButton = ({ onClick, size }) => {
  return (
    <div className="auto-backBtn">
      <FeatherIcon
        onClick={onClick}
        icon="arrow-left"
        size={size ? size : 18}
      />
    </div>
  );
};

export default BackButton;
