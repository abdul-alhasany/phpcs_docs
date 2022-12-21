# ControlSignature

Verifies that control statements conform to their coding standards.

### Scope

`PEAR.ControlStructures.ControlSignature`

## Description

Control structures should use one space around the parentheses in conditions.  The opening brace should be preceded by one space and should be at the end of the line.

## Properties

| Property Name  | Type | Default | Available Since |
| -------------- | ---- | ------- | --------------- |
| ignoreComments | bool | true    | 1.4.0           |

## Usage

```xml
<rule ref="PEAR.ControlStructures.ControlSignature">
    <properties>
        <property name="ignoreComments" value="false" />
    </properties>
</rule>
```

## Examples

### Example 1

:::valid Valid: Correct spacing around the condition.
```php
if ($foo) {
}
```
:::

:::invalid Invalid: Incorrect spacing around the condition.
```php
if($foo){
}
```
:::

### Example 2

:::valid Valid: Correct placement of the opening brace.
```php
if ($foo) {
}
```
:::

:::invalid Invalid: Incorrect placement of the opening brace on a new line.
```php
if ($foo)
{
}
```
:::