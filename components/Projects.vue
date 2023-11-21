<template>
    <div id="projects" class="flex flex-col w-full items-center justify-center p-3">
        <h1 class="text-center">Take a look at our projects</h1>
        <ol class="max-w-2xl relative border-l border-primary m-3">
            <li class="mb-10 ml-4">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-primary bg-primary">
                </div>
                <h3 class="text-gray-900 dark:text-white">AUGUSTA</h3>
                <time class="mb-1 text-sm font-normal leading-none text-primary">23 September, 2023</time>
                <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-100">Our first rocket AUGUSTA (Aerospace Unit for General Use in Space Technology and Aviation) succesfully launched on September 23 in Alcolea de Cinca.</p>
                <ButtonFilled>Learn more</ButtonFilled>
            </li>
            <li class="mb-10 ml-4">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-primary bg-primary">
                </div>
                <h3 class="text-gray-900 dark:text-white">PIRINEUS</h3>
                <time class="mb-1 text-sm font-normal leading-none text-primary">Expected in 2024</time>
                <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-100">Rocket designed to participate in the Aragon regional final of CanSats.</p>
                <ButtonFilled>Learn more</ButtonFilled>
            </li>
            <li class="ml-4">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-primary bg-primary">
                </div>
                <h3 class="text-gray-900 dark:text-white">Testbench</h3>
                <time class="mb-1 text-sm font-normal leading-none text-primary">Developing from 2023 to 2025</time>
                <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-100">Our own test bench for measuring relevant variables of our own-made engines such as the power or internal pressure. In addition to this, we want to build an environment that can simulate flight to test our own-made electronics.</p>
                <ButtonFilled>Learn more</ButtonFilled>
            </li>
        </ol>
    </div>
</template>