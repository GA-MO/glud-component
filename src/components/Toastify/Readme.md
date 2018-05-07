### Open
```js static
  Toastify({
    position: 'center', // left, right, center is default
    type: 'SUCCESS', // ERROR, WARNING, LOADING, INFO
    message: 'Message',
    closeTime: 3, // Seconds
    component: () => <div />
    onClose: () => {}
  })
```
### Manual Close
```js static
  const toastify = Toastify(options)
  toastify.close()
```
```jsx
  handleClickOpenToast = () => {
    Toastify({
      type: 'SUCCESS',
      message: 'This is a normal message.',
      closeTime: 2
    })
  }

  handleClickFetchData = () => {
    const loading = Toastify({
      type: 'LOADING',
      message: 'Fetching user list..'
    })

    setTimeout(() => {
      loading.close()
    }, 4000)
  }

  <>
    <Button onClick={this.handleClickOpenToast}>Show Toast</Button>
    <Button onClick={this.handleClickFetchData}>Loading with Toast</Button>
  </>
```