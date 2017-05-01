import * as React from 'react';
import {Frame} from './Frame';

export interface FrameDetailsProps {
    frame: Frame;
}

export class FrameDetails extends React.Component<FrameDetailsProps, undefined> {
    render() {
        const firstThrow = () => {
            let currentThrow = Number.isInteger(this.props.frame.throws[0]) ? this.props.frame.throws[0] : '';
            let formattedThrow = '' + currentThrow;
            if (currentThrow === 0) {
                formattedThrow = '-';
            } else if (currentThrow === 10) {
                formattedThrow = 'X';
            }
            if (this.props.frame.number < 9 && currentThrow === 10) {
                return <div className="throw"><span>&nbsp;</span></div>;
            }
            return <div className="throw"><span>{formattedThrow}</span></div>;
        };

        const secondThrow = () => {
            let previousThrow = this.props.frame.throws[0];
            let currentThrow = this.props.frame.throws[1];
            let formattedThrow = this.getFormattedThrow(previousThrow, currentThrow);
            return <div className="throw"><span>{formattedThrow}</span></div>;
        };

        const thirdThrow = () => {
            let throws = this.props.frame.throws;
            let formattedThrow = '';
            if (throws && throws.length === 3 && this.props.frame.number === 9) {
                let previousThrow = throws[1] + throws[0];
                let currentThrow = throws[2];
                formattedThrow = this.getFormattedThrow(previousThrow, currentThrow);
            }
            return this.props.frame.number === 9 && <div className="throw"><span>{formattedThrow}</span></div>;
        };

        return (
            <div className="frame">
                <div className="number"><span>{this.props.frame.number + 1}</span></div>
                {firstThrow()}
                {secondThrow()}
                {thirdThrow()}
                <div className="total"><span>{this.props.frame.total}</span></div>
            </div>
        );
    }

    private getFormattedThrow(previousThrow: number, currentThrow: number): string {
        let formattedThrow: string = '' + (currentThrow || '');
        let previous: number = previousThrow >= 10 ? previousThrow - 10 : previousThrow;
        if (currentThrow === 0) {
            formattedThrow = '-';
        } else if (previousThrow !== 10 && (previous + currentThrow) === 10) {
            formattedThrow = '/';
        } else if (previousThrow === 10 && this.props.frame.number !== 9 || currentThrow === 10) {
            formattedThrow = 'X';
        }
        return formattedThrow;
    }
}
