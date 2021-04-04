import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({
  component: Component, restricted = false, ...rest
}) => {
  const token = useSelector((state) => state.user.accessToken);

  return (
    <Route
      {...rest}
      render={(props) => (
        token && restricted
          ? <Redirect to="/dashboard" />
          : <Component {...props} />
      )}
    />
  );
};

export default PublicRoute;
