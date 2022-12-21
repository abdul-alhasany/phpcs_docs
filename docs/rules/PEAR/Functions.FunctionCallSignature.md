# FunctionCallSignature

Ensures function calls are formatted correctly.

### Scope

`PEAR.Functions.FunctionCallSignature`

## Description

Functions should be called with no spaces between the function name, the opening parenthesis, and the first parameter; and no space between the last parameter, the closing parenthesis, and the semicolon.

## Properties

| Property Name             | Type | Default | Available Since |
| ------------------------- | ---- | ------- | --------------- |
| allowMultipleArguments    | bool | true    | 1.3.6           |
| indent                    | int  | 4       | 1.3.4           |
| requiredSpacesAfterOpen   | int  | 0       | 1.5.2           |
| requiredSpacesBeforeClose | int  | 0       | 1.5.2           |

## Usage

```xml
<rule ref="PEAR.Functions.FunctionCallSignature">
    <properties>
        <property name="indent" value="2" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::