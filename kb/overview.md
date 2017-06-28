---
title: KB Overview
layout: default
---

# Knowledge Base Overview

{% assign mypages = site.pages | group_by: 'top-category' %}
{% for cat in mypages %}
<h2>{{ cat.name | capitalize}}</h2>
    <ul>
        {% assign items = cat.items %}
        {% for item in items %}
            <li><a href="{{ item.url }}">{{ item.title }}</a></li>
        {% endfor %}
    </ul>
{% endfor %}