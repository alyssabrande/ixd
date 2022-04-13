let strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
let range = strip.range(0, 4)
let range2 = strip.range(4, 7)
basic.forever(function () {
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range2.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
})
