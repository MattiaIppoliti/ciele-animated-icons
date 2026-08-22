# ciele-animated-icons

Hover-animated lucide-style icons, extracted from the Ciele console so the app repo stays lean. 77 motion-animated SVG icons, a factory (`createAnimatedIcon`) that removes their shared scaffold, and a drop-in `<AnimatedIcon>` wrapper that upgrades a plain `lucide-react` glyph to its animated twin when one exists.

## Install

Shipped as TypeScript source, no build step. Install from GitHub and transpile it in your bundler:

```bash
pnpm add github:MattiaIppoliti/ciele-animated-icons
```

Next.js:

```ts
// next.config.ts
transpilePackages: ["ciele-animated-icons"],
```

Peer dependencies: `react >= 19`, `motion >= 11`, `lucide-react`.

## Use

```tsx
import { AnimatedIcon, StaticIcons } from "ciele-animated-icons";
import { Bell } from "lucide-react";

<AnimatedIcon icon={Bell} size={16} />        // animates on hover of the nearest control
<StaticIcons>{page}</StaticIcons>             // subtree renders plain lucide glyphs
```

Individual icons are exported too (`BellIcon`, `RocketIcon`, …); each exposes an imperative `AnimatedIconHandle` (`startAnimation` / `stopAnimation`) when given a ref. Respects `prefers-reduced-motion`.

New icons: draw the SVG body with `motion` variants and wrap it with `createAnimatedIcon`, then register the lucide component → animated twin pair in `src/animated-icon.tsx`.
