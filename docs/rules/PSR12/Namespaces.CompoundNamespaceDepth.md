# CompoundNamespaceDepth

Verifies that compound namespaces are not defined too deep.

### Scope

`PSR12.Namespaces.CompoundNamespaceDepth`

## Description

Compound namespaces with a depth of more than two MUST NOT be used.

## Properties

| Property Name | Type | Default | Available Since |
| ------------- | ---- | ------- | --------------- |
| maxDepth      | int  | 2       | 3.3.0           |

## Usage

```xml
<rule ref="PSR12.Namespaces.CompoundNamespaceDepth">
    <properties>
        <property name="maxDepth" value="4" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::