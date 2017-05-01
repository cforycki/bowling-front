import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentAdd from 'material-ui/svg-icons/content/add';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom';
import * as TapEventPlugin from 'react-tap-event-plugin';
import * as _ from 'underscore';
import {Home} from './components/common/Home';
import {GameForm} from './components/game/GameForm';
import {Games} from './components/game/Games';

interface AppState {
    open: boolean
}

export class App extends React.Component<undefined, AppState> {

    routes = [
        {path: '/', name: 'Home', exact: true, component: () => <Home/>, type: 'menuitem'},
        {path: '/games', name: 'Games', exact: false, component: () => <Games/>, type: 'menuitem'},
        {path: '/game', name: 'New game', exact: false, component: () => <GameForm/>, type: 'floating'}
    ];

    constructor() {
        super();
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render() {
        const Title = () => {
            return <span>Bowling</span>;
        };

        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title={<Title/>}
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                            onLeftIconButtonTouchTap={this.handleToggle}
                            style={{position: 'fixed', top: '0'}}/>
                    <Router hashType="slash">
                        <div>
                            <div>
                                <Drawer docked={false}
                                        open={this.state.open}
                                        onRequestChange={(open) => this.setState({open})}>
                                    <AppBar title="Bowling"
                                            showMenuIconButton={false}/>
                                    {
                                        _.where(this.routes, {type: 'menuitem'})
                                         .map((route, index) => (
                                             <MenuItem key={index}
                                                       primaryText={route.name}
                                                       onClick={this.handleClose}
                                                       containerElement={<Link key={index}
                                                                               to={route.path}/>}/>
                                         ))
                                    }
                                </Drawer>
                            </div>

                            <div style={{padding: '48px 72px', marginTop: '64px'}}>
                                <Switch>
                                    {this.routes.map((route, index) => (
                                        <Route key={index}
                                               path={route.path}
                                               exact={route.exact}
                                               component={route.component}/>
                                    ))}
                                </Switch>
                            </div>

                            <div>
                                {
                                    [_.findWhere(this.routes, {type: 'floating'})].map((route, index) => (
                                        <FloatingActionButton key={index}
                                                              href={'#' + route.path}
                                                              className="floating-action">
                                            <ContentAdd/>
                                        </FloatingActionButton>
                                    ))

                                }
                            </div>
                        </div>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}

TapEventPlugin();
ReactDOM.render(
    <App/>,
    document.getElementById('app-component')
);

