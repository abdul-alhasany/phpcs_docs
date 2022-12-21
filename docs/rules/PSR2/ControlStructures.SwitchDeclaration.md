# SwitchDeclaration

Ensures all switch statements are defined correctly.

### Scope

`PSR2.ControlStructures.SwitchDeclaration`

## Description

Case statements should be indented 4 spaces from the switch keyword.  It should also be followed by a space.  Colons in switch declarations should not be preceded by whitespace.  Break statements should be indented 4 more spaces from the case statement.  There must be a comment when falling through from one case into the next.

## Properties

| Property Name | Type | Default | Available Since |
| ------------- | ---- | ------- | --------------- |
| indent        | int  | 4       | 1.4.5           |

## Usage

```xml
<rule ref="PSR2.ControlStructures.SwitchDeclaration">
    <properties>
        <property name="indent" value="2" />
    </properties>
</rule>
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