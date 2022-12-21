# ObjectOperatorIndent

Checks that object operators are indented correctly.

### Scope

`PEAR.WhiteSpace.ObjectOperatorIndent`

## Description

Chained object operators when spread out over multiple lines should be the first thing on the line and be indented by 1 level.

## Properties

| Property Name | Type | Default | Available Since |
| ------------- | ---- | ------- | --------------- |
| indent        | int  | 4       | 1.4.6           |
| multilevel    | bool | false   | 3.5.0           |

## Usage

```xml
<rule ref="PEAR.WhiteSpace.ObjectOperatorIndent">
    <properties>
        <property name="multilevel" value="true" />
    </properties>
</rule>
```

## Examples

### Example 1

:::valid Valid: Object operator at the start of a new line.
```php
$foo
    ->bar()
    ->baz();
```
:::

:::invalid Invalid: Object operator at the end of the line.
```php
$foo->
    bar()->
    baz();
```
:::

### Example 2

:::valid Valid: Object operator indented correctly.
```php
$foo
    ->bar()
    ->baz();
```
:::

:::invalid Invalid: Object operator not indented correctly.
```php
$foo
->bar()
->baz();
```
:::