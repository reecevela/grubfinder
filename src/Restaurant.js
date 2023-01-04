export default class Restaurant {
  constructor (name) {
    this.name = name;
  }

  appendTo(root){
    const title = document.createElement('h1');
    title.className = "restaurant";
    title.textContent = this.name;
    root.appendChild(title);
  }
}