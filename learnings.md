# learnings from the vue spike

- vue 3 is killing us. vuetify is the obvious choice; they're accessible and look great,but vue 3 support is roadmapped for feb 2022.
- naive looks great but is not accessible; it's a "nothing but divs" kind of library, and i didn't see any aria roles anywhere. it's also not keyboard-navigable, at least on the pagination side.
- naive also couples css styles very tightly; we'd need to whack a bunch of `!important`s everywhere to override their specificity
- oruga is ugly as sin and seems to be hard to theme, but is accessible out of the box. they even use `role="button"` on their anchor tags with `href="#"`. be still my beating heart
- element plus seems like best of all the worlds
