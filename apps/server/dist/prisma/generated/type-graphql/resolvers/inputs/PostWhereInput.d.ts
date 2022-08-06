import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class PostWhereInput {
    AND?: PostWhereInput[] | undefined;
    OR?: PostWhereInput[] | undefined;
    NOT?: PostWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    title?: StringFilter | undefined;
    subtitle?: StringNullableFilter | undefined;
    likes?: IntFilter | undefined;
    dislikes?: IntFilter | undefined;
    author?: UserRelationFilter | undefined;
    authorId?: IntNullableFilter | undefined;
}
//# sourceMappingURL=PostWhereInput.d.ts.map