### Open
```js static
  AlertMessage.open({
    type: 'ERROR', // SUCCESS, ERROR
    message: 'Message',
    closeTime: 3 // Seconds
  })
```
### Close
```js static
  AlertMessage.close()
```
```jsx
  handleClickOpenAlertMessage = () => {
    AlertMessage.open({
      type: 'ERROR',
      message: 'This is a Alert message.'
    })
  }
  handleClickCloseAlertMessage = () => {
    AlertMessage.close()
  }
  <>
    <Button onClick={this.handleClickOpenAlertMessage} primary>Open Message</Button>
    <Button onClick={this.handleClickCloseAlertMessage} secondary>Close Message</Button>
  </>
```