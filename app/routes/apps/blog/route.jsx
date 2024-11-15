import { useState } from 'react';
import classNames from 'classnames';
import BlogAppHeader from './BlogAppHeader';
import BlogAppSidebar from './BlogAppSidebar';
import { Outlet } from '@remix-run/react';

const Blog = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div className="hk-pg-body py-0">
            <div className={classNames("blogapp-wrap", { "blogapp-sidebar-toggle": !showSidebar })}>
                <BlogAppSidebar />
                <div className="blogapp-content">
                    <div className="blogapp-detail-wrap">
                        <BlogAppHeader toggleSidebar={() => setShowSidebar(!showSidebar)} showSidebar={showSidebar} />
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blog
