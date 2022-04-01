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
  const newBackgroundColor = `hsla(${hue},${saturation}%,${lightness}%, .${alpha})`
  const newStyle = { backgroundColor: newBackgroundColor }

  const satGradient = `-webkit-linear-gradient(45deg, hsla(${hue},0%,${lightness}%,.${alpha}), hsla(${hue},20%,${lightness}%,.${alpha}), hsla(${hue},40%,${lightness}%,.${alpha}), hsla(${hue},60%,${lightness}%,.${alpha}), hsla(${hue},80%,${lightness}%,.${alpha}), hsla(${hue},100%,${lightness}%,.${alpha}))`
  const gradientSatStyle = { background: satGradient }

  const satLightness = `-webkit-linear-gradient(45deg, hsla(${hue},${saturation}%,0%,.${alpha}), hsla(${hue},${saturation}%,20%,.${alpha}), hsla(${hue},${saturation}%,40%,.${alpha}), hsla(${hue},${saturation}%,60%,.${alpha}), hsla(${hue},${saturation}%,80%,.${alpha}), hsla(${hue},${saturation}%,100%,.${alpha}))`
  const gradientLightStyle = { background: satLightness }

  const satAlpha = `-webkit-linear-gradient(45deg, hsla(${hue},${saturation}%,${lightness}%,0), hsla(${hue},${saturation}%,${lightness}%,.20), hsla(${hue},${saturation}%,${lightness}%,.4), hsla(${hue},${saturation}%,${lightness}%,.6000000000000001), hsla(${hue},${saturation}%,${lightness}%,.8), hsla(${hue},${saturation}%,${lightness}%,1.0))`
  const gradientAlphaStyle = { background: satAlpha }

  function handleClickRandomColorButton() {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 101))
    setLightness(Math.floor(Math.random() * 101))
    setAlpha(Math.floor(Math.random() * 101))
    console.log(gradientLightStyle)
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
      <head>
        <h2 className="stroke-text-h2">
          <img
            src="/images/mushroom.svg"
            alt="cute little mushroom"
            width="25px"
            // height="20px"
          />
          Welcome to the <br></br> Mad Color Picker Party
        </h2>
        <h4 style={newStyle}>
          hsla({hue}, {saturation}%, {lightness}%, {alpha}){' '}
        </h4>
      </head>
      <header>
        <div style={newStyle}>
          <img
            // className="shadow"
            src="/images/teaparty.svg"
            alt="alice in wonderland tea party"
            width="100%"
          />
        </div>
      </header>
      <aside className="stroke-text-aside">
        we&apos;Re aLL mAd HeRe
        <img src="/images/mushroom.svg" alt="little mushroom" width="25px" />
      </aside>
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
            style={gradientSatStyle}
            // style={{
            //   background: satGradient,
            // }}
            // style={saturationGradient}
            value={saturation}
            // className="test"
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
            style={gradientLightStyle}
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
            style={gradientAlphaStyle}
            value={alpha}
            className="test"
            onChange={handleAlphaRange}
            type="range"
            id="Alpha"
            name="Alpha"
            min=".0"
            max="1.0"
          />
          <label htmlFor="Alpha">Alpha: {alpha}</label>
        </section>
      </body>
      <footer>
        <h6 className="stroke-text-footer">
          Built with madness by Lauren McCall
        </h6>
      </footer>
    </div>
  )
}
