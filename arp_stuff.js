// "arp stuff" @by ÐarkbloøM

const arp = n("0 5 6 7").chord("<D^7 F#-9 C#- A>")
  .voicing()
  .s("supersaw")
  .fast(2)
  .gain(vol)
  ._pianoroll()

const chd = chord("D^7 F#-9 C#- A")
  .voicing()
  .s("supersaw")
  .slow(4)
  .lpf(800)
  .gain(vol)
  ._pianoroll()

const drums = s("bd:1*4")
  .duck(4)
  .duckdepth(.7)
  .gain(vol)
  ._scope()

stack(
  arp,
  chd,
  drums
).gain(.2)
