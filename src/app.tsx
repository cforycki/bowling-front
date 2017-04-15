import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TapEventPlugin from 'react-tap-event-plugin';
import {AppBar} from './components/common/appBar/AppBar';

export class App extends React.Component<undefined, undefined> {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar/>
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

