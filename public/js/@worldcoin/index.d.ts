import { C as Config, W as WidgetProps } from './config-Cp9MWjvm.js';
import * as react from 'react';
export { IErrorState, ISuccessResult, VerificationLevel } from '@worldcoin/idkit-core';
export { solidityEncode } from '@worldcoin/idkit-core/hashing';
export { IVerifyResponse, verifyCloudProof } from '@worldcoin/idkit-core/backend';

type HookConfig = Partial<Pick<Config, 'handleVerify' | 'onSuccess'>>;
declare const useIDKit: ({ handleVerify, onSuccess }?: HookConfig) => {
    open: boolean;
    setOpen: (open: boolean) => void;
};

declare const _default: react.NamedExoticComponent<WidgetProps>;

export { Config, _default as IDKitWidget, WidgetProps, useIDKit };
