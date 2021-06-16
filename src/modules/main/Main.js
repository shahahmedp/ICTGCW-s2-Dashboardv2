import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {Gatekeeper} from 'gatekeeper-client-sdk';

import Dashboard from '@pages/Dashboard';
import Profile from '@pages/profile/Profile';
import next1 from '@pages/next1';
import next2 from '@pages/next2';

import Header from './header/Header';
import Footer from './footer/Footer';
import Banner from './Banner';

import MenuSidebar from './menu-sidebar/MenuSidebar';
import PageLoading from '../../components/page-loading/PageLoading';
import * as ActionTypes from '../../store/actions';

const Main = ({onUserLoad}) => {
    const [appLoadingState, updateAppLoading] = useState(false);
    const [menusidebarState, updateMenusidebarState] = useState({
        isMenuSidebarCollapsed: false
    });

    const toggleMenuSidebar = () => {
        updateMenusidebarState({
            isMenuSidebarCollapsed: !menusidebarState.isMenuSidebarCollapsed
        });
    };

    useEffect(() => {
        updateAppLoading(true);
        const fetchProfile = async () => {
            try {
                const response = await Gatekeeper.getProfile();
                onUserLoad({...response});
                updateAppLoading(false);
            } catch (error) {
                updateAppLoading(false);
            }
        };
        fetchProfile();
        return () => {};
    }, [onUserLoad]);

    document.getElementById('root').classList.remove('register-page');
    document.getElementById('root').classList.remove('login-page');
    document.getElementById('root').classList.remove('hold-transition');

    document.getElementById('root').className += ' sidebar-mini';

    if (menusidebarState.isMenuSidebarCollapsed) {
        document.getElementById('root').classList.add('sidebar-open');
        document.getElementById('root').classList.remove('sidebar-collapse');
    } else {
        document.getElementById('root').classList.add('sidebar-collapse');
        document.getElementById('root').classList.remove('sidebar-open');
    }

    let template;

    if (appLoadingState) {
        template = <PageLoading />;
    } else {
        template = (
            <>
                <Header toggleMenuSidebar={toggleMenuSidebar} />
                <MenuSidebar />
                <Banner />

                <div className="content-wrapper">
                    <div className="pt-3" />
                    <section className="content">
                        <Switch>
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/Global" component={next1} />
                            <Route exact path="/Green" component={next2} />
                            <Route exact path="/Ilonnati" component={next1} />
                            <Route exact path="/Agua" component={next2} />
                            <Route exact path="/Rydot" component={next1} />
                            <Route exact path="/Kritsnam" component={next2} />
                            <Route exact path="/Ronds" component={next1} />
                        </Switch>
                    </section>
                </div>
                <Footer />
                <div
                    id="sidebar-overlay"
                    role="presentation"
                    onClick={toggleMenuSidebar}
                    onKeyDown={() => {}}
                />
            </>
        );
    }

    return <div className="wrapper">{template}</div>;
};

const mapStateToProps = (state) => ({
    user: state.auth.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    onUserLoad: (user) =>
        dispatch({type: ActionTypes.LOAD_USER, currentUser: user})
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
