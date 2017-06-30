---
title: KB Overview
layout: default
---

# Knowledge Base Overview

{% assign mypages = site.pages | group_by: 'top-category' %}
{% mypages | sort: 'top-category' %}
{% for cat in mypages %}
<h2>{{ cat.name | capitalize}}</h2>
<ul>
    {% assign items = cat.items %}
    {% for item in items %}
    {% if item.kb == true %}
    <li><a href="{{ item.url }}">{{ item.title }}</a></li>
    {% endif %}
    {% endfor %}
</ul>
{% endfor %}