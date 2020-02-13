This component base on [React Select](https://react-select.com/home) you can use props and features of React Select.

```jsx
<SelectWithFilter label='Firstname' placeholder='Text input' />
```

### Async
Use the Async component to load options from a remote source as the user types [see more options](https://react-select.com/async)
```jsx
const loadOptions = (inputValue, callback) => {
  console.log('inputValue', inputValue)
  setTimeout(() => {
    const options = [
      {
        label: 'Animal',
        value: 'Animal'
      },
      {
        label: 'People',
        value: 'People'
      }
    ]
    callback(options)
  }, 1000)
};

<SelectWithFilter
  async
  iconLeft={() => <i className='fas fa-search' />}
  label='Search'
  placeholder='Search something..'
  loadOptions={loadOptions}
/>
```

### Multiple

```jsx
<SelectWithFilter
  label='Multiple Select'
  isMulti
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
    },
    {
      label: 'Option 4',
      value: 4
    }
  ]}
  defaultValue={[
    {
      label: 'Option 3',
      value: 3
    },
    {
      label: 'Option 4',
      value: 4
    }
  ]}
/>
```

### Use Only Contain

```jsx
<SelectWithFilter onlyContain placeholder='Text input' />
```

### With Font Awesome icons

Choose icons in [Font Awesome](https://fontawesome.com/icons)

```jsx
<SelectWithFilter
  onlyContain
  iconLeft={() => <i className='fas fa-globe' />}
  placeholder='Text input'
/>
```
