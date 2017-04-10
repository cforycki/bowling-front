import * as React from "react";
import {Frame} from './Frame';

export interface GameProps {

}

export class Game extends React.Component<GameProps, undefined> {
    render() {
        let frames = [];
        for (let i = 1; i <= 10; ++i) {
            frames.push(i);
        }
        return (
            <div className="game">
                {
                    frames.map((n) => {
                        return <Frame number={n}/>
                    })
                }
            </div>
        );
    }
}
