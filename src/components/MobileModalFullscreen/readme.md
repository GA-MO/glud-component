```js
initialState = { show: false };
<>
  <MobileModalFullScreen show={state.show} onClose={() => setState({ show: false })}>
    Content
  </MobileModalFullScreen>
  <Button onClick={() => setState({ show: true })}>Show Modal full screen</Button>
</>;
```
