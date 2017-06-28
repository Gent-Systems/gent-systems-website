---
title: KB Overview
layout: default
---

# Knowledge Base Overview

{% for cat_one in site.kb-categories %}
## {{ cat_one }}
{% for cat_two in site.kb-categories.cat_one %}
### {{ cat_two }}
<ul>
    {% for page in site.pages %}
        {% if page.kb == true %}
            {% if page.top-category == cat_one %}
                {% if page.sub-category == cat_two %}
                    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
                {% endif %}
            {% endif %}
        {% endif %}
    {% endfor %}
</ul>
{% endfor %}
{% endfor %}

{% assign mypages = site.kb | group_by: 'top-category' %}
{% for cat in mypages %}
<h2>{{ cat.name | capitalize}}</h2>
    <ul>
        {% assign items = cat.items %}
        {% for item in items %}
            <li><a href="{{ item.url }}">{{ item.title }}</a></li>
        {% endfor %}
    </ul>
{% endfor %}