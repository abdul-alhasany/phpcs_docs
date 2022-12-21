# ClosureLinter

Runs gjslint on the file.

### Scope

`Generic.Debug.ClosureLinter`

## Description

All javascript files should pass basic Closure Linter tests.

## Properties

| Property Name | Type  | Default | Available Since |
| ------------- | ----- | ------- | --------------- |
| errorCodes    | array | []      | -               |
| ignoreCodes   | array | []      | -               |

## Usage

```xml
<rule ref="Generic.Debug.ClosureLinter">
    <properties>
        <property name="errorCodes" type="array">
            <element value="0210"/>
        </property>
        <property name="ignoreCodes" type="array">
            <element value="0001"/>
            <element value="0110"/>
            <element value="0240"/>
        </property>
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::