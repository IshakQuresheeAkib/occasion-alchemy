import PropTypes from 'prop-types';
import useAuth from '../Hook/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user,loading} = useAuth();
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <span className="loading loading-spinner text-green-400 loading-lg flex items-center h-screen mx-auto"></span>        
    }

    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate> 
    }

    return children;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
  };