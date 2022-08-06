import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PostScalarWhereInput {
    AND?: PostScalarWhereInput[] | undefined;
    OR?: PostScalarWhereInput[] | undefined;
    NOT?: PostScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    title?: StringFilter | undefined;
    subtitle?: StringNullableFilter | undefined;
    likes?: IntFilter | undefined;
    dislikes?: IntFilter | undefined;
    authorId?: IntNullableFilter | undefined;
}
//# sourceMappingURL=PostScalarWhereInput.d.ts.map