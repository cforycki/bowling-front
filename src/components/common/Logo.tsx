import * as React from 'react';

export interface LogoProps {
    style: object
}

export class Logo extends React.Component<LogoProps, undefined> {
    render() {
        const style = {
            a: {fill: '#424242', strokeWidth: '1px', stroke: '#212121'},
            b: {fill: '#e0e0e0', strokeWidth: '1px', stroke: '#212121'},
            c: {fill: '#e0e0e0'}
        };
        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                 style={this.props.style}
                 className="logo"
                 viewBox="0 0 800 800">
                <g>
                    <g>
                        <path d="m479.6 86.9c116.4 14 28.9 181.5 43.3 272.2 21.3 66.9 63.4 119.8 63.5 196.9 5.4 74-28.6 137.5-54.4 202.9-18.3 24.2-37.5 23.3-52.2 24.4-13.2-1.1-33.6-1.6-49.7-20.5C401.1 686.8 369.7 641.2 372.1 569 370.2 483.9 411.4 430.2 437.9 351.9 451.8 263.5 358 97.5 479.6 86.9Z"
                              style={style.a}/>
                        <path d="m431.4 265.7c32 10.4 71.7 9.4 97.2 0.1l-5.4 38.5c-3.1 7-55.8 11.5-85.5 0.4-3.1-23.4-5.5-38.8-6.3-39.1z"
                              style={style.b}/>
                        <path d="m439.4 333.2c15.8 8.3 65.7 9.4 81.3-2 1.2 31.2 3.1 29.6 4.8 36.1-2.2 5-58.8 19.4-92.6-1.4 4.9-12 5.9-20.1 6.5-32.7z"
                              style={style.b}/>
                    </g>
                </g>
                <g className="bowl">
                    <g>
                        <circle r="237.1"
                                cy="546"
                                cx="248.6"
                                style={style.a}/>
                        <g style={style.c}>
                            <ellipse cx="100"
                                     cy="569"
                                     rx="22.9"
                                     ry="29.3"
                                     transform="matrix(0.8990989 -0.43774555 0.43774555 0.8990989 0 0)"
                                     style={style.c}/>
                        </g>
                        <g style={style.c}>
                            <ellipse cx="48"
                                     cy="443"
                                     rx="15.9"
                                     ry="20.4"
                                     transform="matrix(0.8990989 -0.43774555 0.43774555 0.8990989 0 0)"
                                     style={style.c}/>
                        </g>
                        <g style={style.c}>
                            <ellipse cx="120"
                                     cy="445"
                                     rx="15.9"
                                     ry="20.4"
                                     transform="matrix(0.8990989 -0.43774555 0.43774555 0.8990989 0 0)"
                                     style={style.c}/>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
}