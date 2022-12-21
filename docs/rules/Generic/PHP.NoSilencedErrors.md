# NoSilencedErrors

Throws an error or warning when any code prefixed with an asperand is encountered.

```php
 if (@in_array($array, $needle))
 {
     doSomething();
 }
```

### Scope

`Generic.PHP.NoSilencedErrors`

## Description

Suppressing Errors is not allowed.

## Properties

| Property Name | Type | Default | Available Since |
| ------------- | ---- | ------- | --------------- |
| error         | bool | true    | -               |

## Usage

```xml
<rule ref="Generic.PHP.NoSilencedErrors">
    <properties>
        <property name="error" value="false" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::