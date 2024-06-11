# slugcopy
Slugify strings and copy to clipboard

## Install

```
npm install --global slugcopy
```

## Usage

```
$ slugcopy --help

  Usage
    $ slugcopy <string>

  Options
    --separator=<string>           Word separator [Default: -]
    --no-lowercase                 Don’t make the slug lowercase [Default: true]
    --no-decamelize                Don’t convert camelCase to separate words [Default: true]
    --preserve-leading-underscore  If your string starts with an underscore, it will be preserved in the slugified string [Default: false]
    --no-copy                      Don't copy the slug to the clipboard [Default: false]


  Examples
    $ slugcopy Déjà Vu!
    deja-vu
    $ slugcopy Like a Boss --no-lowercase --separator='_'
    Like_a_Boss
```

## Related

- [slugify-cli](https://github.com/sindresorhus/slugify-cli) - Motivation for this project
