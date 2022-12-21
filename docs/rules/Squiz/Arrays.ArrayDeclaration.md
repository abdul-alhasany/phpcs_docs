# ArrayDeclaration

Ensures that arrays conform to the array coding standard.

### Scope

`Squiz.Arrays.ArrayDeclaration`

## Description

This standard covers all array declarations, regardless of the number and type of values contained within the array.

The `<em>`array`</em>` keyword must be lowercase.

The first array key must begin on the line after the `<em>`array`</em>` keyword.

All array keys must be indented to one space after the start of the `<em>`array`</em>` keyword. The closing parenthesis must be aligned with the start of the `<em>`array`</em>` keyword.

All double arrow symbols must be aligned to one space after the longest array key. Alignment must be achieved using spaces.

All array values must be followed by a comma, including the final value.

## Usage

```xml
<rule ref="Squiz.Arrays.ArrayDeclaration"></rule>
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