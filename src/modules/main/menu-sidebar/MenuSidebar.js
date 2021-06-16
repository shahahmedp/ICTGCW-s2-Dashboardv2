import React from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';

class MenuSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="/" className="brand-link">
                    <img
                        src="/img/jal.png"
                        alt="AdminLTE Logo"
                        className="brand-image img-circle elevation-3"
                        style={{opacity: '.8'}}
                    />
                    <span className="brand-text font-weight-light">ICTGCW</span>
                </Link>
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img
                            src="/img/default-profile.png"
                            className="img-circle elevation-2"
                            alt="User"
                        />
                    </div>
                    <div className="info">
                        <a
                            href="https://www.cdac.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.cdac.in
                        </a>
                    </div>
                </div>
                <form className="form-inline">
                    <div className="input-group">
                        <input
                            className="form-control form-control-sidebar"
                            type="search"
                            placeholder="search"
                            area-label="Search"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar" type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
                <div className="sidebar">
                    <nav className="mt-2" style={{overflowY: 'hidden'}}>
                        <ui
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <l1>
                                <ui
                                    className="nav nav-pills nav-sidebar flex-column"
                                    data-widget="treeview"
                                    role="menu"
                                    data-accordion="false"
                                >
                                    <l1>
                                        <NavLink
                                            to="/Global"
                                            exact
                                            className="nav-link"
                                        >
                                            <i className="nav-icon fas fa-arrow-circle-right" />
                                            <p>Globalm</p>
                                        </NavLink>
                                    </l1>
                                    <l1>
                                        <NavLink
                                            to="/Green"
                                            exact
                                            className="nav-link"
                                        >
                                            <i className="nav-icon fas fa-arrow-circle-right" />
                                            <p>Greenenvironment</p>
                                        </NavLink>
                                    </l1>
                                    <l1>
                                        <NavLink
                                            to="/Rydot"
                                            exact
                                            className="nav-link"
                                        >
                                            <i className="nav-icon fas fa-arrow-circle-right" />
                                            <p>Rydot</p>
                                        </NavLink>
                                    </l1>
                                    <l1>
                                        <NavLink
                                            to="/Ilonnati"
                                            exact
                                            className="nav-link"
                                        >
                                            <i className="nav-icon fas fa-arrow-circle-right" />
                                            <p>Illonati</p>
                                        </NavLink>
                                    </l1>
                                    <l1>
                                        <NavLink
                                            to="/Agua"
                                            exact
                                            className="nav-link"
                                        >
                                            <i className="nav-icon fas fa-arrow-circle-right" />
                                            <p>Agua</p>
                                        </NavLink>
                                    </l1>
                                    <l1>
                                        <NavLink
                                            to="/Kritsnam"
                                            exact
                                            className="nav-link"
                                        >
                                            <i className="nav-icon fas fa-arrow-circle-right" />
                                            <p>Krishnam</p>
                                        </NavLink>
                                    </l1>
                                    <l1>
                                        <NavLink
                                            to="/Ronds"
                                            exact
                                            className="nav-link"
                                        >
                                            <i className="nav-icon fas fa-arrow-circle-right" />
                                            <p>Ronds</p>
                                        </NavLink>
                                    </l1>
                                </ui>
                            </l1>
                        </ui>
                    </nav>
                </div>
            </aside>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.currentUser
});

export default connect(mapStateToProps, null)(MenuSidebar);
