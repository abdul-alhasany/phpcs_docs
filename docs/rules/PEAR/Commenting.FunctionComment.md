# FunctionComment

Parses and verifies the doc comments for functions.

### Scope

`PEAR.Commenting.FunctionComment`

## Description

Functions must have a non-empty doc comment.  The short description must be on the second line of the comment.  Each description must have one blank comment line before and after.  There must be one blank line before the tags in the comments.  There must be a tag for each of the parameters in the right order with the right variable names with a comment.  There must be a return tag.  Any throw tag must have an exception class.

## Properties

| Property Name     | Type   | Default                  | Available Since |
| ----------------- | ------ | ------------------------ | --------------- |
| minimumVisibility | string | private                  | 3.6.0           |
| specialMethods    | array  | [__construct,__destruct] | 3.6.0           |

## Usage

```xml
<rule ref="PEAR.Commenting.FunctionComment">
    <properties>
        <property name="specialMethods" type="array">
            <element value="__construct"/>
            <element value="__destruct"/>
            <element value="ignoreThisFunction"/>
        </property>
    </properties>
</rule>
```

## Examples

### Example 1

:::valid Valid: A function doc comment is used.
```php
/**
 * Short description here.
 *
 * @return void
 */
 function foo()
 {
 }
```
:::

:::invalid Invalid: No doc comment for the function.
```php
function foo()
 {
 }
```
:::

### Example 2

:::valid Valid: Short description is the second line of the comment.
```php
/**
 * Short description here.
 *
 * @return void
 */
 function foo()
 {
 }
```
:::

:::invalid Invalid: An extra blank line before the short description.
```php
/**
 * 
 * Short description here.
 *
 * @return void
 */
 function foo()
 {
 }
```
:::

### Example 3

:::valid Valid: Exactly one blank line around descriptions.
```php
/**
 * Short description here.
 * 
 * Long description here.
 * 
 * @return void
 */
 function foo()
 {
 }
```
:::

:::invalid Invalid: Extra blank lines around the descriptions.
```php
/**
 * Short description here.
 * 
 * 
 * Long description here.
 * 
 * 
 * @return void
 */
 function foo()
 {
 }
```
:::

### Example 4

:::valid Valid: Exactly one blank line before the tags.
```php
/**
 * Short description here.
 *
 * Long description here.
 * 
 * @return void
 */
 function foo()
 {
 }
```
:::

:::invalid Invalid: Extra blank lines before the tags.
```php
/**
 * Short description here.
 *
 * Long description here.
 * 
 * 
 * @return void
 */
 function foo()
 {
 }
```
:::

### Example 5

:::valid Valid: Throws tag has an exception class.
```php
/**
 * Short description here.
 *
 * @return void
 * @throws FooException
 */
 function foo()
 {
 }
```
:::

:::invalid Invalid: No exception class given for throws tag.
```php
/**
 * Short description here.
 *
 * @return void
 * @throws
 */
 function foo()
 {
 }
```
:::

### Example 6

:::valid Valid: Return tag present.
```php
/**
 * Short description here.
 *
 * @return void
 */
 function foo()
 {
 }
```
:::

:::invalid Invalid: No return tag.
```php
/**
 * Short description here.
 */
 function foo()
 {
 }
```
:::

### Example 7

:::valid Valid: Param names are correct.
```php
/**
 * Short description here.
 *
 * @param string $foo Foo parameter
 * @param string $bar Bar parameter
 * @return void
 */
 function foo($foo, $bar)
 {
 }
```
:::

:::invalid Invalid: Wrong parameter name doesn't match function signature.
```php
/**
 * Short description here.
 *
 * @param string $foo Foo parameter
 * @param string $qux Bar parameter
 * @return void
 */
 function foo($foo, $bar)
 {
 }
```
:::

### Example 8

:::valid Valid: Param names are ordered correctly.
```php
/**
 * Short description here.
 *
 * @param string $foo Foo parameter
 * @param string $bar Bar parameter
 * @return void
 */
 function foo($foo, $bar)
 {
 }
```
:::

:::invalid Invalid: Wrong parameter order.
```php
/**
 * Short description here.
 *
 * @param string $bar Bar parameter
 * @param string $foo Foo parameter
 * @return void
 */
 function foo($foo, $bar)
 {
 }
```
:::