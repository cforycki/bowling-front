import * as React from "react";

export interface FrameDetailsProps { frame:any; }

export class FrameDetails extends React.Component<FrameDetailsProps, undefined> {
    render() {
        return (
        <div className="frame">
            <div className="number"><span>{this.props.frame.number}</span></div>
            <div className="throw"><span>9</span></div>
            <div className="throw"><span>-</span></div>
            <div className="total"><span>9</span></div>
        </div>
        );
    }
}
