This component base on [React Select](https://react-select.com/home) you can use props and features of React Select.
```jsx
  <SelectWithFilter
    label='Firstname'
    placeholder='Text input'
    message='This field invalid'
  />
```

### Multiple

```jsx
<SelectWithFilter
    label="Multiple Select"
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
<SelectWithFilter onlyContain placeholder="Text input" />
```

### With Font Awesome icons

Choose icons in [Font Awesome](https://fontawesome.com/icons)

```jsx
<SelectWithFilter onlyContain iconLeft={() => <i className="fas fa-globe" />} placeholder="Text input" />
```