function InstanceStorage() {

  this.imports = [];

  let storage = [];

  this.store = instance => storage.push(instance);

  this.getStorage = () => storage;

  this.clearStorage = (confirmBool) => {
    if (confirmBool) {
      storage = [];
    } else {
      throw(new Error("InstanceStorage#clearStorage requires a boolean confirmation"));
    }
  }


}
