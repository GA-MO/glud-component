```jsx
  <Row>
    <Column D={12}><Box>12</Box></Column>
  </Row>
  <br />
  <Row>
    <Column D={11}><Box>11</Box></Column>
    <Column D={1}><Box>1</Box></Column>
  </Row>
  <br />
  <Row>
    <Column D={10}><Box>10</Box></Column>
    <Column D={2}><Box>2</Box></Column>
  </Row>
  <br />
  <Row>
    <Column D={9}><Box>9</Box></Column>
    <Column D={3}><Box>3</Box></Column>
  </Row>
  <br />
  <Row>
    <Column D={8}><Box>8</Box></Column>
    <Column D={4}><Box>4</Box></Column>
  </Row>
  <br />
  <Row>
    <Column D={7}><Box>7</Box></Column>
    <Column D={5}><Box>5</Box></Column>
  </Row>
  <br />
  <Row>
    <Column D={6}><Box>6</Box></Column>
    <Column D={6}><Box>6</Box></Column>
  </Row>
  <br />
  <Row>
    <Column D={5}><Box>5</Box></Column>
    <Column D={7}><Box>7</Box></Column>
  </Row>
  <br />
  <Row>
    <Column D={4}><Box>4</Box></Column>
    <Column D={8}><Box>8</Box></Column>
  </Row>
  <br />
  <Row>
    <Column D={3}><Box>3</Box></Column>
    <Column D={9}><Box>9</Box></Column>
  </Row>
  <br />
  <Row>
    <Column D={2}><Box>2</Box></Column>
    <Column D={10}><Box>10</Box></Column>
  </Row>
  <br />
  <Row>
    <Column D={1}><Box>1</Box></Column>
    <Column D={11}><Box>11</Box></Column>
  </Row>
```

### Change Collumns when responsive screen

```jsx
  <Row>
    <Column D={6} L={10} T={2} M={12}><Box>Column</Box></Column>
    <Column D={6} L={2} T={10} M={12}><Box>Column</Box></Column>
  </Row>
```

### Move Columns with order

```jsx
  <Row>
    <Column D={6} orderT={2}><Box><Button primary fullwidth>1</Button></Box></Column>
    <Column D={6} orderT={1}><Box><Button secondary fullwidth>2</Button></Box></Column>
  </Row>
```