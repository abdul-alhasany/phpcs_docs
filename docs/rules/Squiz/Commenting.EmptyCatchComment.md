# EmptyCatchComment

Checks for empty catch clause without a comment.

### Scope

`Squiz.Commenting.EmptyCatchComment`

## Usage

```xml
<rule ref="Squiz.Commenting.EmptyCatchComment"></rule>
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