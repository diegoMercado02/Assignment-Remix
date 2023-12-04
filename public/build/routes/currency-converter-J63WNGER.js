import {
  button_default
} from "/build/_shared/chunk-KYXWULVX.js";
import {
  init_dist2 as init_dist,
  useParams
} from "/build/_shared/chunk-4FPL6IGH.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-24DQK37A.js";
import "/build/_shared/chunk-UWV35TSL.js";
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
  import.meta.hot.lastModified = "1701690320254.1462";
}
function CurrencyDropdown({
  currencies,
  selectedCurrency,
  onSelectCurrency
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "currency", className: "mb-2", children: "Select Currency:" }, void 0, false, {
      fileName: "app/components/CurrencyDropdown.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "currency", value: selectedCurrency, onChange: (e) => onSelectCurrency(e.target.value), className: "p-2 border border-gray-300 rounded-md", children: currencies.map((currency) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: currency, children: currency }, currency, false, {
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
  import.meta.hot.lastModified = "1701690908963.4175";
}
var apiUrl = "https://currency-exchange.p.rapidapi.com";
function CurrencyConverter() {
  _s();
  const [currencies, setCurrencies] = (0, import_react.useState)([]);
  const [fromCurrency, setFromCurrency] = (0, import_react.useState)("USD");
  const [toCurrency, setToCurrency] = (0, import_react.useState)("EUR");
  const [amount, setAmount] = (0, import_react.useState)(1);
  const [exchangeRate, setExchangeRate] = (0, import_react.useState)(null);
  const params = useParams();
  (0, import_react.useEffect)(() => {
    fetch(`${apiUrl}/listquotes`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        "X-RapidAPI-Key": "51718725bdmshd55cc7a4537be62p19d336jsnf99a16b27253"
      }
    }).then((response) => response.json()).then((data) => {
      setCurrencies(data);
    });
  }, []);
  (0, import_react.useEffect)(() => {
    fetch(`${apiUrl}/exchange?from=${fromCurrency}&to=${toCurrency}&q=${amount}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        "X-RapidAPI-Key": "51718725bdmshd55cc7a4537be62p19d336jsnf99a16b27253"
      }
    }).then((response) => response.json()).then((data) => {
      setExchangeRate(data);
    });
  }, [fromCurrency, toCurrency, amount]);
  const handleConvert = () => {
    if (exchangeRate !== null) {
      console.log(`Converted amount: ${amount * exchangeRate}`);
    }
  };
  const converterLink = `/currency-converter/from=${fromCurrency}&to=${toCurrency}&q=${amount}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Currency Converter" }, void 0, false, {
      fileName: "app/routes/currency-converter.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CurrencyDropdown_default, { currencies, selectedCurrency: fromCurrency, onSelectCurrency: setFromCurrency }, void 0, false, {
      fileName: "app/routes/currency-converter.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CurrencyDropdown_default, { currencies, selectedCurrency: toCurrency, onSelectCurrency: setToCurrency }, void 0, false, {
      fileName: "app/routes/currency-converter.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "amount", className: "mb-2", children: "Enter Amount:" }, void 0, false, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "amount", type: "number", value: amount, onChange: (e) => setAmount(parseFloat(e.target.value)), className: "p-2 border border-gray-300 rounded-md" }, void 0, false, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/currency-converter.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(button_default, { to: "`/currency-converter/from=${fromCurrency}&to=${params.toCurrency}&q=${params.amount}`", children: "Convert" }, void 0, false, {
      fileName: "app/routes/currency-converter.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/currency-converter.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_s(CurrencyConverter, "h4O+O7u87aM3SXDNF9sj/0W2ZYs=", false, function() {
  return [useParams];
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
//# sourceMappingURL=/build/routes/currency-converter-J63WNGER.js.map
