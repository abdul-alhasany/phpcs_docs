# OperatorSpacing

Verifies that operators have valid spacing surrounding them.

### Scope

`PSR12.Operators.OperatorSpacing`

## Description

All binary and ternary (but not unary) operators MUST be preceded and followed by at least one space. This includes all arithmetic, comparison, assignment, bitwise, logical (excluding ! which is unary), string concatenation, type operators, trait operators (insteadof and as), and the single pipe operator (e.g. ExceptionType1 | ExceptionType2 $e).

## Properties

| Property Name                  | Type | Default | Available Since |
| ------------------------------ | ---- | ------- | --------------- |
| ignoreNewlines                 | bool | false   | 3.3.0           |
| ignoreSpacingBeforeAssignments | bool | true    | 3.5.0           |

## Usage

```xml
<rule ref="PSR12.Operators.OperatorSpacing"></rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::