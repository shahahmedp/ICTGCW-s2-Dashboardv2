import React from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const MenuSidebar = ({user}) => {
    const [t] = useTranslation();

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <img
                    src="/img/jal.png"
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-3"
                    style={{opacity: '.8'}}
                />
                <span className="brand-text font-weight-light">
                    <b> ICTGCW </b>
                </span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img
                            src={user.picture || '/img/default-profile.png'}
                            className="img-circle elevation-2"
                            alt="User"
                        />
                    </div>
                    <div className="info">
                        <Link to="/profile" className="d-block">
                            {user.email}
                        </Link>
                    </div>
                </div>
                <nav className="mt-2" style={{overflowY: 'hidden'}}>
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>{t('menusidebar.label.dashboard')}</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Profile" exact className="nav-link">
                                <i className="nav-icon fas fa-user" />
                                <p>{t('menusidebar.label.profile')}</p>
                            </NavLink>
                        </li>
                        <ul className="nav-item">
                            <li className="nav-item">
                                <NavLink
                                    to="/Global"
                                    exact
                                    className="nav-link"
                                >
                                    <i className="nav-icon fab fa-battle-net" />
                                    <p>Globalm </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Green" exact className="nav-link">
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
                                <NavLink to="/Agua" exact className="nav-link">
                                    <i className="nav-icon fab fa-battle-net" />
                                    <p>Agua Wireless Systems </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Rydot" exact className="nav-link">
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
                                <NavLink to="/Ronds" exact className="nav-link">
                                    <i className="nav-icon fab fa-battle-net" />
                                    <p>Ronds Technologies</p>
                                </NavLink>
                            </li>
                        </ul>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

const mapStateToProps = (state) => ({
    user: state.auth.currentUser
});

export default connect(mapStateToProps, null)(MenuSidebar);
