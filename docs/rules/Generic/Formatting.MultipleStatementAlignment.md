# MultipleStatementAlignment

Checks alignment of assignments.

If there are multiple adjacent assignments, it will check that the equals signs of
each assignment are aligned. It will display a warning to advise that the signs should be aligned.

### Scope

`Generic.Formatting.MultipleStatementAlignment`

## Description

There should be one space on either side of an equals sign used to assign a value to a variable. In the case of a block of related assignments, more space may be inserted to promote readability.

When using plus-equals, minus-equals etc. still ensure the equals signs are aligned to one space after the longest variable name.

## Properties

| Property Name | Type | Default | Available Since | Removed In |
| ------------- | ---- | ------- | --------------- | ---------- |
| alignAtEnd    | bool | true    | 3.6.0           |
| error         | bool | false   | -               | 4.0.0      |
| maxPadding    | int  | 1000    | -               |

## Usage

```xml
<rule ref="Generic.Formatting.MultipleStatementAlignment">
    <properties>
        <property name="error" value="true" />
    </properties>
</rule>
```

## Examples

### Example 1



### Example 2



### Example 3

