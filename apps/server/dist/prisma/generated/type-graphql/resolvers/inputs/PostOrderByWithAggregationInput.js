"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PostAvgOrderByAggregateInput_1 = require("../inputs/PostAvgOrderByAggregateInput");
const PostCountOrderByAggregateInput_1 = require("../inputs/PostCountOrderByAggregateInput");
const PostMaxOrderByAggregateInput_1 = require("../inputs/PostMaxOrderByAggregateInput");
const PostMinOrderByAggregateInput_1 = require("../inputs/PostMinOrderByAggregateInput");
const PostSumOrderByAggregateInput_1 = require("../inputs/PostSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PostOrderByWithAggregationInput = class PostOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "subtitle", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "likes", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "dislikes", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCountOrderByAggregateInput_1.PostCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostAvgOrderByAggregateInput_1.PostAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostMaxOrderByAggregateInput_1.PostMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostMinOrderByAggregateInput_1.PostMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostSumOrderByAggregateInput_1.PostSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostOrderByWithAggregationInput.prototype, "_sum", void 0);
PostOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("PostOrderByWithAggregationInput", {
        isAbstract: true
    })
], PostOrderByWithAggregationInput);
exports.PostOrderByWithAggregationInput = PostOrderByWithAggregationInput;
//# sourceMappingURL=PostOrderByWithAggregationInput.js.map