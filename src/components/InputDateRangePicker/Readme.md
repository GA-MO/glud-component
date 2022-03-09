Required [Moment](https://www.npmjs.com/package/moment) and [Moment Range](https://www.npmjs.com/package/moment-range)

Example initial value
```jsx static
  import moment from 'moment'
  import { extendMoment } from 'moment-range'

  ...

  const Moment = extendMoment(moment)
  const start = Moment().startOf('day')
  const end = Moment().add(1, 'days')
  const initialValue = Moment.range(start, end)

  ...

  <InputDateRangePicker label='Select Date' value={initialValue} />
```
```jsx
  const moment = require('moment')
  const { extendMoment } = require('moment-range')
  const Moment = extendMoment(moment)
  const start = Moment().startOf('day')
  const end = Moment().add(1, 'days')
  const initialValue = Moment.range(start, end);

  initialState = {
    value: initialValue
  };
  
  <InputDateRangePicker
  	label='Select Date'
    value={state.value}
    onChange={(v) => setState({ value: v })}
  />
```