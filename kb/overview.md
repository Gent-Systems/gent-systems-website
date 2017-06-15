---
title: KB Overview
layout: default
---

# Knowledge Base Overview

{% for cat in site.top-categories %}
### {{ cat }}
<ul>
    {% for page in site.pages %}
        {% if page.resource == true %}
            {% for pc in page.categories %}
                {% if pc == cat %}
                    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
                {% endif %}
            {% endfor %}
        {% endif %}
    {% endfor %}
</ul>
{% endfor %}