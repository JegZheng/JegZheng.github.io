---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---


You can also find my articles on my <a href="https://scholar.google.com/citations?user=Vl5wCXsAAAAJ&hl=en#" style="color:#52adc8">Google Scholar profile</a>


{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-publication.html %}
{% endfor %}
