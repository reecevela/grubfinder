export default class Dish {
  constructor (name, desc) {
    this.name = name;
    this.desc = desc;
  }

  appendTo(root){
    const div = document.createElement('div');
    const name = document.createElement('h2');
    const desc = document.createElement('p');
    div.className = "dish"
    name.textContent = this.name;
    desc.textContent = this.desc;
    div.appendChild(name);
    div.appendChild(desc);
    root.appendChild(div);
  }
}