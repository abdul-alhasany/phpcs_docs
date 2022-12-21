# SpreadOperatorSpacingAfter

Verifies spacing between the spread operator and the variable/function call it applies to.

### Scope

`Generic.WhiteSpace.SpreadOperatorSpacingAfter`

## Description

There should be no space between the spread operator and the variable/function call it applies to.

## Properties

| Property Name  | Type | Default | Available Since |
| -------------- | ---- | ------- | --------------- |
| ignoreNewlines | bool | false   | 3.5.0           |
| spacing        | int  | 0       | 3.5.0           |

## Usage

```xml
<rule ref="Generic.WhiteSpace.SpreadOperatorSpacingAfter">
    <properties>
        <property name="ignoreNewlines" value="true" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::