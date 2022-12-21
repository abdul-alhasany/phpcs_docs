# UseDeclaration

Ensures USE blocks are declared correctly.

### Scope

`PSR2.Namespaces.UseDeclaration`

## Description

Each use declaration must contain only one namespace and must come after the first namespace declaration.  There should be one blank line after the final use statement.

## Usage

```xml
<rule ref="PSR2.Namespaces.UseDeclaration"></rule>
```

## Examples

### Example 1

:::valid Valid: One use declaration per namespace.
```php
use \Foo;
use \Bar;
```
:::

:::invalid Invalid: Multiple namespaces in a use declaration.
```php
use \Foo, \Bar;
```
:::

### Example 2

:::valid Valid: Use statements come after first namespace.
```php
namespace \Foo;

use \Bar;
```
:::

:::invalid Invalid: Namespace declared after use.
```php
use \Bar;

namespace \Foo;
```
:::

### Example 3

:::valid Valid: A single blank line after the final use statement.
```php
use \Foo;
use \Bar;

class Baz
{
}
```
:::

:::invalid Invalid: No blank line after the final use statement.
```php
use \Foo;
use \Bar;
class Baz
{
}
```
:::