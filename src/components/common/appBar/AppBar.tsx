/**
 * Created by christophe on 15/04/17.
 */
import * as React from 'react';
import {default as MuiAppBar} from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

interface AppBarState {
    open: boolean
}

export class AppBar extends React.Component<undefined, AppBarState> {

    constructor() {
        super();
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <MuiAppBar title="Bowling"
                           iconClassNameRight="muidocs-icon-navigation-expand-more"
                           onLeftIconButtonTouchTap={this.handleToggle}/>
                <Drawer docked={false}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}/>
            </div>
        );
    }
}
