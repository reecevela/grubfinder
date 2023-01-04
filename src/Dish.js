export default class Dish {
  constructor (name, desc) {
    this.name = name;
    this.desc = desc;
  }

  appendTo(root){
    const name = document.createElement('h2');
    const desc = document.createElement('p');
    name.textContent = this.name;
    desc.textContent = this.desc;
    root.appendChild(name);
    root.appendChild(desc);
  }
}