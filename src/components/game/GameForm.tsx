import {DatePicker, RaisedButton} from 'material-ui';
import * as React from 'react';
import * as _ from 'underscore';
import {Frame} from '../frame/Frame';
import {Game} from './Game';
import {GameDetails} from './GameDetails';

interface GameFormState {
    scoreButtons: Array<any>,
    gameDate: Date,
    game: Game,
    frames: Array<Frame>,
    currentFrame: number
}

export class GameForm extends React.Component<undefined, GameFormState> {
    private DateTimeFormat: any = Intl.DateTimeFormat;
    private today: Date = new Date();

    constructor() {
        super();
        this.state = {
            scoreButtons: [],
            game:         new Game(),
            frames:       [],
            currentFrame: 0,
            gameDate:     new Date()
        };
    }

    private scoreButtonPressed(score: number) {
        let currentFrame = this.state.currentFrame;
        let frame: Frame = _.find(this.state.frames, (frame: Frame) => frame.number === this.state.currentFrame);
        let throws: Array<number> = frame.throws;
        let throwsNumber = throws.length;
        throws[throwsNumber] = score;
        if (frame.number !== 9 && (throwsNumber === 1 || score === 10) ||
            frame.number === 9 && (throwsNumber >= 1 && this.getFrameScore(frame) < 10 || throwsNumber == 2)) {
            currentFrame++;
        }
        this.updateScoreButtons(currentFrame);
        this.updateGameFramesTotal(currentFrame);
        this.setState({
                          'currentFrame': currentFrame,
                          'frames':       this.state.frames
                      });

    }

    private getPreviousTotal(frameIndex: number) {
        return frameIndex > 0 && (this.state.frames[frameIndex - 1].total || 0) || 0;
    }

    private getFollowingThrows(frame: Frame): Array<number> {
        return _.chain(this.state.game.frames.slice(frame.number + 1, frame.number + 3))
                .pluck('throws')
                .flatten()
                .value();
    }

    private updateGameFramesTotal(currentFrame: number) {
        let framesToUpdate: Array<Frame> = this.state.game.frames.slice(0, currentFrame);
        framesToUpdate.forEach((frame: Frame, index: number) => {
            if (!_.isNumber(frame.total) || _.isNaN(frame.total)) {
                if (index != 9) {
                    let followingThrows = this.getFollowingThrows(frame);
                    if (frame.throws[0] === 10) {
                        if (followingThrows.length >= 2) {
                            frame.total = this.getFrameTotal(frame, followingThrows, 2);
                        }
                    } else if ((frame.throws[0] + frame.throws[1]) === 10) {
                        if (followingThrows.length >= 1) {
                            frame.total = this.getFrameTotal(frame, followingThrows, 1);
                        }
                    } else {
                        frame.total = this.getFrameTotal(frame, followingThrows, 0);
                    }
                } else {
                    frame.total = this.getFrameTotal(frame, [], 0);
                }
            }
        });
    }

    private getFollowingScore(followingThrows: Array<number>, followingMarkBonus: number): number {
        return followingThrows.slice(0, followingMarkBonus)
                              .reduce((total, score) => {
                                  return total + score;
                              }, 0);
    }

    private getFrameScore(frame: Frame): number {
        return frame.throws
                    .reduce((total, score) => {
                        return total + score;
                    }, 0);
    }

    private getFrameTotal(frame: Frame, followingThrows: Array<number>, followingMarkBonus: number): number {
        return this.getPreviousTotal(frame.number) +
               this.getFrameScore(frame) +
               this.getFollowingScore(followingThrows, followingMarkBonus);
    }

    private updateScoreButtons(currentFrame: number) {
        let scoreButtons: Array<number> = [];
        if (currentFrame < 10) {
            let frame = this.state.frames[currentFrame];
            let throws = frame.throws;
            let maxScore = 10;
            if (throws.length >= 1) {
                let throwsTotal = throws.slice(0, throws.length)
                                        .reduce((total, score) => total + score, 0);
                _.times(2, () => throwsTotal = throwsTotal >= 10 ? throwsTotal - 10 : throwsTotal);
                maxScore = 10 - throwsTotal;
            }
            _.times(maxScore + 1, (n: number) => {
                scoreButtons.push(n);
            });
        }
        this.setState({scoreButtons: scoreButtons});
    }

    private gameDateChange(date: Date) {
        this.setState({gameDate: date});
    }

    private saveGame() {
        let formData = new URLSearchParams();
        formData.append('game', JSON.stringify(this.state.game));
        fetch('http://localhost:3000/api/games', {
            method:  'POST',
            headers: {
                'Accept':       'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body:    formData
        });
    }

    componentDidMount() {
        let scoreButtons: Array<number> = [];
        let frames: Array<Frame> = [];
        let game: Game = this.state.game;
        _.times(11, (n: number) => {
            scoreButtons.push(n);
        });
        _.times(10, (n: number) => {
            frames.push(new Frame({number: n, throws: []}));
        });
        game.frames = frames;
        this.setState({scoreButtons: scoreButtons, frames: frames, game: game, gameDate: new Date()});
    }

    render() {
        return (

            <div>
                <div className="col-md-12">
                    <h1>New game</h1>
                </div>

                <div className="col-md-12">
                    <DatePicker hintText="Game date"
                                value={this.state.gameDate}
                                maxDate={this.today}
                                DateTimeFormat={this.DateTimeFormat}
                                okLabel="OK"
                                cancelLabel="Annuler"
                                locale="fr"
                                onChange={(event, date) => this.gameDateChange(date)}/>
                </div>

                {
                    this.state.currentFrame < 10 &&
                    <div className="col-md-12">
                        {
                            _.map(this.state.scoreButtons, (button) =>
                                <RaisedButton label={button.toString()}
                                              key={button}
                                              onTouchTap={() => this.scoreButtonPressed(button)}/>
                            )
                        }
                    </div>
                }

                <div className="col-md-12">
                    <h3>Preview</h3>
                    <GameDetails game={this.state.game}/>
                </div>

                <div className="col-md-12">
                    <RaisedButton label="Save"
                                  primary={true}
                                  style={{marginTop: '12px', marginBottom: '12px'}}
                                  disabled={this.state.currentFrame < 10}
                                  onTouchTap={() => this.saveGame()}/>
                </div>
            </div>
        );
    }
}
