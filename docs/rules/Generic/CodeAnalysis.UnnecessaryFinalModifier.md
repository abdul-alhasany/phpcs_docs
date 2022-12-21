# UnnecessaryFinalModifier

Detects unnecessary final modifiers inside of final classes.

This rule is based on the PMD rule catalogue. The Unnecessary Final Modifier
sniff detects the use of the final modifier inside of a final class which
is unnecessary.

```php
final class Foo
{
    public final function bar()
    {
    }
}
```

### Scope

`Generic.CodeAnalysis.UnnecessaryFinalModifier`

## Description

Methods should not be declared final inside of classes that are declared final.

## Usage

```xml
<rule ref="Generic.CodeAnalysis.UnnecessaryFinalModifier"></rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::