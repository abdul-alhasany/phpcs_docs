# ClosingTag

Checks that the file does not end with a closing tag.

### Scope

`PSR2.Files.ClosingTag`

## Usage

```xml
<rule ref="PSR2.Files.ClosingTag"></rule>
```

## Examples

### Example 1

:::valid Valid: Case statement indented correctly.
```php
switch ($foo) {
    case 'bar':
        break;
}
```
:::

:::invalid Invalid: Case statement not indented 4 spaces.
```php
switch ($foo) {
case 'bar':
    break;
}
```
:::

### Example 2

:::valid Valid: Case statement followed by 1 space.
```php
switch ($foo) {
    case 'bar':
        break;
}
```
:::

:::invalid Invalid: Case statement not followed by 1 space.
```php
switch ($foo) {
    case'bar':
        break;
}
```
:::

### Example 3

:::valid Valid: Colons not prefixed by whitespace.
```php
switch ($foo) {
    case 'bar':
        break;
    default:
        break;
}
```
:::

:::invalid Invalid: Colons prefixed by whitespace.
```php
switch ($foo) {
    case 'bar' :
        break;
    default :
        break;
}
```
:::

### Example 4

:::valid Valid: Break statement indented correctly.
```php
switch ($foo) {
    case 'bar':
        break;
}
```
:::

:::invalid Invalid: Break statement not indented 4 spaces.
```php
switch ($foo) {
    case 'bar':
    break;
}
```
:::

### Example 5

:::valid Valid: Comment marking intentional fall-through.
```php
switch ($foo) {
    case 'bar':
    // no break
    default:
        break;
}
```
:::

:::invalid Invalid: No comment marking intentional fall-through.
```php
switch ($foo) {
    case 'bar':
    default:
        break;
}
```
:::