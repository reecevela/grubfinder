import data from './data.json';
import Restaurant from './Restaurant';
import Dish from './Dish';

const root = document.getElementById('content');

data.restaurants.forEach(restaurant => {
  const place = new Restaurant(restaurant.name);
  place.appendTo(root);

  restaurant.dishes.forEach( dish => {
    const plate = new Dish(dish.name, dish.description);
    plate.appendTo(root);
  })
});