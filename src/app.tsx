import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import {GameDetails} from "./components/game/GameDetails";

export class App extends React.Component<undefined, undefined>{
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Bowling" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    <GameDetails/>
                </div>
            </MuiThemeProvider>
        );
    }
}

TapEventPlugin();
ReactDOM.render(
    <App/>,
    document.getElementById("app-component")
);

