<template>
  <nav class="z-50 flex flex-row justify-center text-lg sticky top-0 backdrop-blur bg-black/70">
      <div class="w-full max-w-4xl p-3 flex md:flex-row flex-col justify-between items-center border-b border-primary">
          <div class="grid grid-cols-6 gap-10 justify-items-center items-center md:hidden sticky top-0 backdrop-blur bg-black/70">
              <Button @click="show_nav()" class="md:hidden col-start-1 col-end-2">☰</Button>
              <a href="/" class="col-start-2 col-end-6"><img class="h-14" src="/images/logo.png"></a>
          </div>
          <a href="/" class="hidden md:block"><img class="h-14" src="/public/images/logo.png"></a>
          <div class="w-1/2 flex md:flex-row flex-col justify-between items-center">
              <a ref="nav1" class="my-1 hover:text-primary hidden md:block" href="/#projects">Projects</a>
              <a ref="nav2" class="my-1 hover:text-primary hidden md:block" href="/#departments">Departments</a>
              <a ref="nav3" class="my-1 hover:text-primary hidden md:block" href="/blog">Blog</a>
              <a ref="nav4" class="my-1 hover:text-primary hidden md:block" href="/contact">Contact</a>
          </div>
          <a ref="nav5" class="my-2 md:my-0 hidden md:block" target="_blank" href="https://docs.google.com/forms/d/1me2YhfKRXGim-WILX1wPTUj3TOheu39S1PSdAOTeuAo"><ButtonFilled>JOIN US!</ButtonFilled></a>
      </div>
  </nav>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  const isNavVisible = ref(false);
  const nav1 = ref(null);
  const nav2 = ref(null);
  const nav3 = ref(null);
  const nav4 = ref(null);
  const nav5 = ref(null);

  let interactuado = false;

  function show_nav() {
      isNavVisible.value = !isNavVisible.value;
      const nav1Element = nav1.value;
      const nav2Element = nav2.value;
      const nav3Element = nav3.value;
      const nav4Element = nav4.value;
      const nav5Element = nav5.value;

      if (isNavVisible.value) {
          // Mostrar elementos y realizar otras acciones aquí
          nav1Element.style.display = 'block';
          nav2Element.style.display = 'block';
          nav3Element.style.display = 'block';
          nav4Element.style.display = 'block';
          nav5Element.style.display = 'block';
      } else {
          // Ocultar elementos y realizar otras acciones aquí
          nav1Element.style.display = 'none';
          nav2Element.style.display = 'none';
          nav3Element.style.display = 'none';
          nav4Element.style.display = 'none';
          nav5Element.style.display = 'none';
      }
  }

  function at_resize() {
      const nav1Element = nav1.value;
      const nav2Element = nav2.value;
      const nav3Element = nav3.value;
      const nav4Element = nav4.value;
      const nav5Element = nav5.value;

      nav1Element.style.display = 'block';
      nav2Element.style.display = 'block';
      nav3Element.style.display = 'block';
      nav4Element.style.display = 'block';
      nav5Element.style.display = 'block';
      
  }

  onMounted(() => {
      window.addEventListener('resize', at_resize);
  });

  onBeforeUnmount(() => {
      window.removeEventListener('resize', at_resize);
  });
</script>

