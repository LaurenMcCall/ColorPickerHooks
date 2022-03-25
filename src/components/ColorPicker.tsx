import React, { useState } from 'react'

export function ColorPicker() {
  const [hue, setHue] = useState('60')
  const [saturation, setSaturation] = useState('50')
  const [lightness, setLightness] = useState('50')
  const [alpha, setAlpha] = useState('50')
  const newBackgroundColor = `hsla(${hue},${saturation}%,${lightness}%, ${alpha}%)`
  const newStyle = { backgroundColor: newBackgroundColor }

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
      <header style={newStyle}>
        <p>df d fd </p>
      </header>
      <body>
        <section>
          <input
            value={hue}
            onChange={handleHueRange}
            type="range"
            id="Hue"
            name="Hue"
            min="0"
            max="360"
          />
          <label htmlFor="Hue">Hue {hue}</label>
        </section>
        <section>
          <input
            value={saturation}
            onChange={handleSaturationRange}
            type="range"
            id="Saturation"
            name="Saturation"
            min="0"
            max="100"
          />
          <label htmlFor="Saturation">Saturation {saturation}</label>
        </section>
        <section>
          <input
            value={lightness}
            onChange={handleLightnessRange}
            type="range"
            id="Lightness"
            name="Lightness"
            min="0"
            max="100"
          />
          <label htmlFor="Lightness">Lightness {lightness}</label>
        </section>
        <section>
          <input
            value={alpha}
            onChange={handleAlphaRange}
            type="range"
            id="Alpha"
            name="Alpha"
            min="0"
            max="100"
          />
          <label htmlFor="Alpha">Alpha {alpha}</label>
        </section>
      </body>
    </div>
  )
}
