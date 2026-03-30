// "desk jam" @by darkbloom

const drums = stack(
  s("bd:1*4").duck(2).duckdepth(.7),
  s("~ sd:[2, 1]").fast(2),
  s("hh:1*8")
)

const lead = note("<<C E> A G B>*4").s("supersaw").lpf(16*10**3).fast(2)
const chd = chord("<C Am> Em G B-").voicing().s("supersaw").lpf(800).slow(2)

stack(
  drums,
  lead,
  chd
).gain(.2)
