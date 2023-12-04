import type { MetaFunction } from "@remix-run/node";
import { Outlet, Link } from "react-router-dom";
import RoundedLinkButton from "../components/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-gradient-to-b from-indigo-700 to-indigo-200 p-8 text-white flex flex-col content-center text-center" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div>
        <h1>Trusted Global Currency Converter & Money Transfer Solution</h1>
        <p>Best sources for currency conversion, sending money onloine and tracking exchange rates</p>
      </div>
      <div className="">
        <RoundedLinkButton to="/currency-converter">Convert</RoundedLinkButton>
      </div>
      

    
    </div>
  );
}
