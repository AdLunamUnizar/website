<template>
    <Header></Header>
    <Main>
        <h1 class="text-center mt-5">Blog</h1>
        <div v-for="post in posts">
            <article class="my-10">
                <img>
                <a :href="post._path" class="hover:text-primary"><h2>{{ post.title }}</h2></a>
                <p>{{ post.date }}</p>
                <p>{{ post.description }}</p>
            </article>
        </div>
    </Main>
</template>

<script setup>
const posts = await queryContent('/').find()
console.log(posts)
</script>