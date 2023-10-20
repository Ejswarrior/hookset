import { CatchDataViewModel } from "./CatchDataViewModel.ts";

export interface PostViewModel {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    likes: number;
    comments: any[]
    catchData: CatchDataViewModel;
    impressions: number;
    userId: string;
    content: string;
}