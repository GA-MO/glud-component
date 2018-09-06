```jsx
  <Select
    label='Firstname'
    placeholder='Text input'
    message='This field invalid'
  />
  <Select
    label='Lastname'
    placeholder='Text input'
    message='This field invalid'
    isError
  />
  <Select
    label='Email'
    value='my@gmail.com'
    placeholder='Text input'
    message='This field valid'
    isSuccess
  />
```

### States

```jsx
  <Select
    label='Disabled'
    placeholder='Text input disabled'
    disabled
  />
  <Select
    label='Loading'
    placeholder='Text input loading'
    loading
  />
```

### Disabled Option

```jsx
<Select
   label="Disabled Option"
   options={[
      {
         label: 'Option 1',
         value: 1
      },
      {
         label: 'Option 2',
         value: 2,
         disabled: true
      },
      {
         label: 'Option 3',
         value: 3
      }
   ]}
/>
```

### Use Only Contain

```jsx
<Select onlyContain placeholder="Text input" />
```

### With Font Awesome icons

Choose icons in [Font Awesome](https://fontawesome.com/icons)

```jsx
<Select onlyContain iconLeft={() => <i className="fas fa-globe" />} placeholder="Text input" />
```
