import * as React from 'react';
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
    }

    render() {
        return (
            <div className="game">
                {
                    this.props.game
                    && this.props.game.frames
                    && this.props.game.frames.map((frame) => <FrameDetails key={frame.number}
                                                                           frame={frame}/>)
                }
            </div>
        );
    }
}
