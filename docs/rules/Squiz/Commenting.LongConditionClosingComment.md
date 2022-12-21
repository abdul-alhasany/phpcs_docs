# LongConditionClosingComment

Ensures long conditions have a comment at the end.

### Scope

`Squiz.Commenting.LongConditionClosingComment`

## Properties

| Property Name | Type   | Default  | Available Since |
| ------------- | ------ | -------- | --------------- |
| commentFormat | string | //end %s | 2.7.0           |
| lineLimit     | int    | 20       | 2.7.0           |

## Usage

```xml
<!-- Have code block comments look like // end foreach() etc. -->
<rule ref="Squiz.Commenting.LongConditionClosingComment">
    <properties>
        <property name="commentFormat" value="// end %s()" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::