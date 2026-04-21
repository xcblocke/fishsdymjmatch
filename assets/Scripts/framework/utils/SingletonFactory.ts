export class SingletonFactory {
  static instances = new Map();
  static getInstance(t) {
    if (!SingletonFactory.instances.has(t)) {
      var o = new t();
      SingletonFactory.instances.set(t, o);
      return o;
    }
    return SingletonFactory.instances.get(t);
  }
}