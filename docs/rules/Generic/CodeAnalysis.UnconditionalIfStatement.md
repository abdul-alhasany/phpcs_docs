# UnconditionalIfStatement

Detects unconditional if- and elseif-statements.

This rule is based on the PMD rule catalogue. The Unconditional If Statement
sniff detects statement conditions that are only set to one of the constant
values <b>true</b> or <b>false</b>

```php
class Foo
{
    public function close()
    {
        if (true)
        {
            // ...
        }
    }
}
```

### Scope

`Generic.CodeAnalysis.UnconditionalIfStatement`

## Description

If statements that are always evaluated should not be used.

## Usage

```xml
<rule ref="Generic.CodeAnalysis.UnconditionalIfStatement"></rule>
```

## Examples

### Example 1

:::valid Valid: An if statement that only executes conditionally.
```php
if ($test) {
    $var = 1;
}
```
:::

:::invalid Invalid: An if statement that is always performed.
```php
if (true) {
    $var = 1;
}
```
:::

### Example 2

:::valid Valid: An if statement that only executes conditionally.
```php
if ($test) {
    $var = 1;
}
```
:::

:::invalid Invalid: An if statement that is never performed.
```php
if (false) {
    $var = 1;
}
```
:::