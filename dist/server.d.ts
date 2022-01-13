import { Identity } from "./identity";
import { KeyPair } from "./keys";
import { Cbor, Message } from "./message";
export declare function sendEncoded(url: string, cbor: Cbor): Promise<Cbor>;
export declare function send(url: string, message: Message, keys?: KeyPair): Promise<any>;
export declare function connect(url: string): {
    call: typeof call;
    endpoints: (prefix?: string | undefined) => Promise<any>;
    heartbeat: () => Promise<any>;
    status: () => Promise<any>;
    echo: (message: any) => Promise<any>;
    abciBeginBlock: () => never;
    abciCommit: () => never;
    abciEndBlock: () => never;
    abciInfo: () => never;
    abciInit: () => never;
    accountBalance: (symbols: string[], keys: KeyPair) => Promise<any>;
    accountBurn: () => never;
    accountInfo: (keys?: KeyPair | undefined) => Promise<any>;
    accountMint: () => never;
    accountSend: (to: Identity, amount: bigint, symbol: string, keys: KeyPair) => Promise<any>;
    ledgerInfo: () => Promise<any>;
    ledgerList: () => never;
};
declare function call(url: string, method: string, keys?: KeyPair): Promise<any>;
declare function call(url: string, method: string, args?: any, keys?: KeyPair): Promise<any>;
export {};
