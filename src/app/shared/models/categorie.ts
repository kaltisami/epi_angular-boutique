export class Categorie {
    id?: number;
    nom?: string;
    email?: string;
    avatar?: string;
    constructor(args: Categorie = {}) {
        this.id = args.id;
        this.nom = args.nom;
        this.email = args.email;
        this.avatar = args.avatar;
    };
}