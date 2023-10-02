export class Client {
    id?: string;
    nom?: string;
    constructor(args: Client = {}) {
        this.id = args.id;
        this.nom = args.nom;
    };
}
