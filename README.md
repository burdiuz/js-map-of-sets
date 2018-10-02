# Map of Set's

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
> Note: forEach() callback goes through all values of every key.
