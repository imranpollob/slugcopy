#!/usr/bin/env node
import meow from "meow";
import slugify from "@sindresorhus/slugify";
import clipboardy from "clipboardy";

const cli = meow(
  `
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
`,
  {
    importMeta: import.meta,
    flags: {
      separator: {
        type: "string",
      },
      lowercase: {
        type: "boolean",
        default: true,
      },
      decamelize: {
        type: "boolean",
        default: true,
      },
      preserveLeadingUnderscore: {
        type: "boolean",
        default: false,
      },
      copy: {
        type: "boolean",
        default: true,
      },
    },
  }
);

if (cli.input.length === 0) {
  cli.showHelp();
}

const text = cli.input.join(" ");
const output = slugify(text, cli.flags);

console.log(output);

if (cli.flags.copy) {
  clipboardy.writeSync(output);
  console.log("Copied to clipboard");
}