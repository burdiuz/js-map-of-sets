
export class MapOfSets {
  constructor() {
    this.storage = new Map();
  }

  /**
   * Check if key exists
   * @param {*} key
   */
  has(key) {
    const values = this.storage.get(key);

    return values && values.size;
  }

  /**
   * Check if value exists for key
   * @param {*} key
   * @param {*} value
   */
  hasValue(key, value) {
    const values = this.storage.get(key);

    return values && values.has(value);
  }

  /**
   * Get Set of values for key
   * @param {*} key
   */
  get(key) {
    return this.storage.get(key);
  }

  /**
   * List values for key, returns empty array if no key nor values stored
   * @param {*} key
   */
  list(key) {
    const values = this.storage.get(key);

    return values ? Array.from(values) : [];
  }

  /**
   * Call callback for each value of each key
   *  callback (value:*, key:*, storage:*):void
   * @param {Function} callback
   */
  forEach(callback) {
    this.storage.forEach((values, key) => values.forEach((value) => callback(value, key, this)));
  }

  /**
   * Call callback function for each value of specified key
   *  callback (value:*, key:*, storage:*):void
   * @param {*} key
   * @param {Function} callback
   */
  eachValue(key, callback) {
    const values = this.storage.get(key);

    if (values) {
      values.forEach((value) => callback(value, key, this));
    }
  }

  /**
   * Add to new value to key.
   * @param {*} key
   * @param {*} value
   */
  add(key, value) {
    if (!value) return;
    const values = this.storage.get(key);

    if (values) {
      values.add(value);
    } else {
      this.storage.set(key, new Set([value]));
    }
  }

  /**
   * Replace all values for key
   * @param {*} key
   * @param {Set} types
   */
  set(key, values) {
    if (!values || values.size === 0) {
      this.remove(key);
      return;
    }

    this.storage.set(key, new Set(values));
  }

  /**
   * Remove all values for key
   * @param {*} key
   */
  remove(key) {
    this.storage.delete(key);
  }

  /**
   * Remove single value from key
   * @param {*} key
   * @param {*} value
   */
  removeValue(key, value) {
    const values = this.storage.get(key);

    if (values) {
      values.delete(value);

      if (!values.size) {
        this.remove(key);
      }
    }
  }

  /**
   * Clone all key-value stores
   */
  clone() {
    const target = new MapOfSets();
    this.storage.forEach((values, key) => target.set(key, new Set(values)));

    return target;
  }
}

export const createMapOfSets = () => new MapOfSets();

export default MapOfSets;
