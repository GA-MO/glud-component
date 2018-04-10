```jsx
  <Input
    label='Firstname'
    placeholder='Text input'
    message='This field invalid'
  />
  <Input
    label='Lastname'
    placeholder='Text input'
    message='This field invalid'
    isRequired
    isError
  />
  <Input
    label='Email'
    value='my@gmail.com'
    placeholder='Text input'
    message='This field valid'
    isSuccess
  />
```

### States

```jsx
  <Input
    label='Disabled'
    placeholder='Text input disabled'
    disabled
  />
  <Input
    label='Read Only'
    placeholder='Text input read only'
    readOnly
  />
  <Input
    label='Loading'
    placeholder='Text input loading'
    loading
  />
```

### Use Only Contain

```jsx
  <Input
    onlyContain
    placeholder='Text input'
  />
```

### With Font Awesome icons
Choose icons in [Font Awesome](https://fontawesome.com/icons)
```jsx
  <Input
    onlyContain
    iconLeft={() => <i className="fas fa-envelope"></i>}
    iconRight={() => <i className="fas fa-check"></i>}
    placeholder='Text input'
  />
```