import React from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
//  import {useTranslation} from 'react-i18next';

const MenuSidebar = ({user}) => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <div className="side text-centre">
                <img
                    src="/img/jal.png"
                    alt="AdminLTE Logo"
                    className="brand-image img-box elevation-3 ml-5 mt-5"
                    style={{opacity: '.8'}}
                />
                <Link to="/" className="brand-link">
                    <span className="h3 pl-5">ICTGCW</span>
                </Link>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 d-flex">
                        <div className="image">
                            <img
                                src={user.picture || '/img/default-profile.png'}
                                className="img-circle elevation-2"
                                alt="User"
                            />
                        </div>
                        <div className="info">
                            <Link to="/" className="d-block">
                                {user.email}
                            </Link>
                        </div>
                    </div>
                    <nav style={{overflowY: 'hidden'}}>
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item">
                                <NavLink
                                    to="/AboutUS"
                                    exact
                                    className="nav-link"
                                >
                                    <i className="nav-icon fas fa-building" />
                                    <p>About Us</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" exact className="nav-link">
                                    <i className="nav-icon fas fa-users" />
                                    <p>Participents</p>
                                </NavLink>
                            </li>
                            <ul className="nav-item">
                                <li className="nav-item">
                                    <NavLink
                                        to="/GlobalM"
                                        exact
                                        className="nav-link"
                                    >
                                        <i className="nav-icon fab fa-battle-net" />
                                        <p>Globalm </p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/Green"
                                        exact
                                        className="nav-link"
                                    >
                                        <i className="nav-icon fab fa-battle-net" />
                                        <p>Greenvironment</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/Ilonnati"
                                        exact
                                        className="nav-link"
                                    >
                                        <i className="nav-icon fab fa-battle-net" />
                                        <p>Eyenetaqua & Ilonnati</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/Agua"
                                        exact
                                        className="nav-link"
                                    >
                                        <i className="nav-icon fab fa-battle-net" />
                                        <p>Agua Wireless Systems </p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/Rydot"
                                        exact
                                        className="nav-link"
                                    >
                                        <i className="nav-icon fab fa-battle-net" />
                                        <p>Rydot Infotech </p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/Kritsnam"
                                        exact
                                        className="nav-link"
                                    >
                                        <i className="nav-icon fab fa-battle-net" />
                                        <p>Kritsnam Technologies </p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/Ronds"
                                        exact
                                        className="nav-link"
                                    >
                                        <i className="nav-icon fab fa-battle-net" />
                                        <p>Ronds Technologies</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

const mapStateToProps = (state) => ({
    user: state.auth.currentUser
});

export default connect(mapStateToProps, null)(MenuSidebar);
