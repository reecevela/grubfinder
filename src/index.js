import data from './data.json';
import Restaurant from './Restaurant';
import Dish from './Dish';
import FavDish from './FavDish';

const root = document.getElementById('content');

data.restaurants.forEach(restaurant => {
  const place = new Restaurant(restaurant.name);
  place.appendTo(root);
  let favChosen = false;

  restaurant.dishes.forEach( dish => {
    const plate = (favChosen) ?
      new Dish(dish.name, dish.description) :
      new FavDish(dish.name, dish.description);
    favChosen = true;
    plate.appendTo(root);
  })
});