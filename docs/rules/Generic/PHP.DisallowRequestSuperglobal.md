# DisallowRequestSuperglobal

Ensures the $_REQUEST superglobal is not used

### Scope

`Generic.PHP.DisallowRequestSuperglobal`

## Description

$_REQUEST should never be used due to the ambiguity created as to where the data is coming from. Use $_POST, $_GET, or $_COOKIE instead.

## Usage

```xml
<rule ref="Generic.PHP.DisallowRequestSuperglobal"></rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::