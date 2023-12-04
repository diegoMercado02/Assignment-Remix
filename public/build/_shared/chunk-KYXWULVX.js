import {
  Link,
  init_dist2 as init_dist
} from "/build/_shared/chunk-4FPL6IGH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-24DQK37A.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/button.tsx
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/button.tsx"
  );
  import.meta.hot.lastModified = "1701688987101.3035";
}
var RoundedLinkButton = ({
  to,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to, className: " text-black font-semibold rounded-xl bg-purple-100 py-5 px-4 shadow-lg hover:shadow-lg focus:outline-none focus:ring focus:border-purple-300", children }, void 0, false, {
    fileName: "app/components/button.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = RoundedLinkButton;
var button_default = RoundedLinkButton;
var _c;
$RefreshReg$(_c, "RoundedLinkButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  button_default
};
//# sourceMappingURL=/build/_shared/chunk-KYXWULVX.js.map
