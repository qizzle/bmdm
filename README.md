# bmdm: Bot Maker for Discord Manager

w.i.p. basically a package manager for BMD mods.

- No theme support (yet)

## Getting started

### Installation

With npm:

```bash
npm i -g bmdm
```

With pnpm:

```bash
pnpm i -g bmdm
```

With yarn:

```bash
yarn global add bmdm
```

### Setup

Start by setting the path to your Bot Maker for Discord directory.

```bash
bmdm set "<path>"
```

> Use quotes (e.g. "C:\Program Files (x86)\Steam\steamapps\common\Bot Maker For Discord")

### Usage

Install all mods from the offical repository:

```bash
bmdm all
```

Update all of your mods:

```bash
bmdm update
bmdm up
```

Install a specific mod:

```bash
bmdm install <mod>
bmdm i <mod>
```

Remove a specific mod:

```bash
bmdm remove <mod>
bmdm rm <mod>
```

List all installed mods:

```bash
bmdm list
bmdm ls
```

Create a new mod with a template:

```bash
bmdm create <name>
bmdm c <name>
```

## License

Licensed under MIT License.
