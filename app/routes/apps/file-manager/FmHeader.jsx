import { Link, useLocation } from '@remix-run/react';
import classNames from 'classnames';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { ChevronDown, ChevronUp, File, FilePlus, FolderPlus, Grid, Info, List, UploadCloud, UserPlus } from 'react-feather';
import HkTooltip from '~/@hk-components/@hk-tooltip/HkTooltip';
import { useGlobalStateContext } from '~/context/GolobalStateProvider';

const FmHeader = ({ toggleSidebar, showSidebar }) => {
    const { states, dispatch } = useGlobalStateContext();
    const { pathname } = useLocation();
    const listViewRoute = pathname.match("/apps/file-manager/list-view");

    return (
        <header className="fm-header">
            <div className="d-flex align-items-center flex-grow-1">
                <Dropdown>
                    <Dropdown.Toggle as={Link} to="#" className="fmapp-title link-dark">
                        <h1>My Space</h1>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <File />
                            </span>
                            <span>All Files</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <FilePlus />
                            </span>
                            <span>Synced Files</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <UploadCloud />
                            </span>
                            <span>Cloud Document</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form className="mx-3 flex-grow-1 mw-400p" role="search">
                    <Form.Control type="text" placeholder="Search files and folders" />
                </Form>
            </div>
            <div className="fm-options-wrap">
                <Link to="#" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover disabled d-xl-inline-block d-none">
                    <span className="icon">
                        <span className="feather-icon">
                            <UserPlus />
                        </span>
                    </span>
                </Link>
                <Button as={Link} to="#" variant="flush-dark" className={classNames("btn-icon btn-rounded flush-soft-hover fmapp-info-toggle", { "active": states.fmState.showInfo })} onClick={() => dispatch({ type: "show_fmInfo", showInfo: !states.fmState.showInfo })} >
                    <span className="icon">
                        <span className="feather-icon">
                            <Info />
                        </span>
                    </span>
                </Button>
                <div className="v-separator d-xl-inline-block d-none" />
                <Button as={Link} to="#" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover ms-0 d-xl-inline-block d-none">
                    <HkTooltip placement={states.layoutState.topNavCollapse ? "bottom" : "top"} title="Add New Folder">
                        <span className="icon">
                            <span className="feather-icon">
                                <FolderPlus />
                            </span>
                        </span>
                    </HkTooltip>
                </Button>
                <Button as={Link} to="#" variant="flush-dark" className="btn-icon btn-rounded btn-file flush-soft-hover  d-md-inline-block d-none">
                    <HkTooltip placement={states.layoutState.topNavCollapse ? "bottom" : "top"} title="Upload">
                        <span className="icon">
                            <span className="feather-icon">
                                <UploadCloud />
                            </span>
                        </span>
                    </HkTooltip>
                </Button>
                <div className="v-separator d-lg-inline-block d-none" />
                <Dropdown className="inline-block">
                    <Dropdown.Toggle as={Link} to="#" className="btn btn-icon btn-flush-dark flush-soft-hover no-caret active ms-lg-0 d-sm-inline-block d-none">
                        <span className="icon">
                            <span className="feather-icon">
                                {listViewRoute ? <List /> : <Grid />}
                            </span>
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end" >
                        <Dropdown.Item as={Link} to="list-view" active={listViewRoute}  >
                            <span className="feather-icon dropdown-icon">
                                <List />
                            </span>
                            <span>List View</span>
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="grid-view" active={pathname.match("apps/file-manager/grid-view")} >
                            <span className="feather-icon dropdown-icon">
                                <Grid />
                            </span>
                            <span>Grid View</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button as={Link} to="#" variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none" onClick={() => dispatch({ type: "top_nav_toggle" })} >
                    <HkTooltip placement={states.layoutState.topNavCollapse ? "bottom" : "top"} title="Collapse" >
                        <span className="icon">
                            <span className="feather-icon">
                                {
                                    states.layoutState.topNavCollapse ? <ChevronDown /> : <ChevronUp />
                                }
                            </span>
                        </span>
                    </HkTooltip>
                </Button>
            </div>
            <div className={classNames("hk-sidebar-togglable", { "active": !showSidebar })} onClick={toggleSidebar} />
        </header>
    )
}


export default FmHeader;