# FunctionDeclaration

Ensure single and multi-line function declarations are defined correctly.

### Scope

`PEAR.Functions.FunctionDeclaration`

## Description

There should be exactly 1 space after the function keyword and 1 space on each side of the use keyword.  Closures should use the Kernighan/Ritchie Brace style and other single-line functions should use the BSD/Allman style.  Multi-line function declarations should have the parameter lists indented one level with the closing parenthesis on a newline followed by a single space and the opening brace of the function.

## Properties

| Property Name | Type | Default | Available Since |
| ------------- | ---- | ------- | --------------- |
| indent        | int  | 4       | 1.4.7           |

## Usage

```xml
<rule ref="PEAR.Functions.FunctionDeclaration">
    <properties>
        <property name="indent" value="2" />
    </properties>
</rule>
```

## Examples

### Example 1

:::valid Valid: Correct spacing around function and use keywords.
```php
$foo = function () use ($bar) {
};
```
:::

:::invalid Invalid: No spacing around function and use keywords.
```php
$foo = function()use($bar){
};
```
:::

### Example 2

:::valid Valid: Multi-line function declaration formatted properly.
```php
function foo(
    $bar,
    $baz
) {
};
```
:::

:::invalid Invalid: Invalid indentation and formatting of closing parenthesis.
```php
function foo(
$bar,
$baz)
{
};
```
:::