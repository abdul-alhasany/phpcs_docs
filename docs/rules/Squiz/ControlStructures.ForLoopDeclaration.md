# ForLoopDeclaration

Verifies that there is a space between each condition of for loops.

### Scope

`Squiz.ControlStructures.ForLoopDeclaration`

## Description

In a for loop declaration, there should be no space inside the brackets and there should be 0 spaces before and 1 space after semicolons.

## Properties

| Property Name             | Type | Default | Available Since |
| ------------------------- | ---- | ------- | --------------- |
| ignoreNewlines            | bool | false   | 3.5.4           |
| requiredSpacesAfterOpen   | int  | 0       | 1.5.2           |
| requiredSpacesBeforeClose | int  | 0       | 1.5.2           |

## Usage

```xml
<rule ref="Squiz.ControlStructures.ForLoopDeclaration">
    <properties>
        <property name="ignoreNewlines" value="true" />
    </properties>
</rule>
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