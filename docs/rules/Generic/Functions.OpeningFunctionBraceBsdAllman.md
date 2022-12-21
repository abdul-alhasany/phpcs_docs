# OpeningFunctionBraceBsdAllman

Checks that the opening brace of a function is on the line after the function declaration.

### Scope

`Generic.Functions.OpeningFunctionBraceBsdAllman`

## Description

Function declarations follow the "BSD/Allman style". The function brace is on the line following the function declaration and is indented to the same column as the start of the function declaration.

## Properties

| Property Name  | Type | Default | Available Since |
| -------------- | ---- | ------- | --------------- |
| checkClosures  | bool | false   | 2.3.0           |
| checkFunctions | bool | true    | 2.3.0           |

## Usage

```xml
<!-- Don't check function braces, but check closure braces. -->
<rule ref="Generic.Functions.OpeningFunctionBraceBsdAllman">
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