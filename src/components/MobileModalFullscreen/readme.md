```js
initialState = { show: false };
<>
  <MobileModalFullscreen show={state.show} onClose={() => setState({ show: false })}>
    Content
  </MobileModalFullscreen>
  <Button onClick={() => setState({ show: true })}>Show Modal full screen</Button>
</>;
```
