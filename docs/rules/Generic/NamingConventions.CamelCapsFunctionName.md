# CamelCapsFunctionName

Ensures method and functions are named correctly.

### Scope

`Generic.NamingConventions.CamelCapsFunctionName`

## Description

Functions should use camelCaps format for their names. Only PHP's magic methods should use a double underscore prefix.

## Properties

| Property Name | Type | Default | Available Since |
| ------------- | ---- | ------- | --------------- |
| strict        | bool | true    | 1.3.5           |

## Usage

```xml
<rule ref="Generic.NamingConventions.CamelCapsFunctionName">
    <properties>
        <property name="strict" value="false" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::