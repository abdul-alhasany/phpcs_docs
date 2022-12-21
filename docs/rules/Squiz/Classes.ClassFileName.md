# ClassFileName

Tests that the file name and the name of the class contained within the file match.

### Scope

`Squiz.Classes.ClassFileName`

## Usage

```xml
<rule ref="Squiz.Classes.ClassFileName"></rule>
```

## Examples

### Example 1

:::valid Valid: array keyword lowercase
```php
$array = array('val1', 'val2');
```
:::

:::invalid Invalid: first letter capitalised
```php
$array = Array('val1', 'val2');
```
:::

### Example 2

:::valid Valid: first key on second line
```php
$array = array(
          'key1' => 'value1',
          'key2' => 'value2',
         );
```
:::

:::invalid Invalid: first key on same line
```php
$array = array('key1' => 'value1',
          'key2' => 'value2',
         );
```
:::

### Example 3

:::valid Valid: aligned correctly
```php
$array = array(
          'key1' => 'value1',
          'key2' => 'value2',
         );
```
:::

:::invalid Invalid: keys and parenthesis aligned incorrectly
```php
$array = array(
         'key1' => 'value1',
         'key2' => 'value2',
);
```
:::

### Example 4

:::valid Valid: keys and values aligned
```php
$array = array(
          'keyTen'    => 'ValueTen',
          'keyTwenty' => 'ValueTwenty',
         );
```
:::

:::invalid Invalid: alignment incorrect
```php
$array = array(
          'keyTen' => 'ValueTen',
          'keyTwenty' => 'ValueTwenty',
         );
```
:::

### Example 5

:::valid Valid: comma after each value
```php
$array = array(
          'key1' => 'value1',
          'key2' => 'value2',
          'key3' => 'value3',
         );
```
:::

:::invalid Invalid: no comma after last value
```php
$array = array(
          'key1' => 'value1',
          'key2' => 'value2',
          'key3' => 'value3' 
         );
```
:::