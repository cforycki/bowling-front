import {default as MuiAppBar} from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuItem from 'material-ui/MenuItem';
import ContentAdd from 'material-ui/svg-icons/content/add';
import * as React from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import * as _ from 'underscore';
import {GameForm} from '../../game/GameForm';
import {Games} from '../../game/Games';
import {Home} from '../Home';

interface AppBarState {
    open: boolean
}

export class AppBar extends React.Component<undefined, AppBarState> {

    constructor() {
        super();
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render() {
        const routes = [
            {path: '/', name: 'Home', exact: true, component: () => <Home/>, type: 'menuitem'},
            {path: '/games', name: 'Games', exact: false, component: () => <Games/>, type: 'menuitem'},
            {path: '/game', name: 'New game', exact: false, component: () => <GameForm/>, type: 'floating'}
        ];

        return (
            <div>
                <MuiAppBar title="Bowling"
                           iconClassNameRight="muidocs-icon-navigation-expand-more"
                           onLeftIconButtonTouchTap={this.handleToggle}/>
                <Router hashType="slash">
                    <div>
                        <Drawer docked={false}
                                open={this.state.open}
                                onRequestChange={(open) => this.setState({open})}>
                            <MuiAppBar title="Bowling"
                                       showMenuIconButton={false}/>
                            {
                                _.where(routes, {type: 'menuitem'})
                                 .map((route, index) => (
                                     <MenuItem key={index}
                                               primaryText={route.name}
                                               onClick={this.handleClose}
                                               containerElement={<Link key={index}
                                                                       to={route.path}/>}/>
                                 ))
                            }
                        </Drawer>
                        <div style={{margin: '48px 72px'}}>
                            {routes.map((route, index) => (
                                <Route key={index}
                                       path={route.path}
                                       exact={route.exact}
                                       component={route.component}/>
                            ))}
                        </div>

                        {
                            [_.findWhere(routes, {type: 'floating'})].map((route, index) => (
                                <FloatingActionButton key={index}
                                                      href={'#' + route.path}>
                                    <ContentAdd/>
                                </FloatingActionButton>
                            ))

                        }
                    </div>
                </Router>
            </div>
        );
    }
}
