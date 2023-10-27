<template>
    <Header></Header>
    <Main>
      <ContentDoc />
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