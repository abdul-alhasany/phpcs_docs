# MethodDeclaration

Checks that the method declaration is correct.

### Scope

`PSR2.Methods.MethodDeclaration`

## Description

Method names should not be prefixed with an underscore to indicate visibility.  The static keyword, when present, should come after the visibility declaration, and the final and abstract keywords should come before.

## Usage

```xml
<rule ref="PSR2.Methods.MethodDeclaration"></rule>
```

## Examples

### Example 1

:::valid Valid: Correct method naming.
```php
class Foo
{
    private function bar()
    {
    }
}
```
:::

:::invalid Invalid: An underscore prefix used to indicate visibility.
```php
class Foo
{
    private function _bar()
    {
    }
}
```
:::

### Example 2

:::valid Valid: Correct ordering of method prefixes.
```php
class Foo
{
    final public static function bar()
    {
    }
}
```
:::

:::invalid Invalid: static keyword used before visibility and final used after.
```php
class Foo
{
    static public final function bar()
    {
    }
}
```
:::