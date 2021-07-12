# [React Pagination](https://www.youtube.com/watch?v=IYCa1F-OWmk)

- [post from jsonplaceholder](https://jsonplaceholder.typicode.com/posts)

- style cdn bootstrap added index.html (https://react-bootstrap.github.io/getting-started/introduction/)

## how jsonplaceholder post data look like

```json
[
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
"userId": 1,
"id": 2,
"title": "qui est esse",
"body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{}, {}, ...]
```

- install axios()

### understand variable posts in useState([])

- default value for posts is `[]`

```js
  // create state values
  const [posts, setPosts] = useState([]);

  // same as setting empty obj to key posts inside of state obj
  state = {
    posts: []
  }
```

- we have api call therefore create another state management for loading.  default value is `false`.

```js
const [loading, setLoading] = useState(false);
```

- Quick react snippets
`racf` - arrow function component

## why do we use `loading` useState()?

![loading transition](./asset/posts-data-load.png)

- We wrap 
`setLoading(true)`
for `await axios.get(url)`
then close it off with `setLoading(false)`

This ensures posts data has been loaded. 

- add Spinner for while data is loading: 
* Spinner: https://bit.dev/joshk/react-spinners-css/facebook, https://github.com/JoshK2/react-spinners-css

```js
import React from 'react';
import Facebook from '@bit/joshk.react-spinners-css.facebook';

export default <Facebook color="#be97e8" />

```

### bootstrap list group

https://react-bootstrap.github.io/components/list-group/


https://getbootstrap.com/docs/4.0/components/list-group/

- `mb-4` boostrap utility: margin bottom 4

```jsx
<ListGroup>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>

// or use regular bootstrap

<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
```