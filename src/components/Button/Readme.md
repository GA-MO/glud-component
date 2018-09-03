### Colors

```jsx
  <Button primary>Primary</Button>
  <Button secondary>Secondary</Button>
  <Button>Default</Button>
```

### Style Outline

```jsx
  <Button outlined primary>Primary</Button>
  <Button outlined secondary>Secondary</Button>
  <Button outlined>Default</Button>
```

### Sizes

```jsx
  <Button fullwidth >Full Width</Button>
  <br />
  <Button large >Large</Button>
  <Button medium >Medium</Button>
  <Button>Normal</Button>
  <Button small >Small</Button>
```

### States

```jsx
  <Button primary>Normal</Button>
  <Button primary active>Active</Button>
  <Button primary loading>Loading</Button>
  <Button primary disabled>Disabled</Button>
```

### With Tooltip

```jsx
  <Button tooltip='This is Tooltip'>Top Tooltip</Button>
  <Button tooltip='This is Tooltip left' tooltipLeft>Left Tooltip</Button>
  <Button tooltip='This is Tooltip Right' tooltipRight>Top Tooltip</Button>
  <Button tooltip='This is Tooltip Bottom' tooltipBottom>Bottom Tooltip</Button>
  <Button tooltip='Tooltip with a long Text. So we use is-tooltip-multiline modifier to force multiline display.' tooltipMultiline>Multiline Tooltip</Button>
```


### With Font Awesome icons
Choose icons in [Font Awesome](https://fontawesome.com/icons)
```jsx
  <Button icon='fas fa-check'>Button</Button>
  <Button icon='fas fa-times' />
  <Button icon='fas fa-search' />
  <Button icon='fas fa-trash' />
```