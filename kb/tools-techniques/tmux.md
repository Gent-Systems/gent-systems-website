---
title: tmux
layout: default
kb: true
top-category: Tools and Techniques
comments: true
---

{% include header.html %}

## Overview

`tmux` is a useful terminal program to multiplex and organize multiple applications or workflows while maintating speed and efficiency of "mouse-free" environment. `tmux` can be installed with most package managers or built from source. To see if `tmux` is already installed, and if so what version, run `$ tmux -V`.

### Navigation

| Operation | Key(s) | Description |
|-----------|--------|-------------|
| Left/Down/Up/Right | <kbd>h</kbd>/<kbd>j</kbd>/<kbd>k</kbd>/<kbd>l</kbd> | Move cursor left, down, up or right respectively |
| Scroll Half-Screen Up/Down | <kbd>Ctrl</kbd>+<kbd>u</kbd>/<kbd>Ctrl</kbd>+<kbd>d</kbd> | Scroll Half-Screen Up/Down |
| Next Word Beginning/End | <kbd>w</kbd>/<kbd>e</kbd> | Move cursor to beginning/end of next word |
| Back a Word | <kbd>b</kbd> | Moves cursor back to start of last word |

## References

* [tmux Productive Mouse-Free Development by Brian P. Hogan](https://pragprog.com/book/bhtmux/tmux)
