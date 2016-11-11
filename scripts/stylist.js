function Stylist() {

  this.imports = [
    'instanceStorage'
  ];

  this.pickColor = () => {
    let startColors = ['blue', 'green', 'purple', 'black', 'red'];
    let takenColors = [];
    this.instanceStorage.getStorage().forEach((instance) => {
      takenColors.push(instance.color);
    });
    let remainingColors = startColors.filter((color) => {
      return takenColors.indexOf(color) === -1;
    });
    let random = Math.floor(Math.random() * remainingColors.length);
    return remainingColors[random];
  }

}
