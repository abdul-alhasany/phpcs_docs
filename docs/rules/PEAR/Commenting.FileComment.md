# FileComment

Parses and verifies the doc comments for files.

### Scope

`PEAR.Commenting.FileComment`

## Description

Files must have a non-empty doc comment.  The short description must be on the second line of the comment.  Each description must have one blank comment line before and after.  There must be one blank line before the tags in the comments.  There must be a category, package, author, license, and link tag.  There may only be one category, package, subpackage, license, version, since and deprecated tag.  The tags must be in the order category, package, subpackage, author, copyright, license, version, link, see, since, and deprecated.  The php version must be specified.

## Usage

```xml
<rule ref="PEAR.Commenting.FileComment"></rule>
```

## Examples

### Example 1

:::valid Valid: A file comment is used.
```php
<?php
/**
 * Short description here.
 *
 * PHP version 5
 *
 * @category Foo
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

:::invalid Invalid: No doc comment for the class.
```php
<?php

```
:::

### Example 2

:::valid Valid: Short description is the second line of the comment.
```php
<?php
/**
 * Short description here.
 *
 * PHP version 5
 *
 * @category Foo
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

:::invalid Invalid: An extra blank line before the short description.
```php
<?php
/**
 * 
 * Short description here.
 *
 * PHP version 5
 *
 * @category Foo
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

### Example 3

:::valid Valid: Exactly one blank line around descriptions.
```php
<?php
/**
 * Short description here.
 * 
 * PHP version 5
 * 
 * @category Foo
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

:::invalid Invalid: Extra blank lines around the descriptions.
```php
<?php
/**
 * Short description here.
 * 
 * 
 * PHP version 5
 * 
 * 
 * @category Foo
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

### Example 4

:::valid Valid: Exactly one blank line before the tags.
```php
<?php
/**
 * Short description here.
 *
 * PHP version 5
 * 
 * @category Foo
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

:::invalid Invalid: Extra blank lines before the tags.
```php
<?php
/**
 * Short description here.
 *
 * PHP version 5
 * 
 * 
 * @category Foo
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

### Example 5

:::valid Valid: All required tags are used.
```php
<?php
/**
 * Short description here.
 *
 * PHP version 5
 *
 * @category Foo
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

:::invalid Invalid: Missing an author tag.
```php
<?php
/**
 * Short description here.
 *
 * PHP version 5
 *
 * @category Foo
 * @package Foo_Helpers
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

### Example 6

:::valid Valid: Tags that should only be used once are only used once.
```php
<?php
/**
 * Short description here.
 *
 * PHP version 5
 *
 * @category Foo
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

:::invalid Invalid: Multiple category tags.
```php
<?php
/**
 * Short description here.
 *
 * PHP version 5
 *
 * @category Foo
 * @category Bar
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

### Example 7

:::valid Valid: PHP version specified.
```php
<?php
/**
 * Short description here.
 *
 * PHP version 5
 *
 * @category Foo
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

:::invalid Invalid: Category and package tags are swapped in order.
```php
<?php
/**
 * Short description here.
 *
 * PHP version 5
 *
 * @package Foo_Helpers
 * @category Foo
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

### Example 8

:::valid Valid: Tags are in the correct order.
```php
<?php
/**
 * Short description here.
 *
 * PHP version 5
 *
 * @category Foo
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::

:::invalid Invalid: No php version specified.
```php
<?php
/**
 * Short description here.
 *
 * @category Foo
 * @package Foo_Helpers
 * @author Marty McFly <mmcfly@example.com>
 * @copyright 2013-2014 Foo Inc.
 * @license MIT License
 * @link http://example.com
 */
```
:::