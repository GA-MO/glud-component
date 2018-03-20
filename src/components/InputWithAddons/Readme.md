
```jsx
const Item = InputWithAddons.Item;
<InputWithAddons>
  <Item>
    <Button icon='fas fa-phone' isStatic />
  </Item>
  <Item>
  <Input
    onlyContain
    placeholder='Phone number...'
  />
  </Item>
  <Item>
    <Button>Add</Button>
  </Item>
</InputWithAddons>
```

### Item addon expanded
```jsx
const Item = InputWithAddons.Item;
<InputWithAddons>
  <Item>
    <Button isStatic>Email:</Button>
  </Item>
  <Item expanded>
  <Input
    onlyContain
    placeholder='Enter your email..'
  />
  </Item>
  <Item>
    <Button>Add</Button>
  </Item>
</InputWithAddons>
```
