# ClassComment

Parses and verifies the class doc comment.

Verifies that :
<ul>
 <li>A class doc comment exists.</li>
 <li>The comment uses the correct docblock style.</li>
 <li>There are no blank lines after the class comment.</li>
 <li>No tags are used in the docblock.</li>
</ul>

### Scope

`Squiz.Commenting.ClassComment`

## Usage

```xml
<rule ref="Squiz.Commenting.ClassComment"></rule>
```

## Examples

### Example 1

:::valid Valid: Lowercase self used.
```php
self::foo();
```
:::

:::invalid Invalid: Uppercase self used.
```php
SELF::foo();
```
:::

### Example 2

:::valid Valid: Correct spacing used.
```php
self::foo();
```
:::

:::invalid Invalid: Incorrect spacing used.
```php
self :: foo();
```
:::

### Example 3

:::valid Valid: Self used as reference.
```php
class Foo
{
    public static function bar()
    {
    }

    public static function baz()
    {
        self::bar();
    }
}
```
:::

:::invalid Invalid: Local class name used as reference.
```php
class Foo
{
    public static function bar()
    {
    }

    public static function baz()
    {
        Foo::bar();
    }
}
```
:::