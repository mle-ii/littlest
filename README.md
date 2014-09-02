# Littlest

The full collection of `littlest` modules:

- [littlest-isomorph][isomorph] - An attempt at a isomorphic JavaScript stack with as little internal code as possible.
- [littlest-dispatcher][dispatcher] - An attempt at an async-friendly, isomorphic Flux dispatcher with as little internal code as possible.

These make use of React technologies and patterns, as they've made server-side rendering and state synchronization much simpler than any home-rolled solution would have proven.

## Inspiration

> For he who is least among you all is the one who is great.
>
> &mdash; [Luke 9:48][biblequote]

Though I doubt Jesus was a programmer, there's no doubt this rings true in ways far different from what I imagine his original intentions were. The Unix (and, by inspiration, Node) philosophy of simple modules done well has persisted within and without for good reason: _simple works_. `littlest` modules attempt to similarly balance creating cohesive, atomic, useful modules with small feature sets and surface areas.

What's more is that, in keeping with the Unix and Node philosophies, it's the combination of `littlest` modules that provides the biggest, compounding value. That's what this module is for. It allows users the full value of `littlest` without forcing that arrangement on everyone who wishes to benefit from our experience. Take just `-isomorph` or just `-dispatcher` if that's all you need, ot take the whole kit if you're just starting out and want to see it's full benefit.

## Alternatives

For a complete set of alternatives, look at the individual sub-modules' Alternatives lists.

[isomorph]: https://github.com/Faithlife/littlest-isomorph
[dispatcher]: https://github.com/Faithlife/littlest-dispatcher
[biblequote]: http://biblia.com/books/esv/Lk9.48
