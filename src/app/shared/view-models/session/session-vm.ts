export class SessionVM {
    token: string;
    id: string;
    name: string;
    photo: string;
    email: string;
    phone: string;
    userType: string;

    constructor(token: string, id: string, name: string, photo: string, email: string, userType:string) {
        this.token = token;
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.email = email;
        this.userType = userType;
    }

    updateToken(newToken: string) {
        this.token = newToken;
    }
}
