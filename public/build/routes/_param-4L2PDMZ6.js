import {
  init_dist2 as init_dist,
  useParams
} from "/build/_shared/chunk-4FPL6IGH.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-24DQK37A.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_param.tsx
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_param.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_param.tsx"
  );
  import.meta.hot.lastModified = "1701690165723.9287";
}
var ConversionResult = () => {
  _s();
  const {
    symbol,
    quantity
  } = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Conversion Result" }, void 0, false, {
      fileName: "app/routes/_param.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Symbol: ",
      symbol ?? "N/A",
      ", Quantity: ",
      parseFloat(quantity ?? "0").toFixed(6)
    ] }, void 0, true, {
      fileName: "app/routes/_param.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_param.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s(ConversionResult, "Dk1Jxwnpf8FRDo8tfNLQUxn7Hh8=", false, function() {
  return [useParams];
});
_c = ConversionResult;
var param_default = ConversionResult;
var _c;
$RefreshReg$(_c, "ConversionResult");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  param_default as default
};
//# sourceMappingURL=/build/routes/_param-4L2PDMZ6.js.map
