import React, { useState } from 'react'

export function ColorPicker() {
  const [hue, setHue] = useState<string | number>(
    Math.floor(Math.random() * 361)
  )
  const [saturation, setSaturation] = useState<string | number>(
    Math.floor(Math.random() * 101)
  )
  const [lightness, setLightness] = useState<string | number>(
    Math.floor(Math.random() * 101)
  )
  const [alpha, setAlpha] = useState<string | number>(
    Math.floor(Math.random() * 101)
  )
  const newBackgroundColor = `hsla(${hue},${saturation}%,${lightness}%, ${alpha}%)`
  const newStyle = { backgroundColor: newBackgroundColor }
  // const minColor = { minColors: newStyle }
  // const maxColor = { maxColors: newStyle }
  // const newSaturation = newStyle
  // const saturationGradient = {
  //   background: `linear-gradient(to right, ${newSaturation} 0%, ${newSaturation}100%)`,
  // }
  // let color = newStyle

  function handleClickRandomColorButton() {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 101))
    setLightness(Math.floor(Math.random() * 101))
    setAlpha(Math.floor(Math.random() * 101))
  }

  function handleHueRange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setHue(event.target.value)
  }
  function handleSaturationRange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setSaturation(event.target.value)
  }
  function handleLightnessRange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setLightness(event.target.value)
  }
  function handleAlphaRange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setAlpha(event.target.value)
  }

  return (
    <div>
      <header>
        <div style={newStyle}>
          <img
            // className="shadow"
            src="images/teaparty.svg"
            alt="alice in wonderland tea party"
            width="100%"
          />
        </div>
      </header>
      <div className="flex">
        <button onClick={handleClickRandomColorButton}>Random Color</button>
      </div>
      <body>
        <section>
          <input
            value={hue}
            className="hue-slider"
            onChange={handleHueRange}
            type="range"
            id="Hue"
            name="Hue"
            min="0"
            max="360"
          />
          <label htmlFor="Hue">Hue: {hue}</label>
        </section>
        <section>
          <input
            style={newStyle}
            // style={{
            //   background: `linear-gradient(to right, ${minColor}, ${maxColor})`,
            // }}
            // style={saturationGradient}
            value={saturation}
            // className="saturation-slider"
            onChange={handleSaturationRange}
            type="range"
            id="Saturation"
            name="Saturation"
            min="0"
            max="100"
          />
          <label htmlFor="Saturation">Saturation: {saturation}%</label>
        </section>
        <section>
          <input
            style={newStyle}
            value={lightness}
            // className="lightness-slider"
            onChange={handleLightnessRange}
            type="range"
            id="Lightness"
            name="Lightness"
            min="0"
            max="100"
          />
          <label htmlFor="Lightness">Lightness: {lightness}%</label>
        </section>
        <section>
          <input
            style={newStyle}
            value={alpha}
            // className="alpha-slider"
            onChange={handleAlphaRange}
            type="range"
            id="Alpha"
            name="Alpha"
            min="0"
            max="100"
          />
          <label htmlFor="Alpha">Alpha: {alpha}</label>
        </section>
      </body>
    </div>
  )
}
