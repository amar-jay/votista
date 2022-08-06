import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    title: string;
    subtitle?: string | undefined;
    likes?: number | undefined;
    dislikes?: number | undefined;
    author?: UserCreateNestedOneWithoutPostsInput | undefined;
}
//# sourceMappingURL=PostCreateInput.d.ts.map