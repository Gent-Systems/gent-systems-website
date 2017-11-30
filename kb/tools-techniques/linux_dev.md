---
title: Linux Tools & Techniques
layout: default
kb: true
top-category: Tools and Techniques
comments: true
---

{% include header.html %}

## Navigation & Searching

* [sed](https://www.gnu.org/software/sed/manual/sed.html): a stream editor
* [ranger](http://ranger.nongnu.org/): console file manager with VI key bindings
* [The Tao of tmux](https://leanpub.com/the-tao-of-tmux/read)
* [Facebook PathPicker](https://github.com/facebook/pathpicker/)
* [The Silver Searcher](https://github.com/ggreer/the_silver_searcher): very, very fast code searching tool similar to `ack`

### Vi(m) Key Bindings for GNU Readline (Bash & others)

If the default Emacs key bindings for your terminal are boring, or you're a fan of Vi key navigation and editing, you can set GNU readline (the process feeding things like the bash terminal, SQL prompts, etc.) to have Vi keybindings by making some changes to your `~/.inputrc` config file. For example, take a look at [my .inputrc](https://github.com/JohnnyGOX17/configs/blob/master/configs/.inputrc).
A valuable cheatsheet for this mode can be found [here](http://www.catonmat.net/download/bash-vi-editing-mode-cheat-sheet.pdf).

## File Management

### File/Directory Removal

* `rm -r dir/` removes the directory (and all files and subdirectories within) `dir`
* `rm -r dir/*` removes all files and subdirectories in `dir`
