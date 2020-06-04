```jsx
  <AppHeader
    title='Title Page'
    subTitle='Sub Title'
  />
  <br />
  <AppHeader
    title='Title Page'
    leftActions={[
      {
        icon: 'fas fa-arrow-left',
        onClick: () => null
      }
    ]}
    rightActions={[
      {
        icon: 'fas fa-star',
        onClick: () => null
      }
    ]}
  />
  <br />
  <AppHeader
    title='Title Page'
    titleLeft
    leftActions={[
      {
        icon: 'fas fa-arrow-left',
        onClick: () => null
      }
    ]}
    rightActions={[
      {
        icon: 'fas fa-star',
        onClick: () => null
      },
      {
        icon: 'fas fa-edit',
        onClick: () => null
      }
    ]}
  />
  <br />
  <AppHeader
    title='Title Page'
    titleLeft
    leftDisable
    rightActions={[
      {
        icon: 'fas fa-trash',
        onClick: () => null
      },
      {
        icon: 'fas fa-star',
        onClick: () => null
      },
      {
        icon: 'fas fa-edit',
        onClick: () => null
      }
    ]}
  />
```