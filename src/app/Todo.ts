export class Todo {
    sno: number
    title: string
    desc: string;
    active: boolean
    constructor(no: number, title: string, desc: string, active: boolean = false) {
        this.sno = no;
        this.title = title;
        this.desc = desc;
        this.active = active;
    }
}