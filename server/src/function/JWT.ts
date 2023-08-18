import {sign, verify} from 'jsonwebtoken'

class JWTService {
    createToken(user: string) {
        return sign({username: user}, process.env.ACCESS_SECRET_TOKEN, {expiresIn: '45s'})
    }

    refreshToken(user: string){
        return sign({username: user}, process.env.REFRESH_TOKEN_SECRET)
    }
}

export default new JWTService()