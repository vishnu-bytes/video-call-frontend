import "./index.scss";

import { Spin } from "antd";

const Loader = ({ tip }) => {
  return (
    <div className="autoLoader">
      <Spin tip={`${tip ? tip : "Loading"}...`} />
    </div>
  );
};

export default Loader;
