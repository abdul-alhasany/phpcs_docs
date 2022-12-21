# UselessOverridingMethod

Detects unnecessary overridden methods that simply call their parent.

This rule is based on the PMD rule catalogue. The Useless Overriding Method
sniff detects the use of methods that only call their parent class's method
with the same name and arguments. These methods are not required.

```php
class FooBar {
  public function __construct($a, $b) {
    parent::__construct($a, $b);
  }
}
```

### Scope

`Generic.CodeAnalysis.UselessOverridingMethod`

## Description

Methods should not be defined that only call the parent method.

## Usage

```xml
<rule ref="Generic.CodeAnalysis.UselessOverridingMethod"></rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::