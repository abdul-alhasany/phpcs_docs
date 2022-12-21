# ArbitraryParenthesesSpacing

Check & fix whitespace on the inside of arbitrary parentheses.

Arbitrary parentheses are those which are not owned by a function (call), array or control structure.
Spacing on the outside is not checked on purpose as this would too easily conflict with other spacing rules.

### Scope

`Generic.WhiteSpace.ArbitraryParenthesesSpacing`

## Description

Arbitrary sets of parentheses should have no spaces inside.

## Properties

| Property Name  | Type | Default | Available Since |
| -------------- | ---- | ------- | --------------- |
| ignoreNewlines | bool | false   | 3.3.0           |
| spacing        | int  | 0       | 3.3.0           |

## Usage

```xml
<rule ref="Generic.WhiteSpace.ArbitraryParenthesesSpacing">
    <properties>
        <property name="ignoreNewlines" value="true" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::