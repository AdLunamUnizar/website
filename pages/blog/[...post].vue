<template>
    <Header></Header>
    <Main>
      <ContentDoc v-slot="{ doc }">
        <article>
          <div :style="`background-image: url('/images/blog/` + doc.photo + `')`" class="w-full h-60 rounded-md bg-cover"></div>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </Main>
</template>

<style>
h1 {
  @apply text-center my-5;
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