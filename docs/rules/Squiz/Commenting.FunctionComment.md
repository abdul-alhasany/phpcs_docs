# FunctionComment

Parses and verifies the doc comments for functions.

### Scope

`Squiz.Commenting.FunctionComment`

## Properties

| Property Name     | Type   | Default                  | Available Since |
| ----------------- | ------ | ------------------------ | --------------- |
| minimumVisibility | string | private                  | 3.6.0           |
| skipIfInheritdoc  | bool   | false                    | 3.6.0           |
| specialMethods    | array  | [__construct,__destruct] | 3.6.0           |

## Usage

```xml
/**
 * {@inheritDoc}
 */
public function foo($a, $b) {}
```

## Examples

### Example 1

:::valid Valid: Asterisks are aligned.
```php
/**
 * @see foo()
 */
```
:::

:::invalid Invalid: Asterisks are not aligned.
```php
/**
  * @see foo()
*/
```
:::

### Example 2

:::valid Valid: One space between asterisk and tag.
```php
/**
 * @see foo()
 */
```
:::

:::invalid Invalid: Incorrect spacing used.
```php
/**
 *  @see foo()
 */
```
:::