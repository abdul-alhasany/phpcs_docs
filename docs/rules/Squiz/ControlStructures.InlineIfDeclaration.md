# InlineIfDeclaration

Tests the spacing of shorthand IF statements.

### Scope

`Squiz.ControlStructures.InlineIfDeclaration`

## Usage

```xml
<rule ref="Squiz.ControlStructures.InlineIfDeclaration"></rule>
```

## Examples

### Example 1

:::valid Valid: Correct spacing used.
```php
for ($i = 0; $i < 10; $i++) {
    echo $i;
}
```
:::

:::invalid Invalid: Invalid spacing used inside brackets.
```php
for ( $i = 0; $i < 10; $i++ ) {
    echo $i;
}
```
:::

### Example 2

:::valid Valid: Correct spacing used.
```php
for ($i = 0; $i < 10; $i++) {
    echo $i;
}
```
:::

:::invalid Invalid: Invalid spacing used before semicolons.
```php
for ($i = 0 ; $i < 10 ; $i++) {
    echo $i;
}
```
:::

### Example 3

:::valid Valid: Correct spacing used.
```php
for ($i = 0; $i < 10; $i++) {
    echo $i;
}
```
:::

:::invalid Invalid: Invalid spacing used after semicolons.
```php
for ($i = 0;$i < 10;$i++) {
    echo $i;
}
```
:::