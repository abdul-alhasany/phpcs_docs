# ForEachLoopDeclaration

Verifies that there is a space between each condition of foreach loops.

### Scope

`Squiz.ControlStructures.ForEachLoopDeclaration`

## Description

There should be a space between each element of a foreach loop and the as keyword should be lowercase.

## Properties

| Property Name             | Type | Default | Available Since |
| ------------------------- | ---- | ------- | --------------- |
| requiredSpacesAfterOpen   | int  | 0       | 1.5.2           |
| requiredSpacesBeforeClose | int  | 0       | 1.5.2           |

## Usage

```xml
<rule ref="Squiz.ControlStructures.ForEachLoopDeclaration">
    <properties>
        <property name="requiredSpacesAfterOpen" value="1" />
        <property name="requiredSpacesBeforeClose" value="1" />
    </properties>
</rule>
```

## Examples

### Example 1

:::valid Valid: Correct spacing used.
```php
foreach ($foo as $bar => $baz) {
    echo $baz;
}
```
:::

:::invalid Invalid: Invalid spacing used.
```php
foreach ( $foo  as  $bar=>$baz ) {
    echo $baz;
}
```
:::

### Example 2

:::valid Valid: Lowercase as keyword.
```php
foreach ($foo as $bar => $baz) {
    echo $baz;
}
```
:::

:::invalid Invalid: Uppercase as keyword.
```php
foreach ($foo AS $bar => $baz) {
    echo $baz;
}
```
:::