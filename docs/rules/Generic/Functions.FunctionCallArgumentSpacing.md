# FunctionCallArgumentSpacing

Checks that calls to methods and functions are spaced correctly.

### Scope

`Generic.Functions.FunctionCallArgumentSpacing`

## Description

Function arguments should have one space after a comma, and single spaces surrounding the equals sign for default values.

## Usage

```xml
<rule ref="Generic.Functions.FunctionCallArgumentSpacing"></rule>
```

## Examples

### Example 1

:::valid Valid: Single spaces after a comma.
```php
function foo($bar, $baz)
{
}
```
:::

:::invalid Invalid: No spaces after a comma.
```php
function foo($bar,$baz)
{
}
```
:::

### Example 2

:::valid Valid: Single spaces around an equals sign in function declaration.
```php
function foo($bar, $baz = true)
{
}
```
:::

:::invalid Invalid: No spaces around an equals sign in function declaration.
```php
function foo($bar, $baz=true)
{
}
```
:::