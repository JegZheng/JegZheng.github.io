# jegzheng.github.io

Personal academic homepage of Huangjie Zheng, built with Jekyll and hosted on GitHub Pages.

## Editing

- **Publications**: edit `_data/publications.yml`. One entry per paper; set `selected: true` to feature it on the home page. The BibTeX shown on the site is generated from these fields.
- **News**: edit `_data/news.yml`.
- **Bio**: edit `index.md`. **CV**: edit `cv.md`. Profile details and links live in `_config.yml` under `author`.
- **Styles**: `assets/css/main.scss` (light and dark themes via CSS variables).

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.
