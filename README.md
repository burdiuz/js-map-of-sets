# # Map of Set's
Simple data storage that may hold multiple unique values per key.
```
{
  Map {
    [key1]: Set[value1, value2, value3],
    [key2]: Set[value1, value2, value3],
    [key3]: Set[value1, value2, value3],
  }
}
```

## Installation

Via NPM
```bash
npm install @actualwave/map-of-sets --save
```
Or Yarn
```bash
yarn add @actualwave/map-of-sets
```
  
## How to use
Create an instance by instantiating class
```javascript
import MapOfSets from '@actualwave/map-of-sets';

const sets = new MapOfSets();
sets.add('key', 'value 1');
sets.add('key', 'value 2');
sets.add('key', 'value 3');
sets.add('key', 'value 2');
sets.add('key', 'value 2');

console.log(sets.get()); // Set[ 'value 1', 'value 2', 'value 3' ]
```
  
## API

 * **has**(key) -- Check if key exists and its Set is not empty
 * **hasValue**(key, value) -- Check if value exists for key
 * **get**(key) -- Get Set of values for key
 * **list**(key) -- List values for key, returns empty array if no key nor values stored
 * **forEach**(callback) -- Call callback function for **each value of each key**
 * **eachValue**(key, callback) -- Call callback function for each value of specified key
 * **add**(key, value) -- Add to new value to key
 * **set**(key, values) -- Replace all values for key
 * **remove**(key) -- Remove all values for key
 * **removeValue**(key, value) -- Remove single value from key
 * **clone**() -- Clone all key-value stores
  

> Written with [StackEdit](https://stackedit.io/).
