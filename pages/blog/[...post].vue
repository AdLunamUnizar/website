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
h1 {
  @apply text-center my-5;
}
</style>

<style>
.article-content p {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>

<script setup>
/*const route = useRoute()
const post = route.params.post[0]
console.log(post)
const result = await useAsyncData(`${post}`, () => {
  return queryContent().where({ _path: `/${post}` }).findOne()
})
console.log(result)*/
</script>