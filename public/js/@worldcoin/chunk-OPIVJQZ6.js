// src/lang/index.ts
var translations = {};
var getLang = () => {
  if (!navigator?.languages) return;
  const supportedLang = navigator.languages.find((l) => translations[l] != void 0) ?? "";
  return translations[supportedLang];
};
var replaceParams = (str, params) => {
  let replaced = str;
  for (const [key, value] of Object.entries(params ?? {})) replaced = str.replace(`:${key}`, value);
  return replaced;
};
function __(str, params) {
  if (typeof navigator === "undefined") return str;
  return replaceParams(getLang()?.[str] ?? str, params);
}

// src/store/idkit.ts
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import {
  AppErrorCodes,
  DEFAULT_VERIFICATION_LEVEL
} from "@worldcoin/idkit-core";
var SELF_HOSTED_APP_ID = "self_hosted";
var useIDKitStore = createWithEqualityFn()(
  (set, get) => ({
    app_id: "",
    signal: "",
    action: "",
    action_description: "",
    bridge_url: "",
    verification_level: DEFAULT_VERIFICATION_LEVEL,
    open: false,
    result: null,
    errorTitle: "",
    errorDetail: "",
    autoClose: true,
    errorState: null,
    processing: false,
    errorCallbacks: {},
    verifyCallbacks: {},
    successCallbacks: {},
    stage: "WORLD_ID" /* WORLD_ID */,
    setStage: (stage) => set({ stage }),
    setErrorState: (errorState) => set({ errorState }),
    setProcessing: (processing) => set({ processing }),
    retryFlow: () => {
      set({ stage: "WORLD_ID" /* WORLD_ID */, errorState: null });
    },
    addErrorCallback: (cb, source) => {
      set((state) => {
        state.errorCallbacks[source] = cb;
        return state;
      });
    },
    addSuccessCallback: (cb, source) => {
      set((state) => {
        state.successCallbacks[source] = cb;
        return state;
      });
    },
    addVerificationCallback: (cb, source) => {
      set((state) => {
        state.verifyCallbacks[source] = cb;
        return state;
      });
    },
    setOptions: ({
      handleVerify,
      onSuccess,
      signal,
      action,
      app_id,
      onError,
      verification_level,
      action_description,
      bridge_url,
      autoClose,
      advanced
    }, source) => {
      set({
        signal,
        action,
        bridge_url,
        action_description,
        autoClose: autoClose ?? true,
        app_id: advanced?.self_hosted ? SELF_HOSTED_APP_ID : app_id,
        verification_level: verification_level ?? DEFAULT_VERIFICATION_LEVEL
      });
      get().addSuccessCallback(onSuccess, source);
      if (onError) get().addErrorCallback(onError, source);
      if (handleVerify) get().addVerificationCallback(handleVerify, source);
    },
    handleVerify: (result) => {
      set({ stage: "HOST_APP_VERIFICATION" /* HOST_APP_VERIFICATION */, processing: false });
      Promise.all(Object.values(get().verifyCallbacks).map(async (cb) => cb?.(result))).then(
        () => {
          set({ stage: "SUCCESS" /* SUCCESS */, result });
          if (get().autoClose) setTimeout(() => get().onOpenChange(false), 2500);
        },
        (response) => {
          let errorMessage = void 0;
          if (response && typeof response === "object" && response.message) {
            errorMessage = response.message;
          }
          set({
            stage: "ERROR" /* ERROR */,
            errorState: {
              code: AppErrorCodes.FailedByHostApp,
              message: errorMessage ? __(errorMessage) : void 0
            }
          });
        }
      );
    },
    onOpenChange: (open) => {
      if (open) {
        return set({ open });
      }
      const errorState = get().errorState;
      if (get().stage === "ERROR" /* ERROR */ && errorState) {
        const callbacks = get().errorCallbacks;
        requestAnimationFrame(() => Object.values(callbacks).forEach((cb) => void cb?.(errorState)));
      }
      const result = get().result;
      if (get().stage == "SUCCESS" /* SUCCESS */ && result) {
        const callbacks = get().successCallbacks;
        requestAnimationFrame(() => Object.values(callbacks).forEach((cb) => void cb?.(result)));
      }
      set({
        open,
        result: null,
        errorState: null,
        processing: false,
        stage: "WORLD_ID" /* WORLD_ID */
      });
    }
  }),
  shallow
);
var idkit_default = useIDKitStore;

// src/types/config.ts
var ConfigSource = /* @__PURE__ */ ((ConfigSource2) => {
  ConfigSource2["HOOK"] = "hook";
  ConfigSource2["PROPS"] = "props";
  ConfigSource2["MANUAL"] = "manual";
  return ConfigSource2;
})(ConfigSource || {});

// src/components/QRCode.tsx
import { memo, useMemo } from "react";
import QRCodeUtil from "qrcode/lib/core/qrcode.js";
import { jsx } from "react/jsx-runtime";
var generateMatrix = (data) => {
  const arr = QRCodeUtil.create(data, { errorCorrectionLevel: "M" }).modules.data;
  const sqrt = Math.sqrt(arr.length);
  return arr.reduce((rows, key, index) => {
    if (index % sqrt === 0) rows.push([key]);
    else rows[rows.length - 1].push(key);
    return rows;
  }, []);
};
var Qrcode = ({ data, size = 300 }) => {
  const dots = useMemo(() => {
    const dots2 = [];
    const matrix = generateMatrix(data);
    const cellSize = size / matrix.length;
    const qrList = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ];
    qrList.forEach(({ x, y }) => {
      const x1 = (matrix.length - 7) * cellSize * x;
      const y1 = (matrix.length - 7) * cellSize * y;
      for (let i = 0; i < 3; i++) {
        dots2.push(
          /* @__PURE__ */ jsx(
            "rect",
            {
              fill: "currentColor",
              x: x1 + cellSize * i,
              y: y1 + cellSize * i,
              width: cellSize * (7 - i * 2),
              height: cellSize * (7 - i * 2),
              rx: (i - 2) * -5,
              ry: (i - 2) * -5,
              className: i % 3 === 0 ? "text-black" : i % 3 === 1 ? "text-white" : "text-black"
            },
            `${i}-${x}-${y}`
          )
        );
      }
    });
    matrix.forEach((row, i) => {
      row.forEach((_, j) => {
        if (!matrix[i][j]) return;
        if (i < 7 && j < 7 || i > matrix.length - 8 && j < 7 || i < 7 && j > matrix.length - 8) return;
        dots2.push(
          /* @__PURE__ */ jsx(
            "circle",
            {
              fill: "currentColor",
              r: cellSize / 3,
              cx: i * cellSize + cellSize / 2,
              cy: j * cellSize + cellSize / 2,
              className: "text-black dark:text-white"
            },
            `circle-${i}-${j}`
          )
        );
      });
    });
    return dots2;
  }, [size, data]);
  return /* @__PURE__ */ jsx("svg", { height: size, width: size, "data-test-id": "qr-code", children: dots });
};
var QRCode_default = memo(Qrcode);

export {
  __,
  idkit_default,
  ConfigSource,
  QRCode_default
};