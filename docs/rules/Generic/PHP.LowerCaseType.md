# LowerCaseType

Checks that all PHP types are lowercase.

### Scope

`Generic.PHP.LowerCaseType`

## Description

All PHP types used for parameter type and return type declarations should be lowercase.

All PHP types used for type casting should be lowercase.

## Usage

```xml
<rule ref="Generic.PHP.LowerCaseType"></rule>
```

## Examples

### Example 1

:::valid Valid: Lowercase type declarations used.
```php
function myFunction(int $foo) : string {
}
```
:::

:::invalid Invalid: Non-lowercase type declarations used.
```php
function myFunction(Int $foo) : STRING {
}
```
:::

### Example 2

:::valid Valid: Lowercase type used.
```php
$foo = (bool) $isValid;
```
:::

:::invalid Invalid: Non-lowercase type used.
```php
$foo = (BOOL) $isValid;
```
:::