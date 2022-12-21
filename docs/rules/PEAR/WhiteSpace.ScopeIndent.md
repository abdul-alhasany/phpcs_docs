# ScopeIndent

Checks that control structures are structured and indented correctly.

### Scope

`PEAR.WhiteSpace.ScopeIndent`

## Description

Any scope openers except for switch statements should be indented 1 level.  This includes classes, functions, and control structures.

## Properties

| Property Name           | Type  | Default | Available Since |
| ----------------------- | ----- | ------- | --------------- |
| exact                   | bool  | false   | -               |
| ignoreIndentationTokens | array | []      | 1.4.8           |
| indent                  | int   | 4       | -               |
| tabIndent               | bool  | false   | 2.0.0           |

## Usage

```xml
<!-- Tabs should represent 4 spaces. -->
<arg name="tab-width" value="4"/>
...
<rule ref="PEAR.WhiteSpace.ScopeIndent">
    <properties>
        <property name="exact" value="true" />
        <property name="tabIndent" value="true" />
        <property name="ignoreIndentationTokens" type="array">
            <element value="T_COMMENT"/>
            <element value="T_DOC_COMMENT_OPEN_TAG"/>
        </property>
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::