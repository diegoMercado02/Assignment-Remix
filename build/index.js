var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-CK2MRDR2.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/currency-converter.tsx
var currency_converter_exports = {};
__export(currency_converter_exports, {
  default: () => currency_converter_default
});
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// app/components/CurrencyDropdown.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function CurrencyDropdown({ currencies, selectedCurrency, onSelectCurrency }) {
  return /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-col mb-4 ", children: [
    /* @__PURE__ */ jsxDEV3("label", { htmlFor: "currency", className: "mb-2", children: "Select Currency:" }, void 0, !1, {
      fileName: "app/components/CurrencyDropdown.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(
      "select",
      {
        id: "currency",
        value: selectedCurrency,
        onChange: (e) => onSelectCurrency(e.target.value),
        className: "text-black p-2 border border-gray-300 rounded-md",
        children: currencies.map((currency) => /* @__PURE__ */ jsxDEV3("option", { value: currency, children: currency }, currency, !1, {
          fileName: "app/components/CurrencyDropdown.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/CurrencyDropdown.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/CurrencyDropdown.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var CurrencyDropdown_default = CurrencyDropdown;

// app/routes/currency-converter.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var apiUrl = "https://currency-exchange.p.rapidapi.com", headers = {
  "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
  "X-RapidAPI-Key": "51718725bdmshd55cc7a4537be62p19d336jsnf99a16b27253"
  // Replace with your actual API key
};
function CurrencyConverter() {
  let [searchParams, setSearchParams] = useSearchParams(), [currencies, setCurrencies] = useState([]), [fromCurrency, setFromCurrency] = useState(searchParams.get("from") || "USD"), [toCurrency, setToCurrency] = useState(searchParams.get("to") || "EUR"), [amount, setAmount] = useState(Number(searchParams.get("q")) || 1), [convertedAmount, setConvertedAmount] = useState(null);
  useEffect(() => {
    fetch(`${apiUrl}/listquotes`, { method: "GET", headers }).then((response) => response.json()).then((data) => setCurrencies(data));
  }, []);
  let performConversion = (fromCurrency2, toCurrency2, amount2) => {
    fetch(`${apiUrl}/exchange?from=${fromCurrency2}&to=${toCurrency2}&q=${amount2}`, { method: "GET", headers }).then((response) => response.json()).then((conversionRate) => {
      if (!isNaN(conversionRate) && !isNaN(amount2)) {
        let totalConvertedAmount = conversionRate * amount2;
        setConvertedAmount(totalConvertedAmount);
      } else
        console.error("Invalid conversion rate or amount"), setConvertedAmount(null);
    }).catch((error) => {
      console.error("Error fetching conversion data:", error), setConvertedAmount(null);
    });
  };
  return useEffect(() => {
    performConversion(fromCurrency, toCurrency, amount);
  }, [fromCurrency, toCurrency, amount]), /* @__PURE__ */ jsxDEV4("div", { className: "bg-gradient-to-b from-indigo-700 to-purple-400 p-8 text-white flex flex-col justify-center items-center text-center gap-8 h-screen", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col gap 6", children: [
      /* @__PURE__ */ jsxDEV4("h1", { className: "text-4xl font-semibold", children: "Currency Converter" }, void 0, !1, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { children: "Check live foreign currency exchange rates" }, void 0, !1, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/currency-converter.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-row bg-gradient-to-b from-indigo-700 to-purple-400 py-4 px-8 rounded-xl", children: [
      /* @__PURE__ */ jsxDEV4("div", { children: [
        /* @__PURE__ */ jsxDEV4(
          CurrencyDropdown_default,
          {
            currencies,
            selectedCurrency: fromCurrency,
            onSelectCurrency: setFromCurrency
          },
          void 0,
          !1,
          {
            fileName: "app/routes/currency-converter.tsx",
            lineNumber: 69,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV4(
          CurrencyDropdown_default,
          {
            currencies,
            selectedCurrency: toCurrency,
            onSelectCurrency: setToCurrency
          },
          void 0,
          !1,
          {
            fileName: "app/routes/currency-converter.tsx",
            lineNumber: 74,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col mb-4", children: [
          /* @__PURE__ */ jsxDEV4("label", { htmlFor: "amount", className: "mb-2", children: "Enter Amount:" }, void 0, !1, {
            fileName: "app/routes/currency-converter.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV4(
            "input",
            {
              id: "amount",
              type: "number",
              value: amount,
              onChange: (e) => setAmount(parseFloat(e.target.value)),
              className: "text-black p-2 border border-gray-300 rounded-md"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/currency-converter.tsx",
              lineNumber: 83,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/currency-converter.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4(
        "button",
        {
          className: "bg-purple-700 text-white p-2 rounded-md cursor-pointer",
          onClick: () => {
            performConversion(fromCurrency, toCurrency, amount);
            let newParams = { from: fromCurrency, to: toCurrency, q: amount.toString() };
            setSearchParams(newParams);
          },
          children: "Convert"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/currency-converter.tsx",
          lineNumber: 92,
          columnNumber: 9
        },
        this
      ),
      convertedAmount !== null && !isNaN(convertedAmount) && /* @__PURE__ */ jsxDEV4("div", { className: "mt-4", children: /* @__PURE__ */ jsxDEV4("p", { children: [
        "Converted Amount: ",
        convertedAmount.toFixed(6)
      ] }, void 0, !0, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/currency-converter.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/currency-converter.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/currency-converter.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
var currency_converter_default = CurrencyConverter;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});

// app/components/button.tsx
import { Link } from "react-router-dom";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var RoundedLinkButton = ({ to, children }) => /* @__PURE__ */ jsxDEV5(
  Link,
  {
    to,
    className: " text-black font-semibold rounded-xl bg-purple-100 py-5 px-4 shadow-lg hover:shadow-lg focus:outline-none focus:ring focus:border-purple-300",
    children
  },
  void 0,
  !1,
  {
    fileName: "app/components/button.tsx",
    lineNumber: 10,
    columnNumber: 9
  },
  this
), button_default = RoundedLinkButton;

// app/routes/_index.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV6("div", { className: "bg-gradient-to-b from-indigo-700 to-purple-400 p-8 text-white flex flex-col justify-center items-center text-center gap-20 h-screen", style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ jsxDEV6("div", { children: [
      /* @__PURE__ */ jsxDEV6("h1", { className: "font-semibold text-4xl", children: "Trusted Global Currency Converter & Money Transfer Solution" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: "Best sources for currency conversion, sending money onloine and tracking exchange rates" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "", children: /* @__PURE__ */ jsxDEV6(button_default, { to: "/currency-converter", children: "Convert" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-S5QDLLT5.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-UB4TDWSR.js", "/build/_shared/chunk-4FPL6IGH.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-24DQK37A.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CPVMKQBV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YK7U6PSE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/currency-converter": { id: "routes/currency-converter", parentId: "root", path: "currency-converter", index: void 0, caseSensitive: void 0, module: "/build/routes/currency-converter-D6SCDD6B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "2f456d37", hmr: { runtime: "/build/_shared/chunk-24DQK37A.js", timestamp: 1701696669943 }, url: "/build/manifest-2F456D37.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/currency-converter": {
    id: "routes/currency-converter",
    parentId: "root",
    path: "currency-converter",
    index: void 0,
    caseSensitive: void 0,
    module: currency_converter_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
