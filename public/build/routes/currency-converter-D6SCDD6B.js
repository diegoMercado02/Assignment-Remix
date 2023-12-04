import {
  init_dist2 as init_dist,
  useSearchParams
} from "/build/_shared/chunk-4FPL6IGH.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-24DQK37A.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/currency-converter.tsx
var import_react = __toESM(require_react(), 1);
init_dist();

// app/components/CurrencyDropdown.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/CurrencyDropdown.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/CurrencyDropdown.tsx"
  );
  import.meta.hot.lastModified = "1701691385462.26";
}
function CurrencyDropdown({
  currencies,
  selectedCurrency,
  onSelectCurrency
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col mb-4 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "currency", className: "mb-2", children: "Select Currency:" }, void 0, false, {
      fileName: "app/components/CurrencyDropdown.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "currency", value: selectedCurrency, onChange: (e) => onSelectCurrency(e.target.value), className: "text-black p-2 border border-gray-300 rounded-md", children: currencies.map((currency) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: currency, children: currency }, currency, false, {
      fileName: "app/components/CurrencyDropdown.tsx",
      lineNumber: 34,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "app/components/CurrencyDropdown.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CurrencyDropdown.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = CurrencyDropdown;
var CurrencyDropdown_default = CurrencyDropdown;
var _c;
$RefreshReg$(_c, "CurrencyDropdown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/currency-converter.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/currency-converter.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/currency-converter.tsx"
  );
  import.meta.hot.lastModified = "1701696669356.119";
}
var apiUrl = "https://currency-exchange.p.rapidapi.com";
var headers = {
  "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
  "X-RapidAPI-Key": "51718725bdmshd55cc7a4537be62p19d336jsnf99a16b27253"
  // Replace with your actual API key
};
function CurrencyConverter() {
  _s();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currencies, setCurrencies] = (0, import_react.useState)([]);
  const [fromCurrency, setFromCurrency] = (0, import_react.useState)(searchParams.get("from") || "USD");
  const [toCurrency, setToCurrency] = (0, import_react.useState)(searchParams.get("to") || "EUR");
  const [amount, setAmount] = (0, import_react.useState)(Number(searchParams.get("q")) || 1);
  const [convertedAmount, setConvertedAmount] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    fetch(`${apiUrl}/listquotes`, {
      method: "GET",
      headers
    }).then((response) => response.json()).then((data) => setCurrencies(data));
  }, []);
  const performConversion = (fromCurrency2, toCurrency2, amount2) => {
    fetch(`${apiUrl}/exchange?from=${fromCurrency2}&to=${toCurrency2}&q=${amount2}`, {
      method: "GET",
      headers
    }).then((response) => response.json()).then((conversionRate) => {
      if (!isNaN(conversionRate) && !isNaN(amount2)) {
        const totalConvertedAmount = conversionRate * amount2;
        setConvertedAmount(totalConvertedAmount);
      } else {
        console.error("Invalid conversion rate or amount");
        setConvertedAmount(null);
      }
    }).catch((error) => {
      console.error("Error fetching conversion data:", error);
      setConvertedAmount(null);
    });
  };
  (0, import_react.useEffect)(() => {
    performConversion(fromCurrency, toCurrency, amount);
  }, [fromCurrency, toCurrency, amount]);
  const handleConvert = () => {
    performConversion(fromCurrency, toCurrency, amount);
    const newParams = {
      from: fromCurrency,
      to: toCurrency,
      q: amount.toString()
    };
    setSearchParams(newParams);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gradient-to-b from-indigo-700 to-purple-400 p-8 text-white flex flex-col justify-center items-center text-center gap-8 h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap 6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-4xl font-semibold", children: "Currency Converter" }, void 0, false, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Check live foreign currency exchange rates" }, void 0, false, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/currency-converter.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row bg-gradient-to-b from-indigo-700 to-purple-400 py-4 px-8 rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CurrencyDropdown_default, { currencies, selectedCurrency: fromCurrency, onSelectCurrency: setFromCurrency }, void 0, false, {
          fileName: "app/routes/currency-converter.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CurrencyDropdown_default, { currencies, selectedCurrency: toCurrency, onSelectCurrency: setToCurrency }, void 0, false, {
          fileName: "app/routes/currency-converter.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "amount", className: "mb-2", children: "Enter Amount:" }, void 0, false, {
            fileName: "app/routes/currency-converter.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "amount", type: "number", value: amount, onChange: (e) => setAmount(parseFloat(e.target.value)), className: "text-black p-2 border border-gray-300 rounded-md" }, void 0, false, {
            fileName: "app/routes/currency-converter.tsx",
            lineNumber: 96,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/currency-converter.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "bg-purple-700 text-white p-2 rounded-md cursor-pointer", onClick: handleConvert, children: "Convert" }, void 0, false, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      convertedAmount !== null && !isNaN(convertedAmount) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Converted Amount: ",
        convertedAmount.toFixed(6)
      ] }, void 0, true, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 102,
        columnNumber: 65
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/currency-converter.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/currency-converter.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_s(CurrencyConverter, "NPwXStqW4bLOWMjSHd+NesYzazY=", false, function() {
  return [useSearchParams];
});
_c2 = CurrencyConverter;
var currency_converter_default = CurrencyConverter;
var _c2;
$RefreshReg$(_c2, "CurrencyConverter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  currency_converter_default as default
};
//# sourceMappingURL=/build/routes/currency-converter-D6SCDD6B.js.map
