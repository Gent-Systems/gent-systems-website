---
title: KB Overview
layout: default
---

# Knowledge Base Overview

{% assign mypages = site.pages | group_by: 'top-category' %}
{% for cat in mypages %}
<h2>{{ cat.name | capitalize}}</h2>
{% assign subpages = cat.items | group_by: 'sub-category' %}
(% for subcat in subpages %)
<h3>{{ subcat.name | capitalize}}</h3>
<ul>
    {% assign items = subcat.items %}
    {% for item in items %}
    {% if item.kb == true %}
    <li><a href="{{ item.url }}">{{ item.title }}</a></li>
    {% endif %}
    {% endfor %}
</ul>
{% endfor %}
{% endfor %}