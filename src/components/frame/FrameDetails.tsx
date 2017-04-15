import * as React from 'react';
import {Frame} from './Frame';

export interface FrameDetailsProps {
    frame: Frame;
}

export class FrameDetails extends React.Component<FrameDetailsProps, undefined> {
    render() {
        return (
            <div className="frame">
                <div className="number"><span>{this.props.frame.number}</span></div>
                <div className="throw"><span>{this.props.frame.throws[0]}</span></div>
                <div className="throw"><span>{this.props.frame.throws[1]}</span></div>
                {
                    this.props.frame.number === 10 &&
                    <div className="throw"><span>{this.props.frame.throws[2]}</span></div>
                }
                <div className="total"><span>{this.props.frame.total}</span></div>
            </div>
        );
    }
}
