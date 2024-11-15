import classNames from 'classnames'
import { Outlet, useLocation } from '@remix-run/react';

const AuthLayout = ({ children }) => {
    const { pathname } = useLocation();
    const lockScreenAuth = pathname.match('/auth/lock-screen');

    return (
        <div className={classNames("hk-wrapper hk-pg-auth", { "bg-primary-dark-3": lockScreenAuth })} data-footer="simple" >
            <Outlet />
        </div>
    )
}

export default AuthLayout
