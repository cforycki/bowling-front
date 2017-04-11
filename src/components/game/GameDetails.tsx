import * as React from "react";
import {FrameDetails} from '../frame/FrameDetails';

export interface GameDetailsProps {

}

export class GameDetails extends React.Component<GameDetailsProps, undefined> {
    render() {
        let frames = [];
        for (let i = 1; i <= 10; ++i) {
            frames.push({
                number: i
            });
        }
        return (
            <div className="game">
                {
                    frames.map((frame) => {
                        return <FrameDetails frame={frame}/>
                    })
                }
            </div>
        );
    }
}
