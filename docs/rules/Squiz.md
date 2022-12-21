# Squiz Sniffs

#### [ArrayBracketSpacing](./Squiz/Arrays.ArrayBracketSpacing.md)

Ensure that there are no spaces around square brackets.

#### [ArrayDeclaration](./Squiz/Arrays.ArrayDeclaration.md)

Ensures that arrays conform to the array coding standard.

#### [ClassDeclaration](./Squiz/Classes.ClassDeclaration.md)

Checks the declaration of the class and its inheritance is correct.

#### [ClassFileName](./Squiz/Classes.ClassFileName.md)

Tests that the file name and the name of the class contained within the file match.

#### [DuplicateProperty](./Squiz/Classes.DuplicateProperty.md)

Ensures JS classes don't contain duplicate property names.

#### [LowercaseClassKeywords](./Squiz/Classes.LowercaseClassKeywords.md)

Ensures all class keywords are lowercase.

#### [SelfMemberReference](./Squiz/Classes.SelfMemberReference.md)

Tests self member references.

Verifies that :
- self:: is used instead of Self::
- self:: is used for local static member reference
- self:: is used instead of self ::

#### [ValidClassName](./Squiz/Classes.ValidClassName.md)

Ensures classes are in camel caps, and the first letter is capitalised.

#### [BlockComment](./Squiz/Commenting.BlockComment.md)

Verifies that block comments are used appropriately.

#### [ClassComment](./Squiz/Commenting.ClassComment.md)

Parses and verifies the class doc comment.

Verifies that :
<ul>
 <li>A class doc comment exists.</li>
 <li>The comment uses the correct docblock style.</li>
 <li>There are no blank lines after the class comment.</li>
 <li>No tags are used in the docblock.</li>
</ul>

#### [ClosingDeclarationComment](./Squiz/Commenting.ClosingDeclarationComment.md)

Checks the //end ... comments on classes, interfaces and functions.

#### [DocCommentAlignment](./Squiz/Commenting.DocCommentAlignment.md)

Tests that the stars in a doc comment align correctly.

#### [EmptyCatchComment](./Squiz/Commenting.EmptyCatchComment.md)

Checks for empty catch clause without a comment.

#### [FileComment](./Squiz/Commenting.FileComment.md)

Parses and verifies the file doc comment.

#### [FunctionComment](./Squiz/Commenting.FunctionComment.md)

Parses and verifies the doc comments for functions.

#### [FunctionCommentThrowTag](./Squiz/Commenting.FunctionCommentThrowTag.md)

Verifies that a @throws tag exists for each exception type a function throws.

#### [InlineComment](./Squiz/Commenting.InlineComment.md)

Checks that there is adequate spacing between comments.

#### [LongConditionClosingComment](./Squiz/Commenting.LongConditionClosingComment.md)

Ensures long conditions have a comment at the end.

#### [PostStatementComment](./Squiz/Commenting.PostStatementComment.md)

Checks to ensure that there are no comments after statements.

#### [VariableComment](./Squiz/Commenting.VariableComment.md)

Parses and verifies the variable doc comment.

#### [ControlSignature](./Squiz/ControlStructures.ControlSignature.md)

Verifies that control statements conform to their coding standards.

#### [ElseIfDeclaration](./Squiz/ControlStructures.ElseIfDeclaration.md)

Ensures the use of else if over elseif.

#### [ForEachLoopDeclaration](./Squiz/ControlStructures.ForEachLoopDeclaration.md)

Verifies that there is a space between each condition of foreach loops.

#### [ForLoopDeclaration](./Squiz/ControlStructures.ForLoopDeclaration.md)

Verifies that there is a space between each condition of for loops.

#### [InlineIfDeclaration](./Squiz/ControlStructures.InlineIfDeclaration.md)

Tests the spacing of shorthand IF statements.

#### [LowercaseDeclaration](./Squiz/ControlStructures.LowercaseDeclaration.md)

Ensures all control structure keywords are lowercase.

#### [SwitchDeclaration](./Squiz/ControlStructures.SwitchDeclaration.md)

Enforces switch statement formatting.

#### [ClassDefinitionClosingBraceSpace](./Squiz/CSS.ClassDefinitionClosingBraceSpace.md)

Ensure there is a single blank line after the closing brace of a class definition.

#### [ClassDefinitionNameSpacing](./Squiz/CSS.ClassDefinitionNameSpacing.md)

Ensure there are no blank lines between the names of classes/IDs.

#### [ClassDefinitionOpeningBraceSpace](./Squiz/CSS.ClassDefinitionOpeningBraceSpace.md)

Ensure a single space before, and a newline after, the class opening brace

#### [ColonSpacing](./Squiz/CSS.ColonSpacing.md)

Ensure there is no space before a colon and one space after it.

#### [ColourDefinition](./Squiz/CSS.ColourDefinition.md)

Ensure colours are defined in upper-case and use shortcuts where possible.

#### [DisallowMultipleStyleDefinitions](./Squiz/CSS.DisallowMultipleStyleDefinitions.md)

Ensure that each style definition is on a line by itself.

#### [DuplicateClassDefinition](./Squiz/CSS.DuplicateClassDefinition.md)

Check for duplicate class definitions that can be merged into one.

#### [DuplicateStyleDefinition](./Squiz/CSS.DuplicateStyleDefinition.md)

Check for duplicate style definitions in the same class.

#### [EmptyClassDefinition](./Squiz/CSS.EmptyClassDefinition.md)

Ensure that class definitions are not empty.

#### [EmptyStyleDefinition](./Squiz/CSS.EmptyStyleDefinition.md)

Ensure that style definitions are not empty.

#### [ForbiddenStyles](./Squiz/CSS.ForbiddenStyles.md)

Bans the use of some styles, such as deprecated or browser-specific styles.

#### [Indentation](./Squiz/CSS.Indentation.md)

Ensures styles are indented 4 spaces.

#### [LowercaseStyleDefinition](./Squiz/CSS.LowercaseStyleDefinition.md)

Ensure that all style definitions are in lowercase.

#### [MissingColon](./Squiz/CSS.MissingColon.md)

Ensure that all style definitions have a colon.

#### [NamedColours](./Squiz/CSS.NamedColours.md)

Ensure colour names are not used.

#### [Opacity](./Squiz/CSS.Opacity.md)

Ensure that opacity values start with a 0 if it is not a whole number.

#### [SemicolonSpacing](./Squiz/CSS.SemicolonSpacing.md)

Ensure each style definition has a semi-colon and it is spaced correctly.

#### [ShorthandSize](./Squiz/CSS.ShorthandSize.md)

Ensure sizes are defined using shorthand notation where possible.

#### [JavaScriptLint](./Squiz/Debug.JavaScriptLint.md)

Runs JavaScript Lint on the file.

#### [JSLint](./Squiz/Debug.JSLint.md)

Runs jslint.js on the file.

#### [FileExtension](./Squiz/Files.FileExtension.md)

Tests that classes and interfaces are not declared in .php files.

#### [OperatorBracket](./Squiz/Formatting.OperatorBracket.md)

Tests that all arithmetic operations are bracketed.

#### [FunctionDeclarationArgumentSpacing](./Squiz/Functions.FunctionDeclarationArgumentSpacing.md)

Checks that arguments in function declarations are spaced correctly.

#### [FunctionDeclaration](./Squiz/Functions.FunctionDeclaration.md)

Checks the function declaration is correct.

#### [FunctionDuplicateArgument](./Squiz/Functions.FunctionDuplicateArgument.md)

Checks that duplicate arguments are not used in function declarations.

#### [GlobalFunction](./Squiz/Functions.GlobalFunction.md)

Tests for functions outside of classes.

#### [LowercaseFunctionKeywords](./Squiz/Functions.LowercaseFunctionKeywords.md)

Ensures all function keywords are lowercase.

#### [MultiLineFunctionDeclaration](./Squiz/Functions.MultiLineFunctionDeclaration.md)

Ensure single and multi-line function declarations are defined correctly.

#### [ValidFunctionName](./Squiz/NamingConventions.ValidFunctionName.md)

Ensures method names are correct.

#### [ValidVariableName](./Squiz/NamingConventions.ValidVariableName.md)

Checks the naming of variables and member variables.

#### [DisallowObjectStringIndex](./Squiz/Objects.DisallowObjectStringIndex.md)

Ensures that object indexes are written in dot notation.

#### [ObjectInstantiation](./Squiz/Objects.ObjectInstantiation.md)

Ensures objects are assigned to a variable when instantiated.

#### [ObjectMemberComma](./Squiz/Objects.ObjectMemberComma.md)

Ensures the last member of an object is not followed by a comma.

#### [ComparisonOperatorUsage](./Squiz/Operators.ComparisonOperatorUsage.md)

A Sniff to enforce the use of IDENTICAL type operators rather than EQUAL operators.

#### [IncrementDecrementUsage](./Squiz/Operators.IncrementDecrementUsage.md)

Ensures that the ++ operators are used when possible.

#### [ValidLogicalOperators](./Squiz/Operators.ValidLogicalOperators.md)

Ensures logical operators 'and' and 'or' are not used.

#### [CommentedOutCode](./Squiz/PHP.CommentedOutCode.md)

Warn about commented out code.

#### [DisallowBooleanStatement](./Squiz/PHP.DisallowBooleanStatement.md)

Ensures that boolean operators are only used inside control structure conditions.

#### [DisallowComparisonAssignment](./Squiz/PHP.DisallowComparisonAssignment.md)

Ensures that the value of a comparison is not assigned to a variable.

#### [DisallowInlineIf](./Squiz/PHP.DisallowInlineIf.md)

Stops inline IF statements from being used.

#### [DisallowMultipleAssignments](./Squiz/PHP.DisallowMultipleAssignments.md)

Ensures there is only one assignment on a line, and that it is the first thing on the line.

#### [DisallowSizeFunctionsInLoops](./Squiz/PHP.DisallowSizeFunctionsInLoops.md)

Bans the use of size-based functions in loop conditions.

#### [DiscouragedFunctions](./Squiz/PHP.DiscouragedFunctions.md)

Discourages the use of debug functions.

#### [EmbeddedPhp](./Squiz/PHP.EmbeddedPhp.md)

Checks the indentation of embedded PHP code segments.

#### [Eval](./Squiz/PHP.Eval.md)

The use of eval() is discouraged.

#### [GlobalKeyword](./Squiz/PHP.GlobalKeyword.md)

Stops the usage of the "global" keyword.

#### [Heredoc](./Squiz/PHP.Heredoc.md)

Bans the use of heredocs and nowdocs.

#### [InnerFunctions](./Squiz/PHP.InnerFunctions.md)

Ensures that functions within functions are never used.

#### [LowercasePHPFunctions](./Squiz/PHP.LowercasePHPFunctions.md)

Ensures all calls to inbuilt PHP functions are lowercase.

#### [NonExecutableCode](./Squiz/PHP.NonExecutableCode.md)

Warns about code that can never been executed.

#### [MemberVarScope](./Squiz/Scope.MemberVarScope.md)

Verifies that class members have scope modifiers.

#### [MethodScope](./Squiz/Scope.MethodScope.md)

Verifies that class methods have scope modifiers.

#### [StaticThisUsage](./Squiz/Scope.StaticThisUsage.md)

Checks for usage of $this in static methods, which will cause runtime errors.

#### [ConcatenationSpacing](./Squiz/Strings.ConcatenationSpacing.md)

Makes sure there are no spaces around the concatenation operator.

#### [DoubleQuoteUsage](./Squiz/Strings.DoubleQuoteUsage.md)

Makes sure that any use of double quotes strings are warranted.

#### [EchoedStrings](./Squiz/Strings.EchoedStrings.md)

Makes sure that any strings that are "echoed" are not enclosed in brackets.

#### [CastSpacing](./Squiz/WhiteSpace.CastSpacing.md)

Ensure cast statements don't contain whitespace.

#### [ControlStructureSpacing](./Squiz/WhiteSpace.ControlStructureSpacing.md)

Checks that control structures have the correct spacing around brackets.

#### [FunctionClosingBraceSpace](./Squiz/WhiteSpace.FunctionClosingBraceSpace.md)

Checks that there is one empty line before the closing brace of a function.

#### [FunctionOpeningBraceSpace](./Squiz/WhiteSpace.FunctionOpeningBraceSpace.md)

Checks that there is no empty line after the opening brace of a function.

#### [FunctionSpacing](./Squiz/WhiteSpace.FunctionSpacing.md)

Checks the separation between functions and methods.

#### [LanguageConstructSpacing](./Squiz/WhiteSpace.LanguageConstructSpacing.md)

Ensures all language constructs contain a single space between themselves and their content.

#### [LogicalOperatorSpacing](./Squiz/WhiteSpace.LogicalOperatorSpacing.md)

Verifies that operators have valid spacing surrounding them.

#### [MemberVarSpacing](./Squiz/WhiteSpace.MemberVarSpacing.md)

Verifies that class members are spaced correctly.

#### [ObjectOperatorSpacing](./Squiz/WhiteSpace.ObjectOperatorSpacing.md)

Ensure there is no whitespace before/after an object operator.

#### [OperatorSpacing](./Squiz/WhiteSpace.OperatorSpacing.md)

Verifies that operators have valid spacing surrounding them.

#### [PropertyLabelSpacing](./Squiz/WhiteSpace.PropertyLabelSpacing.md)

Ensures that a property or label colon has a single space after it and no space before it.

#### [ScopeClosingBrace](./Squiz/WhiteSpace.ScopeClosingBrace.md)

Checks that the closing braces of scopes are aligned correctly.

#### [ScopeKeywordSpacing](./Squiz/WhiteSpace.ScopeKeywordSpacing.md)

Ensure there is a single space after scope keywords.

#### [SemicolonSpacing](./Squiz/WhiteSpace.SemicolonSpacing.md)

Ensure there is no whitespace before a semicolon.

#### [SuperfluousWhitespace](./Squiz/WhiteSpace.SuperfluousWhitespace.md)

Checks for unneeded whitespace.

Checks that no whitespace precedes the first content of the file, exists
after the last content of the file, resides after content on any line, or
are two empty lines in functions.