import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:8020/`
})

class Http<BodyType> {



    async get (url: string) {
        return await (await instance.get<BodyType>(url)).data
    }

    async Post (url: string, data: BodyType) {
        return await (await instance.post<BodyType>(url, data)).data
    }

    async update (url: string, data: BodyType) {
        return await (await instance.patch<BodyType>(url)).data
    }

    async delete (url: string) {
        return await instance.delete(url)
    }
}

export default Http