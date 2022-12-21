# MultiLineCondition

Ensure multi-line IF conditions are defined correctly.

### Scope

`PEAR.ControlStructures.MultiLineCondition`

## Description

Multi-line if conditions should be indented one level and each line should begin with a boolean operator.  The end parenthesis should be on a new line.

## Properties

| Property Name | Type | Default | Available Since |
| ------------- | ---- | ------- | --------------- |
| indent        | int  | 4       | 1.4.7           |

## Usage

```xml
<rule ref="PEAR.ControlStructures.MultiLineCondition">
    <properties>
        <property name="indent" value="2" />
    </properties>
</rule>
```

## Examples

### Example 1

:::valid Valid: Correct indentation.
```php
if ($foo
    && $bar
) {
}
```
:::

:::invalid Invalid: No indentation used on the condition lines.
```php
if ($foo
&& $bar
) {
}
```
:::

### Example 2

:::valid Valid: Boolean operator at the start of the line.
```php
if ($foo
    && $bar
) {
}
```
:::

:::invalid Invalid: Boolean operator at the end of the line.
```php
if ($foo &&
    $bar
) {
}
```
:::

### Example 3

:::valid Valid: End parenthesis on a new line.
```php
if ($foo
    && $bar
) {
}
```
:::

:::invalid Invalid: End parenthesis not moved to a new line.
```php
if ($foo
    && $bar) {
}
```
:::