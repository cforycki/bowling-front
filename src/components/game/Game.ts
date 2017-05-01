import {Frame} from '../frame/Frame';

export class Game {
    public id: number;
    public frames: Array<Frame>;

    constructor();
    constructor({id, frames}: { id?: number, frames: Array<Frame> });
    constructor(param?: { id: number, frames: Array<Frame> } | undefined) {
        this.id = param && param.id || null;
        this.frames = param && param.frames || [];
    }

}