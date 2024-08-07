import { IDKitConfig, ISuccessResult, IErrorState } from '@worldcoin/idkit-core';

declare enum IDKITStage {
    WORLD_ID = "WORLD_ID",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    HOST_APP_VERIFICATION = "HOST_APP_VERIFICATION"
}
type CallbackFn<T> = (result: T) => Promise<void> | void;

declare enum ConfigSource {
    HOOK = "hook",
    PROPS = "props",
    MANUAL = "manual"
}
type WidgetConfig = {
    /** Whether to automatically close the widget after a successful verification. Defaults to `false`. */
    autoClose?: boolean;
    /** Function to trigger when verification is successful. Should receive a single parameter of type `ISuccessResult` which contains the proof details. */
    onSuccess: CallbackFn<ISuccessResult>;
    /** Called after the proof is returned from the World App, but before showing the success screen. Throwing in this screen will show the user a custom error. Used to perform additional validation when needed. */
    handleVerify?: CallbackFn<ISuccessResult>;
    /** Function to trigger when verification is not successful. Should receive a single parameter of type `IErrorState` which contains the error details. */
    onError?: CallbackFn<IErrorState>;
};
type Config = Required<Pick<IDKitConfig, 'action'>> & WidgetConfig & ((Exclude<IDKitConfig, 'app_id'> & {
    advanced: {
        self_hosted: true;
    };
}) | (IDKitConfig & {
    advanced?: {
        self_hosted?: false;
    };
}));
type WidgetProps = Config & {
    children?: ({ open }: {
        open: () => void;
    }) => JSX.Element;
};

export { type Config as C, IDKITStage as I, type WidgetProps as W, ConfigSource as a, type CallbackFn as b };
