function InstanceStorage() {

  this.imports = [];

  let storage = [];

  this.store = instance => storage.push(instance);

  this.getStorage = () => storage;

}
