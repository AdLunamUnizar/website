<template>
    <div id="departments" class="flex flex-col items-center justify-center p-3">
        <div class="max-w-2xl">
            <h1 class="text-center">Departments</h1>
            <h6 class="mb-2 text-center">Our success is based on communication and multidisciplinary work</h6>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Fila 1 -->
                <div class="w-full">
                    <h4 class="text-center">Design</h4>
                    <Carousel :departments="departments"></Carousel>
                </div>
                <div class="w-full">
                    <h4 class="text-center">Electronics</h4>
                    <Carousel :departments="departments"></Carousel>
                </div>
                <!-- Fila 2 -->
                <div class="w-full">
                    <h4 class="text-center">Propulsion</h4>
                    <Carousel :departments="departments"></Carousel>
                </div>
                <div class="w-full">
                    <h4 class="text-center">Recovery</h4>
                    <Carousel :departments="departments"></Carousel>
                </div>
                <!-- Añade más filas según sea necesario -->
            </div>
            <h4 class="mt-3 text-center">Marketing and business</h4>
            <div class="flex flex-col items-center justify-center">
                <div class="w-full md:w-1/2">
                    <Carousel :departments="departments"></Carousel>
                </div>
            </div>
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