# MultiLineAssignment

If an assignment goes over two lines, ensure the equal sign is indented.

### Scope

`PEAR.Formatting.MultiLineAssignment`

## Description

Multi-line assignment should have the equals sign be the first item on the second line indented correctly.

## Properties

| Property Name | Type | Default | Available Since |
| ------------- | ---- | ------- | --------------- |
| indent        | int  | 4       | 1.4.7           |

## Usage

```xml
<rule ref="PEAR.Formatting.MultiLineAssignment">
    <properties>
        <property name="indent" value="2" />
    </properties>
</rule>
```

## Examples

### Example 1

:::valid Valid: Assignment operator at the start of the second line.
```php
$foo
    = $bar;
```
:::

:::invalid Invalid: Assignment operator at end of first line.
```php
$foo =
    $bar;
```
:::

### Example 2

:::valid Valid: Assignment operator indented one level.
```php
$foo
    = $bar;
```
:::

:::invalid Invalid: Assignment operator not indented.
```php
$foo
= $bar;
```
:::