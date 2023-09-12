import { CreateUser } from "@/pages/api/Interfaces/CreateUser.interface";
import Http from "./HttpService";

export class ApiService {
    public http

    constructor() {
        this.http = new Http()
    }

    async getPost () {
        return this.http.get('/posts')
    }

    async createPost (data) {
        return this.http.Post('/posts', data)
    }

    async createAccount(data: CreateUser) {
        return this.http.Post('/auth/create-account', data)
    }

    async login(data: {userName: string, password: string}) {
        return this.http.Post('/auth/login', data)
    }
}

export default new ApiService()