import { useGlobalStateContext } from "~/context/GolobalStateProvider";
import PageFooter from "../Footer/PageFooter";
import classNames from "classnames";
import CompactNav from "../Navbar";
import { Outlet, useLocation, useNavigation } from "@remix-run/react";
import HkLoader from "~/@hk-components/@hk-loader/@HkLoader";

const MainLayout = () => {
    const { states } = useGlobalStateContext();
    const { pathname } = useLocation();
    const appRoutes = pathname.match('/apps/');
    const navigation = useNavigation();

    return (
        <>
            <div
                className={classNames("hk-wrapper", { "hk__email__backdrop": states.emailState.maximize }, { "hk-pg-auth": pathname === "/error-404" })}
                data-layout="navbar"
                data-navbar-style={states.layoutState.topNavCollapse ? "collapsed" : ""}
                data-layout-style={states.layoutState.isSidebarCollapsed ? "collapsed" : "default"}
                data-menu="light"
                data-footer="simple"
            >
                {/* Page Loader */}
                {navigation.state !== "idle" ? <HkLoader loadingState={navigation.state} /> : null}
                <CompactNav />
                <div className={classNames("hk-pg-wrapper", { "pb-0": appRoutes })} >
                    <Outlet />
                    {!appRoutes && <PageFooter />}
                </div>
            </div>
        </>
    )
}

export default MainLayout
