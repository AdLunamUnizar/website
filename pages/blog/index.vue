<template>
    <Header></Header>
    <Main>
        <h1 class="text-center mt-5">Blog</h1>
        <div class="w-full flex flex-wrap justify-center md:justify-between">
            <article v-for="post in posts" class="max-w-sm w-full my-10 flex flex-col">
                <div :style="`background-image: url('/images/blog/` + post.photo + `')`" class="w-full h-40 rounded-md bg-cover"></div>
                <a :href="post._path" class="mt-2 hover:text-primary"><h2>{{ post.title }}</h2></a>
                <p>{{ post.date }}</p>
                <p>{{ post.description }}</p>
            </article>
        </div>
    </Main>
    <Footer></Footer>
</template>

<script setup>
const posts = await queryContent('/').find()
// Ordenar los posts por fecha de más nuevo a más viejo
posts.sort((a, b) => {
  const dateA = a.date.split('/').reverse().join('-');
  const dateB = b.date.split('/').reverse().join('-');
  return new Date(dateB) - new Date(dateA);
});
console.log(posts)
</script>