# ControlStructureSpacing

Checks that control structures have the correct spacing around brackets.

### Scope

`PSR2.ControlStructures.ControlStructureSpacing`

## Description

Control Structures should have 0 spaces after opening parentheses and 0 spaces before closing parentheses.

## Properties

| Property Name             | Type | Default | Available Since |
| ------------------------- | ---- | ------- | --------------- |
| requiredSpacesAfterOpen   | int  | 0       | 1.5.2           |
| requiredSpacesBeforeClose | int  | 0       | 1.5.2           |

## Usage

```xml
<rule ref="PSR2.ControlStructures.ControlStructureSpacing">
    <properties>
        <property name="requiredSpacesAfterOpen" value="1" />
        <property name="requiredSpacesBeforeClose" value="1" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::