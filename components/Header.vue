<template>
    <nav class="z-50 flex flex-row justify-center text-lg sticky top-0 backdrop-blur bg-black/70">
        <div class="w-full max-w-4xl p-3 flex md:flex-row flex-col justify-between items-center border-b border-primary">
            <div class="grid grid-cols-6 gap-10 justify-items-center items-center md:hidden sticky top-0 backdrop-blur bg-black/70">
                <Button @click="show_nav()" class="md:hidden col-start-1 col-end-2">☰</Button>
                <a href="/" class="col-start-2 col-end-6"><img class="h-14" src="/images/logo.png"></a>
            </div>
            <a href="/" class="hidden md:block"><img class="h-14" src="/images/logo.png"></a>
            <div class="w-1/2 flex md:flex-row flex-col justify-between items-center">
                <a 
                    :class="isNavVisible ? 'block' : 'hidden'" 
                    class="my-1 hover:text-primary md:block" 
                    href="/#projects">
                    Projects
                </a>
                <a 
                    :class="isNavVisible ? 'block' : 'hidden'"  
                    class="my-1 hover:text-primary md:block" 
                    href="/#departments">
                    Departments
                </a>
                <a 
                    :class="isNavVisible ? 'block' : 'hidden'"  
                    class="my-1 hover:text-primary md:block" 
                    href="/blog">
                    Blog
                </a>
                <a 
                    :class="isNavVisible ? 'block' : 'hidden'"  
                    class="my-1 hover:text-primary md:block" 
                    href="/contact">
                    Contact
                </a>
            </div>
            <a :class="isNavVisible ? 'block' : 'hidden'"  class="my-2 md:my-0 md:block" target="_blank" href="https://docs.google.com/forms/d/1me2YhfKRXGim-WILX1wPTUj3TOheu39S1PSdAOTeuAo"><ButtonFilled>JOIN US!</ButtonFilled></a>
        </div>
    </nav>
</template>
  
<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';

    const isNavVisible = ref(false);

    let interactuado = false;

    function show_nav() {
        isNavVisible.value = !isNavVisible.value;
    }

    function at_resize() {

    }

    onMounted(() => {
        window.addEventListener('resize', at_resize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', at_resize);
    });
</script>

  