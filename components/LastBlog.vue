<template>
    <div class="flex flex-col w-full items-center justify-center p-3">
        <h1 class="text-center">Last Blog Post</h1>
        <article v-if="post" class="max-w-md w-full my-2 flex flex-col">
            <div :style="`background-image: url('/images/blog/` + post.photo + `')`" class="w-full h-40 rounded-md bg-cover"></div>
            <a :href="post.path" class="mt-2 hover:text-primary"><h2>{{ post.title }}</h2></a>
            <p>{{ post.date }}</p>
            <p>{{ post.description }}</p>
        </article>
    </div>
</template>

<script setup>
import { fetchLatestBlogPost } from '~/utils/blog'

const post = await fetchLatestBlogPost()
</script>
