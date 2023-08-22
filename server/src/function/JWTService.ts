import webToken from 'jsonwebtoken'

class JWTService {
    createToken(user: string) {
        return webToken.sign({username: user}, process.env.SECRET_ACCESS_TOKEN, {expiresIn: '45s'})
    }

    refreshToken(user: string){
        return webToken.sign({username: user}, process.env.REFRESH_TOKEN_SECRET)
    }
}

export default new JWTService()