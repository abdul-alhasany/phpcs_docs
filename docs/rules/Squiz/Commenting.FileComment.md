# FileComment

Parses and verifies the file doc comment.

### Scope

`Squiz.Commenting.FileComment`

## Usage

```xml
<rule ref="Squiz.Commenting.FileComment"></rule>
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