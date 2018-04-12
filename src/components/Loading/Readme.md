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

    setTimeout(() => {
      Loading.close()
    }, 3000)
  }
  <Button onClick={this.handleClickOpenLoading} primary>Show Loading</Button>
```