import Login from "../../pages/Login";

const ProtectedRoute = ({ Child }) => {
  const isAuth = true;
  return <>{isAuth ? <Child /> : <Login />}</>;
};

export default ProtectedRoute;
