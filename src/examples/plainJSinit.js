export function init(rootElement) {
  const value = document.createElement("div")
  const increment = document.createElement("button")

  value.innerText = 0
  increment.innerText = "Increment"
  increment.addEventListener("click", () => {
    const previousValue = Number(value.innerText)
    value.innerText = previousValue + 1
  })

  rootElement.appendChild(value)
  rootElement.appendChild(increment)
}