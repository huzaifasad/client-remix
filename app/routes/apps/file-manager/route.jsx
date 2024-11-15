import { useState } from 'react';
import classNames from 'classnames';
import FmHeader from './FmHeader';
import FmSidebar from './FmSidebar';
import FileInfo from './FileInfo';
import { Outlet } from '@remix-run/react';
import { useGlobalStateContext } from '~/context/GolobalStateProvider';

const FileManager = () => {
    const { states } = useGlobalStateContext();
    const [showSidebar, setShowSidebar] = useState(true);


    return (
        <div className="hk-pg-body py-0">
            <div className={classNames("fmapp-wrap", { "fmapp-sidebar-toggle": !showSidebar }, { "fmapp-info-active": states.fmState.showInfo })}>
                <FmSidebar />
                <div className="fmapp-content">
                    <div className="fmapp-detail-wrap">
                        <FmHeader toggleSidebar={() => setShowSidebar(!showSidebar)} showSidebar={showSidebar} showInfo={states.fmState.showInfo} />
                        {/* <FmList toggleInfo={() => setShowInfo(true)} /> */}
                        <Outlet />
                        <FileInfo />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FileManager
