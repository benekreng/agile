<p align="center">
  <h1 align="center">🏗️⚡ AGILE PROJECT cm2020-agil-t2g3-hm5⚡🏗️</h1>
  <h3 align="center">Status: development</h3>
</p>

### How to start development:

+ Clone the repo `git clone https://github.com/benekreng/agile`
+ Move to app folder `cd app`
+ Install dependecies `yarn install`
+ Start local dev `yarn dev`
+ To expose the server to your local network use `yarn dev --host` useful to see the website in your phone

### App tech:

+ Style: Used https://daisyui.com/ as main CSS component library which uses https://tailwindcss.com/

+ Each file under  `app/src/routes` is a page
+ `__layout.svelte` joins the header, content, and footer
+ Just like plain HTML/JS on each `.svelte` file you have a script and style fields, any content is like the "body"