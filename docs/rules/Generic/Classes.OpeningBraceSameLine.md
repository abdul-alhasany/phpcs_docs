# OpeningBraceSameLine

Checks that the opening brace of a class/interface/trait is on the same line as the class declaration.

### Scope

`Generic.Classes.OpeningBraceSameLine`

## Description

The opening brace of a class must be on the same line after the definition and must be the last thing on that line.

## Usage

```xml
<rule ref="Generic.Classes.OpeningBraceSameLine"></rule>
```

## Examples

### Example 1

:::valid Valid: Opening brace on the same line.
```php
class Foo {
}
```
:::

:::invalid Invalid: Opening brace on the next line.
```php
class Foo
{
}
```
:::

### Example 2

:::valid Valid: Opening brace is the last thing on the line.
```php
class Foo {
}
```
:::

:::invalid Invalid: Opening brace not last thing on the line.
```php
class Foo { // Start of class.
}
```
:::