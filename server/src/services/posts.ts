import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

class PostService {
    

    async getPostStats(id: string) {

    }


    async commentOnPost(postId: string, commentContent: string) {
 
        const commentedPost = await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                comments: {
                    create: {
                        content: commentContent
                    }
                }
            }
        })

        return commentedPost
    }
}