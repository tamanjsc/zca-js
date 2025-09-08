import type { User } from "../models/index.js";
export type FetchAccountInfoResponse = User;
export declare const fetchAccountInfoFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => () => Promise<User>;
