# ForbiddenFunctions

Discourages the use of alias functions.

Alias functions are kept in PHP for compatibility
with older versions. Can be used to forbid the use of any function.

### Scope

`Generic.PHP.ForbiddenFunctions`

## Description

The forbidden functions sizeof() and delete() should not be used.

## Properties

| Property Name      | Type  | Default                       | Available Since |
| ------------------ | ----- | ----------------------------- | --------------- |
| error              | bool  | true                          | -               |
| forbiddenFunctions | array | [sizeof=>count,delete=>unset] | 2.0.0           |

## Usage

```xml
<rule ref="Generic.PHP.ForbiddenFunctions">
    <properties>
        <property name="error" value="false" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::