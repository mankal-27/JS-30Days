export class Items {
    public id : number;
    public itemname : string;
    public unit : number;
    public amount : number;
    public total : number;
    public grandTotal : number;

    constructor(){
        this.id = 0;
        this.itemname = '';
        this.unit = 0;
        this.amount = 0;
        this.total = 0;
        this.grandTotal = 0;
    }
}