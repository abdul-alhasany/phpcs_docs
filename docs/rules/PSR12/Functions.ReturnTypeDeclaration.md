# ReturnTypeDeclaration

Ensure return types are defined correctly for functions and closures.

### Scope

`PSR12.Functions.ReturnTypeDeclaration`

## Usage

```xml
<rule ref="PSR12.Functions.ReturnTypeDeclaration"></rule>
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