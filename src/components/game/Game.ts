import {Frame} from '../frame/Frame';
/**
 * Created by christophe on 15/04/17.
 */
export class Game {
    private _id: number;
    private _frames: Array<Frame>;

    constructor({id, frames}: { id?: number, frames?: Array<Frame> }) {
        this._id = id;
        this._frames = frames;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get frames(): Array<Frame> {
        return this._frames;
    }

    set frames(value: Array<Frame>) {
        this._frames = value;
    }
}