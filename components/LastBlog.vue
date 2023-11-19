<template>
    <div class="flex flex-col w-full items-center justify-center p-3">
        <h1>Last Blog Post</h1>
        <article class="max-w-md w-full my-2 flex flex-col">
            <div :style="`background-image: url('/images/blog/` + post.photo + `')`" class="w-full h-40 rounded-md bg-cover"></div>
            <a :href="post._path" class="mt-2 hover:text-primary"><h2>{{ post.title }}</h2></a>
            <p>{{ post.date }}</p>
            <p>{{ post.description }}</p>
        </article>
    </div>
</template>

<script setup>
const posts = await queryContent('/').find();
const post = posts[posts.length - 1];
</script>