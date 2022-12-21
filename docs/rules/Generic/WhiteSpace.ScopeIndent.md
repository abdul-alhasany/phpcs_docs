# ScopeIndent

Checks that control structures are defined and indented correctly.

### Scope

`Generic.WhiteSpace.ScopeIndent`

## Description

Indentation for control structures, classes, and functions should be 4 spaces per level.

## Properties

| Property Name           | Type  | Default | Available Since |
| ----------------------- | ----- | ------- | --------------- |
| exact                   | bool  | false   | -               |
| ignoreIndentationTokens | array | []      | 1.4.8           |
| indent                  | int   | 4       | -               |
| tabIndent               | bool  | false   | 2.0.0           |

## Usage

```xml
<rule ref="Generic.WhiteSpace.ScopeIndent">
    <properties>
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