import * as React from 'react';
import * as R from 'ramda';
import {Dish} from '../components/dish';
import {Item} from '../entities';

// export const renderCartItems = R.compose(
//   R.addIndex(R.map)((item:Item, id:Number) => React.createElement(Dish, {key: id, item: item})),
//   R.reduce((cartItems:Item[], currentItem:Item) => {
//     let exists = cartItems.find(item => item.name === currentItem.name);
//     if (exists) {
//       exists.count++;
//       exists.price = currentItem.price * exists.count;
//     } else {
//       cartItems.push({
//         'name': currentItem.name,
//         'price': currentItem.price,
//         'count': 1,
//       });
//     }
//     return cartItems;
//   }, [])
// );

// export const reduceTest = R.reduce((cartItems:Item[], currentItem:Item) => {
//   console.log(currentItem);
//   let exists = cartItems.find(item => item.name === currentItem.name);
//   if (exists) {
//     exists.count++;
//     exists.price = currentItem.price * exists.count;
//   } else {
//     cartItems.push({
//       'name': currentItem.name,
//       'price': currentItem.price,
//       'count': 1,
//     });
//   }
//   return cartItems;
// }, []);

// export const reduceTest = (component: any) => {
//   return R.reduce((cartItems:Item[], currentItem:Item) => {
//     console.log(currentItem);
//     let exists = cartItems.find(item => item.name === currentItem.name);
//     if (exists) {
//       exists.count++;
//       exists.price = currentItem.price * exists.count;
//     } else {
//       cartItems.push({
//         'name': currentItem.name,
//         'price': currentItem.price,
//         'count': 1,
//       });
//     }
//     return cartItems;
//   }, [])(component);
// }

export const renderCartItems = R.curry((component: any, createElement:Function, items: Item[]) => {
  return R.compose(
    R.addIndex(R.map)((item:Item, key:Number) => React.createElement(component, {key, item})),
    R.reduce((cartItems:Item[], currentItem:Item) => {
      let exists = cartItems.find(item => item.name === currentItem.name);
      if (exists) {
        exists.count++;
        exists.price = currentItem.price * exists.count;
      } else {
        cartItems.push({
          'name': currentItem.name,
          'price': currentItem.price,
          'count': 1,
        });
      }
      return cartItems;
    }, [])
  )(items);
});
