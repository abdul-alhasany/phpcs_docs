# UnusedFunctionParameter

Checks for unused function parameters.

This sniff checks that all function parameters are used in the function body.
One exception is made for empty function bodies or function bodies that only
contain comments. This could be useful for the classes that implement an
interface that defines multiple methods but the implementation only needs some
of them.

### Scope

`Generic.CodeAnalysis.UnusedFunctionParameter`

## Description

All parameters in a functions signature should be used within the function.

## Properties

| Property Name   | Type  | Default | Available Since |
| --------------- | ----- | ------- | --------------- |
| ignoreTypeHints | array | []      | 3.6.0           |

## Usage

```xml
<rule ref="Generic.CodeAnalysis.UnusedFunctionParameter">
    <properties>
         <property name="ignoreTypeHints" type="array">
            <element value="InputInterface"/>
        </property>
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::