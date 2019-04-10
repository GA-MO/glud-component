### Open

```js static
Loading.open({
  label: 'Loading please wait..'
});
```

### Close

```js static
Loading.close();
```

```jsx
handleClickOpenLoading = () => {
  Loading.open({
    label: 'Loading please wait..',
    component: <Button>Skip</Button> // Optional
  });

  setTimeout(() => {
    Loading.close();
  }, 3000);
};
<Button onClick={this.handleClickOpenLoading} primary>
  Show Loading
</Button>;
```
