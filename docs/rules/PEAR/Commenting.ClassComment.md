# ClassComment

Parses and verifies the doc comments for classes.

### Scope

`PEAR.Commenting.ClassComment`

## Description

Classes and interfaces must have a non-empty doc comment.  The short description must be on the second line of the comment.  Each description must have one blank comment line before and after.  There must be one blank line before the tags in the comments.  A @version tag must be in Release: package_version format.

## Usage

```xml
<rule ref="PEAR.Commenting.ClassComment"></rule>
```

## Examples

### Example 1

:::valid Valid: A doc comment for the class.
```php
/**
 * The Foo class.
 */
class Foo
{
}
```
:::

:::invalid Invalid: No doc comment for the class.
```php
class Foo
{
}
```
:::

### Example 2

:::valid Valid: A doc comment for the class.
```php
/**
 * The Foo class.
 */
class Foo
{
}
```
:::

:::invalid Invalid: Invalid comment type for the class.
```php
// The Foo class.
class Foo
{
}
```
:::

### Example 3

:::valid Valid: A doc comment for the class.
```php
/**
 * The Foo class.
 */
class Foo
{
}
```
:::

:::invalid Invalid: The blank line after the comment makes it appear as a file comment, not a class comment.
```php
/**
 * The Foo class.
 */

class Foo
{
}
```
:::

### Example 4

:::valid Valid: Short description is the second line of the comment.
```php
/**
 * The Foo class.
 */
class Foo
{
}
```
:::

:::invalid Invalid: An extra blank line before the short description.
```php
/**
 *
 * The Foo class.
 */
class Foo
{
}
```
:::

### Example 5

:::valid Valid: Exactly one blank line around descriptions.
```php
/**
 * The Foo class.
 * 
 * A helper for the Bar class.
 * 
 * @see Bar
 */
class Foo
{
}
```
:::

:::invalid Invalid: Extra blank lines around the descriptions.
```php
/**
 * The Foo class.
 * 
 * 
 * A helper for the Bar class.
 * 
 * 
 * @see Bar
 */
class Foo
{
}
```
:::

### Example 6

:::valid Valid: Exactly one blank line before the tags.
```php
/**
 * The Foo class.
 * 
 * @see Bar
 */
class Foo
{
}
```
:::

:::invalid Invalid: Extra blank lines before the tags.
```php
/**
 * The Foo class.
 * 
 * 
 * @see Bar
 */
class Foo
{
}
```
:::

### Example 7

:::valid Valid: Version tag is in the correct format.
```php
/**
 * The Foo class.
 *
 * @version Release: 1.0
 */
class Foo
{
}
```
:::

:::invalid Invalid: No Release: text.
```php
/**
 * The Foo class.
 *
 * @version 1.0
 */
class Foo
{
}
```
:::