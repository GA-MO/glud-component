Required `<MobileStyle />` for mobile webview

```jsx
const { useEffect, useState } = require('react')
const { NavigationContainer, Stack } = require('../MobileNavigation');

const Home = ({ navigation }) => {
  return (
    <div className="screen-demo">
      <Title size={4}>Home Screen</Title>
      <Button onClick={() => navigation.navigate('Details')}>Go to Details</Button>
    </div>
  );
};

const Details = ({ navigation }) => {
  return (
    <div className="screen-demo">
      <Title size={4}>Details Screen</Title>
      <Button onClick={() => navigation.navigate('Setting', { name: 'Test' })}>Go to Setting</Button>
    </div>
  );
};

const Setting = ({ navigation, params }) => {
  return (
    <div className="screen-demo">
      <Title size={4}>Setting Screen</Title>
      <p>{params.name}</p>
    </div>
  );
};

<div className="app-demo">
  <NavigationContainer>
    <Stack.Navigator initialScreen="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  </NavigationContainer>
</div>
```

`NavigationContainer` is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure.

Usually, we'd render this component at the root of our app, which is usually the component exported from `App.js`.

```jsx static
import { NavigationContainer } from 'glud-component/lib/MobileNavigation';

<NavigationContainer>
  {/* Rest of your app code */}
</NavigationContainer>
```

### Stack

```jsx static
import { Stack } from 'glud-component/lib/MobileNavigation';

<NavigationContainer>
  <Stack.Navigator initialScreen='Home'>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
</NavigationContainer>
```

### Stack Navigator Props

`initialScreen` - The name of the route to render on first load of the navigator.

```jsx static
import { Stack } from 'glud-component/lib/MobileNavigation';

<Stack.Navigator initialScreen='Home'>
  {/* Stack.Screen is here */}
</Stack.Navigator>
```

### Stack Screen Props

Each screen in the navigator can specify some options for the navigator, such as the title to render in the header. These options can be passed in the options prop for each screen component:

```jsx static
import { Stack } from 'glud-component/lib/MobileNavigation';

<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{
    title: 'Overview',
    subTitle: '',
    rightIcon: 'fas fa-trash',
    rightAction: () => {},
    headerDisabled: false,
    headerRenderer: (options) => <HeaderComponent {...options} />
  }}
/>
```

### Navigating to a new screen

`navigation` - the navigation prop is passed in to every screen component in stack navigator.

```jsx static
const Home = ({ navigation }) => {
  return (
    <div>
      <Title size={4}>Home Screen</Title>
      <Button onClick={() => navigation.navigate('Details')}>Go to Details</Button>
    </div>
  );
}

// ... other code from the previous section
```

### Screen Props

| Prop | Description |
| ---- | ----------- |
|`navigation.navigate(sceenName, objectParams)` | Link to other screens |
|`navigation.goBack()` | Close the active screen and move back |
|`navigation.replace(sceenName, objectParams)` | Replace the current route with a new one |
|`navigation.setParams(objectParams)` | Make changes to route params |
|`navigation.setOptions(objectOptions)` | Update screen options from the component |
|`params` | Object data from previos route |