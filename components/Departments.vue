<template>
    <div class="flex flex-col w-full items-center justify-center p-3">
        <h1>Departments</h1>
        <h6>Our success is based on communication and multidisciplinary work</h6>
        <Carousel :departments="departments"></Carousel>
        <Carousel :departments="departments2"></Carousel>
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
            departments2: [
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