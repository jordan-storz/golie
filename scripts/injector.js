function Injector() {

  var registry = {};

  var injectableMethods = {
    import: function(exporter) {
      this[exporter] = exporter;
    }
  }

  function camelCaseName(Component) {
    var name = Component.name;
    return name[0].toLowerCase() + name.slice(1);
  }

  this.create = function(Component) {
    var instanceName = camelCaseName(Component);
    for (var key in registry) {
      if (registry[key] === instanceName) {
        return;
      }
    }
    registry[instanceName] = new Component();
    this.makeInjectable(registry[instanceName]);
  }

  this.injectInto = function(instance) {
    var imports = instance.imports;
    if (!imports) return;
    imports.forEach((name) => {
      if (!this.has(name)) {
        throw new Error(`Injector Error: ${name} does not exist in registry.  Please include it in Bootstrap component list`);
      } else {
        instance[name] = registry[name];
      }
    });
  }

  this.makeInjectable = function(instance) {
    for (var key in injectableMethods) {
      instance.__proto__[key] = injectableMethods[key];
    }
  }

  this.getInstanceNames = function() {
    var result = [];
    for (var key in registry) {
      result.push(key);
    }
    return result;
  }

  this.provide = function(instanceName) {
    if (typeof instanceName === 'function') {
      instanceName = camelCaseName(instanceName);
    }
    if (!this.has(instanceName)) {
      return null;
    } else {
      return registry[instanceName];
    }
  }

  this.has = function(instanceName) {
    var instances = this.getInstanceNames(instanceName);
    return instances.indexOf(instanceName) !== -1;
  }

  this.getName = function(instance) {
    for (key in registry) {
      if (registry[key] === instance) {
        return key;
      }
    }
  }
}
