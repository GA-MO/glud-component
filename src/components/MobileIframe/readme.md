```js static
MobileIframe.open({
  title: 'Title',
  src: 'https://en.wikipedia.org'
});
```

```jsx
handleClick = () => {
  MobileIframe.open({
    title: 'Title',
    src: 'https://en.wikipedia.org'
  });
};
<>
  <Button onClick={this.handleClick}>Open Mobile iframe</Button>
</>;
```
