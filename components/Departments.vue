<template>
    <div class="flex flex-col items-center justify-center p-3">
        <div class="max-w-2xl ">
            <h1 class="text-center">Departments</h1>
            <h6>Our success is based on communication and multidisciplinary work</h6>
            <div class="grid grid-cols-2 gap-4 justify-items-center items-center">
                <!-- Fila 1 -->
                <div class="w-full">
                    <h4>Título 1</h4>
                    <Carousel :departments="departments"></Carousel>
                </div>
                <div class="w-full">
                    <h4>Título 2</h4>
                    <Carousel :departments="departments"></Carousel>
                </div>
                <!-- Fila 2 -->
                <div class="w-full">
                    <h4>Título 3</h4>
                    <div class="carousel-component">
                    <!-- Aquí va tu componente Carousel -->
                    </div>
                </div>
                <div class="w-full">
                    <h4>Título 4</h4>
                    <div class="carousel-component">
                    <!-- Aquí va tu componente Carousel -->
                    </div>
                </div>
                <!-- Añade más filas según sea necesario -->
            </div>
            <div class="w-1/2"><Carousel :departments="departments"></Carousel></div>
        </div>
    </div>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
    components: {
        Carousel
    },
    data() {
        return {
            departments: [
                {
                    title: 'Design',
                    image: '/images/departments/department_design.jpg'
                },
                {
                    title: 'Electronics',
                    image: '/images/departments/department_electronics.jpg'
                },
                {
                    title: 'Propulsion',
                    image: '/images/departments/department_propulsion.jpg'
                },
            ],
            pictures2: [
                {
                    title: 'Design',
                    image: '/images/departments/department_design.jpg'
                },
                {
                    title: 'Electronics',
                    image: '/images/departments/department_electronics.jpg'
                },
            ]
        }
    }
}
</script>