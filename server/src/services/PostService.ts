import { Prisma, PrismaClient } from "@prisma/client";
import {PostViewModel } from '../ViewModels/PostViewModel.js'
const prisma = new PrismaClient()

class PostService {

    toPostViewModel(post: PostViewModel){
         const postModel: PostViewModel = {
            likes: post.likes,
            comments: post.comments,
            id: post.id,
            catchData: post.catchData,
            impressions: post.impressions,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
            content: post.content,
            userId: post.userId
         }

         return postModel
    }

    async insertPost(postData: PostViewModel) {

        const newPost = prisma.post.create({
            data: {
                likes: 0,
                id: postData.id,
                catchData: postData.catchData,
                impressions: 0,
                content: postData.content,
                userId: postData.userId
            }
        })

        return newPost
    } 

}