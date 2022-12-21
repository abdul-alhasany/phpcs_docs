# ForLoopShouldBeWhileLoop

Detects for-loops that can be simplified to a while-loop.

This rule is based on the PMD rule catalogue. Detects for-loops that can be
simplified as a while-loop.

```php
class Foo
{
    public function bar($x)
    {
        for (;true;) true; // No Init or Update part, may as well be: while (true)
    }
}
```

### Scope

`Generic.CodeAnalysis.ForLoopShouldBeWhileLoop`

## Description

For loops that have only a second expression (the condition) should be converted to while loops.

## Usage

```xml
<rule ref="Generic.CodeAnalysis.ForLoopShouldBeWhileLoop"></rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::