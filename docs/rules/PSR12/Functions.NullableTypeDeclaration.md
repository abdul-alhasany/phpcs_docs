# NullableTypeDeclaration

Verifies that nullable typehints are lacking superfluous whitespace, e.g. ?int

### Scope

`PSR12.Functions.NullableTypeDeclaration`

## Description

In nullable type declarations there MUST NOT be a space between the question mark and the type.

## Usage

```xml
<rule ref="PSR12.Functions.NullableTypeDeclaration"></rule>
```

## Examples

### Example 1

:::valid Valid: no whitespace used.
```php
public function functionName(
    ?string $arg1,
    ?int $arg2
): ?string {
}
```
:::

:::invalid Invalid: superfluous whitespace used.
```php
public function functionName(
    ? string $arg1,
    ? int $arg2
): ? string {
}
```
:::

### Example 2

:::valid Valid: no unexpected characters.
```php
public function foo(?int $arg): ?string
{
}
```
:::

:::invalid Invalid: unexpected characters used.
```php
public function bar(? /* comment */ int $arg): ?
    // nullable for a reason
    string
{
}
```
:::