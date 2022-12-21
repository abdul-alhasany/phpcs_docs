# EmptyStatement

This sniff class detected empty statement.

This sniff implements the common algorithm for empty statement body detection.
A body is considered as empty if it is completely empty or it only contains
whitespace characters and/or comments.

```php
stmt {
  // foo
}
stmt (conditions) {
  // foo
}
```

### Scope

`Generic.CodeAnalysis.EmptyStatement`

## Description

Control Structures must have at least one statement inside of the body.

## Usage

```xml
<rule ref="Generic.CodeAnalysis.EmptyStatement"></rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::