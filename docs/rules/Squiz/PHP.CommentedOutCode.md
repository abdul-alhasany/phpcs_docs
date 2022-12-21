# CommentedOutCode

Warn about commented out code.

### Scope

`Squiz.PHP.CommentedOutCode`

## Properties

| Property Name | Type | Default | Available Since |
| ------------- | ---- | ------- | --------------- |
| maxPercentage | int  | 35      | 1.3.3           |

## Usage

```xml
<!-- Make this sniff more sensitive to commented out code blocks. -->
<rule ref="Squiz.PHP.CommentedOutCode">
    <properties>
        <property name="maxPercentage" value="20" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::