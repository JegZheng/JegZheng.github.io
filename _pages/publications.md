---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---


You can also find my articles on [my Google Scholar profile](https://scholar.google.com/citations?user=Vl5wCXsAAAAJ&hl=en#)


{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-publication.html %}
{% endfor %}
