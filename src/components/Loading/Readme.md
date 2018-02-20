### Open
```js static
  Loading.open({
    label: 'Loading please wait..'
  })
```
### Close
```js static
  Loading.close()
```
```jsx
  handleClickOpenLoading = () => {
    Loading.open({
      label: 'Loading please wait..'
    })
  }
  handleClickCloseLoading = () => {
    Loading.close()
  }
  <>
    <Button onClick={this.handleClickOpenLoading} primary>Open Loading</Button>
    <Button onClick={this.handleClickCloseLoading} secondary>Close Loading</Button>
  </>
```