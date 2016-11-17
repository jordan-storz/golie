function InstanceStorage() {

  this.imports = [];

  let storage = [];

  this.store = instance => storage[0] = instance;

  this.getStorage = () => storage;

}
