import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ParseJobModel = runtime.Types.Result.DefaultSelection<Prisma.$ParseJobPayload>;
export type AggregateParseJob = {
    _count: ParseJobCountAggregateOutputType | null;
    _avg: ParseJobAvgAggregateOutputType | null;
    _sum: ParseJobSumAggregateOutputType | null;
    _min: ParseJobMinAggregateOutputType | null;
    _max: ParseJobMaxAggregateOutputType | null;
};
export type ParseJobAvgAggregateOutputType = {
    productsFound: number | null;
    productsOk: number | null;
    productsFailed: number | null;
    durationMs: number | null;
};
export type ParseJobSumAggregateOutputType = {
    productsFound: number | null;
    productsOk: number | null;
    productsFailed: number | null;
    durationMs: number | null;
};
export type ParseJobMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    categoryId: string | null;
    sellerProfileId: string | null;
    type: $Enums.ParseJobType | null;
    status: $Enums.ParseJobStatus | null;
    productsFound: number | null;
    productsOk: number | null;
    productsFailed: number | null;
    requestedAt: Date | null;
    startedAt: Date | null;
    finishedAt: Date | null;
    durationMs: number | null;
    errorMessage: string | null;
};
export type ParseJobMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    categoryId: string | null;
    sellerProfileId: string | null;
    type: $Enums.ParseJobType | null;
    status: $Enums.ParseJobStatus | null;
    productsFound: number | null;
    productsOk: number | null;
    productsFailed: number | null;
    requestedAt: Date | null;
    startedAt: Date | null;
    finishedAt: Date | null;
    durationMs: number | null;
    errorMessage: string | null;
};
export type ParseJobCountAggregateOutputType = {
    id: number;
    userId: number;
    categoryId: number;
    sellerProfileId: number;
    type: number;
    status: number;
    productsFound: number;
    productsOk: number;
    productsFailed: number;
    requestedAt: number;
    startedAt: number;
    finishedAt: number;
    durationMs: number;
    errorMessage: number;
    _all: number;
};
export type ParseJobAvgAggregateInputType = {
    productsFound?: true;
    productsOk?: true;
    productsFailed?: true;
    durationMs?: true;
};
export type ParseJobSumAggregateInputType = {
    productsFound?: true;
    productsOk?: true;
    productsFailed?: true;
    durationMs?: true;
};
export type ParseJobMinAggregateInputType = {
    id?: true;
    userId?: true;
    categoryId?: true;
    sellerProfileId?: true;
    type?: true;
    status?: true;
    productsFound?: true;
    productsOk?: true;
    productsFailed?: true;
    requestedAt?: true;
    startedAt?: true;
    finishedAt?: true;
    durationMs?: true;
    errorMessage?: true;
};
export type ParseJobMaxAggregateInputType = {
    id?: true;
    userId?: true;
    categoryId?: true;
    sellerProfileId?: true;
    type?: true;
    status?: true;
    productsFound?: true;
    productsOk?: true;
    productsFailed?: true;
    requestedAt?: true;
    startedAt?: true;
    finishedAt?: true;
    durationMs?: true;
    errorMessage?: true;
};
export type ParseJobCountAggregateInputType = {
    id?: true;
    userId?: true;
    categoryId?: true;
    sellerProfileId?: true;
    type?: true;
    status?: true;
    productsFound?: true;
    productsOk?: true;
    productsFailed?: true;
    requestedAt?: true;
    startedAt?: true;
    finishedAt?: true;
    durationMs?: true;
    errorMessage?: true;
    _all?: true;
};
export type ParseJobAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParseJobWhereInput;
    orderBy?: Prisma.ParseJobOrderByWithRelationInput | Prisma.ParseJobOrderByWithRelationInput[];
    cursor?: Prisma.ParseJobWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParseJobCountAggregateInputType;
    _avg?: ParseJobAvgAggregateInputType;
    _sum?: ParseJobSumAggregateInputType;
    _min?: ParseJobMinAggregateInputType;
    _max?: ParseJobMaxAggregateInputType;
};
export type GetParseJobAggregateType<T extends ParseJobAggregateArgs> = {
    [P in keyof T & keyof AggregateParseJob]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParseJob[P]> : Prisma.GetScalarType<T[P], AggregateParseJob[P]>;
};
export type ParseJobGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParseJobWhereInput;
    orderBy?: Prisma.ParseJobOrderByWithAggregationInput | Prisma.ParseJobOrderByWithAggregationInput[];
    by: Prisma.ParseJobScalarFieldEnum[] | Prisma.ParseJobScalarFieldEnum;
    having?: Prisma.ParseJobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParseJobCountAggregateInputType | true;
    _avg?: ParseJobAvgAggregateInputType;
    _sum?: ParseJobSumAggregateInputType;
    _min?: ParseJobMinAggregateInputType;
    _max?: ParseJobMaxAggregateInputType;
};
export type ParseJobGroupByOutputType = {
    id: string;
    userId: string;
    categoryId: string;
    sellerProfileId: string | null;
    type: $Enums.ParseJobType;
    status: $Enums.ParseJobStatus;
    productsFound: number;
    productsOk: number;
    productsFailed: number;
    requestedAt: Date;
    startedAt: Date | null;
    finishedAt: Date | null;
    durationMs: number | null;
    errorMessage: string | null;
    _count: ParseJobCountAggregateOutputType | null;
    _avg: ParseJobAvgAggregateOutputType | null;
    _sum: ParseJobSumAggregateOutputType | null;
    _min: ParseJobMinAggregateOutputType | null;
    _max: ParseJobMaxAggregateOutputType | null;
};
type GetParseJobGroupByPayload<T extends ParseJobGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParseJobGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParseJobGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParseJobGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParseJobGroupByOutputType[P]>;
}>>;
export type ParseJobWhereInput = {
    AND?: Prisma.ParseJobWhereInput | Prisma.ParseJobWhereInput[];
    OR?: Prisma.ParseJobWhereInput[];
    NOT?: Prisma.ParseJobWhereInput | Prisma.ParseJobWhereInput[];
    id?: Prisma.StringFilter<"ParseJob"> | string;
    userId?: Prisma.StringFilter<"ParseJob"> | string;
    categoryId?: Prisma.StringFilter<"ParseJob"> | string;
    sellerProfileId?: Prisma.StringNullableFilter<"ParseJob"> | string | null;
    type?: Prisma.EnumParseJobTypeFilter<"ParseJob"> | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFilter<"ParseJob"> | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFilter<"ParseJob"> | number;
    productsOk?: Prisma.IntFilter<"ParseJob"> | number;
    productsFailed?: Prisma.IntFilter<"ParseJob"> | number;
    requestedAt?: Prisma.DateTimeFilter<"ParseJob"> | Date | string;
    startedAt?: Prisma.DateTimeNullableFilter<"ParseJob"> | Date | string | null;
    finishedAt?: Prisma.DateTimeNullableFilter<"ParseJob"> | Date | string | null;
    durationMs?: Prisma.IntNullableFilter<"ParseJob"> | number | null;
    errorMessage?: Prisma.StringNullableFilter<"ParseJob"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    sellerProfile?: Prisma.XOR<Prisma.SellerProfileNullableScalarRelationFilter, Prisma.SellerProfileWhereInput> | null;
    snapshots?: Prisma.ProductSnapshotListRelationFilter;
};
export type ParseJobOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    sellerProfileId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    productsFound?: Prisma.SortOrder;
    productsOk?: Prisma.SortOrder;
    productsFailed?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    finishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    durationMs?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
    sellerProfile?: Prisma.SellerProfileOrderByWithRelationInput;
    snapshots?: Prisma.ProductSnapshotOrderByRelationAggregateInput;
};
export type ParseJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ParseJobWhereInput | Prisma.ParseJobWhereInput[];
    OR?: Prisma.ParseJobWhereInput[];
    NOT?: Prisma.ParseJobWhereInput | Prisma.ParseJobWhereInput[];
    userId?: Prisma.StringFilter<"ParseJob"> | string;
    categoryId?: Prisma.StringFilter<"ParseJob"> | string;
    sellerProfileId?: Prisma.StringNullableFilter<"ParseJob"> | string | null;
    type?: Prisma.EnumParseJobTypeFilter<"ParseJob"> | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFilter<"ParseJob"> | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFilter<"ParseJob"> | number;
    productsOk?: Prisma.IntFilter<"ParseJob"> | number;
    productsFailed?: Prisma.IntFilter<"ParseJob"> | number;
    requestedAt?: Prisma.DateTimeFilter<"ParseJob"> | Date | string;
    startedAt?: Prisma.DateTimeNullableFilter<"ParseJob"> | Date | string | null;
    finishedAt?: Prisma.DateTimeNullableFilter<"ParseJob"> | Date | string | null;
    durationMs?: Prisma.IntNullableFilter<"ParseJob"> | number | null;
    errorMessage?: Prisma.StringNullableFilter<"ParseJob"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    sellerProfile?: Prisma.XOR<Prisma.SellerProfileNullableScalarRelationFilter, Prisma.SellerProfileWhereInput> | null;
    snapshots?: Prisma.ProductSnapshotListRelationFilter;
}, "id">;
export type ParseJobOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    sellerProfileId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    productsFound?: Prisma.SortOrder;
    productsOk?: Prisma.SortOrder;
    productsFailed?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    finishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    durationMs?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ParseJobCountOrderByAggregateInput;
    _avg?: Prisma.ParseJobAvgOrderByAggregateInput;
    _max?: Prisma.ParseJobMaxOrderByAggregateInput;
    _min?: Prisma.ParseJobMinOrderByAggregateInput;
    _sum?: Prisma.ParseJobSumOrderByAggregateInput;
};
export type ParseJobScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParseJobScalarWhereWithAggregatesInput | Prisma.ParseJobScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParseJobScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParseJobScalarWhereWithAggregatesInput | Prisma.ParseJobScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParseJob"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ParseJob"> | string;
    categoryId?: Prisma.StringWithAggregatesFilter<"ParseJob"> | string;
    sellerProfileId?: Prisma.StringNullableWithAggregatesFilter<"ParseJob"> | string | null;
    type?: Prisma.EnumParseJobTypeWithAggregatesFilter<"ParseJob"> | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusWithAggregatesFilter<"ParseJob"> | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntWithAggregatesFilter<"ParseJob"> | number;
    productsOk?: Prisma.IntWithAggregatesFilter<"ParseJob"> | number;
    productsFailed?: Prisma.IntWithAggregatesFilter<"ParseJob"> | number;
    requestedAt?: Prisma.DateTimeWithAggregatesFilter<"ParseJob"> | Date | string;
    startedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ParseJob"> | Date | string | null;
    finishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ParseJob"> | Date | string | null;
    durationMs?: Prisma.IntNullableWithAggregatesFilter<"ParseJob"> | number | null;
    errorMessage?: Prisma.StringNullableWithAggregatesFilter<"ParseJob"> | string | null;
};
export type ParseJobCreateInput = {
    id?: string;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
    user: Prisma.UserCreateNestedOneWithoutParseJobsInput;
    category: Prisma.CategoryCreateNestedOneWithoutParseJobsInput;
    sellerProfile?: Prisma.SellerProfileCreateNestedOneWithoutParseJobsInput;
    snapshots?: Prisma.ProductSnapshotCreateNestedManyWithoutParseJobInput;
};
export type ParseJobUncheckedCreateInput = {
    id?: string;
    userId: string;
    categoryId: string;
    sellerProfileId?: string | null;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
    snapshots?: Prisma.ProductSnapshotUncheckedCreateNestedManyWithoutParseJobInput;
};
export type ParseJobUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutParseJobsNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutParseJobsNestedInput;
    sellerProfile?: Prisma.SellerProfileUpdateOneWithoutParseJobsNestedInput;
    snapshots?: Prisma.ProductSnapshotUpdateManyWithoutParseJobNestedInput;
};
export type ParseJobUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerProfileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    snapshots?: Prisma.ProductSnapshotUncheckedUpdateManyWithoutParseJobNestedInput;
};
export type ParseJobCreateManyInput = {
    id?: string;
    userId: string;
    categoryId: string;
    sellerProfileId?: string | null;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
};
export type ParseJobUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ParseJobUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerProfileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ParseJobListRelationFilter = {
    every?: Prisma.ParseJobWhereInput;
    some?: Prisma.ParseJobWhereInput;
    none?: Prisma.ParseJobWhereInput;
};
export type ParseJobOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ParseJobCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    sellerProfileId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    productsFound?: Prisma.SortOrder;
    productsOk?: Prisma.SortOrder;
    productsFailed?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
    durationMs?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
};
export type ParseJobAvgOrderByAggregateInput = {
    productsFound?: Prisma.SortOrder;
    productsOk?: Prisma.SortOrder;
    productsFailed?: Prisma.SortOrder;
    durationMs?: Prisma.SortOrder;
};
export type ParseJobMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    sellerProfileId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    productsFound?: Prisma.SortOrder;
    productsOk?: Prisma.SortOrder;
    productsFailed?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
    durationMs?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
};
export type ParseJobMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    sellerProfileId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    productsFound?: Prisma.SortOrder;
    productsOk?: Prisma.SortOrder;
    productsFailed?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
    durationMs?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
};
export type ParseJobSumOrderByAggregateInput = {
    productsFound?: Prisma.SortOrder;
    productsOk?: Prisma.SortOrder;
    productsFailed?: Prisma.SortOrder;
    durationMs?: Prisma.SortOrder;
};
export type ParseJobScalarRelationFilter = {
    is?: Prisma.ParseJobWhereInput;
    isNot?: Prisma.ParseJobWhereInput;
};
export type ParseJobCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutUserInput, Prisma.ParseJobUncheckedCreateWithoutUserInput> | Prisma.ParseJobCreateWithoutUserInput[] | Prisma.ParseJobUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutUserInput | Prisma.ParseJobCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ParseJobCreateManyUserInputEnvelope;
    connect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
};
export type ParseJobUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutUserInput, Prisma.ParseJobUncheckedCreateWithoutUserInput> | Prisma.ParseJobCreateWithoutUserInput[] | Prisma.ParseJobUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutUserInput | Prisma.ParseJobCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ParseJobCreateManyUserInputEnvelope;
    connect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
};
export type ParseJobUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutUserInput, Prisma.ParseJobUncheckedCreateWithoutUserInput> | Prisma.ParseJobCreateWithoutUserInput[] | Prisma.ParseJobUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutUserInput | Prisma.ParseJobCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ParseJobUpsertWithWhereUniqueWithoutUserInput | Prisma.ParseJobUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ParseJobCreateManyUserInputEnvelope;
    set?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    disconnect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    delete?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    connect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    update?: Prisma.ParseJobUpdateWithWhereUniqueWithoutUserInput | Prisma.ParseJobUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ParseJobUpdateManyWithWhereWithoutUserInput | Prisma.ParseJobUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ParseJobScalarWhereInput | Prisma.ParseJobScalarWhereInput[];
};
export type ParseJobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutUserInput, Prisma.ParseJobUncheckedCreateWithoutUserInput> | Prisma.ParseJobCreateWithoutUserInput[] | Prisma.ParseJobUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutUserInput | Prisma.ParseJobCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ParseJobUpsertWithWhereUniqueWithoutUserInput | Prisma.ParseJobUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ParseJobCreateManyUserInputEnvelope;
    set?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    disconnect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    delete?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    connect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    update?: Prisma.ParseJobUpdateWithWhereUniqueWithoutUserInput | Prisma.ParseJobUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ParseJobUpdateManyWithWhereWithoutUserInput | Prisma.ParseJobUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ParseJobScalarWhereInput | Prisma.ParseJobScalarWhereInput[];
};
export type ParseJobCreateNestedManyWithoutSellerProfileInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutSellerProfileInput, Prisma.ParseJobUncheckedCreateWithoutSellerProfileInput> | Prisma.ParseJobCreateWithoutSellerProfileInput[] | Prisma.ParseJobUncheckedCreateWithoutSellerProfileInput[];
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutSellerProfileInput | Prisma.ParseJobCreateOrConnectWithoutSellerProfileInput[];
    createMany?: Prisma.ParseJobCreateManySellerProfileInputEnvelope;
    connect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
};
export type ParseJobUncheckedCreateNestedManyWithoutSellerProfileInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutSellerProfileInput, Prisma.ParseJobUncheckedCreateWithoutSellerProfileInput> | Prisma.ParseJobCreateWithoutSellerProfileInput[] | Prisma.ParseJobUncheckedCreateWithoutSellerProfileInput[];
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutSellerProfileInput | Prisma.ParseJobCreateOrConnectWithoutSellerProfileInput[];
    createMany?: Prisma.ParseJobCreateManySellerProfileInputEnvelope;
    connect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
};
export type ParseJobUpdateManyWithoutSellerProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutSellerProfileInput, Prisma.ParseJobUncheckedCreateWithoutSellerProfileInput> | Prisma.ParseJobCreateWithoutSellerProfileInput[] | Prisma.ParseJobUncheckedCreateWithoutSellerProfileInput[];
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutSellerProfileInput | Prisma.ParseJobCreateOrConnectWithoutSellerProfileInput[];
    upsert?: Prisma.ParseJobUpsertWithWhereUniqueWithoutSellerProfileInput | Prisma.ParseJobUpsertWithWhereUniqueWithoutSellerProfileInput[];
    createMany?: Prisma.ParseJobCreateManySellerProfileInputEnvelope;
    set?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    disconnect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    delete?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    connect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    update?: Prisma.ParseJobUpdateWithWhereUniqueWithoutSellerProfileInput | Prisma.ParseJobUpdateWithWhereUniqueWithoutSellerProfileInput[];
    updateMany?: Prisma.ParseJobUpdateManyWithWhereWithoutSellerProfileInput | Prisma.ParseJobUpdateManyWithWhereWithoutSellerProfileInput[];
    deleteMany?: Prisma.ParseJobScalarWhereInput | Prisma.ParseJobScalarWhereInput[];
};
export type ParseJobUncheckedUpdateManyWithoutSellerProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutSellerProfileInput, Prisma.ParseJobUncheckedCreateWithoutSellerProfileInput> | Prisma.ParseJobCreateWithoutSellerProfileInput[] | Prisma.ParseJobUncheckedCreateWithoutSellerProfileInput[];
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutSellerProfileInput | Prisma.ParseJobCreateOrConnectWithoutSellerProfileInput[];
    upsert?: Prisma.ParseJobUpsertWithWhereUniqueWithoutSellerProfileInput | Prisma.ParseJobUpsertWithWhereUniqueWithoutSellerProfileInput[];
    createMany?: Prisma.ParseJobCreateManySellerProfileInputEnvelope;
    set?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    disconnect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    delete?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    connect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    update?: Prisma.ParseJobUpdateWithWhereUniqueWithoutSellerProfileInput | Prisma.ParseJobUpdateWithWhereUniqueWithoutSellerProfileInput[];
    updateMany?: Prisma.ParseJobUpdateManyWithWhereWithoutSellerProfileInput | Prisma.ParseJobUpdateManyWithWhereWithoutSellerProfileInput[];
    deleteMany?: Prisma.ParseJobScalarWhereInput | Prisma.ParseJobScalarWhereInput[];
};
export type ParseJobCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutCategoryInput, Prisma.ParseJobUncheckedCreateWithoutCategoryInput> | Prisma.ParseJobCreateWithoutCategoryInput[] | Prisma.ParseJobUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutCategoryInput | Prisma.ParseJobCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ParseJobCreateManyCategoryInputEnvelope;
    connect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
};
export type ParseJobUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutCategoryInput, Prisma.ParseJobUncheckedCreateWithoutCategoryInput> | Prisma.ParseJobCreateWithoutCategoryInput[] | Prisma.ParseJobUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutCategoryInput | Prisma.ParseJobCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ParseJobCreateManyCategoryInputEnvelope;
    connect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
};
export type ParseJobUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutCategoryInput, Prisma.ParseJobUncheckedCreateWithoutCategoryInput> | Prisma.ParseJobCreateWithoutCategoryInput[] | Prisma.ParseJobUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutCategoryInput | Prisma.ParseJobCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ParseJobUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ParseJobUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ParseJobCreateManyCategoryInputEnvelope;
    set?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    disconnect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    delete?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    connect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    update?: Prisma.ParseJobUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ParseJobUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ParseJobUpdateManyWithWhereWithoutCategoryInput | Prisma.ParseJobUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ParseJobScalarWhereInput | Prisma.ParseJobScalarWhereInput[];
};
export type ParseJobUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutCategoryInput, Prisma.ParseJobUncheckedCreateWithoutCategoryInput> | Prisma.ParseJobCreateWithoutCategoryInput[] | Prisma.ParseJobUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutCategoryInput | Prisma.ParseJobCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ParseJobUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ParseJobUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ParseJobCreateManyCategoryInputEnvelope;
    set?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    disconnect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    delete?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    connect?: Prisma.ParseJobWhereUniqueInput | Prisma.ParseJobWhereUniqueInput[];
    update?: Prisma.ParseJobUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ParseJobUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ParseJobUpdateManyWithWhereWithoutCategoryInput | Prisma.ParseJobUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ParseJobScalarWhereInput | Prisma.ParseJobScalarWhereInput[];
};
export type EnumParseJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.ParseJobType;
};
export type EnumParseJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParseJobStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ParseJobCreateNestedOneWithoutSnapshotsInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutSnapshotsInput, Prisma.ParseJobUncheckedCreateWithoutSnapshotsInput>;
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutSnapshotsInput;
    connect?: Prisma.ParseJobWhereUniqueInput;
};
export type ParseJobUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: Prisma.XOR<Prisma.ParseJobCreateWithoutSnapshotsInput, Prisma.ParseJobUncheckedCreateWithoutSnapshotsInput>;
    connectOrCreate?: Prisma.ParseJobCreateOrConnectWithoutSnapshotsInput;
    upsert?: Prisma.ParseJobUpsertWithoutSnapshotsInput;
    connect?: Prisma.ParseJobWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParseJobUpdateToOneWithWhereWithoutSnapshotsInput, Prisma.ParseJobUpdateWithoutSnapshotsInput>, Prisma.ParseJobUncheckedUpdateWithoutSnapshotsInput>;
};
export type ParseJobCreateWithoutUserInput = {
    id?: string;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
    category: Prisma.CategoryCreateNestedOneWithoutParseJobsInput;
    sellerProfile?: Prisma.SellerProfileCreateNestedOneWithoutParseJobsInput;
    snapshots?: Prisma.ProductSnapshotCreateNestedManyWithoutParseJobInput;
};
export type ParseJobUncheckedCreateWithoutUserInput = {
    id?: string;
    categoryId: string;
    sellerProfileId?: string | null;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
    snapshots?: Prisma.ProductSnapshotUncheckedCreateNestedManyWithoutParseJobInput;
};
export type ParseJobCreateOrConnectWithoutUserInput = {
    where: Prisma.ParseJobWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParseJobCreateWithoutUserInput, Prisma.ParseJobUncheckedCreateWithoutUserInput>;
};
export type ParseJobCreateManyUserInputEnvelope = {
    data: Prisma.ParseJobCreateManyUserInput | Prisma.ParseJobCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ParseJobUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ParseJobWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParseJobUpdateWithoutUserInput, Prisma.ParseJobUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ParseJobCreateWithoutUserInput, Prisma.ParseJobUncheckedCreateWithoutUserInput>;
};
export type ParseJobUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ParseJobWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParseJobUpdateWithoutUserInput, Prisma.ParseJobUncheckedUpdateWithoutUserInput>;
};
export type ParseJobUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ParseJobScalarWhereInput;
    data: Prisma.XOR<Prisma.ParseJobUpdateManyMutationInput, Prisma.ParseJobUncheckedUpdateManyWithoutUserInput>;
};
export type ParseJobScalarWhereInput = {
    AND?: Prisma.ParseJobScalarWhereInput | Prisma.ParseJobScalarWhereInput[];
    OR?: Prisma.ParseJobScalarWhereInput[];
    NOT?: Prisma.ParseJobScalarWhereInput | Prisma.ParseJobScalarWhereInput[];
    id?: Prisma.StringFilter<"ParseJob"> | string;
    userId?: Prisma.StringFilter<"ParseJob"> | string;
    categoryId?: Prisma.StringFilter<"ParseJob"> | string;
    sellerProfileId?: Prisma.StringNullableFilter<"ParseJob"> | string | null;
    type?: Prisma.EnumParseJobTypeFilter<"ParseJob"> | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFilter<"ParseJob"> | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFilter<"ParseJob"> | number;
    productsOk?: Prisma.IntFilter<"ParseJob"> | number;
    productsFailed?: Prisma.IntFilter<"ParseJob"> | number;
    requestedAt?: Prisma.DateTimeFilter<"ParseJob"> | Date | string;
    startedAt?: Prisma.DateTimeNullableFilter<"ParseJob"> | Date | string | null;
    finishedAt?: Prisma.DateTimeNullableFilter<"ParseJob"> | Date | string | null;
    durationMs?: Prisma.IntNullableFilter<"ParseJob"> | number | null;
    errorMessage?: Prisma.StringNullableFilter<"ParseJob"> | string | null;
};
export type ParseJobCreateWithoutSellerProfileInput = {
    id?: string;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
    user: Prisma.UserCreateNestedOneWithoutParseJobsInput;
    category: Prisma.CategoryCreateNestedOneWithoutParseJobsInput;
    snapshots?: Prisma.ProductSnapshotCreateNestedManyWithoutParseJobInput;
};
export type ParseJobUncheckedCreateWithoutSellerProfileInput = {
    id?: string;
    userId: string;
    categoryId: string;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
    snapshots?: Prisma.ProductSnapshotUncheckedCreateNestedManyWithoutParseJobInput;
};
export type ParseJobCreateOrConnectWithoutSellerProfileInput = {
    where: Prisma.ParseJobWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParseJobCreateWithoutSellerProfileInput, Prisma.ParseJobUncheckedCreateWithoutSellerProfileInput>;
};
export type ParseJobCreateManySellerProfileInputEnvelope = {
    data: Prisma.ParseJobCreateManySellerProfileInput | Prisma.ParseJobCreateManySellerProfileInput[];
    skipDuplicates?: boolean;
};
export type ParseJobUpsertWithWhereUniqueWithoutSellerProfileInput = {
    where: Prisma.ParseJobWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParseJobUpdateWithoutSellerProfileInput, Prisma.ParseJobUncheckedUpdateWithoutSellerProfileInput>;
    create: Prisma.XOR<Prisma.ParseJobCreateWithoutSellerProfileInput, Prisma.ParseJobUncheckedCreateWithoutSellerProfileInput>;
};
export type ParseJobUpdateWithWhereUniqueWithoutSellerProfileInput = {
    where: Prisma.ParseJobWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParseJobUpdateWithoutSellerProfileInput, Prisma.ParseJobUncheckedUpdateWithoutSellerProfileInput>;
};
export type ParseJobUpdateManyWithWhereWithoutSellerProfileInput = {
    where: Prisma.ParseJobScalarWhereInput;
    data: Prisma.XOR<Prisma.ParseJobUpdateManyMutationInput, Prisma.ParseJobUncheckedUpdateManyWithoutSellerProfileInput>;
};
export type ParseJobCreateWithoutCategoryInput = {
    id?: string;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
    user: Prisma.UserCreateNestedOneWithoutParseJobsInput;
    sellerProfile?: Prisma.SellerProfileCreateNestedOneWithoutParseJobsInput;
    snapshots?: Prisma.ProductSnapshotCreateNestedManyWithoutParseJobInput;
};
export type ParseJobUncheckedCreateWithoutCategoryInput = {
    id?: string;
    userId: string;
    sellerProfileId?: string | null;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
    snapshots?: Prisma.ProductSnapshotUncheckedCreateNestedManyWithoutParseJobInput;
};
export type ParseJobCreateOrConnectWithoutCategoryInput = {
    where: Prisma.ParseJobWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParseJobCreateWithoutCategoryInput, Prisma.ParseJobUncheckedCreateWithoutCategoryInput>;
};
export type ParseJobCreateManyCategoryInputEnvelope = {
    data: Prisma.ParseJobCreateManyCategoryInput | Prisma.ParseJobCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type ParseJobUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ParseJobWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParseJobUpdateWithoutCategoryInput, Prisma.ParseJobUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.ParseJobCreateWithoutCategoryInput, Prisma.ParseJobUncheckedCreateWithoutCategoryInput>;
};
export type ParseJobUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ParseJobWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParseJobUpdateWithoutCategoryInput, Prisma.ParseJobUncheckedUpdateWithoutCategoryInput>;
};
export type ParseJobUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.ParseJobScalarWhereInput;
    data: Prisma.XOR<Prisma.ParseJobUpdateManyMutationInput, Prisma.ParseJobUncheckedUpdateManyWithoutCategoryInput>;
};
export type ParseJobCreateWithoutSnapshotsInput = {
    id?: string;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
    user: Prisma.UserCreateNestedOneWithoutParseJobsInput;
    category: Prisma.CategoryCreateNestedOneWithoutParseJobsInput;
    sellerProfile?: Prisma.SellerProfileCreateNestedOneWithoutParseJobsInput;
};
export type ParseJobUncheckedCreateWithoutSnapshotsInput = {
    id?: string;
    userId: string;
    categoryId: string;
    sellerProfileId?: string | null;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
};
export type ParseJobCreateOrConnectWithoutSnapshotsInput = {
    where: Prisma.ParseJobWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParseJobCreateWithoutSnapshotsInput, Prisma.ParseJobUncheckedCreateWithoutSnapshotsInput>;
};
export type ParseJobUpsertWithoutSnapshotsInput = {
    update: Prisma.XOR<Prisma.ParseJobUpdateWithoutSnapshotsInput, Prisma.ParseJobUncheckedUpdateWithoutSnapshotsInput>;
    create: Prisma.XOR<Prisma.ParseJobCreateWithoutSnapshotsInput, Prisma.ParseJobUncheckedCreateWithoutSnapshotsInput>;
    where?: Prisma.ParseJobWhereInput;
};
export type ParseJobUpdateToOneWithWhereWithoutSnapshotsInput = {
    where?: Prisma.ParseJobWhereInput;
    data: Prisma.XOR<Prisma.ParseJobUpdateWithoutSnapshotsInput, Prisma.ParseJobUncheckedUpdateWithoutSnapshotsInput>;
};
export type ParseJobUpdateWithoutSnapshotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutParseJobsNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutParseJobsNestedInput;
    sellerProfile?: Prisma.SellerProfileUpdateOneWithoutParseJobsNestedInput;
};
export type ParseJobUncheckedUpdateWithoutSnapshotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerProfileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ParseJobCreateManyUserInput = {
    id?: string;
    categoryId: string;
    sellerProfileId?: string | null;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
};
export type ParseJobUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.CategoryUpdateOneRequiredWithoutParseJobsNestedInput;
    sellerProfile?: Prisma.SellerProfileUpdateOneWithoutParseJobsNestedInput;
    snapshots?: Prisma.ProductSnapshotUpdateManyWithoutParseJobNestedInput;
};
export type ParseJobUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerProfileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    snapshots?: Prisma.ProductSnapshotUncheckedUpdateManyWithoutParseJobNestedInput;
};
export type ParseJobUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerProfileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ParseJobCreateManySellerProfileInput = {
    id?: string;
    userId: string;
    categoryId: string;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
};
export type ParseJobUpdateWithoutSellerProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutParseJobsNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutParseJobsNestedInput;
    snapshots?: Prisma.ProductSnapshotUpdateManyWithoutParseJobNestedInput;
};
export type ParseJobUncheckedUpdateWithoutSellerProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    snapshots?: Prisma.ProductSnapshotUncheckedUpdateManyWithoutParseJobNestedInput;
};
export type ParseJobUncheckedUpdateManyWithoutSellerProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ParseJobCreateManyCategoryInput = {
    id?: string;
    userId: string;
    sellerProfileId?: string | null;
    type: $Enums.ParseJobType;
    status?: $Enums.ParseJobStatus;
    productsFound?: number;
    productsOk?: number;
    productsFailed?: number;
    requestedAt?: Date | string;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    durationMs?: number | null;
    errorMessage?: string | null;
};
export type ParseJobUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutParseJobsNestedInput;
    sellerProfile?: Prisma.SellerProfileUpdateOneWithoutParseJobsNestedInput;
    snapshots?: Prisma.ProductSnapshotUpdateManyWithoutParseJobNestedInput;
};
export type ParseJobUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerProfileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    snapshots?: Prisma.ProductSnapshotUncheckedUpdateManyWithoutParseJobNestedInput;
};
export type ParseJobUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerProfileId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumParseJobTypeFieldUpdateOperationsInput | $Enums.ParseJobType;
    status?: Prisma.EnumParseJobStatusFieldUpdateOperationsInput | $Enums.ParseJobStatus;
    productsFound?: Prisma.IntFieldUpdateOperationsInput | number;
    productsOk?: Prisma.IntFieldUpdateOperationsInput | number;
    productsFailed?: Prisma.IntFieldUpdateOperationsInput | number;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ParseJobCountOutputType = {
    snapshots: number;
};
export type ParseJobCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    snapshots?: boolean | ParseJobCountOutputTypeCountSnapshotsArgs;
};
export type ParseJobCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobCountOutputTypeSelect<ExtArgs> | null;
};
export type ParseJobCountOutputTypeCountSnapshotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductSnapshotWhereInput;
};
export type ParseJobSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    sellerProfileId?: boolean;
    type?: boolean;
    status?: boolean;
    productsFound?: boolean;
    productsOk?: boolean;
    productsFailed?: boolean;
    requestedAt?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
    durationMs?: boolean;
    errorMessage?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    sellerProfile?: boolean | Prisma.ParseJob$sellerProfileArgs<ExtArgs>;
    snapshots?: boolean | Prisma.ParseJob$snapshotsArgs<ExtArgs>;
    _count?: boolean | Prisma.ParseJobCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parseJob"]>;
export type ParseJobSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    sellerProfileId?: boolean;
    type?: boolean;
    status?: boolean;
    productsFound?: boolean;
    productsOk?: boolean;
    productsFailed?: boolean;
    requestedAt?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
    durationMs?: boolean;
    errorMessage?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    sellerProfile?: boolean | Prisma.ParseJob$sellerProfileArgs<ExtArgs>;
}, ExtArgs["result"]["parseJob"]>;
export type ParseJobSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    sellerProfileId?: boolean;
    type?: boolean;
    status?: boolean;
    productsFound?: boolean;
    productsOk?: boolean;
    productsFailed?: boolean;
    requestedAt?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
    durationMs?: boolean;
    errorMessage?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    sellerProfile?: boolean | Prisma.ParseJob$sellerProfileArgs<ExtArgs>;
}, ExtArgs["result"]["parseJob"]>;
export type ParseJobSelectScalar = {
    id?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    sellerProfileId?: boolean;
    type?: boolean;
    status?: boolean;
    productsFound?: boolean;
    productsOk?: boolean;
    productsFailed?: boolean;
    requestedAt?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
    durationMs?: boolean;
    errorMessage?: boolean;
};
export type ParseJobOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "categoryId" | "sellerProfileId" | "type" | "status" | "productsFound" | "productsOk" | "productsFailed" | "requestedAt" | "startedAt" | "finishedAt" | "durationMs" | "errorMessage", ExtArgs["result"]["parseJob"]>;
export type ParseJobInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    sellerProfile?: boolean | Prisma.ParseJob$sellerProfileArgs<ExtArgs>;
    snapshots?: boolean | Prisma.ParseJob$snapshotsArgs<ExtArgs>;
    _count?: boolean | Prisma.ParseJobCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ParseJobIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    sellerProfile?: boolean | Prisma.ParseJob$sellerProfileArgs<ExtArgs>;
};
export type ParseJobIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    sellerProfile?: boolean | Prisma.ParseJob$sellerProfileArgs<ExtArgs>;
};
export type $ParseJobPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParseJob";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        category: Prisma.$CategoryPayload<ExtArgs>;
        sellerProfile: Prisma.$SellerProfilePayload<ExtArgs> | null;
        snapshots: Prisma.$ProductSnapshotPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        categoryId: string;
        sellerProfileId: string | null;
        type: $Enums.ParseJobType;
        status: $Enums.ParseJobStatus;
        productsFound: number;
        productsOk: number;
        productsFailed: number;
        requestedAt: Date;
        startedAt: Date | null;
        finishedAt: Date | null;
        durationMs: number | null;
        errorMessage: string | null;
    }, ExtArgs["result"]["parseJob"]>;
    composites: {};
};
export type ParseJobGetPayload<S extends boolean | null | undefined | ParseJobDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParseJobPayload, S>;
export type ParseJobCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParseJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParseJobCountAggregateInputType | true;
};
export interface ParseJobDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParseJob'];
        meta: {
            name: 'ParseJob';
        };
    };
    findUnique<T extends ParseJobFindUniqueArgs>(args: Prisma.SelectSubset<T, ParseJobFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParseJobClient<runtime.Types.Result.GetResult<Prisma.$ParseJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParseJobFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParseJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParseJobClient<runtime.Types.Result.GetResult<Prisma.$ParseJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParseJobFindFirstArgs>(args?: Prisma.SelectSubset<T, ParseJobFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParseJobClient<runtime.Types.Result.GetResult<Prisma.$ParseJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParseJobFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParseJobFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParseJobClient<runtime.Types.Result.GetResult<Prisma.$ParseJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParseJobFindManyArgs>(args?: Prisma.SelectSubset<T, ParseJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParseJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParseJobCreateArgs>(args: Prisma.SelectSubset<T, ParseJobCreateArgs<ExtArgs>>): Prisma.Prisma__ParseJobClient<runtime.Types.Result.GetResult<Prisma.$ParseJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParseJobCreateManyArgs>(args?: Prisma.SelectSubset<T, ParseJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ParseJobCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ParseJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParseJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ParseJobDeleteArgs>(args: Prisma.SelectSubset<T, ParseJobDeleteArgs<ExtArgs>>): Prisma.Prisma__ParseJobClient<runtime.Types.Result.GetResult<Prisma.$ParseJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParseJobUpdateArgs>(args: Prisma.SelectSubset<T, ParseJobUpdateArgs<ExtArgs>>): Prisma.Prisma__ParseJobClient<runtime.Types.Result.GetResult<Prisma.$ParseJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParseJobDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParseJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParseJobUpdateManyArgs>(args: Prisma.SelectSubset<T, ParseJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ParseJobUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ParseJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParseJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ParseJobUpsertArgs>(args: Prisma.SelectSubset<T, ParseJobUpsertArgs<ExtArgs>>): Prisma.Prisma__ParseJobClient<runtime.Types.Result.GetResult<Prisma.$ParseJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ParseJobCountArgs>(args?: Prisma.Subset<T, ParseJobCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParseJobCountAggregateOutputType> : number>;
    aggregate<T extends ParseJobAggregateArgs>(args: Prisma.Subset<T, ParseJobAggregateArgs>): Prisma.PrismaPromise<GetParseJobAggregateType<T>>;
    groupBy<T extends ParseJobGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParseJobGroupByArgs['orderBy'];
    } : {
        orderBy?: ParseJobGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParseJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParseJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParseJobFieldRefs;
}
export interface Prisma__ParseJobClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sellerProfile<T extends Prisma.ParseJob$sellerProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParseJob$sellerProfileArgs<ExtArgs>>): Prisma.Prisma__SellerProfileClient<runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    snapshots<T extends Prisma.ParseJob$snapshotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParseJob$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParseJobFieldRefs {
    readonly id: Prisma.FieldRef<"ParseJob", 'String'>;
    readonly userId: Prisma.FieldRef<"ParseJob", 'String'>;
    readonly categoryId: Prisma.FieldRef<"ParseJob", 'String'>;
    readonly sellerProfileId: Prisma.FieldRef<"ParseJob", 'String'>;
    readonly type: Prisma.FieldRef<"ParseJob", 'ParseJobType'>;
    readonly status: Prisma.FieldRef<"ParseJob", 'ParseJobStatus'>;
    readonly productsFound: Prisma.FieldRef<"ParseJob", 'Int'>;
    readonly productsOk: Prisma.FieldRef<"ParseJob", 'Int'>;
    readonly productsFailed: Prisma.FieldRef<"ParseJob", 'Int'>;
    readonly requestedAt: Prisma.FieldRef<"ParseJob", 'DateTime'>;
    readonly startedAt: Prisma.FieldRef<"ParseJob", 'DateTime'>;
    readonly finishedAt: Prisma.FieldRef<"ParseJob", 'DateTime'>;
    readonly durationMs: Prisma.FieldRef<"ParseJob", 'Int'>;
    readonly errorMessage: Prisma.FieldRef<"ParseJob", 'String'>;
}
export type ParseJobFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobSelect<ExtArgs> | null;
    omit?: Prisma.ParseJobOmit<ExtArgs> | null;
    include?: Prisma.ParseJobInclude<ExtArgs> | null;
    where: Prisma.ParseJobWhereUniqueInput;
};
export type ParseJobFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobSelect<ExtArgs> | null;
    omit?: Prisma.ParseJobOmit<ExtArgs> | null;
    include?: Prisma.ParseJobInclude<ExtArgs> | null;
    where: Prisma.ParseJobWhereUniqueInput;
};
export type ParseJobFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobSelect<ExtArgs> | null;
    omit?: Prisma.ParseJobOmit<ExtArgs> | null;
    include?: Prisma.ParseJobInclude<ExtArgs> | null;
    where?: Prisma.ParseJobWhereInput;
    orderBy?: Prisma.ParseJobOrderByWithRelationInput | Prisma.ParseJobOrderByWithRelationInput[];
    cursor?: Prisma.ParseJobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParseJobScalarFieldEnum | Prisma.ParseJobScalarFieldEnum[];
};
export type ParseJobFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobSelect<ExtArgs> | null;
    omit?: Prisma.ParseJobOmit<ExtArgs> | null;
    include?: Prisma.ParseJobInclude<ExtArgs> | null;
    where?: Prisma.ParseJobWhereInput;
    orderBy?: Prisma.ParseJobOrderByWithRelationInput | Prisma.ParseJobOrderByWithRelationInput[];
    cursor?: Prisma.ParseJobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParseJobScalarFieldEnum | Prisma.ParseJobScalarFieldEnum[];
};
export type ParseJobFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobSelect<ExtArgs> | null;
    omit?: Prisma.ParseJobOmit<ExtArgs> | null;
    include?: Prisma.ParseJobInclude<ExtArgs> | null;
    where?: Prisma.ParseJobWhereInput;
    orderBy?: Prisma.ParseJobOrderByWithRelationInput | Prisma.ParseJobOrderByWithRelationInput[];
    cursor?: Prisma.ParseJobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParseJobScalarFieldEnum | Prisma.ParseJobScalarFieldEnum[];
};
export type ParseJobCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobSelect<ExtArgs> | null;
    omit?: Prisma.ParseJobOmit<ExtArgs> | null;
    include?: Prisma.ParseJobInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParseJobCreateInput, Prisma.ParseJobUncheckedCreateInput>;
};
export type ParseJobCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParseJobCreateManyInput | Prisma.ParseJobCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ParseJobCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParseJobOmit<ExtArgs> | null;
    data: Prisma.ParseJobCreateManyInput | Prisma.ParseJobCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ParseJobIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ParseJobUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobSelect<ExtArgs> | null;
    omit?: Prisma.ParseJobOmit<ExtArgs> | null;
    include?: Prisma.ParseJobInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParseJobUpdateInput, Prisma.ParseJobUncheckedUpdateInput>;
    where: Prisma.ParseJobWhereUniqueInput;
};
export type ParseJobUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParseJobUpdateManyMutationInput, Prisma.ParseJobUncheckedUpdateManyInput>;
    where?: Prisma.ParseJobWhereInput;
    limit?: number;
};
export type ParseJobUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParseJobOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParseJobUpdateManyMutationInput, Prisma.ParseJobUncheckedUpdateManyInput>;
    where?: Prisma.ParseJobWhereInput;
    limit?: number;
    include?: Prisma.ParseJobIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ParseJobUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobSelect<ExtArgs> | null;
    omit?: Prisma.ParseJobOmit<ExtArgs> | null;
    include?: Prisma.ParseJobInclude<ExtArgs> | null;
    where: Prisma.ParseJobWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParseJobCreateInput, Prisma.ParseJobUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParseJobUpdateInput, Prisma.ParseJobUncheckedUpdateInput>;
};
export type ParseJobDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobSelect<ExtArgs> | null;
    omit?: Prisma.ParseJobOmit<ExtArgs> | null;
    include?: Prisma.ParseJobInclude<ExtArgs> | null;
    where: Prisma.ParseJobWhereUniqueInput;
};
export type ParseJobDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParseJobWhereInput;
    limit?: number;
};
export type ParseJob$sellerProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelect<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    include?: Prisma.SellerProfileInclude<ExtArgs> | null;
    where?: Prisma.SellerProfileWhereInput;
};
export type ParseJob$snapshotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ProductSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ProductSnapshotInclude<ExtArgs> | null;
    where?: Prisma.ProductSnapshotWhereInput;
    orderBy?: Prisma.ProductSnapshotOrderByWithRelationInput | Prisma.ProductSnapshotOrderByWithRelationInput[];
    cursor?: Prisma.ProductSnapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductSnapshotScalarFieldEnum | Prisma.ProductSnapshotScalarFieldEnum[];
};
export type ParseJobDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParseJobSelect<ExtArgs> | null;
    omit?: Prisma.ParseJobOmit<ExtArgs> | null;
    include?: Prisma.ParseJobInclude<ExtArgs> | null;
};
export {};
