import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
  component: Component, requiredRole, ...rest
}) => {
  const token = useSelector((state) => state.user.accessToken);
  const role = useSelector((state) => state.user.role);

  return (
    <Route
      {...rest}
      render={(props) => (
        token && role === requiredRole
          ? <Component {...props} />
          : <Redirect to="/" />
      )}
    />
  );
};

export default PrivateRoute;
