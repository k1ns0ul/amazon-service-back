import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CookieSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$CookieSessionPayload>;
export type AggregateCookieSession = {
    _count: CookieSessionCountAggregateOutputType | null;
    _min: CookieSessionMinAggregateOutputType | null;
    _max: CookieSessionMaxAggregateOutputType | null;
};
export type CookieSessionMinAggregateOutputType = {
    id: string | null;
    cookieHeader: string | null;
    isValid: boolean | null;
    capturedAt: Date | null;
    expiresAt: Date | null;
    lastUsedAt: Date | null;
};
export type CookieSessionMaxAggregateOutputType = {
    id: string | null;
    cookieHeader: string | null;
    isValid: boolean | null;
    capturedAt: Date | null;
    expiresAt: Date | null;
    lastUsedAt: Date | null;
};
export type CookieSessionCountAggregateOutputType = {
    id: number;
    cookieHeader: number;
    isValid: number;
    capturedAt: number;
    expiresAt: number;
    lastUsedAt: number;
    _all: number;
};
export type CookieSessionMinAggregateInputType = {
    id?: true;
    cookieHeader?: true;
    isValid?: true;
    capturedAt?: true;
    expiresAt?: true;
    lastUsedAt?: true;
};
export type CookieSessionMaxAggregateInputType = {
    id?: true;
    cookieHeader?: true;
    isValid?: true;
    capturedAt?: true;
    expiresAt?: true;
    lastUsedAt?: true;
};
export type CookieSessionCountAggregateInputType = {
    id?: true;
    cookieHeader?: true;
    isValid?: true;
    capturedAt?: true;
    expiresAt?: true;
    lastUsedAt?: true;
    _all?: true;
};
export type CookieSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CookieSessionWhereInput;
    orderBy?: Prisma.CookieSessionOrderByWithRelationInput | Prisma.CookieSessionOrderByWithRelationInput[];
    cursor?: Prisma.CookieSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CookieSessionCountAggregateInputType;
    _min?: CookieSessionMinAggregateInputType;
    _max?: CookieSessionMaxAggregateInputType;
};
export type GetCookieSessionAggregateType<T extends CookieSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateCookieSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCookieSession[P]> : Prisma.GetScalarType<T[P], AggregateCookieSession[P]>;
};
export type CookieSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CookieSessionWhereInput;
    orderBy?: Prisma.CookieSessionOrderByWithAggregationInput | Prisma.CookieSessionOrderByWithAggregationInput[];
    by: Prisma.CookieSessionScalarFieldEnum[] | Prisma.CookieSessionScalarFieldEnum;
    having?: Prisma.CookieSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CookieSessionCountAggregateInputType | true;
    _min?: CookieSessionMinAggregateInputType;
    _max?: CookieSessionMaxAggregateInputType;
};
export type CookieSessionGroupByOutputType = {
    id: string;
    cookieHeader: string;
    isValid: boolean;
    capturedAt: Date;
    expiresAt: Date;
    lastUsedAt: Date | null;
    _count: CookieSessionCountAggregateOutputType | null;
    _min: CookieSessionMinAggregateOutputType | null;
    _max: CookieSessionMaxAggregateOutputType | null;
};
type GetCookieSessionGroupByPayload<T extends CookieSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CookieSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CookieSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CookieSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CookieSessionGroupByOutputType[P]>;
}>>;
export type CookieSessionWhereInput = {
    AND?: Prisma.CookieSessionWhereInput | Prisma.CookieSessionWhereInput[];
    OR?: Prisma.CookieSessionWhereInput[];
    NOT?: Prisma.CookieSessionWhereInput | Prisma.CookieSessionWhereInput[];
    id?: Prisma.StringFilter<"CookieSession"> | string;
    cookieHeader?: Prisma.StringFilter<"CookieSession"> | string;
    isValid?: Prisma.BoolFilter<"CookieSession"> | boolean;
    capturedAt?: Prisma.DateTimeFilter<"CookieSession"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"CookieSession"> | Date | string;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"CookieSession"> | Date | string | null;
};
export type CookieSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cookieHeader?: Prisma.SortOrder;
    isValid?: Prisma.SortOrder;
    capturedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type CookieSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CookieSessionWhereInput | Prisma.CookieSessionWhereInput[];
    OR?: Prisma.CookieSessionWhereInput[];
    NOT?: Prisma.CookieSessionWhereInput | Prisma.CookieSessionWhereInput[];
    cookieHeader?: Prisma.StringFilter<"CookieSession"> | string;
    isValid?: Prisma.BoolFilter<"CookieSession"> | boolean;
    capturedAt?: Prisma.DateTimeFilter<"CookieSession"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"CookieSession"> | Date | string;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"CookieSession"> | Date | string | null;
}, "id">;
export type CookieSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cookieHeader?: Prisma.SortOrder;
    isValid?: Prisma.SortOrder;
    capturedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CookieSessionCountOrderByAggregateInput;
    _max?: Prisma.CookieSessionMaxOrderByAggregateInput;
    _min?: Prisma.CookieSessionMinOrderByAggregateInput;
};
export type CookieSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.CookieSessionScalarWhereWithAggregatesInput | Prisma.CookieSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.CookieSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CookieSessionScalarWhereWithAggregatesInput | Prisma.CookieSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CookieSession"> | string;
    cookieHeader?: Prisma.StringWithAggregatesFilter<"CookieSession"> | string;
    isValid?: Prisma.BoolWithAggregatesFilter<"CookieSession"> | boolean;
    capturedAt?: Prisma.DateTimeWithAggregatesFilter<"CookieSession"> | Date | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"CookieSession"> | Date | string;
    lastUsedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CookieSession"> | Date | string | null;
};
export type CookieSessionCreateInput = {
    id?: string;
    cookieHeader: string;
    isValid?: boolean;
    capturedAt?: Date | string;
    expiresAt: Date | string;
    lastUsedAt?: Date | string | null;
};
export type CookieSessionUncheckedCreateInput = {
    id?: string;
    cookieHeader: string;
    isValid?: boolean;
    capturedAt?: Date | string;
    expiresAt: Date | string;
    lastUsedAt?: Date | string | null;
};
export type CookieSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cookieHeader?: Prisma.StringFieldUpdateOperationsInput | string;
    isValid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    capturedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CookieSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cookieHeader?: Prisma.StringFieldUpdateOperationsInput | string;
    isValid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    capturedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CookieSessionCreateManyInput = {
    id?: string;
    cookieHeader: string;
    isValid?: boolean;
    capturedAt?: Date | string;
    expiresAt: Date | string;
    lastUsedAt?: Date | string | null;
};
export type CookieSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cookieHeader?: Prisma.StringFieldUpdateOperationsInput | string;
    isValid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    capturedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CookieSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cookieHeader?: Prisma.StringFieldUpdateOperationsInput | string;
    isValid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    capturedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CookieSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cookieHeader?: Prisma.SortOrder;
    isValid?: Prisma.SortOrder;
    capturedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
};
export type CookieSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cookieHeader?: Prisma.SortOrder;
    isValid?: Prisma.SortOrder;
    capturedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
};
export type CookieSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cookieHeader?: Prisma.SortOrder;
    isValid?: Prisma.SortOrder;
    capturedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
};
export type CookieSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cookieHeader?: boolean;
    isValid?: boolean;
    capturedAt?: boolean;
    expiresAt?: boolean;
    lastUsedAt?: boolean;
}, ExtArgs["result"]["cookieSession"]>;
export type CookieSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cookieHeader?: boolean;
    isValid?: boolean;
    capturedAt?: boolean;
    expiresAt?: boolean;
    lastUsedAt?: boolean;
}, ExtArgs["result"]["cookieSession"]>;
export type CookieSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cookieHeader?: boolean;
    isValid?: boolean;
    capturedAt?: boolean;
    expiresAt?: boolean;
    lastUsedAt?: boolean;
}, ExtArgs["result"]["cookieSession"]>;
export type CookieSessionSelectScalar = {
    id?: boolean;
    cookieHeader?: boolean;
    isValid?: boolean;
    capturedAt?: boolean;
    expiresAt?: boolean;
    lastUsedAt?: boolean;
};
export type CookieSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cookieHeader" | "isValid" | "capturedAt" | "expiresAt" | "lastUsedAt", ExtArgs["result"]["cookieSession"]>;
export type $CookieSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CookieSession";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cookieHeader: string;
        isValid: boolean;
        capturedAt: Date;
        expiresAt: Date;
        lastUsedAt: Date | null;
    }, ExtArgs["result"]["cookieSession"]>;
    composites: {};
};
export type CookieSessionGetPayload<S extends boolean | null | undefined | CookieSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CookieSessionPayload, S>;
export type CookieSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CookieSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CookieSessionCountAggregateInputType | true;
};
export interface CookieSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CookieSession'];
        meta: {
            name: 'CookieSession';
        };
    };
    findUnique<T extends CookieSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, CookieSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CookieSessionClient<runtime.Types.Result.GetResult<Prisma.$CookieSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CookieSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CookieSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CookieSessionClient<runtime.Types.Result.GetResult<Prisma.$CookieSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CookieSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, CookieSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__CookieSessionClient<runtime.Types.Result.GetResult<Prisma.$CookieSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CookieSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CookieSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CookieSessionClient<runtime.Types.Result.GetResult<Prisma.$CookieSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CookieSessionFindManyArgs>(args?: Prisma.SelectSubset<T, CookieSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CookieSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CookieSessionCreateArgs>(args: Prisma.SelectSubset<T, CookieSessionCreateArgs<ExtArgs>>): Prisma.Prisma__CookieSessionClient<runtime.Types.Result.GetResult<Prisma.$CookieSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CookieSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, CookieSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CookieSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CookieSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CookieSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CookieSessionDeleteArgs>(args: Prisma.SelectSubset<T, CookieSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__CookieSessionClient<runtime.Types.Result.GetResult<Prisma.$CookieSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CookieSessionUpdateArgs>(args: Prisma.SelectSubset<T, CookieSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__CookieSessionClient<runtime.Types.Result.GetResult<Prisma.$CookieSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CookieSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, CookieSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CookieSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, CookieSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CookieSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CookieSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CookieSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CookieSessionUpsertArgs>(args: Prisma.SelectSubset<T, CookieSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__CookieSessionClient<runtime.Types.Result.GetResult<Prisma.$CookieSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CookieSessionCountArgs>(args?: Prisma.Subset<T, CookieSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CookieSessionCountAggregateOutputType> : number>;
    aggregate<T extends CookieSessionAggregateArgs>(args: Prisma.Subset<T, CookieSessionAggregateArgs>): Prisma.PrismaPromise<GetCookieSessionAggregateType<T>>;
    groupBy<T extends CookieSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CookieSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: CookieSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CookieSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCookieSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CookieSessionFieldRefs;
}
export interface Prisma__CookieSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CookieSessionFieldRefs {
    readonly id: Prisma.FieldRef<"CookieSession", 'String'>;
    readonly cookieHeader: Prisma.FieldRef<"CookieSession", 'String'>;
    readonly isValid: Prisma.FieldRef<"CookieSession", 'Boolean'>;
    readonly capturedAt: Prisma.FieldRef<"CookieSession", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"CookieSession", 'DateTime'>;
    readonly lastUsedAt: Prisma.FieldRef<"CookieSession", 'DateTime'>;
}
export type CookieSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CookieSessionSelect<ExtArgs> | null;
    omit?: Prisma.CookieSessionOmit<ExtArgs> | null;
    where: Prisma.CookieSessionWhereUniqueInput;
};
export type CookieSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CookieSessionSelect<ExtArgs> | null;
    omit?: Prisma.CookieSessionOmit<ExtArgs> | null;
    where: Prisma.CookieSessionWhereUniqueInput;
};
export type CookieSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CookieSessionSelect<ExtArgs> | null;
    omit?: Prisma.CookieSessionOmit<ExtArgs> | null;
    where?: Prisma.CookieSessionWhereInput;
    orderBy?: Prisma.CookieSessionOrderByWithRelationInput | Prisma.CookieSessionOrderByWithRelationInput[];
    cursor?: Prisma.CookieSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CookieSessionScalarFieldEnum | Prisma.CookieSessionScalarFieldEnum[];
};
export type CookieSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CookieSessionSelect<ExtArgs> | null;
    omit?: Prisma.CookieSessionOmit<ExtArgs> | null;
    where?: Prisma.CookieSessionWhereInput;
    orderBy?: Prisma.CookieSessionOrderByWithRelationInput | Prisma.CookieSessionOrderByWithRelationInput[];
    cursor?: Prisma.CookieSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CookieSessionScalarFieldEnum | Prisma.CookieSessionScalarFieldEnum[];
};
export type CookieSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CookieSessionSelect<ExtArgs> | null;
    omit?: Prisma.CookieSessionOmit<ExtArgs> | null;
    where?: Prisma.CookieSessionWhereInput;
    orderBy?: Prisma.CookieSessionOrderByWithRelationInput | Prisma.CookieSessionOrderByWithRelationInput[];
    cursor?: Prisma.CookieSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CookieSessionScalarFieldEnum | Prisma.CookieSessionScalarFieldEnum[];
};
export type CookieSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CookieSessionSelect<ExtArgs> | null;
    omit?: Prisma.CookieSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CookieSessionCreateInput, Prisma.CookieSessionUncheckedCreateInput>;
};
export type CookieSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CookieSessionCreateManyInput | Prisma.CookieSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CookieSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CookieSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CookieSessionOmit<ExtArgs> | null;
    data: Prisma.CookieSessionCreateManyInput | Prisma.CookieSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CookieSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CookieSessionSelect<ExtArgs> | null;
    omit?: Prisma.CookieSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CookieSessionUpdateInput, Prisma.CookieSessionUncheckedUpdateInput>;
    where: Prisma.CookieSessionWhereUniqueInput;
};
export type CookieSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CookieSessionUpdateManyMutationInput, Prisma.CookieSessionUncheckedUpdateManyInput>;
    where?: Prisma.CookieSessionWhereInput;
    limit?: number;
};
export type CookieSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CookieSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CookieSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CookieSessionUpdateManyMutationInput, Prisma.CookieSessionUncheckedUpdateManyInput>;
    where?: Prisma.CookieSessionWhereInput;
    limit?: number;
};
export type CookieSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CookieSessionSelect<ExtArgs> | null;
    omit?: Prisma.CookieSessionOmit<ExtArgs> | null;
    where: Prisma.CookieSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.CookieSessionCreateInput, Prisma.CookieSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CookieSessionUpdateInput, Prisma.CookieSessionUncheckedUpdateInput>;
};
export type CookieSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CookieSessionSelect<ExtArgs> | null;
    omit?: Prisma.CookieSessionOmit<ExtArgs> | null;
    where: Prisma.CookieSessionWhereUniqueInput;
};
export type CookieSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CookieSessionWhereInput;
    limit?: number;
};
export type CookieSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CookieSessionSelect<ExtArgs> | null;
    omit?: Prisma.CookieSessionOmit<ExtArgs> | null;
};
export {};
