# slugcopy

> Slugify strings and copy them directly to your clipboard.

[![NPM Version](https://img.shields.io/npm/v/slugcopy)](https://www.npmjs.com/package/slugcopy)
[![License](https://img.shields.io/npm/l/slugcopy)](https://github.com/imranpollob/slugcopy/blob/master/license)

**slugcopy** is a lightweight command-line utility that converts any string into a URL-friendly slug and automatically copies the result to your system clipboard. It is built on top of the robust [`@sindresorhus/slugify`](https://github.com/sindresorhus/slugify) library.

## Features

- 🚀 **Instant Copy**: Automatically puts the result in your clipboard.
- 🛠 **Customizable**: Choose your separator, handle camelCase, and more.
- 📦 **Modern**: Built with modern Node.js standards.
- 🌐 **International**: Handles special characters (e.g., `Déjà Vu!` -> `deja-vu`).

## Install

Requires [Node.js](https://nodejs.org/) 18 or higher.

```bash
npm install --global slugcopy
```

## Usage

```bash
$ slugcopy <string>
```

## Options

| Option                          | Description                        | Default              |
| :------------------------------ | :--------------------------------- | :------------------- |
| `--separator=<string>`          | Character to separate words        | `-`                  |
| `--no-lowercase`                | Preserve original casing           | `true` (lowercases)  |
| `--no-decamelize`               | Preserve camelCase as single words | `true` (decamelizes) |
| `--preserve-leading-underscore` | Keep leading underscores           | `false`              |
| `--no-copy`                     | Do not copy result to clipboard    | `false` (copies)     |

## Examples

**Basic Usage**
```bash
$ slugcopy "Déjà Vu!"
# Output: deja-vu
# Clipboard: deja-vu
```

**Custom Separator & Case Preservation**
```bash
$ slugcopy "Like a Boss" --no-lowercase --separator='_'
# Output: Like_a_Boss
# Clipboard: Like_a_Boss
```

**Skipping Clipboard Copy**
```bash
$ slugcopy "Just Print This" --no-copy
# Output: just-print-this
# Clipboard: (unchanged)
```

## Related

- [slugify-cli](https://github.com/sindresorhus/slugify-cli) - The original inspiration for this project.

## License

MIT © [Imran Pollob](https://github.com/imranpollob)
