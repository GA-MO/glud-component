import moment from 'moment'
import 'moment-range'

function isMomentRange (val) {
  return val && val.start && val.end && moment.isMoment(val.start) && moment.isMoment(val.end)
}

export default {
  momentOrMomentRange (props, propName) {
    let val = props[propName]

    if (!val) {
      return null
    } else if (moment.isMoment(val)) {
      return null
    } else if (isMomentRange(val)) {
      return null
    }
    return new Error(`'${propName}' must be a moment or a moment range`)
  },

  moment (props, propName) {
    let val = props[propName]

    if (!val) {
      return null
    } else if (moment.isMoment(val)) {
      return null
    }
    return new Error(`'${propName}' must be a moment`)
  },

  momentRange (props, propName) {
    let val = props[propName]

    if (!val) {
      return null
    } else if (isMomentRange(val)) {
      return null
    }
    return new Error(`'${propName}' must be a moment range`)
  }
}
