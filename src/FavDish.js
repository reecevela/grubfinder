import Dish from "./Dish";

export default class FavDish extends Dish {
  constructor (name, desc) {
    super(name, desc)
  }

  appendTo(root){
    const div = document.createElement('div');
    const name = document.createElement('h2');
    const desc = document.createElement('p');
    div.className = "dish fav"
    name.textContent = this.name;
    desc.textContent = this.desc;
    div.appendChild(name);
    div.appendChild(desc);
    root.appendChild(div);
  }
}