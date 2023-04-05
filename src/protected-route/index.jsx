import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types';


export default function ProtectedRoute({ isLogin }) {
    if (!isLogin) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}
ProtectedRoute.propTypes = {
    isLogin: PropTypes.bool
    };