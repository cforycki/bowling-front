import * as React from "react";

export interface FrameProps { number:number; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Frame extends React.Component<FrameProps, undefined> {
    render() {
        return (
        <div className="frame">
            <div className="number"><span>{this.props.number}</span></div>
            <div className="throw"><span>9</span></div>
            <div className="throw"><span>-</span></div>
            <div className="total"><span>9</span></div>
        </div>
        );
    }
}
