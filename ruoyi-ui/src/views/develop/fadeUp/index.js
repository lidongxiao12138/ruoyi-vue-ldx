const DISTANCE = 100
const DURATION = 500
export default {
  mounted(el) {
    const animation = el.animate([{transform:`translateY(${DISTANCE}px)`,
    opacity:0.5
    },{
      transform:`translateY(0)`,
      opacity:1
    }],{
      duration: DURATION,
      ease:'ease-out',
      fill:'forwards'
    })
  },
}