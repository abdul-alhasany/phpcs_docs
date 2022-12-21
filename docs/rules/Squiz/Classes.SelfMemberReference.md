# SelfMemberReference

Tests self member references.

Verifies that :
- self:: is used instead of Self::
- self:: is used for local static member reference
- self:: is used instead of self ::

### Scope

`Squiz.Classes.SelfMemberReference`

## Description

The self keyword should be used instead of the current class name, should be lowercase, and should not have spaces before or after it.

## Usage

```xml
<rule ref="Squiz.Classes.SelfMemberReference"></rule>
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