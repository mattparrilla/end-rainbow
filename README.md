#EndRainbow Palette Picker

A tool for selecting intuitive and accessible palettes for weather data.

##Application Structure

```
Container (this component gets state and passes it down the chain)
 | PalettePicker
   | ColorPicker
     | Slider (this component fires action)
     | Slider
     | Slider
   | (As many ColorPickers as colors)
 | Comparison Images (not React)
```
