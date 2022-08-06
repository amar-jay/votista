import { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateManyUserArgs } from "./args/CreateManyUserArgs";
import { CreateOneUserArgs } from "./args/CreateOneUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteOneUserArgs } from "./args/DeleteOneUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { GroupByUserArgs } from "./args/GroupByUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateOneUserArgs } from "./args/UpdateOneUserArgs";
import { UpsertOneUserArgs } from "./args/UpsertOneUserArgs";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUser } from "../../outputs/AggregateUser";
import { UserGroupBy } from "../../outputs/UserGroupBy";
export declare class UserCrudResolver {
    aggregateUser(ctx: any, info: GraphQLResolveInfo, args: AggregateUserArgs): Promise<AggregateUser>;
    createManyUser(ctx: any, info: GraphQLResolveInfo, args: CreateManyUserArgs): Promise<AffectedRowsOutput>;
    createOneUser(ctx: any, info: GraphQLResolveInfo, args: CreateOneUserArgs): Promise<User>;
    deleteManyUser(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUserArgs): Promise<AffectedRowsOutput>;
    deleteOneUser(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUserArgs): Promise<User | null>;
    findFirstUser(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserArgs): Promise<User | null>;
    users(ctx: any, info: GraphQLResolveInfo, args: FindManyUserArgs): Promise<User[]>;
    user(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUserArgs): Promise<User | null>;
    groupByUser(ctx: any, info: GraphQLResolveInfo, args: GroupByUserArgs): Promise<UserGroupBy[]>;
    updateManyUser(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUserArgs): Promise<AffectedRowsOutput>;
    updateOneUser(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUserArgs): Promise<User | null>;
    upsertOneUser(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUserArgs): Promise<User>;
}
//# sourceMappingURL=UserCrudResolver.d.ts.map