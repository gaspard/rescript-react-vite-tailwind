// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as JsxRuntime from "react/jsx-runtime";

var light = {
  background: "bg-lime-100",
  button: "border-lime-400 bg-emerald-400"
};

var dark = {
  background: "bg-slate-900",
  button: "border-slate-200 bg-slate-700 text-slate-300"
};

function App(props) {
  var match = React.useState(function () {
        return "Light";
      });
  var setTheme = match[1];
  var toggleTheme = function (param) {
    setTheme(function (theme) {
          if (theme === "Light") {
            return "Dark";
          } else {
            return "Light";
          }
        });
  };
  var style;
  style = match[0] === "Light" ? light : dark;
  return JsxRuntime.jsx("div", {
              children: JsxRuntime.jsx("div", {
                    children: JsxRuntime.jsxs("h1", {
                          children: [
                            "Hello ",
                            JsxRuntime.jsx("span", {
                                  children: "ReScript",
                                  className: "font-bold"
                                }),
                            " App"
                          ],
                          className: "text-2xl"
                        }),
                    className: "p-6 rounded-full border-4 " + style.button
                  }),
              className: "flex justify-center items-center h-dvh cursor-pointer select-none " + style.background,
              onClick: toggleTheme
            });
}

var make = App;

export {
  light ,
  dark ,
  make ,
}
/* react Not a pure module */
