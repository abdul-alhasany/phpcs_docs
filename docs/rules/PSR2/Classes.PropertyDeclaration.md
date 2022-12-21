# PropertyDeclaration

Verifies that properties are declared correctly.

### Scope

`PSR2.Classes.PropertyDeclaration`

## Description

Property names should not be prefixed with an underscore to indicate visibility.  Visibility should be used to declare properties rather than the var keyword.  Only one property should be declared within a statement.  The static declaration must come after the visibility declaration.

## Usage

```xml
<rule ref="PSR2.Classes.PropertyDeclaration"></rule>
```

## Examples

### Example 1

:::valid Valid: Correct property naming.
```php
class Foo
{
    private $bar;
}
```
:::

:::invalid Invalid: An underscore prefix used to indicate visibility.
```php
class Foo
{
    private $_bar;
}
```
:::

### Example 2

:::valid Valid: Visibility of property declared.
```php
class Foo
{
    private $bar;
}
```
:::

:::invalid Invalid: Var keyword used to declare property.
```php
class Foo
{
    var $bar;
}
```
:::

### Example 3

:::valid Valid: One property declared per statement.
```php
class Foo
{
    private $bar;
    private $baz;
}
```
:::

:::invalid Invalid: Multiple properties declared in one statement.
```php
class Foo
{
    private $bar, $baz;
}
```
:::

### Example 4

:::valid Valid: If declared as static, the static declaration must come after the visibility declaration.
```php
class Foo
{
    public static $bar;
    private $baz;
}
```
:::

:::invalid Invalid: Static declaration before the visibility declaration.
```php
class Foo
{
    <em>static<em> protected $bar;
}
```
:::