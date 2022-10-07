const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialColors= {
    bg:getStyle(html, "--bg"),
    colorHeadings:getStyle(html, "--color-headings"),
    bgPanel:getStyle(html, " --bg-panel"),
    bgSelect:getStyle(html, "--bg-select"),
    bgInputButton:getStyle(html, " --bg-input-button"),
    colorText:getStyle(html, " --color-text"),

}
const darkMode = {
    bg:"#1d1d1d",
    colorHeadings:"#FFDE69",
    bgPanel:"#E80505",
    bgSelect:"#efefef",
    bgInputButton:"#efefef",
    colorText:"#161d24",
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
  Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
)}
checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})