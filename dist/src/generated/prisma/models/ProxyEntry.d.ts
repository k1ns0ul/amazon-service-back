import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ProxyEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$ProxyEntryPayload>;
export type AggregateProxyEntry = {
    _count: ProxyEntryCountAggregateOutputType | null;
    _avg: ProxyEntryAvgAggregateOutputType | null;
    _sum: ProxyEntrySumAggregateOutputType | null;
    _min: ProxyEntryMinAggregateOutputType | null;
    _max: ProxyEntryMaxAggregateOutputType | null;
};
export type ProxyEntryAvgAggregateOutputType = {
    port: number | null;
    failureCount: number | null;
    successCount: number | null;
};
export type ProxyEntrySumAggregateOutputType = {
    port: number | null;
    failureCount: number | null;
    successCount: number | null;
};
export type ProxyEntryMinAggregateOutputType = {
    id: string | null;
    url: string | null;
    host: string | null;
    port: number | null;
    username: string | null;
    isActive: boolean | null;
    failureCount: number | null;
    successCount: number | null;
    disabledUntil: Date | null;
    lastCheckedAt: Date | null;
    lastStatus: $Enums.ProxyStatus | null;
    createdAt: Date | null;
};
export type ProxyEntryMaxAggregateOutputType = {
    id: string | null;
    url: string | null;
    host: string | null;
    port: number | null;
    username: string | null;
    isActive: boolean | null;
    failureCount: number | null;
    successCount: number | null;
    disabledUntil: Date | null;
    lastCheckedAt: Date | null;
    lastStatus: $Enums.ProxyStatus | null;
    createdAt: Date | null;
};
export type ProxyEntryCountAggregateOutputType = {
    id: number;
    url: number;
    host: number;
    port: number;
    username: number;
    isActive: number;
    failureCount: number;
    successCount: number;
    disabledUntil: number;
    lastCheckedAt: number;
    lastStatus: number;
    createdAt: number;
    _all: number;
};
export type ProxyEntryAvgAggregateInputType = {
    port?: true;
    failureCount?: true;
    successCount?: true;
};
export type ProxyEntrySumAggregateInputType = {
    port?: true;
    failureCount?: true;
    successCount?: true;
};
export type ProxyEntryMinAggregateInputType = {
    id?: true;
    url?: true;
    host?: true;
    port?: true;
    username?: true;
    isActive?: true;
    failureCount?: true;
    successCount?: true;
    disabledUntil?: true;
    lastCheckedAt?: true;
    lastStatus?: true;
    createdAt?: true;
};
export type ProxyEntryMaxAggregateInputType = {
    id?: true;
    url?: true;
    host?: true;
    port?: true;
    username?: true;
    isActive?: true;
    failureCount?: true;
    successCount?: true;
    disabledUntil?: true;
    lastCheckedAt?: true;
    lastStatus?: true;
    createdAt?: true;
};
export type ProxyEntryCountAggregateInputType = {
    id?: true;
    url?: true;
    host?: true;
    port?: true;
    username?: true;
    isActive?: true;
    failureCount?: true;
    successCount?: true;
    disabledUntil?: true;
    lastCheckedAt?: true;
    lastStatus?: true;
    createdAt?: true;
    _all?: true;
};
export type ProxyEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProxyEntryWhereInput;
    orderBy?: Prisma.ProxyEntryOrderByWithRelationInput | Prisma.ProxyEntryOrderByWithRelationInput[];
    cursor?: Prisma.ProxyEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProxyEntryCountAggregateInputType;
    _avg?: ProxyEntryAvgAggregateInputType;
    _sum?: ProxyEntrySumAggregateInputType;
    _min?: ProxyEntryMinAggregateInputType;
    _max?: ProxyEntryMaxAggregateInputType;
};
export type GetProxyEntryAggregateType<T extends ProxyEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateProxyEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProxyEntry[P]> : Prisma.GetScalarType<T[P], AggregateProxyEntry[P]>;
};
export type ProxyEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProxyEntryWhereInput;
    orderBy?: Prisma.ProxyEntryOrderByWithAggregationInput | Prisma.ProxyEntryOrderByWithAggregationInput[];
    by: Prisma.ProxyEntryScalarFieldEnum[] | Prisma.ProxyEntryScalarFieldEnum;
    having?: Prisma.ProxyEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProxyEntryCountAggregateInputType | true;
    _avg?: ProxyEntryAvgAggregateInputType;
    _sum?: ProxyEntrySumAggregateInputType;
    _min?: ProxyEntryMinAggregateInputType;
    _max?: ProxyEntryMaxAggregateInputType;
};
export type ProxyEntryGroupByOutputType = {
    id: string;
    url: string;
    host: string;
    port: number;
    username: string | null;
    isActive: boolean;
    failureCount: number;
    successCount: number;
    disabledUntil: Date | null;
    lastCheckedAt: Date | null;
    lastStatus: $Enums.ProxyStatus;
    createdAt: Date;
    _count: ProxyEntryCountAggregateOutputType | null;
    _avg: ProxyEntryAvgAggregateOutputType | null;
    _sum: ProxyEntrySumAggregateOutputType | null;
    _min: ProxyEntryMinAggregateOutputType | null;
    _max: ProxyEntryMaxAggregateOutputType | null;
};
type GetProxyEntryGroupByPayload<T extends ProxyEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProxyEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProxyEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProxyEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProxyEntryGroupByOutputType[P]>;
}>>;
export type ProxyEntryWhereInput = {
    AND?: Prisma.ProxyEntryWhereInput | Prisma.ProxyEntryWhereInput[];
    OR?: Prisma.ProxyEntryWhereInput[];
    NOT?: Prisma.ProxyEntryWhereInput | Prisma.ProxyEntryWhereInput[];
    id?: Prisma.StringFilter<"ProxyEntry"> | string;
    url?: Prisma.StringFilter<"ProxyEntry"> | string;
    host?: Prisma.StringFilter<"ProxyEntry"> | string;
    port?: Prisma.IntFilter<"ProxyEntry"> | number;
    username?: Prisma.StringNullableFilter<"ProxyEntry"> | string | null;
    isActive?: Prisma.BoolFilter<"ProxyEntry"> | boolean;
    failureCount?: Prisma.IntFilter<"ProxyEntry"> | number;
    successCount?: Prisma.IntFilter<"ProxyEntry"> | number;
    disabledUntil?: Prisma.DateTimeNullableFilter<"ProxyEntry"> | Date | string | null;
    lastCheckedAt?: Prisma.DateTimeNullableFilter<"ProxyEntry"> | Date | string | null;
    lastStatus?: Prisma.EnumProxyStatusFilter<"ProxyEntry"> | $Enums.ProxyStatus;
    createdAt?: Prisma.DateTimeFilter<"ProxyEntry"> | Date | string;
};
export type ProxyEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    host?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    failureCount?: Prisma.SortOrder;
    successCount?: Prisma.SortOrder;
    disabledUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastCheckedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProxyEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    url?: string;
    AND?: Prisma.ProxyEntryWhereInput | Prisma.ProxyEntryWhereInput[];
    OR?: Prisma.ProxyEntryWhereInput[];
    NOT?: Prisma.ProxyEntryWhereInput | Prisma.ProxyEntryWhereInput[];
    host?: Prisma.StringFilter<"ProxyEntry"> | string;
    port?: Prisma.IntFilter<"ProxyEntry"> | number;
    username?: Prisma.StringNullableFilter<"ProxyEntry"> | string | null;
    isActive?: Prisma.BoolFilter<"ProxyEntry"> | boolean;
    failureCount?: Prisma.IntFilter<"ProxyEntry"> | number;
    successCount?: Prisma.IntFilter<"ProxyEntry"> | number;
    disabledUntil?: Prisma.DateTimeNullableFilter<"ProxyEntry"> | Date | string | null;
    lastCheckedAt?: Prisma.DateTimeNullableFilter<"ProxyEntry"> | Date | string | null;
    lastStatus?: Prisma.EnumProxyStatusFilter<"ProxyEntry"> | $Enums.ProxyStatus;
    createdAt?: Prisma.DateTimeFilter<"ProxyEntry"> | Date | string;
}, "id" | "url">;
export type ProxyEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    host?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    failureCount?: Prisma.SortOrder;
    successCount?: Prisma.SortOrder;
    disabledUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastCheckedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProxyEntryCountOrderByAggregateInput;
    _avg?: Prisma.ProxyEntryAvgOrderByAggregateInput;
    _max?: Prisma.ProxyEntryMaxOrderByAggregateInput;
    _min?: Prisma.ProxyEntryMinOrderByAggregateInput;
    _sum?: Prisma.ProxyEntrySumOrderByAggregateInput;
};
export type ProxyEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProxyEntryScalarWhereWithAggregatesInput | Prisma.ProxyEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProxyEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProxyEntryScalarWhereWithAggregatesInput | Prisma.ProxyEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProxyEntry"> | string;
    url?: Prisma.StringWithAggregatesFilter<"ProxyEntry"> | string;
    host?: Prisma.StringWithAggregatesFilter<"ProxyEntry"> | string;
    port?: Prisma.IntWithAggregatesFilter<"ProxyEntry"> | number;
    username?: Prisma.StringNullableWithAggregatesFilter<"ProxyEntry"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"ProxyEntry"> | boolean;
    failureCount?: Prisma.IntWithAggregatesFilter<"ProxyEntry"> | number;
    successCount?: Prisma.IntWithAggregatesFilter<"ProxyEntry"> | number;
    disabledUntil?: Prisma.DateTimeNullableWithAggregatesFilter<"ProxyEntry"> | Date | string | null;
    lastCheckedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ProxyEntry"> | Date | string | null;
    lastStatus?: Prisma.EnumProxyStatusWithAggregatesFilter<"ProxyEntry"> | $Enums.ProxyStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProxyEntry"> | Date | string;
};
export type ProxyEntryCreateInput = {
    id?: string;
    url: string;
    host: string;
    port: number;
    username?: string | null;
    isActive?: boolean;
    failureCount?: number;
    successCount?: number;
    disabledUntil?: Date | string | null;
    lastCheckedAt?: Date | string | null;
    lastStatus?: $Enums.ProxyStatus;
    createdAt?: Date | string;
};
export type ProxyEntryUncheckedCreateInput = {
    id?: string;
    url: string;
    host: string;
    port: number;
    username?: string | null;
    isActive?: boolean;
    failureCount?: number;
    successCount?: number;
    disabledUntil?: Date | string | null;
    lastCheckedAt?: Date | string | null;
    lastStatus?: $Enums.ProxyStatus;
    createdAt?: Date | string;
};
export type ProxyEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    host?: Prisma.StringFieldUpdateOperationsInput | string;
    port?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    failureCount?: Prisma.IntFieldUpdateOperationsInput | number;
    successCount?: Prisma.IntFieldUpdateOperationsInput | number;
    disabledUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastStatus?: Prisma.EnumProxyStatusFieldUpdateOperationsInput | $Enums.ProxyStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProxyEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    host?: Prisma.StringFieldUpdateOperationsInput | string;
    port?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    failureCount?: Prisma.IntFieldUpdateOperationsInput | number;
    successCount?: Prisma.IntFieldUpdateOperationsInput | number;
    disabledUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastStatus?: Prisma.EnumProxyStatusFieldUpdateOperationsInput | $Enums.ProxyStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProxyEntryCreateManyInput = {
    id?: string;
    url: string;
    host: string;
    port: number;
    username?: string | null;
    isActive?: boolean;
    failureCount?: number;
    successCount?: number;
    disabledUntil?: Date | string | null;
    lastCheckedAt?: Date | string | null;
    lastStatus?: $Enums.ProxyStatus;
    createdAt?: Date | string;
};
export type ProxyEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    host?: Prisma.StringFieldUpdateOperationsInput | string;
    port?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    failureCount?: Prisma.IntFieldUpdateOperationsInput | number;
    successCount?: Prisma.IntFieldUpdateOperationsInput | number;
    disabledUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastStatus?: Prisma.EnumProxyStatusFieldUpdateOperationsInput | $Enums.ProxyStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProxyEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    host?: Prisma.StringFieldUpdateOperationsInput | string;
    port?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    failureCount?: Prisma.IntFieldUpdateOperationsInput | number;
    successCount?: Prisma.IntFieldUpdateOperationsInput | number;
    disabledUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastStatus?: Prisma.EnumProxyStatusFieldUpdateOperationsInput | $Enums.ProxyStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProxyEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    host?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    failureCount?: Prisma.SortOrder;
    successCount?: Prisma.SortOrder;
    disabledUntil?: Prisma.SortOrder;
    lastCheckedAt?: Prisma.SortOrder;
    lastStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProxyEntryAvgOrderByAggregateInput = {
    port?: Prisma.SortOrder;
    failureCount?: Prisma.SortOrder;
    successCount?: Prisma.SortOrder;
};
export type ProxyEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    host?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    failureCount?: Prisma.SortOrder;
    successCount?: Prisma.SortOrder;
    disabledUntil?: Prisma.SortOrder;
    lastCheckedAt?: Prisma.SortOrder;
    lastStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProxyEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    host?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    failureCount?: Prisma.SortOrder;
    successCount?: Prisma.SortOrder;
    disabledUntil?: Prisma.SortOrder;
    lastCheckedAt?: Prisma.SortOrder;
    lastStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProxyEntrySumOrderByAggregateInput = {
    port?: Prisma.SortOrder;
    failureCount?: Prisma.SortOrder;
    successCount?: Prisma.SortOrder;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type EnumProxyStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProxyStatus;
};
export type ProxyEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    url?: boolean;
    host?: boolean;
    port?: boolean;
    username?: boolean;
    isActive?: boolean;
    failureCount?: boolean;
    successCount?: boolean;
    disabledUntil?: boolean;
    lastCheckedAt?: boolean;
    lastStatus?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["proxyEntry"]>;
export type ProxyEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    url?: boolean;
    host?: boolean;
    port?: boolean;
    username?: boolean;
    isActive?: boolean;
    failureCount?: boolean;
    successCount?: boolean;
    disabledUntil?: boolean;
    lastCheckedAt?: boolean;
    lastStatus?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["proxyEntry"]>;
export type ProxyEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    url?: boolean;
    host?: boolean;
    port?: boolean;
    username?: boolean;
    isActive?: boolean;
    failureCount?: boolean;
    successCount?: boolean;
    disabledUntil?: boolean;
    lastCheckedAt?: boolean;
    lastStatus?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["proxyEntry"]>;
export type ProxyEntrySelectScalar = {
    id?: boolean;
    url?: boolean;
    host?: boolean;
    port?: boolean;
    username?: boolean;
    isActive?: boolean;
    failureCount?: boolean;
    successCount?: boolean;
    disabledUntil?: boolean;
    lastCheckedAt?: boolean;
    lastStatus?: boolean;
    createdAt?: boolean;
};
export type ProxyEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "url" | "host" | "port" | "username" | "isActive" | "failureCount" | "successCount" | "disabledUntil" | "lastCheckedAt" | "lastStatus" | "createdAt", ExtArgs["result"]["proxyEntry"]>;
export type $ProxyEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProxyEntry";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        url: string;
        host: string;
        port: number;
        username: string | null;
        isActive: boolean;
        failureCount: number;
        successCount: number;
        disabledUntil: Date | null;
        lastCheckedAt: Date | null;
        lastStatus: $Enums.ProxyStatus;
        createdAt: Date;
    }, ExtArgs["result"]["proxyEntry"]>;
    composites: {};
};
export type ProxyEntryGetPayload<S extends boolean | null | undefined | ProxyEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProxyEntryPayload, S>;
export type ProxyEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProxyEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProxyEntryCountAggregateInputType | true;
};
export interface ProxyEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProxyEntry'];
        meta: {
            name: 'ProxyEntry';
        };
    };
    findUnique<T extends ProxyEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, ProxyEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProxyEntryClient<runtime.Types.Result.GetResult<Prisma.$ProxyEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProxyEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProxyEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProxyEntryClient<runtime.Types.Result.GetResult<Prisma.$ProxyEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProxyEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, ProxyEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProxyEntryClient<runtime.Types.Result.GetResult<Prisma.$ProxyEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProxyEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProxyEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProxyEntryClient<runtime.Types.Result.GetResult<Prisma.$ProxyEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProxyEntryFindManyArgs>(args?: Prisma.SelectSubset<T, ProxyEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProxyEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProxyEntryCreateArgs>(args: Prisma.SelectSubset<T, ProxyEntryCreateArgs<ExtArgs>>): Prisma.Prisma__ProxyEntryClient<runtime.Types.Result.GetResult<Prisma.$ProxyEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProxyEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, ProxyEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProxyEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProxyEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProxyEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProxyEntryDeleteArgs>(args: Prisma.SelectSubset<T, ProxyEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__ProxyEntryClient<runtime.Types.Result.GetResult<Prisma.$ProxyEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProxyEntryUpdateArgs>(args: Prisma.SelectSubset<T, ProxyEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__ProxyEntryClient<runtime.Types.Result.GetResult<Prisma.$ProxyEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProxyEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProxyEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProxyEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, ProxyEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProxyEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProxyEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProxyEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProxyEntryUpsertArgs>(args: Prisma.SelectSubset<T, ProxyEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__ProxyEntryClient<runtime.Types.Result.GetResult<Prisma.$ProxyEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProxyEntryCountArgs>(args?: Prisma.Subset<T, ProxyEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProxyEntryCountAggregateOutputType> : number>;
    aggregate<T extends ProxyEntryAggregateArgs>(args: Prisma.Subset<T, ProxyEntryAggregateArgs>): Prisma.PrismaPromise<GetProxyEntryAggregateType<T>>;
    groupBy<T extends ProxyEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProxyEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: ProxyEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProxyEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProxyEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProxyEntryFieldRefs;
}
export interface Prisma__ProxyEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProxyEntryFieldRefs {
    readonly id: Prisma.FieldRef<"ProxyEntry", 'String'>;
    readonly url: Prisma.FieldRef<"ProxyEntry", 'String'>;
    readonly host: Prisma.FieldRef<"ProxyEntry", 'String'>;
    readonly port: Prisma.FieldRef<"ProxyEntry", 'Int'>;
    readonly username: Prisma.FieldRef<"ProxyEntry", 'String'>;
    readonly isActive: Prisma.FieldRef<"ProxyEntry", 'Boolean'>;
    readonly failureCount: Prisma.FieldRef<"ProxyEntry", 'Int'>;
    readonly successCount: Prisma.FieldRef<"ProxyEntry", 'Int'>;
    readonly disabledUntil: Prisma.FieldRef<"ProxyEntry", 'DateTime'>;
    readonly lastCheckedAt: Prisma.FieldRef<"ProxyEntry", 'DateTime'>;
    readonly lastStatus: Prisma.FieldRef<"ProxyEntry", 'ProxyStatus'>;
    readonly createdAt: Prisma.FieldRef<"ProxyEntry", 'DateTime'>;
}
export type ProxyEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProxyEntrySelect<ExtArgs> | null;
    omit?: Prisma.ProxyEntryOmit<ExtArgs> | null;
    where: Prisma.ProxyEntryWhereUniqueInput;
};
export type ProxyEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProxyEntrySelect<ExtArgs> | null;
    omit?: Prisma.ProxyEntryOmit<ExtArgs> | null;
    where: Prisma.ProxyEntryWhereUniqueInput;
};
export type ProxyEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProxyEntrySelect<ExtArgs> | null;
    omit?: Prisma.ProxyEntryOmit<ExtArgs> | null;
    where?: Prisma.ProxyEntryWhereInput;
    orderBy?: Prisma.ProxyEntryOrderByWithRelationInput | Prisma.ProxyEntryOrderByWithRelationInput[];
    cursor?: Prisma.ProxyEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProxyEntryScalarFieldEnum | Prisma.ProxyEntryScalarFieldEnum[];
};
export type ProxyEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProxyEntrySelect<ExtArgs> | null;
    omit?: Prisma.ProxyEntryOmit<ExtArgs> | null;
    where?: Prisma.ProxyEntryWhereInput;
    orderBy?: Prisma.ProxyEntryOrderByWithRelationInput | Prisma.ProxyEntryOrderByWithRelationInput[];
    cursor?: Prisma.ProxyEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProxyEntryScalarFieldEnum | Prisma.ProxyEntryScalarFieldEnum[];
};
export type ProxyEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProxyEntrySelect<ExtArgs> | null;
    omit?: Prisma.ProxyEntryOmit<ExtArgs> | null;
    where?: Prisma.ProxyEntryWhereInput;
    orderBy?: Prisma.ProxyEntryOrderByWithRelationInput | Prisma.ProxyEntryOrderByWithRelationInput[];
    cursor?: Prisma.ProxyEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProxyEntryScalarFieldEnum | Prisma.ProxyEntryScalarFieldEnum[];
};
export type ProxyEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProxyEntrySelect<ExtArgs> | null;
    omit?: Prisma.ProxyEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProxyEntryCreateInput, Prisma.ProxyEntryUncheckedCreateInput>;
};
export type ProxyEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProxyEntryCreateManyInput | Prisma.ProxyEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProxyEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProxyEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProxyEntryOmit<ExtArgs> | null;
    data: Prisma.ProxyEntryCreateManyInput | Prisma.ProxyEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProxyEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProxyEntrySelect<ExtArgs> | null;
    omit?: Prisma.ProxyEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProxyEntryUpdateInput, Prisma.ProxyEntryUncheckedUpdateInput>;
    where: Prisma.ProxyEntryWhereUniqueInput;
};
export type ProxyEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProxyEntryUpdateManyMutationInput, Prisma.ProxyEntryUncheckedUpdateManyInput>;
    where?: Prisma.ProxyEntryWhereInput;
    limit?: number;
};
export type ProxyEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProxyEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProxyEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProxyEntryUpdateManyMutationInput, Prisma.ProxyEntryUncheckedUpdateManyInput>;
    where?: Prisma.ProxyEntryWhereInput;
    limit?: number;
};
export type ProxyEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProxyEntrySelect<ExtArgs> | null;
    omit?: Prisma.ProxyEntryOmit<ExtArgs> | null;
    where: Prisma.ProxyEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProxyEntryCreateInput, Prisma.ProxyEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProxyEntryUpdateInput, Prisma.ProxyEntryUncheckedUpdateInput>;
};
export type ProxyEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProxyEntrySelect<ExtArgs> | null;
    omit?: Prisma.ProxyEntryOmit<ExtArgs> | null;
    where: Prisma.ProxyEntryWhereUniqueInput;
};
export type ProxyEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProxyEntryWhereInput;
    limit?: number;
};
export type ProxyEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProxyEntrySelect<ExtArgs> | null;
    omit?: Prisma.ProxyEntryOmit<ExtArgs> | null;
};
export {};
