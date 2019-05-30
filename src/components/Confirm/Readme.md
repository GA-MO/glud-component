### Open

```js static
Confirm.open({
  title: 'Title Confirm',
  content: <div>Content is here.</div>,
  closeButton: true,
  closeOnClickOutside: false,
  buttons: [
    {
      label: 'Cancel',
      onClick: () => null
    },
    {
      primary: true,
      label: 'Confirm',
      onClick: () => null
    }
  ]
});
```

```jsx
handleClickOpenConfirm = () => {
  Confirm.open({
    title: 'Title Confirm',
    content: <div>Content is here.</div>,
    buttons: [
      {
        label: 'Cancel',
        onClick: () => null
      },
      {
        primary: true,
        label: 'Confirm',
        onClick: () => null
      }
    ]
  });
};
<>
  <Button onClick={this.handleClickOpenConfirm} primary>
    Open Confirm
  </Button>
</>;
```
