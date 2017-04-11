import * as React from 'react';
import * as _ from 'underscore';
import {FrameDetails} from '../frame/FrameDetails';
import {Frame} from '../frame/Frame';

export interface GameDetailsProps {

}

export class GameDetails extends React.Component<GameDetailsProps, undefined> {
    frames: Array<Frame>;

    constructor() {
        super();
        this.frames = [];
        _.times(10, (i: number) => this.frames.push(_.extend(new Frame(), {number: i + 1})));
    }

    render() {
        return (
            <div className="game">
                {
                    this.frames.map((frame) => {
                        return <FrameDetails key={frame.number} frame={frame}/>
                    })
                }
            </div>
        );
    }
}
