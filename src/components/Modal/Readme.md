Recommended use [react-modal-es](https://www.npmjs.com/package/react-modal-es) with Custom UI
```jsx
  initialState = { open: false }

  ;<>
    <Modal
      title='Modal'
      open={state.open}
      onClose={() => setState({ open: false })}
    >
      <Modal.Content>
        Content
      </Modal.Content>
      <Modal.Footer>
        <Button primary>Save</Button>
        <Button onClick={() => setState({ open: false })}>Cancel</Button>
      </Modal.Footer>
    </Modal>
    <Button onClick={() => setState({ open: true })}>Open Modal</Button>
  </>
```