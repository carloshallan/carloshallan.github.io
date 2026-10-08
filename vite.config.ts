import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from 'vite-plugin-vuetify'
import mdx from '@mdx-js/rollup'
import type { AtRule, Plugin as PostcssPlugin, Root } from 'postcss'

const mdxPlugin = mdx({ jsx: true, jsxImportSource: 'vue' })

// O Vuetify 4 publica o CSS dentro de @layer, o que faz qualquer regra do app
// (como o `* { margin: 0 }` global) vencer os estilos dos componentes. O site
// foi feito com o Vuetify 2, sem layers, então removemos as layers para manter
// a mesma cascata (e o mesmo visual).
function findLayer(root: Root) {
  let found: AtRule | undefined
  root.walkAtRules('layer', rule => {
    found = rule
    return false
  })
  return found
}

const unlayerVuetify: PostcssPlugin = {
  postcssPlugin: 'unlayer-vuetify',
  Once(root) {
    if (!root.source?.input.file?.includes('/node_modules/vuetify/')) return
    let layer
    while ((layer = findLayer(root))) {
      if (layer.nodes) layer.replaceWith(layer.nodes)
      else layer.remove()
    }
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    {
      ...mdxPlugin,
      enforce: 'pre',
      transform(code, id) {
        // Works.vue importa os posts com ?raw para ler os metadados
        if (id.includes('?raw')) return
        return mdxPlugin.transform.call(this, code, id)
      }
    },
    vue(),
    vueJsx({ include: /\.(jsx|tsx|mdx)$/ }),
    vuetify({ autoImport: true })
  ],
  css: {
    postcss: { plugins: [unlayerVuetify] }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
})
