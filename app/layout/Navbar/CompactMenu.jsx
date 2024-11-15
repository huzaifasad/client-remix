import React, { useEffect, useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import NavHeader from './NavHeader';
import { NavMenu } from './NavMenu';
import classNames from 'classnames';
import { useWindowWidth } from '@react-hook/window-size';
import { compactMenu } from '~/utils/CompactNavInit';
import { useGlobalStateContext } from '~/context/GolobalStateProvider';
import { NavLink, useLocation, useNavigate } from '@remix-run/react';

const CompactMenu = () => {

    const { dispatch } = useGlobalStateContext();
    const [activeMenu, setActiveMenu] = useState();
    const [activeSubMenu, setActiveSubMenu] = useState();
    const width = useWindowWidth();
    const { pathname } = useLocation();

    useEffect(() => {
        window.dispatchEvent(new Event('resize'))
    }, [])

    useEffect(() => {
        setTimeout(() => {
            compactMenu();
        }, 300);
    })

    useEffect(() => {
        if (width) {
            compactMenu();
        }
    }, [width])

    // const router = useRouter();
    const navigate = useNavigate();

    useEffect(() => {
        require("bootstrap/js/dist/collapse");
        document.addEventListener("click", function (e) {
            const target = e.target.closest(".more-nav-item");
            const extra = e.target.closest(".extra-link");
            if (target && !extra) {
                e.preventDefault();
                const newTarget = e.target.closest(".nav-link");
                // router.prefetch(newTarget.getAttribute("href"));
                navigate(newTarget.getAttribute("href"));
            }
        });
    }, [navigate])

    const handleClick = (menuName) => {
        setActiveMenu(menuName);
        if (width < 1199) {
            dispatch({ type: "sidebar_toggle" })
        }
    }

    return (
        <div className="hk-menu">
            {/* Brand */}
            <NavHeader />
            {/* Main Menu */}
            <SimpleBar className="nicescroll-bar">
                <div className="menu-content-wrap">
                    <Container fluid className="menu-group">
                        <Nav as="ul" className="navbar-nav flex-column">
                            {
                                NavMenu.map((routes, index) => (
                                    <React.Fragment key={index} >
                                        {
                                            routes.contents.map((menus, ind) => (
                                                <Nav.Item as='li' key={ind} className={classNames({ "active": pathname.startsWith(menus.path) })} >
                                                    {
                                                        menus.childrens
                                                            ?
                                                            <>
                                                                <Nav.Link data-bs-toggle="collapse" data-bs-target={`#${menus.id}`} aria-expanded={activeMenu === menus.name ? "true" : "false"} onClick={() => setActiveMenu(menus.name)}  >
                                                                    <span className={classNames("nav-link-text", { "position-relative": menus.badgeIndicator })} >
                                                                        {menus.name}
                                                                        {menus.badgeIndicator && menus.badgeIndicator}
                                                                    </span>
                                                                    {menus.badge && menus.badge}
                                                                </Nav.Link>

                                                                <Nav as="ul" id={menus.id} className={classNames("nav flex-column nav-children", { "collapse": activeMenu !== menus.name })}>
                                                                    <Nav.Item as="li">
                                                                        <ul className="nav flex-column">
                                                                            {menus.childrens.map((subMenu, indx) => (
                                                                                subMenu.childrens
                                                                                    ?
                                                                                    <Nav.Item as="li" key={indx}>
                                                                                        <NavLink to={subMenu.path} end className="nav-link" data-bs-toggle="collapse" data-bs-target={`#${subMenu.id}`} aria-expanded={activeSubMenu === subMenu.name ? "true" : "false"} onClick={() => setActiveSubMenu(subMenu.name)}>
                                                                                            <span className="nav-link-text">
                                                                                                {subMenu.name}
                                                                                            </span>
                                                                                        </NavLink>

                                                                                        <Nav as="ul" id={subMenu.id} className={classNames("nav flex-column nav-children", { "collapse": activeSubMenu !== subMenu.name })}>
                                                                                            <Nav.Item as="li">
                                                                                                <ul className="nav flex-column">
                                                                                                    {subMenu.childrens.map((childrenPath, i) => (
                                                                                                        <li className="nav-item" key={i}>
                                                                                                            <NavLink to={childrenPath.path} end onClick={handleClick} className="nav-link">
                                                                                                                <span className="nav-link-text">
                                                                                                                    {childrenPath.name}
                                                                                                                </span>
                                                                                                            </NavLink>
                                                                                                        </li>
                                                                                                    ))}
                                                                                                </ul>
                                                                                            </Nav.Item>
                                                                                        </Nav>

                                                                                    </Nav.Item>
                                                                                    :
                                                                                    <Nav.Item key={indx}>
                                                                                        <NavLink to={subMenu.path} end onClick={handleClick} className="nav-link">
                                                                                            <span className="nav-link-text">
                                                                                                {subMenu.name}
                                                                                            </span>
                                                                                        </NavLink>
                                                                                    </Nav.Item>
                                                                            ))}
                                                                        </ul>
                                                                    </Nav.Item>
                                                                </Nav>
                                                            </>
                                                            :
                                                            <>
                                                                {
                                                                    (routes.group === "Documentation")
                                                                        ?
                                                                        <Nav.Link href={menus.path} target="_blank" className="extra-link" rel="noreferrer" >
                                                                            <span className="nav-link-text">{menus.name}</span>
                                                                            {menus.badge && menus.badge}
                                                                        </Nav.Link>
                                                                        :
                                                                        <NavLink to={menus.path} end onClick={() => handleClick(menus.name)} className="nav-link" >

                                                                            <span className="nav-link-text">{menus.name}</span>
                                                                            {menus.badge && menus.badge}
                                                                        </NavLink>
                                                                }
                                                            </>
                                                    }
                                                </Nav.Item>
                                            ))
                                        }
                                    </React.Fragment>
                                ))
                            }
                        </Nav>
                    </Container>
                </div>
            </SimpleBar>
        </div>
    )
}

export default CompactMenu
