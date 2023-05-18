import { Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({
    isAllowed,
    redirectTo = '/portafolio',
    children
}) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo}/>
    };

    return children ? Children : <Outlet />
}

export default ProtectedRoute