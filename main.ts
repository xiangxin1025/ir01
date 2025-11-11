let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
OLED12864_I2C.init(60)
basic.forever(function () {
    strip.showRainbow(1, 360)
    OLED12864_I2C.rect(
    0,
    0,
    60,
    30,
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "Hello!",
    1
    )
    OLED12864_I2C.showNumber(
    0,
    2,
    12,
    1
    )
})
