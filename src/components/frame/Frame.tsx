export class Frame {
    private _id: number;
    private _number: number;
    private _throws: Array<any>;
    private _total: number;

    constructor(id?: number, number?: number, throws?: Array<any>, total?: number) {
        this._id = id;
        this._number = number;
        this._throws = throws || [];
        this._total = total;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get number(): number {
        return this._number;
    }

    set number(value: number) {
        this._number = value;
    }

    get throws(): Array<any> {
        return this._throws;
    }

    set throws(value: Array<any>) {
        this._throws = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }
}