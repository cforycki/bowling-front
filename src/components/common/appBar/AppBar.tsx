import {default as MuiAppBar} from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import * as React from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
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
            {path: '/', name: 'Home', exact: true, component: () => <Home/>},
            {path: '/games', name: 'Games', exact: false, component: () => <Games/>}
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
                            {
                                routes.map((route, index) => (
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
                    </div>
                </Router>
            </div>
        );
    }
}
