# Generic Sniffs

#### [ArrayIndent](./Generic/Arrays.ArrayIndent.md)

Ensures that array are indented one tab stop.

#### [DisallowLongArraySyntax](./Generic/Arrays.DisallowLongArraySyntax.md)

Bans the use of the PHP long array syntax.

#### [DisallowShortArraySyntax](./Generic/Arrays.DisallowShortArraySyntax.md)

Bans the use of the PHP short array syntax.

#### [DuplicateClassName](./Generic/Classes.DuplicateClassName.md)

Reports errors if the same class or interface name is used in multiple files.

#### [OpeningBraceSameLine](./Generic/Classes.OpeningBraceSameLine.md)

Checks that the opening brace of a class/interface/trait is on the same line as the class declaration.

#### [AssignmentInCondition](./Generic/CodeAnalysis.AssignmentInCondition.md)

Detects variable assignments being made within conditions.

This is a typical code smell and more often than not a comparison was intended.

Note: this sniff does not detect variable assignments in the conditional part of ternaries!

#### [EmptyPHPStatement](./Generic/CodeAnalysis.EmptyPHPStatement.md)

Checks against empty PHP statements.

- Check against two semi-colons with no executable code in between.
- Check against an empty PHP open - close tag combination.

#### [EmptyStatement](./Generic/CodeAnalysis.EmptyStatement.md)

This sniff class detected empty statement.

This sniff implements the common algorithm for empty statement body detection.
A body is considered as empty if it is completely empty or it only contains
whitespace characters and/or comments.

```php
stmt {
  // foo
}
stmt (conditions) {
  // foo
}
```

#### [ForLoopShouldBeWhileLoop](./Generic/CodeAnalysis.ForLoopShouldBeWhileLoop.md)

Detects for-loops that can be simplified to a while-loop.

This rule is based on the PMD rule catalogue. Detects for-loops that can be
simplified as a while-loop.

```php
class Foo
{
    public function bar($x)
    {
        for (;true;) true; // No Init or Update part, may as well be: while (true)
    }
}
```

#### [ForLoopWithTestFunctionCall](./Generic/CodeAnalysis.ForLoopWithTestFunctionCall.md)

Detects for-loops that use a function call in the test expression.

This rule is based on the PMD rule catalogue. Detects for-loops that use a
function call in the test expression.

```php
class Foo
{
    public function bar($x)
    {
        $a = array(1, 2, 3, 4);
        for ($i = 0; $i < count($a); $i++) {
             $a[$i] *= $i;
        }
    }
}
```

#### [JumbledIncrementer](./Generic/CodeAnalysis.JumbledIncrementer.md)

Detects incrementer jumbling in for loops.

This rule is based on the PMD rule catalogue. The jumbling incrementer sniff
detects the usage of one and the same incrementer into an outer and an inner
loop. Even it is intended this is confusing code.

```php
class Foo
{
    public function bar($x)
    {
        for ($i = 0; $i < 10; $i++)
        {
            for ($k = 0; $k < 20; $i++)
            {
                echo 'Hello';
            }
        }
    }
}
```

#### [UnconditionalIfStatement](./Generic/CodeAnalysis.UnconditionalIfStatement.md)

Detects unconditional if- and elseif-statements.

This rule is based on the PMD rule catalogue. The Unconditional If Statement
sniff detects statement conditions that are only set to one of the constant
values <b>true</b> or <b>false</b>

```php
class Foo
{
    public function close()
    {
        if (true)
        {
            // ...
        }
    }
}
```

#### [UnnecessaryFinalModifier](./Generic/CodeAnalysis.UnnecessaryFinalModifier.md)

Detects unnecessary final modifiers inside of final classes.

This rule is based on the PMD rule catalogue. The Unnecessary Final Modifier
sniff detects the use of the final modifier inside of a final class which
is unnecessary.

```php
final class Foo
{
    public final function bar()
    {
    }
}
```

#### [UnusedFunctionParameter](./Generic/CodeAnalysis.UnusedFunctionParameter.md)

Checks for unused function parameters.

This sniff checks that all function parameters are used in the function body.
One exception is made for empty function bodies or function bodies that only
contain comments. This could be useful for the classes that implement an
interface that defines multiple methods but the implementation only needs some
of them.

#### [UselessOverridingMethod](./Generic/CodeAnalysis.UselessOverridingMethod.md)

Detects unnecessary overridden methods that simply call their parent.

This rule is based on the PMD rule catalogue. The Useless Overriding Method
sniff detects the use of methods that only call their parent class's method
with the same name and arguments. These methods are not required.

```php
class FooBar {
  public function __construct($a, $b) {
    parent::__construct($a, $b);
  }
}
```

#### [DocComment](./Generic/Commenting.DocComment.md)

Ensures doc blocks follow basic formatting.

#### [Fixme](./Generic/Commenting.Fixme.md)

Warns about FIXME comments.

#### [Todo](./Generic/Commenting.Todo.md)

Warns about TODO comments.

#### [DisallowYodaConditions](./Generic/ControlStructures.DisallowYodaConditions.md)

Ban the use of Yoda conditions.

#### [InlineControlStructure](./Generic/ControlStructures.InlineControlStructure.md)

Verifies that inline control statements are not present.

#### [ClosureLinter](./Generic/Debug.ClosureLinter.md)

Runs gjslint on the file.

#### [CSSLint](./Generic/Debug.CSSLint.md)

Runs csslint on the file.

#### [ESLint](./Generic/Debug.ESLint.md)

Runs eslint on the file.

#### [JSHint](./Generic/Debug.JSHint.md)

Runs jshint.js on the file.

#### [ByteOrderMark](./Generic/Files.ByteOrderMark.md)

A simple sniff for detecting a BOM definition that may corrupt application work.

#### [EndFileNewline](./Generic/Files.EndFileNewline.md)

Ensures the file ends with a newline character.

#### [EndFileNoNewline](./Generic/Files.EndFileNoNewline.md)

Ensures the file does not end with a newline character.

#### [ExecutableFile](./Generic/Files.ExecutableFile.md)

Tests that files are not executable.

#### [InlineHTML](./Generic/Files.InlineHTML.md)

Ensures the whole file is PHP only, with no whitespace or inline HTML.

#### [LineEndings](./Generic/Files.LineEndings.md)

Checks that end of line characters are correct.

#### [LineLength](./Generic/Files.LineLength.md)

Checks the length of all lines in a file.

Checks all lines in the file, and throws warnings if they are over 80
characters in length and errors if they are over 100. Both these
figures can be changed in a ruleset.xml file.

#### [LowercasedFilename](./Generic/Files.LowercasedFilename.md)

Checks that all file names are lowercased.

#### [OneClassPerFile](./Generic/Files.OneClassPerFile.md)

Checks that only one class is declared per file.

#### [OneInterfacePerFile](./Generic/Files.OneInterfacePerFile.md)

Checks that only one interface is declared per file.

#### [OneObjectStructurePerFile](./Generic/Files.OneObjectStructurePerFile.md)

Checks that only one object structure is declared per file.

#### [OneTraitPerFile](./Generic/Files.OneTraitPerFile.md)

Checks that only one trait is declared per file.

#### [DisallowMultipleStatements](./Generic/Formatting.DisallowMultipleStatements.md)

Ensures each statement is on a line by itself.

#### [MultipleStatementAlignment](./Generic/Formatting.MultipleStatementAlignment.md)

Checks alignment of assignments.

If there are multiple adjacent assignments, it will check that the equals signs of
each assignment are aligned. It will display a warning to advise that the signs should be aligned.

#### [NoSpaceAfterCast](./Generic/Formatting.NoSpaceAfterCast.md)

Ensures there is no space after cast tokens.

#### [SpaceAfterCast](./Generic/Formatting.SpaceAfterCast.md)

Ensures there is a single space after cast tokens.

#### [SpaceAfterNot](./Generic/Formatting.SpaceAfterNot.md)

Ensures there is a single space after a NOT operator.

#### [SpaceBeforeCast](./Generic/Formatting.SpaceBeforeCast.md)

Ensures there is a single space before cast tokens.

#### [CallTimePassByReference](./Generic/Functions.CallTimePassByReference.md)

Ensures that variables are not passed by reference when calling a function.

#### [FunctionCallArgumentSpacing](./Generic/Functions.FunctionCallArgumentSpacing.md)

Checks that calls to methods and functions are spaced correctly.

#### [OpeningFunctionBraceBsdAllman](./Generic/Functions.OpeningFunctionBraceBsdAllman.md)

Checks that the opening brace of a function is on the line after the function declaration.

#### [OpeningFunctionBraceKernighanRitchie](./Generic/Functions.OpeningFunctionBraceKernighanRitchie.md)

Checks that the opening brace of a function is on the same line as the function declaration.

#### [CyclomaticComplexity](./Generic/Metrics.CyclomaticComplexity.md)

Checks the cyclomatic complexity (McCabe) for functions.

The cyclomatic complexity (also called McCabe code metrics)
indicates the complexity within a function by counting
the different paths the function includes.

#### [NestingLevel](./Generic/Metrics.NestingLevel.md)

Checks the nesting level for methods.

#### [AbstractClassNamePrefix](./Generic/NamingConventions.AbstractClassNamePrefix.md)

Checks that abstract classes are prefixed by Abstract.

#### [CamelCapsFunctionName](./Generic/NamingConventions.CamelCapsFunctionName.md)

Ensures method and functions are named correctly.

#### [ConstructorName](./Generic/NamingConventions.ConstructorName.md)

Bans PHP 4 style constructors.

Favour PHP 5 constructor syntax, which uses "function __construct()".
Avoid PHP 4 constructor syntax, which uses "function ClassName()".

#### [InterfaceNameSuffix](./Generic/NamingConventions.InterfaceNameSuffix.md)

Checks that interfaces are suffixed by Interface.

#### [TraitNameSuffix](./Generic/NamingConventions.TraitNameSuffix.md)

Checks that traits are suffixed by Trait.

#### [UpperCaseConstantName](./Generic/NamingConventions.UpperCaseConstantName.md)

Ensures that constant names are all uppercase.

#### [BacktickOperator](./Generic/PHP.BacktickOperator.md)

Bans the use of the backtick execution operator.

#### [CharacterBeforePHPOpeningTag](./Generic/PHP.CharacterBeforePHPOpeningTag.md)

Checks that the opening PHP tag is the first content in a file.

#### [ClosingPHPTag](./Generic/PHP.ClosingPHPTag.md)

Checks that open PHP tags are paired with closing tags.

#### [DeprecatedFunctions](./Generic/PHP.DeprecatedFunctions.md)

Discourages the use of deprecated PHP functions.

#### [DisallowAlternativePHPTags](./Generic/PHP.DisallowAlternativePHPTags.md)

Verifies that no alternative PHP tags are used.

If alternative PHP open tags are found, this sniff can fix both the open and close tags.

#### [DisallowRequestSuperglobal](./Generic/PHP.DisallowRequestSuperglobal.md)

Ensures the $_REQUEST superglobal is not used

#### [DisallowShortOpenTag](./Generic/PHP.DisallowShortOpenTag.md)

Makes sure that shorthand PHP open tags are not used.

#### [DiscourageGoto](./Generic/PHP.DiscourageGoto.md)

Discourage the use of the PHP `goto` language construct.

#### [ForbiddenFunctions](./Generic/PHP.ForbiddenFunctions.md)

Discourages the use of alias functions.

Alias functions are kept in PHP for compatibility
with older versions. Can be used to forbid the use of any function.

#### [LowerCaseConstant](./Generic/PHP.LowerCaseConstant.md)

Checks that all uses of true, false and null are lowercase.

#### [LowerCaseKeyword](./Generic/PHP.LowerCaseKeyword.md)

Checks that all PHP keywords are lowercase.

#### [LowerCaseType](./Generic/PHP.LowerCaseType.md)

Checks that all PHP types are lowercase.

#### [NoSilencedErrors](./Generic/PHP.NoSilencedErrors.md)

Throws an error or warning when any code prefixed with an asperand is encountered.

```php
 if (@in_array($array, $needle))
 {
     doSomething();
 }
```

#### [RequireStrictTypes](./Generic/PHP.RequireStrictTypes.md)

Checks that the strict_types has been declared.

#### [SAPIUsage](./Generic/PHP.SAPIUsage.md)

Ensures the PHP_SAPI constant is used instead of php_sapi_name().

#### [Syntax](./Generic/PHP.Syntax.md)

Ensures PHP believes the syntax is clean.

#### [UpperCaseConstant](./Generic/PHP.UpperCaseConstant.md)

Checks that all uses of TRUE, FALSE and NULL are uppercase.

#### [UnnecessaryStringConcat](./Generic/Strings.UnnecessaryStringConcat.md)

Checks that two strings are not concatenated together; suggests using one string instead.

#### [GitMergeConflict](./Generic/VersionControl.GitMergeConflict.md)

Check for merge conflict artefacts.

#### [SubversionProperties](./Generic/VersionControl.SubversionProperties.md)

Tests that the correct Subversion properties are set.

#### [ArbitraryParenthesesSpacing](./Generic/WhiteSpace.ArbitraryParenthesesSpacing.md)

Check & fix whitespace on the inside of arbitrary parentheses.

Arbitrary parentheses are those which are not owned by a function (call), array or control structure.
Spacing on the outside is not checked on purpose as this would too easily conflict with other spacing rules.

#### [DisallowSpaceIndent](./Generic/WhiteSpace.DisallowSpaceIndent.md)

Throws errors if spaces are used for indentation other than precision indentation.

#### [DisallowTabIndent](./Generic/WhiteSpace.DisallowTabIndent.md)

Throws errors if tabs are used for indentation.

#### [IncrementDecrementSpacing](./Generic/WhiteSpace.IncrementDecrementSpacing.md)

Verifies spacing between variables and increment/decrement operators.

#### [LanguageConstructSpacing](./Generic/WhiteSpace.LanguageConstructSpacing.md)

Ensures all language constructs contain a single space between themselves and their content.

#### [ScopeIndent](./Generic/WhiteSpace.ScopeIndent.md)

Checks that control structures are defined and indented correctly.

#### [SpreadOperatorSpacingAfter](./Generic/WhiteSpace.SpreadOperatorSpacingAfter.md)

Verifies spacing between the spread operator and the variable/function call it applies to.