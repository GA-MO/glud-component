```js
const Header = (
  <AppHeader
    title='Title Page'
    subTitle='Sub Title'
    leftIcon='fas fa-arrow-left'
    rightIcon='fas fa-ellipsis-v'
  />
);

const Footer = (
  <ButtonGroup fullwidth>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </ButtonGroup>
);

const Content = (
  <div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem accusantium qui earum
      provident iusto. Ea repellat incidunt similique, ipsam quia distinctio praesentium molestias
      laudantium quo. Sunt, sed aspernatur voluptas inventore saepe odio quis eligendi asperiores
      dicta aliquam earum reiciendis laudantium ea eos possimus eius voluptatem nesciunt natus
      repellat, nihil dignissimos. Qui hic atque nostrum. Nam quia quidem esse hic ut. Molestiae
      labore molestias temporibus repellat optio. Necessitatibus sequi magnam sunt voluptatum saepe
      quaerat consequuntur at culpa odio, laudantium ducimus dolorem qui quas molestias suscipit
      praesentium deserunt ullam neque possimus tempore officia eius ab error. Impedit praesentium
      illum itaque quae minima!
    </p>
  </div>
);

<MobileLayout header={Header} content={Content} footer={Footer} />;
```
