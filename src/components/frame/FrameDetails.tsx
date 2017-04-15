import * as React from 'react';
import {Frame} from './Frame';

export interface FrameDetailsProps {
    frame: Frame;
}

export class FrameDetails extends React.Component<FrameDetailsProps, undefined> {
    render() {
        const firstThrow = () => {
            let currentThrow = this.props.frame.throws[0];
            let formattedThrow = '' + currentThrow;
            if (currentThrow === 0) {
                formattedThrow = '-';
            } else if (currentThrow === 10) {
                formattedThrow = 'X';
            }
            if (this.props.frame.number < 10 && currentThrow === 10) {
                return <div className="throw"><span>&nbsp;</span></div>;
            }
            return <div className="throw"><span>{formattedThrow}</span></div>;
        };

        const secondThrow = () => {
            let previousThrow = this.props.frame.throws[0];
            let currentThrow = this.props.frame.throws[1];
            let formattedThrow = '' + currentThrow;
            if (currentThrow === 0) {
                formattedThrow = '-';
            } else if (previousThrow === 10 && this.props.frame.number !== 10) {
                formattedThrow = 'X';
            } else if (previousThrow !== 10 && (previousThrow + currentThrow) === 10) {
                formattedThrow = '/';
            } else if (currentThrow === 10) {
                formattedThrow = 'X';
            }
            return <div className="throw"><span>{formattedThrow}</span></div>;
        };

        const thirdThrow = () => {
            let throws = this.props.frame.throws;
            let formattedThrow = '';
            if (throws && throws.length === 3 && this.props.frame.number === 10) {
                let previousThrow = throws[1];
                let currentThrow = throws[2];
                formattedThrow = '' + currentThrow;
                if (currentThrow === 0) {
                    formattedThrow = '-';
                } else if (previousThrow !== 10 && (previousThrow + currentThrow) === 10) {
                    formattedThrow = '/';
                } else if (currentThrow === 10) {
                    formattedThrow = 'X';
                }
            }
            return this.props.frame.number === 10 && <div className="throw"><span>{formattedThrow}</span></div>;
        };

        return (
            <div className="frame">
                <div className="number"><span>{this.props.frame.number}</span></div>
                {firstThrow()}
                {secondThrow()}
                {thirdThrow()}
                <div className="total"><span>{this.props.frame.total}</span></div>
            </div>
        );
    }
}
