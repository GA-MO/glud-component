```jsx
  <>
    <TextArea
      label='Message'
      placeholder='Text input'
      message='This field invalid'
    />
    <TextArea
      label='Message'
      placeholder='Text input'
      message='This field invalid'
      isError
    />
    <TextArea
      label='Message'
      value='Hello message'
      placeholder='Text input'
      message='This field valid'
      isSuccess
    />
  </>
```

### States

```jsx
  <>
    <TextArea
      label='Disabled'
      placeholder='Text input disabled'
      disabled
    />
    <TextArea
      label='Read Only'
      placeholder='Text input read only'
      readOnly
    />
    <TextArea
      label='Loading'
      placeholder='Text input loading'
      loading
    />
  </>
```

### Use Only Contain

```jsx
  <TextArea
    onlyContain
    placeholder='Text input'
  />
```