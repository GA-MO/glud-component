```jsx
  <CheckboxGroup
    value={[1, 2]}
    options={[
      {
        label: 'Check 1',
        value: 1
      },
      {
        label: 'Check 2',
        value: 2
      },
      {
        label: 'Check 3',
        value: 3
      }
    ]}
  />
```

### Inline

```jsx
  <CheckboxGroup
    inline
    value={[1]}
    options={[
      {
        label: 'Check 1',
        value: 1
      },
      {
        label: 'Check 2',
        value: 2
      },
      {
        label: 'Check 3',
        value: 3
      }
    ]}
  />
```

### Option Disabled

```jsx
  <CheckboxGroup
    inline
    value={[1]}
    options={[
      {
        label: 'Check 1',
        value: 1
      },
      {
        label: 'Check 2',
        value: 2,
        disabled: true
      },
      {
        label: 'Check 3',
        value: 3
      }
    ]}
  />
```

### Label Group

```jsx
  <CheckboxGroup
    labelGroup='Label'
    isRequired
    inline
    value={[1]}
    options={[
      {
        label: 'Check 1',
        value: 1
      },
      {
        label: 'Check 2',
        value: 2
      },
      {
        label: 'Check 3',
        value: 3
      }
    ]}
  />
```