# FunctionSpacing

Checks the separation between functions and methods.

### Scope

`Squiz.WhiteSpace.FunctionSpacing`

## Properties

| Property Name      | Type | Default | Available Since |
| ------------------ | ---- | ------- | --------------- |
| spacing            | int  | 2       | 1.4.5           |
| spacingAfterLast   | int  | 2       | 3.3.0           |
| spacingBeforeFirst | int  | 2       | 3.3.0           |

## Usage

```xml
<!-- Ensure 1 blank line before and after functions in all cases. -->
<rule ref="Squiz.WhiteSpace.FunctionSpacing">
    <properties>
        <property name="spacing" value="1" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::