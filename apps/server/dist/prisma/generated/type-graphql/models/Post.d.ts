import { User } from "../models/User";
export declare class Post {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    subtitle?: string | null;
    likes: number;
    dislikes: number;
    author?: User | null;
    authorId?: number | null;
}
//# sourceMappingURL=Post.d.ts.map