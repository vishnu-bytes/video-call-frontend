import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../Common/UI/Loader";
import { useAuthStore } from "../Stores/Auth";

const PrivateRouter = ({ children }) => {
  const [{ loading }, { authenticate }] = useAuthStore();
  const history = useHistory();

  useEffect(() => {
    authenticate(history);
  }, [authenticate, history]);

  if (loading) return <Loader tip="Loading" />;

  return <>{children}</>;
};

export default PrivateRouter;
