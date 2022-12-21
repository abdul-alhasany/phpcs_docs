# ValidVariableName

Checks the naming of variables and member variables.

### Scope

`Zend.NamingConventions.ValidVariableName`

## Description

Variable names should be camelCased with the first letter lowercase.  Private and protected member variables should begin with an underscore

## Usage

```xml
<rule ref="Zend.NamingConventions.ValidVariableName"></rule>
```

## Examples

### Example 1

:::valid Valid: A multi-word variable uses camel casing.
```php
$testNumber = 1;
```
:::

:::invalid Invalid: A multi-word variable uses underscores and initial capitalization.
```php
$Test_Number = 1;
```
:::

### Example 2

:::valid Valid: A private member variable begins with an underscore.
```php
class Foo
{
    private $_bar;
}
```
:::

:::invalid Invalid: A private member variable does not begin with an underscore.
```php
class Foo
{
    private $bar;
}
```
:::