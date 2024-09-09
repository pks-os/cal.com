import { z } from "zod";
export declare const ZListMembersSchema: z.ZodObject<{
    limit: z.ZodNumber;
    cursor: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    searchTerm: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    cursor?: number | null | undefined;
    searchTerm?: string | null | undefined;
}, {
    limit: number;
    cursor?: number | null | undefined;
    searchTerm?: string | null | undefined;
}>;
export type TListMembersSchema = z.infer<typeof ZListMembersSchema>;
