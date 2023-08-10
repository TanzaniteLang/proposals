import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import vento from "lume/plugins/vento.ts";
import basePath from "lume/plugins/base_path.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import terser from "lume/plugins/terser.ts";

const site = lume();

site.use(tailwindcss());
site.use(postcss());
site.use(vento());
site.use(basePath());
site.use(codeHighlight());
site.use(terser());

export default site;
