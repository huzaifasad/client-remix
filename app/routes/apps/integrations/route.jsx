import { useState } from 'react';
import classNames from 'classnames';
import AppsSidebar from './AppsSidebar';
import { Outlet } from '@remix-run/react';

const Integrations = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <div className="hk-pg-body py-0">
            <div className={classNames("integrationsapp-wrap", { "integrationsapp-sidebar-toggle": !showSidebar })}>
                <AppsSidebar />
                <div className="integrationsapp-content">
                    <Outlet context={{ showSidebar, toggleSidebar }} />
                </div>
            </div>
        </div>

    )
}

export default Integrations
