<template>
    <div id="departments" class="flex flex-col items-center justify-center p-3">
        <div class="max-w-2xl">
            <h1 class="text-center">Departments</h1>
            <h6 class="mb-2 text-center">Our success is based on communication and multidisciplinary work</h6>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Fila 1 -->
                <div class="w-full">
                    <h4 class="text-center">Design</h4>
                    <Carousel :departments="design"></Carousel>
                </div>
                <div class="w-full">
                    <h4 class="text-center">Electronics</h4>
                    <Carousel :departments="electronics"></Carousel>
                </div>
                <!-- Fila 2 -->
                <div class="w-full">
                    <h4 class="text-center">Propulsion</h4>
                    <Carousel :departments="propulsion"></Carousel>
                </div>
                <div class="w-full">
                    <h4 class="text-center">Recovery</h4>
                    <Carousel :departments="recovery"></Carousel>
                </div>
                <!-- Añade más filas según sea necesario -->
            </div>
            <h4 class="mt-3 text-center">Marketing and business</h4>
            <div class="flex flex-col items-center justify-center">
                <div class="w-full md:w-1/2">
                    <Carousel :departments="marketing"></Carousel>
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
            design: [
                {
                    title: 'Design',
                    image: '/images/departments/department_design_1.jpg'
                },
                {
                    title: 'Design 2',
                    image: '/images/departments/department_design_2.jpg'
                },
                {
                    title: 'Design 3',
                    image: '/images/departments/department_design_3.jpg'
                },
            ],
            electronics: [
                {
                    title: 'Electronics',
                    image: '/images/departments/department_electronics_2.jpg'
                },
                {
                    title: 'Electronics',
                    image: '/images/departments/department_electronics_3.jpg'
                },
                {
                    title: 'Electronics',
                    image: '/images/departments/department_electronics_4.jpg'
                },
                {
                    title: 'Electronics',
                    image: '/images/departments/department_electronics_5.jpg'
                },
                {
                    title: 'Electronics',
                    image: '/images/departments/department_electronics.jpg'
                },
            ],
            propulsion: [
                {
                    title: 'Propulsion',
                    image: '/images/departments/department_propulsion.jpeg'
                },
                {
                    title: 'Propulsion',
                    image: '/images/departments/department_propulsion2.jpeg'
                },
            ],
            recovery: [
                {
                    title: 'Recovery',
                    image: '/images/departments/department_recuperacion.jpeg'
                },
                {
                    title: 'Recovery',
                    image: '/images/departments/department_recuperacion2.jpeg'
                },
                {
                    title: 'Recovery',
                    image: '/images/departments/department_recuperacion3.jpeg'
                },
            ],
            marketing: [
                {
                    title: 'Marketing',
                    image: '/images/departments/department_marketing.jpg'
                },
            ]
        }
    }
}
</script>