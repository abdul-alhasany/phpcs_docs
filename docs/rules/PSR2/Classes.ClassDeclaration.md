# ClassDeclaration

Checks the declaration of the class and its inheritance is correct.

### Scope

`PSR2.Classes.ClassDeclaration`

## Description

There should be exactly 1 space between the abstract or final keyword and the class keyword and between the class keyword and the class name.  The extends and implements keywords, if present, must be on the same line as the class name.  When interfaces implemented are spread over multiple lines, there should be exactly 1 interface mentioned per line indented by 1 level.  The closing brace of the class must go on the first line after the body of the class and must be on a line by itself.

## Properties

| Property Name | Type | Default | Available Since |
| ------------- | ---- | ------- | --------------- |
| indent        | int  | 4       | 1.3.5           |

## Usage

```xml
<rule ref="PSR2.Classes.ClassDeclaration">
    <properties>
        <property name="indent" value="2" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::