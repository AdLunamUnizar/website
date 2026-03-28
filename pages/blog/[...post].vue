<template>
  <Header></Header>
  <Main>
    <article v-if="post" class="article-content">
      <div :style="`background-image: url('/images/blog/` + post.photo + `')`" class="w-full h-60 rounded-md bg-cover"></div>
      <ContentRenderer :value="post" />
    </article>
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
import { queryCollection } from '#imports'

const route = useRoute()

const { data: post } = await useAsyncData(route.path, async () => {
  return queryCollection('blog').path(route.path).first()
})
</script>
