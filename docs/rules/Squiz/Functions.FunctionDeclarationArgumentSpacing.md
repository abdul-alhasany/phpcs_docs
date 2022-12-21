# FunctionDeclarationArgumentSpacing

Checks that arguments in function declarations are spaced correctly.

### Scope

`Squiz.Functions.FunctionDeclarationArgumentSpacing`

## Properties

| Property Name             | Type | Default | Available Since |
| ------------------------- | ---- | ------- | --------------- |
| equalsSpacing             | int  | 0       | 1.3.5           |
| requiredSpacesAfterOpen   | int  | 0       | 1.5.2           |
| requiredSpacesBeforeClose | int  | 0       | 1.5.2           |

## Usage

```xml
<rule ref="Squiz.Functions.FunctionDeclarationArgumentSpacing">
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