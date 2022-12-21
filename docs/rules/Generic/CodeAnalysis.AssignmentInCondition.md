# AssignmentInCondition

Detects variable assignments being made within conditions.

This is a typical code smell and more often than not a comparison was intended.

Note: this sniff does not detect variable assignments in the conditional part of ternaries!

### Scope

`Generic.CodeAnalysis.AssignmentInCondition`

## Description

Variable assignments should not be made within conditions.

## Usage

```xml
<rule ref="Generic.CodeAnalysis.AssignmentInCondition"></rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::