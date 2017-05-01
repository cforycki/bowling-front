export class Frame {
    public id: number;
    public number: number;
    public throws: Array<number>;
    public total: number;

    constructor();
    constructor({id, number, throws, total}: { id?: number, number: number, throws: Array<number>, total?: number });
    constructor(param?: { id?: number, number: number, throws: Array<number>, total?: number } | undefined) {
        this.id = param && param.id || null;
        this.number = param && param.number || 0;
        this.throws = param && param.throws || [];
        this.total = param && param.total || null;
    }
}