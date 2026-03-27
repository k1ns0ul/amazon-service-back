export declare class JobStatusResponseDto {
    ok: boolean;
    jobId: string;
    status: 'PENDING' | 'RUNNING' | 'DONE' | 'FAILED';
    type: string;
    productsFound: number;
    productsOk: number;
    productsFailed: number;
    durationMs: number | null;
    requestedAt: Date;
    startedAt: Date | null;
    finishedAt: Date | null;
    errorMessage: string | null;
}
