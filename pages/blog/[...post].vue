<template>
  <Header></Header>
  <Main>
    <ContentDoc v-slot="{ doc }">
      <article class="article-content">
        <div :style="`background-image: url('/images/blog/` + doc.photo + `')`" class="w-full h-60 rounded-md bg-cover"></div>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </Main>
  <Footer></Footer>
</template>

<style>
/* Títulos */
h1 {
  @apply text-center my-5;
}

/* Párrafos: respeta los saltos de línea y añade separación entre secciones */
.article-content p {
  white-space: pre-line;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

/* Listas sin perder sus marcadores */
.article-content ul {
  list-style-type: disc;        /* Fuerza el uso de bullets */
  list-style-position: outside; /* Ubica los marcadores fuera del contenido */
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.article-content ol {
  list-style-type: decimal;       /* Para listas ordenadas */
  list-style-position: outside;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

/* Elementos de lista */
.article-content li {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>

<script setup>
/* Código comentado para obtener el contenido Markdown
const route = useRoute()
const post = route.params.post[0]
console.log(post)
const result = await useAsyncData(`${post}`, () => {
  return queryContent().where({ _path: `/${post}` }).findOne()
})
console.log(result)
*/
</script>
