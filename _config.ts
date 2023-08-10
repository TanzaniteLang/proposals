import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import vento from "lume/plugins/vento.ts";
import basePath from "lume/plugins/base_path.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
  location: new URL("https://tanzanitelang.github.io/taps/"),
});

site.use(basePath());
site.use(postcss());
site.use(vento());
site.use(codeHighlight());
site.use(metas());

export default site;
