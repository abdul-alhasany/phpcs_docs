# AnonClassDeclaration

Checks that the declaration of an anon class is correct.

### Scope

`PSR12.Classes.AnonClassDeclaration`

## Properties

| Property Name | Type | Default | Available Since |
| ------------- | ---- | ------- | --------------- |
| indent        | int  | 4       | 3.5.0           |

## Usage

```xml
<rule ref="PSR12.Classes.AnonClassDeclaration">
    <properties>
        <property name="indent" value="2" />
    </properties>
</rule>
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