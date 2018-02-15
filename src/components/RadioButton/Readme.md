```jsx
  <RadioButton
    value={'M'}
    options={[
      {
        label: 'Male',
        value: 'M'
      },
      {
        label: 'Female',
        value: 'F'
      },
      {
        label: 'Special',
        value: 'S'
      }
    ]}
  />
```

### Fullwidth

```jsx
  <RadioButton
    fullwidth
    value={'M'}
    options={[
      {
        label: 'Male',
        value: 'M'
      },
      {
        label: 'Female',
        value: 'F'
      },
      {
        label: 'Special',
        value: 'S'
      }
    ]}
  />
```

### Option Disabled

```jsx
  <RadioButton
    inline
    value={'M'}
    options={[
      {
        label: 'Male',
        value: 'M'
      },
      {
        label: 'Female',
        value: 'F',
        disabled: true
      },
      {
        label: 'Special',
        value: 'S'
      }
    ]}
  />
```

### Label Group

```jsx
  <RadioButton
    labelGroup='Label'
    inline
    value={'M'}
    options={[
      {
        label: 'Male',
        value: 'M'
      },
      {
        label: 'Female',
        value: 'F',
        disabled: true
      },
      {
        label: 'Special',
        value: 'S'
      }
    ]}
  />
```