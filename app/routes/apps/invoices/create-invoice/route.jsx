import { useState } from 'react';
import classNames from 'classnames';
import InvoiceAppSidebar from '../InvoiceAppSidebar';
import Header from './Header';
import Body from './Body';
import SettingPannel from './SettingPannel';

const Invoices = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const [openSettingPannel, setOpenSettingPannel] = useState(false);

    return (
        <div className="hk-pg-body py-0">
            <div className={classNames("invoiceapp-wrap", { "invoiceapp-sidebar-toggle": !showSidebar }, { "invoiceapp-setting-active": openSettingPannel })}>
                <InvoiceAppSidebar />
                <div className="invoiceapp-content">
                    <div className="invoiceapp-detail-wrap">
                        <Header toggleSidebar={() => setShowSidebar(!showSidebar)} show={showSidebar} handleSettings={() => setOpenSettingPannel(!openSettingPannel)} />
                        <Body />
                        <SettingPannel onHide={() => setOpenSettingPannel(false)} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Invoices
