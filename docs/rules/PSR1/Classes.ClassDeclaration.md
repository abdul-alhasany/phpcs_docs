# ClassDeclaration

Checks the declaration of the class is correct.

### Scope

`PSR1.Classes.ClassDeclaration`

## Description

Each class must be in a file by itself and must be under a namespace (a top-level vendor name).

## Usage

```xml
<rule ref="PSR1.Classes.ClassDeclaration"></rule>
```

## Examples

### Example 1

:::valid Valid: One class in a file.
```php
<?php
namespace Foo;

class Bar {
}
```
:::

:::invalid Invalid: Multiple classes in a single file.
```php
<?php
namespace Foo;

class Bar {
}

class Baz {
}
```
:::

### Example 2

:::valid Valid: A vendor-level namespace is used.
```php
<?php
namespace Foo;

class Bar {
}
```
:::

:::invalid Invalid: No namespace used in file.
```php
<?php
class Bar {
}
```
:::