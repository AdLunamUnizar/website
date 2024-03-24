<template>
  <Head>
    <Title>ALUnizar</Title>
    <Meta
      name="description"
      content="AdLunamUnizar Rocketry Team Website."
    />
  </Head>
  <NuxtPage/>
  <div style="position: relative; z-index: -1;">
  <NuxtParticles
    id="tsparticles"
    url="json/particlesjs-config.json"
  ></NuxtParticles>
  </div>
</template>
