# ValidClassName

Ensures classes are in camel caps, and the first letter is capitalised.

### Scope

`Squiz.Classes.ValidClassName`

## Usage

```xml
<rule ref="Squiz.Classes.ValidClassName"></rule>
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