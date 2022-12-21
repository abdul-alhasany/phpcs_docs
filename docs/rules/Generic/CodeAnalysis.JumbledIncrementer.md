# JumbledIncrementer

Detects incrementer jumbling in for loops.

This rule is based on the PMD rule catalogue. The jumbling incrementer sniff
detects the usage of one and the same incrementer into an outer and an inner
loop. Even it is intended this is confusing code.

```php
class Foo
{
    public function bar($x)
    {
        for ($i = 0; $i < 10; $i++)
        {
            for ($k = 0; $k < 20; $i++)
            {
                echo 'Hello';
            }
        }
    }
}
```

### Scope

`Generic.CodeAnalysis.JumbledIncrementer`

## Description

Incrementers in nested loops should use different variable names.

## Usage

```xml
<rule ref="Generic.CodeAnalysis.JumbledIncrementer"></rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::