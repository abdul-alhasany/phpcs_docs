# MemberVarSpacing

Verifies that class members are spaced correctly.

### Scope

`Squiz.WhiteSpace.MemberVarSpacing`

## Properties

| Property Name      | Type | Default | Available Since |
| ------------------ | ---- | ------- | --------------- |
| spacing            | int  | 1       | 3.1.0           |
| spacingBeforeFirst | int  | 1       | 3.1.0           |

## Usage

```xml
<!--
 Ensure 2 blank lines between member vars,
 but don't require blank lines before the first.
-->
<rule ref="Squiz.WhiteSpace.MemberVarSpacing">
    <properties>
        <property name="spacing" value="2" />
        <property name="spacingBeforeFirst" value="0" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::