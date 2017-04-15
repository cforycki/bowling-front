import * as React from 'react';
import * as _ from 'underscore';
import {Frame} from '../frame/Frame';
import {FrameDetails} from '../frame/FrameDetails';
import {Game} from './Game';

export interface GameDetailsProps {
    game?: Game
}

export class GameDetails extends React.Component<GameDetailsProps, undefined> {
    frames: Array<Frame>;

    constructor() {
        super();
        // this.frames = [];
        // _.times(10, (i: number) => this.frames.push(Object.assign(new Frame({}), {number: i + 1})));
    }

    render() {
        return (
            <div className="game">
                {
                    // this.frames.map((frame) => <FrameDetails key={frame.number} frame={frame}/>)
                    this.props.game
                    && this.props.game.frames
                    && this.props.game.frames.map((frame) => <FrameDetails key={frame.number}
                                                                           frame={frame}/>)
                }
            </div>
        );
    }
}
