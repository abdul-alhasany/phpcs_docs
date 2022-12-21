# DocCommentAlignment

Tests that the stars in a doc comment align correctly.

### Scope

`Squiz.Commenting.DocCommentAlignment`

## Description

The asterisks in a doc comment should align, and there should be one space between the asterisk and tags.

## Usage

```xml
<rule ref="Squiz.Commenting.DocCommentAlignment"></rule>
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