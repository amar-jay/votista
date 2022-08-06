import { GraphQLResolveInfo } from "graphql";
import { AggregatePostArgs } from "./args/AggregatePostArgs";
import { CreateManyPostArgs } from "./args/CreateManyPostArgs";
import { CreateOnePostArgs } from "./args/CreateOnePostArgs";
import { DeleteManyPostArgs } from "./args/DeleteManyPostArgs";
import { DeleteOnePostArgs } from "./args/DeleteOnePostArgs";
import { FindFirstPostArgs } from "./args/FindFirstPostArgs";
import { FindManyPostArgs } from "./args/FindManyPostArgs";
import { FindUniquePostArgs } from "./args/FindUniquePostArgs";
import { GroupByPostArgs } from "./args/GroupByPostArgs";
import { UpdateManyPostArgs } from "./args/UpdateManyPostArgs";
import { UpdateOnePostArgs } from "./args/UpdateOnePostArgs";
import { UpsertOnePostArgs } from "./args/UpsertOnePostArgs";
import { Post } from "../../../models/Post";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePost } from "../../outputs/AggregatePost";
import { PostGroupBy } from "../../outputs/PostGroupBy";
export declare class PostCrudResolver {
    aggregatePost(ctx: any, info: GraphQLResolveInfo, args: AggregatePostArgs): Promise<AggregatePost>;
    createManyPost(ctx: any, info: GraphQLResolveInfo, args: CreateManyPostArgs): Promise<AffectedRowsOutput>;
    createOnePost(ctx: any, info: GraphQLResolveInfo, args: CreateOnePostArgs): Promise<Post>;
    deleteManyPost(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPostArgs): Promise<AffectedRowsOutput>;
    deleteOnePost(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePostArgs): Promise<Post | null>;
    findFirstPost(ctx: any, info: GraphQLResolveInfo, args: FindFirstPostArgs): Promise<Post | null>;
    posts(ctx: any, info: GraphQLResolveInfo, args: FindManyPostArgs): Promise<Post[]>;
    post(ctx: any, info: GraphQLResolveInfo, args: FindUniquePostArgs): Promise<Post | null>;
    groupByPost(ctx: any, info: GraphQLResolveInfo, args: GroupByPostArgs): Promise<PostGroupBy[]>;
    updateManyPost(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPostArgs): Promise<AffectedRowsOutput>;
    updateOnePost(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePostArgs): Promise<Post | null>;
    upsertOnePost(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePostArgs): Promise<Post>;
}
//# sourceMappingURL=PostCrudResolver.d.ts.map