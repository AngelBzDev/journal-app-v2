import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, isLoggin }) =>
  isLoggin ? children : <Navigate to={"/auth/login"} />;

export default PrivateRoutes;
