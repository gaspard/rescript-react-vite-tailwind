type themeStyle = {background: string, button: string}
let light = {
  background: "bg-lime-100",
  button: "border-lime-400 bg-emerald-400",
}
let dark = {
  background: "bg-slate-900",
  button: "border-slate-200 bg-slate-700 text-slate-300",
}

type theme = Light | Dark

@react.component
let make = () => {
  let (theme, setTheme) = React.useState(() => Light)
  let toggleTheme = _ =>
    setTheme(theme =>
      switch theme {
      | Light => Dark
      | Dark => Light
      }
    )

  let rs = React.string
  let style = switch theme {
  | Light => light
  | Dark => dark
  }

  <div
    onClick={toggleTheme}
    className={`flex justify-center items-center h-dvh cursor-pointer select-none ${style.background}`}>
    <div className={`p-6 rounded-full border-4 ${style.button}`}>
      <h1 className="text-2xl">
        {"Hello "->rs}
        <span className="font-bold"> {"ReScript"->rs} </span>
        {" Argo CD"->rs}
      </h1>
    </div>
  </div>
}
