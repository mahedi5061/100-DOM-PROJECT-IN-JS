//step-1 create onload handler.

window.onload = () => {
  main()
}

//step-2 change the main elements
function main () {
  const root = document.getElementById('root')
  const changeBackgroundBtn = document.getElementById('change-btn')
  const output = document.getElementById('output')
  const copyBtn = document.getElementById('copy-btn')

  changeBackgroundBtn.addEventListener('click', function () {
    const bgColor = colorHexGenerator()
    root.style.backgroundColor = bgColor
    output.value = bgColor
  })
  //copy text system in the window...

  copyBtn.addEventListener('click', function () {
    window.navigator.clipboard.writeText(output.value);
  })
}

//step-3 color generate.

function colorHexGenerator () {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
