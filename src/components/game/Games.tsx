/**
 * Created by christophe on 15/04/17.
 */
import * as React from 'react';
import * as _ from 'underscore';
import {Game} from './Game';
import {GameDetails} from './GameDetails';

interface GamesState {
    games: Array<Game>
}

export class Games extends React.Component<undefined, GamesState> {

    constructor() {
        super();
        let games: Array<Game> = [];
        this.state = {games: []};
        fetch('http://localhost:8080/src/json/games.json')
            .then((response) => {
                return response.json();
            })
            .then((gamesJson: any) => {
                _.each(gamesJson, (game) => {
                    games.push(new Game(game));
                });
            })
            .then(() => this.setState({games: games}));
    }

    render() {
        return (
            <div>
                {
                    _.map(this.state.games, (game) => {
                        return (
                            <div>
                                <GameDetails key={game.id}
                                             game={game}/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}