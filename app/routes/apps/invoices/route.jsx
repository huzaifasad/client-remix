import { useState } from 'react';
import classNames from 'classnames';
import InvoiceAppSidebar from './InvoiceAppSidebar';
import { Outlet, useLocation } from '@remix-run/react';

const Invoices = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const [openSettingPannel, setOpenSettingPannel] = useState(true);
    const { pathname } = useLocation();

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    const toggleSettingPannel = () => {
        setOpenSettingPannel(!openSettingPannel);
    }

    const createInvoiceRoute = pathname.match('/apps/invoice/create');

    return (
        <div className="hk-pg-body py-0">
            <div className={classNames("invoiceapp-wrap", { "invoiceapp-sidebar-toggle": !showSidebar }, { "invoiceapp-setting-active": openSettingPannel && createInvoiceRoute })} >
                <InvoiceAppSidebar />
                <div className="invoiceapp-content">
                    <Outlet context={{ showSidebar, toggleSidebar, toggleSettingPannel }} />
                </div>
            </div>
        </div>

    )
}

export default Invoices
