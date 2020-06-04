```js static
MobileIframe.open({
  testID: 'modal-iframe',
  title: 'Title',
  src: 'https://en.wikipedia.org'
});
```

```jsx
handleClick = () => {
  MobileIframe.open({
    testID: 'modal-iframe',
    title: 'Title',
    src: 'https://en.wikipedia.org'
  });
};
<>
  <Button onClick={this.handleClick}>Open Mobile iframe</Button>
</>;
```
