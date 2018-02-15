```jsx
  <Radio
    name='radio1'
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

### Inline

```jsx
  <Radio
    name='radio2'
    inline
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
  <Radio
    name='radio3'
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
  <Radio
    labelGroup='Label'
    name='radio4'
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