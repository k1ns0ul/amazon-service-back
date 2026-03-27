import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SellerProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$SellerProfilePayload>;
export type AggregateSellerProfile = {
    _count: SellerProfileCountAggregateOutputType | null;
    _min: SellerProfileMinAggregateOutputType | null;
    _max: SellerProfileMaxAggregateOutputType | null;
};
export type SellerProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    amazonSellerId: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type SellerProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    amazonSellerId: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type SellerProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    amazonSellerId: number;
    name: number;
    createdAt: number;
    _all: number;
};
export type SellerProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    amazonSellerId?: true;
    name?: true;
    createdAt?: true;
};
export type SellerProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    amazonSellerId?: true;
    name?: true;
    createdAt?: true;
};
export type SellerProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    amazonSellerId?: true;
    name?: true;
    createdAt?: true;
    _all?: true;
};
export type SellerProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerProfileWhereInput;
    orderBy?: Prisma.SellerProfileOrderByWithRelationInput | Prisma.SellerProfileOrderByWithRelationInput[];
    cursor?: Prisma.SellerProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SellerProfileCountAggregateInputType;
    _min?: SellerProfileMinAggregateInputType;
    _max?: SellerProfileMaxAggregateInputType;
};
export type GetSellerProfileAggregateType<T extends SellerProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateSellerProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSellerProfile[P]> : Prisma.GetScalarType<T[P], AggregateSellerProfile[P]>;
};
export type SellerProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerProfileWhereInput;
    orderBy?: Prisma.SellerProfileOrderByWithAggregationInput | Prisma.SellerProfileOrderByWithAggregationInput[];
    by: Prisma.SellerProfileScalarFieldEnum[] | Prisma.SellerProfileScalarFieldEnum;
    having?: Prisma.SellerProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SellerProfileCountAggregateInputType | true;
    _min?: SellerProfileMinAggregateInputType;
    _max?: SellerProfileMaxAggregateInputType;
};
export type SellerProfileGroupByOutputType = {
    id: string;
    userId: string;
    amazonSellerId: string;
    name: string | null;
    createdAt: Date;
    _count: SellerProfileCountAggregateOutputType | null;
    _min: SellerProfileMinAggregateOutputType | null;
    _max: SellerProfileMaxAggregateOutputType | null;
};
type GetSellerProfileGroupByPayload<T extends SellerProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SellerProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SellerProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SellerProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SellerProfileGroupByOutputType[P]>;
}>>;
export type SellerProfileWhereInput = {
    AND?: Prisma.SellerProfileWhereInput | Prisma.SellerProfileWhereInput[];
    OR?: Prisma.SellerProfileWhereInput[];
    NOT?: Prisma.SellerProfileWhereInput | Prisma.SellerProfileWhereInput[];
    id?: Prisma.StringFilter<"SellerProfile"> | string;
    userId?: Prisma.StringFilter<"SellerProfile"> | string;
    amazonSellerId?: Prisma.StringFilter<"SellerProfile"> | string;
    name?: Prisma.StringNullableFilter<"SellerProfile"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SellerProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    parseJobs?: Prisma.ParseJobListRelationFilter;
};
export type SellerProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amazonSellerId?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    parseJobs?: Prisma.ParseJobOrderByRelationAggregateInput;
};
export type SellerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_amazonSellerId?: Prisma.SellerProfileUserIdAmazonSellerIdCompoundUniqueInput;
    AND?: Prisma.SellerProfileWhereInput | Prisma.SellerProfileWhereInput[];
    OR?: Prisma.SellerProfileWhereInput[];
    NOT?: Prisma.SellerProfileWhereInput | Prisma.SellerProfileWhereInput[];
    userId?: Prisma.StringFilter<"SellerProfile"> | string;
    amazonSellerId?: Prisma.StringFilter<"SellerProfile"> | string;
    name?: Prisma.StringNullableFilter<"SellerProfile"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SellerProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    parseJobs?: Prisma.ParseJobListRelationFilter;
}, "id" | "userId_amazonSellerId">;
export type SellerProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amazonSellerId?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SellerProfileCountOrderByAggregateInput;
    _max?: Prisma.SellerProfileMaxOrderByAggregateInput;
    _min?: Prisma.SellerProfileMinOrderByAggregateInput;
};
export type SellerProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.SellerProfileScalarWhereWithAggregatesInput | Prisma.SellerProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.SellerProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SellerProfileScalarWhereWithAggregatesInput | Prisma.SellerProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SellerProfile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"SellerProfile"> | string;
    amazonSellerId?: Prisma.StringWithAggregatesFilter<"SellerProfile"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"SellerProfile"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SellerProfile"> | Date | string;
};
export type SellerProfileCreateInput = {
    id?: string;
    amazonSellerId: string;
    name?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSellerProfilesInput;
    parseJobs?: Prisma.ParseJobCreateNestedManyWithoutSellerProfileInput;
};
export type SellerProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    amazonSellerId: string;
    name?: string | null;
    createdAt?: Date | string;
    parseJobs?: Prisma.ParseJobUncheckedCreateNestedManyWithoutSellerProfileInput;
};
export type SellerProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amazonSellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSellerProfilesNestedInput;
    parseJobs?: Prisma.ParseJobUpdateManyWithoutSellerProfileNestedInput;
};
export type SellerProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amazonSellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parseJobs?: Prisma.ParseJobUncheckedUpdateManyWithoutSellerProfileNestedInput;
};
export type SellerProfileCreateManyInput = {
    id?: string;
    userId: string;
    amazonSellerId: string;
    name?: string | null;
    createdAt?: Date | string;
};
export type SellerProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amazonSellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amazonSellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerProfileListRelationFilter = {
    every?: Prisma.SellerProfileWhereInput;
    some?: Prisma.SellerProfileWhereInput;
    none?: Prisma.SellerProfileWhereInput;
};
export type SellerProfileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SellerProfileUserIdAmazonSellerIdCompoundUniqueInput = {
    userId: string;
    amazonSellerId: string;
};
export type SellerProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amazonSellerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SellerProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amazonSellerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SellerProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    amazonSellerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SellerProfileNullableScalarRelationFilter = {
    is?: Prisma.SellerProfileWhereInput | null;
    isNot?: Prisma.SellerProfileWhereInput | null;
};
export type SellerProfileCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SellerProfileCreateWithoutUserInput, Prisma.SellerProfileUncheckedCreateWithoutUserInput> | Prisma.SellerProfileCreateWithoutUserInput[] | Prisma.SellerProfileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SellerProfileCreateOrConnectWithoutUserInput | Prisma.SellerProfileCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SellerProfileCreateManyUserInputEnvelope;
    connect?: Prisma.SellerProfileWhereUniqueInput | Prisma.SellerProfileWhereUniqueInput[];
};
export type SellerProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SellerProfileCreateWithoutUserInput, Prisma.SellerProfileUncheckedCreateWithoutUserInput> | Prisma.SellerProfileCreateWithoutUserInput[] | Prisma.SellerProfileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SellerProfileCreateOrConnectWithoutUserInput | Prisma.SellerProfileCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SellerProfileCreateManyUserInputEnvelope;
    connect?: Prisma.SellerProfileWhereUniqueInput | Prisma.SellerProfileWhereUniqueInput[];
};
export type SellerProfileUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SellerProfileCreateWithoutUserInput, Prisma.SellerProfileUncheckedCreateWithoutUserInput> | Prisma.SellerProfileCreateWithoutUserInput[] | Prisma.SellerProfileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SellerProfileCreateOrConnectWithoutUserInput | Prisma.SellerProfileCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SellerProfileUpsertWithWhereUniqueWithoutUserInput | Prisma.SellerProfileUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SellerProfileCreateManyUserInputEnvelope;
    set?: Prisma.SellerProfileWhereUniqueInput | Prisma.SellerProfileWhereUniqueInput[];
    disconnect?: Prisma.SellerProfileWhereUniqueInput | Prisma.SellerProfileWhereUniqueInput[];
    delete?: Prisma.SellerProfileWhereUniqueInput | Prisma.SellerProfileWhereUniqueInput[];
    connect?: Prisma.SellerProfileWhereUniqueInput | Prisma.SellerProfileWhereUniqueInput[];
    update?: Prisma.SellerProfileUpdateWithWhereUniqueWithoutUserInput | Prisma.SellerProfileUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SellerProfileUpdateManyWithWhereWithoutUserInput | Prisma.SellerProfileUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SellerProfileScalarWhereInput | Prisma.SellerProfileScalarWhereInput[];
};
export type SellerProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SellerProfileCreateWithoutUserInput, Prisma.SellerProfileUncheckedCreateWithoutUserInput> | Prisma.SellerProfileCreateWithoutUserInput[] | Prisma.SellerProfileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SellerProfileCreateOrConnectWithoutUserInput | Prisma.SellerProfileCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SellerProfileUpsertWithWhereUniqueWithoutUserInput | Prisma.SellerProfileUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SellerProfileCreateManyUserInputEnvelope;
    set?: Prisma.SellerProfileWhereUniqueInput | Prisma.SellerProfileWhereUniqueInput[];
    disconnect?: Prisma.SellerProfileWhereUniqueInput | Prisma.SellerProfileWhereUniqueInput[];
    delete?: Prisma.SellerProfileWhereUniqueInput | Prisma.SellerProfileWhereUniqueInput[];
    connect?: Prisma.SellerProfileWhereUniqueInput | Prisma.SellerProfileWhereUniqueInput[];
    update?: Prisma.SellerProfileUpdateWithWhereUniqueWithoutUserInput | Prisma.SellerProfileUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SellerProfileUpdateManyWithWhereWithoutUserInput | Prisma.SellerProfileUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SellerProfileScalarWhereInput | Prisma.SellerProfileScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type SellerProfileCreateNestedOneWithoutParseJobsInput = {
    create?: Prisma.XOR<Prisma.SellerProfileCreateWithoutParseJobsInput, Prisma.SellerProfileUncheckedCreateWithoutParseJobsInput>;
    connectOrCreate?: Prisma.SellerProfileCreateOrConnectWithoutParseJobsInput;
    connect?: Prisma.SellerProfileWhereUniqueInput;
};
export type SellerProfileUpdateOneWithoutParseJobsNestedInput = {
    create?: Prisma.XOR<Prisma.SellerProfileCreateWithoutParseJobsInput, Prisma.SellerProfileUncheckedCreateWithoutParseJobsInput>;
    connectOrCreate?: Prisma.SellerProfileCreateOrConnectWithoutParseJobsInput;
    upsert?: Prisma.SellerProfileUpsertWithoutParseJobsInput;
    disconnect?: Prisma.SellerProfileWhereInput | boolean;
    delete?: Prisma.SellerProfileWhereInput | boolean;
    connect?: Prisma.SellerProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SellerProfileUpdateToOneWithWhereWithoutParseJobsInput, Prisma.SellerProfileUpdateWithoutParseJobsInput>, Prisma.SellerProfileUncheckedUpdateWithoutParseJobsInput>;
};
export type SellerProfileCreateWithoutUserInput = {
    id?: string;
    amazonSellerId: string;
    name?: string | null;
    createdAt?: Date | string;
    parseJobs?: Prisma.ParseJobCreateNestedManyWithoutSellerProfileInput;
};
export type SellerProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    amazonSellerId: string;
    name?: string | null;
    createdAt?: Date | string;
    parseJobs?: Prisma.ParseJobUncheckedCreateNestedManyWithoutSellerProfileInput;
};
export type SellerProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.SellerProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerProfileCreateWithoutUserInput, Prisma.SellerProfileUncheckedCreateWithoutUserInput>;
};
export type SellerProfileCreateManyUserInputEnvelope = {
    data: Prisma.SellerProfileCreateManyUserInput | Prisma.SellerProfileCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SellerProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SellerProfileWhereUniqueInput;
    update: Prisma.XOR<Prisma.SellerProfileUpdateWithoutUserInput, Prisma.SellerProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SellerProfileCreateWithoutUserInput, Prisma.SellerProfileUncheckedCreateWithoutUserInput>;
};
export type SellerProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SellerProfileWhereUniqueInput;
    data: Prisma.XOR<Prisma.SellerProfileUpdateWithoutUserInput, Prisma.SellerProfileUncheckedUpdateWithoutUserInput>;
};
export type SellerProfileUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SellerProfileScalarWhereInput;
    data: Prisma.XOR<Prisma.SellerProfileUpdateManyMutationInput, Prisma.SellerProfileUncheckedUpdateManyWithoutUserInput>;
};
export type SellerProfileScalarWhereInput = {
    AND?: Prisma.SellerProfileScalarWhereInput | Prisma.SellerProfileScalarWhereInput[];
    OR?: Prisma.SellerProfileScalarWhereInput[];
    NOT?: Prisma.SellerProfileScalarWhereInput | Prisma.SellerProfileScalarWhereInput[];
    id?: Prisma.StringFilter<"SellerProfile"> | string;
    userId?: Prisma.StringFilter<"SellerProfile"> | string;
    amazonSellerId?: Prisma.StringFilter<"SellerProfile"> | string;
    name?: Prisma.StringNullableFilter<"SellerProfile"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SellerProfile"> | Date | string;
};
export type SellerProfileCreateWithoutParseJobsInput = {
    id?: string;
    amazonSellerId: string;
    name?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSellerProfilesInput;
};
export type SellerProfileUncheckedCreateWithoutParseJobsInput = {
    id?: string;
    userId: string;
    amazonSellerId: string;
    name?: string | null;
    createdAt?: Date | string;
};
export type SellerProfileCreateOrConnectWithoutParseJobsInput = {
    where: Prisma.SellerProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerProfileCreateWithoutParseJobsInput, Prisma.SellerProfileUncheckedCreateWithoutParseJobsInput>;
};
export type SellerProfileUpsertWithoutParseJobsInput = {
    update: Prisma.XOR<Prisma.SellerProfileUpdateWithoutParseJobsInput, Prisma.SellerProfileUncheckedUpdateWithoutParseJobsInput>;
    create: Prisma.XOR<Prisma.SellerProfileCreateWithoutParseJobsInput, Prisma.SellerProfileUncheckedCreateWithoutParseJobsInput>;
    where?: Prisma.SellerProfileWhereInput;
};
export type SellerProfileUpdateToOneWithWhereWithoutParseJobsInput = {
    where?: Prisma.SellerProfileWhereInput;
    data: Prisma.XOR<Prisma.SellerProfileUpdateWithoutParseJobsInput, Prisma.SellerProfileUncheckedUpdateWithoutParseJobsInput>;
};
export type SellerProfileUpdateWithoutParseJobsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amazonSellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSellerProfilesNestedInput;
};
export type SellerProfileUncheckedUpdateWithoutParseJobsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amazonSellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerProfileCreateManyUserInput = {
    id?: string;
    amazonSellerId: string;
    name?: string | null;
    createdAt?: Date | string;
};
export type SellerProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amazonSellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parseJobs?: Prisma.ParseJobUpdateManyWithoutSellerProfileNestedInput;
};
export type SellerProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amazonSellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parseJobs?: Prisma.ParseJobUncheckedUpdateManyWithoutSellerProfileNestedInput;
};
export type SellerProfileUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amazonSellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerProfileCountOutputType = {
    parseJobs: number;
};
export type SellerProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parseJobs?: boolean | SellerProfileCountOutputTypeCountParseJobsArgs;
};
export type SellerProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileCountOutputTypeSelect<ExtArgs> | null;
};
export type SellerProfileCountOutputTypeCountParseJobsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParseJobWhereInput;
};
export type SellerProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    amazonSellerId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parseJobs?: boolean | Prisma.SellerProfile$parseJobsArgs<ExtArgs>;
    _count?: boolean | Prisma.SellerProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellerProfile"]>;
export type SellerProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    amazonSellerId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellerProfile"]>;
export type SellerProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    amazonSellerId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellerProfile"]>;
export type SellerProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    amazonSellerId?: boolean;
    name?: boolean;
    createdAt?: boolean;
};
export type SellerProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "amazonSellerId" | "name" | "createdAt", ExtArgs["result"]["sellerProfile"]>;
export type SellerProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parseJobs?: boolean | Prisma.SellerProfile$parseJobsArgs<ExtArgs>;
    _count?: boolean | Prisma.SellerProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SellerProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SellerProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SellerProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SellerProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        parseJobs: Prisma.$ParseJobPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        amazonSellerId: string;
        name: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["sellerProfile"]>;
    composites: {};
};
export type SellerProfileGetPayload<S extends boolean | null | undefined | SellerProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload, S>;
export type SellerProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SellerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SellerProfileCountAggregateInputType | true;
};
export interface SellerProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SellerProfile'];
        meta: {
            name: 'SellerProfile';
        };
    };
    findUnique<T extends SellerProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, SellerProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SellerProfileClient<runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SellerProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SellerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SellerProfileClient<runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SellerProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, SellerProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__SellerProfileClient<runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SellerProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SellerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SellerProfileClient<runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SellerProfileFindManyArgs>(args?: Prisma.SelectSubset<T, SellerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SellerProfileCreateArgs>(args: Prisma.SelectSubset<T, SellerProfileCreateArgs<ExtArgs>>): Prisma.Prisma__SellerProfileClient<runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SellerProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, SellerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SellerProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SellerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SellerProfileDeleteArgs>(args: Prisma.SelectSubset<T, SellerProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__SellerProfileClient<runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SellerProfileUpdateArgs>(args: Prisma.SelectSubset<T, SellerProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__SellerProfileClient<runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SellerProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, SellerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SellerProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, SellerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SellerProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SellerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SellerProfileUpsertArgs>(args: Prisma.SelectSubset<T, SellerProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__SellerProfileClient<runtime.Types.Result.GetResult<Prisma.$SellerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SellerProfileCountArgs>(args?: Prisma.Subset<T, SellerProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SellerProfileCountAggregateOutputType> : number>;
    aggregate<T extends SellerProfileAggregateArgs>(args: Prisma.Subset<T, SellerProfileAggregateArgs>): Prisma.PrismaPromise<GetSellerProfileAggregateType<T>>;
    groupBy<T extends SellerProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SellerProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: SellerProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SellerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SellerProfileFieldRefs;
}
export interface Prisma__SellerProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    parseJobs<T extends Prisma.SellerProfile$parseJobsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SellerProfile$parseJobsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParseJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SellerProfileFieldRefs {
    readonly id: Prisma.FieldRef<"SellerProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"SellerProfile", 'String'>;
    readonly amazonSellerId: Prisma.FieldRef<"SellerProfile", 'String'>;
    readonly name: Prisma.FieldRef<"SellerProfile", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SellerProfile", 'DateTime'>;
}
export type SellerProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelect<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    include?: Prisma.SellerProfileInclude<ExtArgs> | null;
    where: Prisma.SellerProfileWhereUniqueInput;
};
export type SellerProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelect<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    include?: Prisma.SellerProfileInclude<ExtArgs> | null;
    where: Prisma.SellerProfileWhereUniqueInput;
};
export type SellerProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelect<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    include?: Prisma.SellerProfileInclude<ExtArgs> | null;
    where?: Prisma.SellerProfileWhereInput;
    orderBy?: Prisma.SellerProfileOrderByWithRelationInput | Prisma.SellerProfileOrderByWithRelationInput[];
    cursor?: Prisma.SellerProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerProfileScalarFieldEnum | Prisma.SellerProfileScalarFieldEnum[];
};
export type SellerProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelect<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    include?: Prisma.SellerProfileInclude<ExtArgs> | null;
    where?: Prisma.SellerProfileWhereInput;
    orderBy?: Prisma.SellerProfileOrderByWithRelationInput | Prisma.SellerProfileOrderByWithRelationInput[];
    cursor?: Prisma.SellerProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerProfileScalarFieldEnum | Prisma.SellerProfileScalarFieldEnum[];
};
export type SellerProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelect<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    include?: Prisma.SellerProfileInclude<ExtArgs> | null;
    where?: Prisma.SellerProfileWhereInput;
    orderBy?: Prisma.SellerProfileOrderByWithRelationInput | Prisma.SellerProfileOrderByWithRelationInput[];
    cursor?: Prisma.SellerProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerProfileScalarFieldEnum | Prisma.SellerProfileScalarFieldEnum[];
};
export type SellerProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelect<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    include?: Prisma.SellerProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerProfileCreateInput, Prisma.SellerProfileUncheckedCreateInput>;
};
export type SellerProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SellerProfileCreateManyInput | Prisma.SellerProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SellerProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    data: Prisma.SellerProfileCreateManyInput | Prisma.SellerProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SellerProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SellerProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelect<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    include?: Prisma.SellerProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerProfileUpdateInput, Prisma.SellerProfileUncheckedUpdateInput>;
    where: Prisma.SellerProfileWhereUniqueInput;
};
export type SellerProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SellerProfileUpdateManyMutationInput, Prisma.SellerProfileUncheckedUpdateManyInput>;
    where?: Prisma.SellerProfileWhereInput;
    limit?: number;
};
export type SellerProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerProfileUpdateManyMutationInput, Prisma.SellerProfileUncheckedUpdateManyInput>;
    where?: Prisma.SellerProfileWhereInput;
    limit?: number;
    include?: Prisma.SellerProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SellerProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelect<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    include?: Prisma.SellerProfileInclude<ExtArgs> | null;
    where: Prisma.SellerProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerProfileCreateInput, Prisma.SellerProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SellerProfileUpdateInput, Prisma.SellerProfileUncheckedUpdateInput>;
};
export type SellerProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelect<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    include?: Prisma.SellerProfileInclude<ExtArgs> | null;
    where: Prisma.SellerProfileWhereUniqueInput;
};
export type SellerProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerProfileWhereInput;
    limit?: number;
};
export type SellerProfile$parseJobsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SellerProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerProfileSelect<ExtArgs> | null;
    omit?: Prisma.SellerProfileOmit<ExtArgs> | null;
    include?: Prisma.SellerProfileInclude<ExtArgs> | null;
};
export {};
