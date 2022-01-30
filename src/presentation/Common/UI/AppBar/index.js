import "./index.scss";

import { Dropdown } from "antd";

import { FeatherIcon } from "../../Assets";
import BackButton from "../BackButton";

const AppBar = ({ onBack, children, dropDownMenu }) => {
  return (
    <div className="autoAppbar">
      <div className="autoAppbar-left">
        <BackButton onClick={onBack} />
      </div>
      <div className="autoAppbar-mid">{children}</div>
      {dropDownMenu && (
        <div className="autoAppbar-right">
          <Dropdown overlay={dropDownMenu} placement="bottomLeft">
            <FeatherIcon icon="more-vertical" />
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default AppBar;
