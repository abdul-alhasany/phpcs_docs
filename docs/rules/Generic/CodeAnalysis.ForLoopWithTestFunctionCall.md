# ForLoopWithTestFunctionCall

Detects for-loops that use a function call in the test expression.

This rule is based on the PMD rule catalogue. Detects for-loops that use a
function call in the test expression.

```php
class Foo
{
    public function bar($x)
    {
        $a = array(1, 2, 3, 4);
        for ($i = 0; $i < count($a); $i++) {
             $a[$i] *= $i;
        }
    }
}
```

### Scope

`Generic.CodeAnalysis.ForLoopWithTestFunctionCall`

## Description

For loops should not call functions inside the test for the loop when they can be computed beforehand.

## Usage

```xml
<rule ref="Generic.CodeAnalysis.ForLoopWithTestFunctionCall"></rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::