# KodamaSoft

[![Netlify Status](https://api.netlify.com/api/v1/badges/f1d18fbb-7b34-4c31-80d7-a8bd3495ae05/deploy-status)](https://app.netlify.com/sites/kodamasoft/deploys)
## A statically generated blog example using Next.js and Markdown


This blog-starter uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

# How to run

After running `npm install` and `npm run dev`, you can visit the blog at [http://localhost:3000/](http://localhost:3000/).