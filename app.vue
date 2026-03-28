<template>
  <Head>
    <Title>ALUnizar</Title>
    <Meta
      name="description"
      content="AdLunamUnizar Rocketry Team Website."
    />
  </Head>
  <div class="relative isolate min-h-screen">
    <ParticlesBackground v-if="showParticles" />
    <div class="relative z-10">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const normalizedPath = computed(() => route.path.replace(/\/+$/, '') || '/')

const showParticles = computed(() => {
  return !normalizedPath.value.startsWith('/blog/')
})
</script>
