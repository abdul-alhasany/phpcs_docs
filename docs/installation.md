# Installation

The easiest way to get started with PHP_CodeSniffer is to download the Phar files for each of the commands:

```
# Download using curl
curl -OL https://squizlabs.github.io/PHP_CodeSniffer/phpcs.phar
curl -OL https://squizlabs.github.io/PHP_CodeSniffer/phpcbf.phar

# Or download using wget
wget https://squizlabs.github.io/PHP_CodeSniffer/phpcs.phar
wget https://squizlabs.github.io/PHP_CodeSniffer/phpcbf.phar

# Then test the downloaded PHARs
php phpcs.phar -h
php phpcbf.phar -h
```

### Composer

If you use Composer, you can install PHP_CodeSniffer system-wide with the following command:

```bash
composer global require "squizlabs/php_codesniffer=*"
```

Make sure you have the composer bin dir in your PATH. The default value is `~/.composer/vendor/bin/`, but you can check the value that you need to use by running `composer global config bin-dir --absolute`.

Or alternatively, include a dependency for `squizlabs/php_codesniffer` in your `composer.json` file. For example:

```json
{
  "require-dev": {
    "squizlabs/php_codesniffer": "3.*"
  }
}
```

You will then be able to run PHP_CodeSniffer from the vendor bin directory:

```bash
./vendor/bin/phpcs -h
./vendor/bin/phpcbf -h
```

### Phive

If you use Phive, you can install PHP_CodeSniffer as a project tool using the following commands:

```bash
phive install phpcs
phive install phpcbf
```

You will then be able to run PHP_CodeSniffer from the tools directory:

```bash
./tools/phpcs -h
./tools/phpcbf -h
```

### PEAR

If you use PEAR, you can install PHP_CodeSniffer using the PEAR installer. This will make the `phpcs` and `phpcbf` commands immediately available for use. To install PHP_CodeSniffer using the PEAR installer, first ensure you have [installed PEAR](http://pear.php.net/manual/en/installation.getting.php) and then run the following command:

```bash
pear install PHP_CodeSniffer
```

### Git Clone

You can also download the PHP_CodeSniffer source and run the `phpcs` and `phpcbf` commands directly from the Git clone:

```bash
git clone https://github.com/squizlabs/PHP_CodeSniffer.git
cd PHP_CodeSniffer
php bin/phpcs -h
php bin/phpcbf -h
```
