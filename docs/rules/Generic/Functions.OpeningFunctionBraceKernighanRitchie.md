# OpeningFunctionBraceKernighanRitchie

Checks that the opening brace of a function is on the same line as the function declaration.

### Scope

`Generic.Functions.OpeningFunctionBraceKernighanRitchie`

## Description

Function declarations follow the "Kernighan/Ritchie style". The function brace is on the same line as the function declaration. One space is required between the closing parenthesis and the brace.

## Properties

| Property Name  | Type | Default | Available Since |
| -------------- | ---- | ------- | --------------- |
| checkClosures  | bool | false   | 2.3.0           |
| checkFunctions | bool | true    | 2.3.0           |

## Usage

```xml
<!-- Don't check function braces, but check closure braces. -->
<rule ref="Generic.Functions.OpeningFunctionBraceKernighanRitchie">
    <properties>
        <property name="checkFunctions" value="false" />
        <property name="checkClosures" value="true" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::