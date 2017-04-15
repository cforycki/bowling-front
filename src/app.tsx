import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {GameDetails} from './components/game/GameDetails';
import {AppBar} from './components/common/appBar/AppBar';
import {Games} from './components/game/Games';

export class App extends React.Component<undefined, undefined> {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar/>

                    <Games/>
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

