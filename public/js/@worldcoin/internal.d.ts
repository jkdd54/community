import * as react from 'react';
import * as zustand_traditional from 'zustand/traditional';
import * as zustand_vanilla from 'zustand/vanilla';
import { I as IDKITStage, a as ConfigSource, b as CallbackFn, C as Config } from './config-Cp9MWjvm.js';
import { IDKitConfig, ISuccessResult, IErrorState } from '@worldcoin/idkit-core';

type CleanWord<T> = T extends `${string}${' ' | ',' | '!' | '?' | '.' | '`'}${string}` ? never : T extends '' ? never : T;
type ExtractPlaceholders<S extends string> = S extends `${string}:${infer Placeholder}` ? Placeholder extends `${infer Word}${' ' | ',' | '!' | '?' | '.' | '`'}${infer Rest}` ? CleanWord<Word> | ExtractPlaceholders<Rest> : never : never;
type NoPlaceholder<S extends string> = S extends `${string}:${string}` ? never : S;
type PlaceholderValues<S extends string> = {
    [K in ExtractPlaceholders<S>]: string;
};
declare function __<S extends `${string}:${string}`>(str: S, params: PlaceholderValues<S>): string;
declare function __<S extends string>(str: NoPlaceholder<S>): string;

type Props = {
    data: string;
    size?: number;
};
declare const _default: react.MemoExoticComponent<({ data, size }: Props) => JSX.Element>;

declare const SELF_HOSTED_APP_ID = "self_hosted";
type IDKitStore = {
    app_id: IDKitConfig['app_id'] | typeof SELF_HOSTED_APP_ID | '';
    action: IDKitConfig['action'];
    signal: IDKitConfig['signal'];
    bridge_url?: IDKitConfig['bridge_url'];
    action_description?: IDKitConfig['action_description'];
    verification_level: NonNullable<IDKitConfig['verification_level']>;
    open: boolean;
    stage: IDKITStage;
    autoClose: boolean;
    processing: boolean;
    result: ISuccessResult | null;
    errorState: IErrorState | null;
    errorCallbacks: Record<ConfigSource, CallbackFn<IErrorState> | undefined> | Record<string, never>;
    verifyCallbacks: Record<ConfigSource, CallbackFn<ISuccessResult> | undefined> | Record<string, never>;
    successCallbacks: Record<ConfigSource, CallbackFn<ISuccessResult> | undefined> | Record<string, never>;
    retryFlow: () => void;
    setStage: (stage: IDKITStage) => void;
    onOpenChange: (open: boolean) => void;
    setProcessing: (processing: boolean) => void;
    handleVerify: (result: ISuccessResult) => void;
    setErrorState: (state: IErrorState | null) => void;
    setOptions: (options: Config, source: ConfigSource) => void;
    addErrorCallback: (cb: CallbackFn<IErrorState>, source: ConfigSource) => void;
    addSuccessCallback: (cb: CallbackFn<ISuccessResult>, source: ConfigSource) => void;
    addVerificationCallback: (cb: CallbackFn<ISuccessResult>, source: ConfigSource) => void;
};
declare const useIDKitStore: zustand_traditional.UseBoundStoreWithEqualityFn<zustand_vanilla.StoreApi<IDKitStore>>;

export { ConfigSource, _default as QRCode, __, useIDKitStore };
