<template>
    <div class="text-white">
        <header class="mt-10 shapka">
            <!-- HEADER-SHAPKA -->
            <div class="text-white flex justify-around items-center">
                <div>
                    <img src="@/assets/pngs/logo.png" alt="" class="cursor-pointer main_logo">
                </div>
                <div>
                    <ul class="menu flex space-x-7">
                        <li class="cursor-pointer">Buy/Sell</li>
                        <li class="cursor-pointer">Grow</li>
                        <li class="cursor-pointer">Markets</li>
                        <li class="cursor-pointer">Business</li>
                        <li class="cursor-pointer">Support</li>
                    </ul>
                </div>
                <div class="space-x-3">
                    <button
                        class="px-5 w-[96px] h-[40px] rounded-[10px] text-[15px] text-white bg-transparent border border-white cursor-pointer btn-1">Sign
                        In</button>
                    <myMainButton class="btn-2">Sign Up</myMainButton>
                </div>
            </div>
            <!-- HERO SECTION -->
            <div class="flex justify-center items-center content-center w-screen h-screen relative">
                <div>
                    <img src="@/assets/pngs/header-pngs/Ellipse 74.png" alt=""
                        class="absolute top-[00px] left-[200px] prop">
                    <img src="@/assets/pngs/header-pngs/Ellipse 75.png" alt=""
                        class="absolute top-[-60px] left-[70px] prop">
                    <img src="@/assets/pngs/header-pngs/Ellipse 76.png" alt=""
                        class="absolute top-[-100px] left-[0px] prop">
                    <img src="@/assets/pngs/header-pngs/Etherium-2 copy 1.png" alt=""
                        class="absolute top-[500px] right-[290px] prop" data-speed="0.15">
                    <img src="@/assets/pngs/header-pngs/LiteCoin-1.png" alt=""
                        class="absolute top-[600px] left-[200px] prop" data-speed="0.35">
                    <img src="@/assets/pngs/header-pngs/Bitcoin-1.png" alt="" class="absolute top-[120px] left-[100px] prop"
                        data-speed="0.55">
                    <img src="@/assets/pngs/header-pngs/Monero-2 copy 2.png" alt=""
                        class="absolute top-[160px] right-[160px] prop" data-speed="0.75">
                    <img src="@/assets/pngs/header-pngs/star-img (1).png" alt=""
                        class="absolute top-[90px] right-[140px] prop" data-speed="0.95">
                    <img src="@/assets/pngs/header-pngs/star-img (2).png" alt=""
                        class="absolute top-[230px] left-[240px] prop" data-speed="0.105">
                    <img src="@/assets/pngs/header-pngs/star-img (3).png" alt=""
                        class="absolute top-[700px] right-[140px] prop" data-speed="0.115">
                    <img src="@/assets/pngs/header-pngs/star-img.png" alt="" class="absolute top-[100px] right-[400px] prop"
                        data-speed="0.130">
                    <img src="@/assets/pngs/header-pngs/star-img.png" alt=""
                        class="absolute top-[1200px] left-[200px] prop">
                    <img src="@/assets/pngs/header-pngs/star-img (3).png" alt=""
                        class="absolute top-[1700px] right-[140px] prop">
                    <img src="@/assets/pngs/Looper-3.png" alt="" class="absolute top-[1300px] right-[-200px] looper">
                    <img src="@/assets/pngs/star-img (4).png" alt="" class="absolute top-[2000px] left-[330px] prop">
                </div>
                <div class="absolute top-[250px] flex flex-col items-center">
                    <h1 class="hero_title text-white text-[85px] max-w-[800px] text-center font-black">We make crypto
                        clear
                        and
                        simple</h1>
                    <p class="text-[16px] text-center max-w-[580px] text-[#898CA9] mb-6 hero_text">Buy, sell, and grow your
                        crypto
                        with
                        CoinFlip,
                        the platform dedicated
                        to every trader
                        at every
                        level.</p>
                    <button
                        class="px-5 w-[156px] h-[56px] rounded-[10px] text-[15px] text-white bg-gradient-to-r from-purple-900 to-cyan-300 cursor-pointer main_btn">Get
                        Started</button>
                </div>
            </div>
        </header>

    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
    setup() {
        onMounted(() => {
            const tl = gsap.timeline();
            tl.fromTo('.hero_title',
                {
                    y: -200,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                }, 0.6)
                .fromTo('.main_logo',
                    {
                        y: -50,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                    }, 0.9)
                .fromTo('.prop',
                    {
                        scale: 0,
                        opacity: 0
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.2,
                    }, 0.6)
                .fromTo('.menu li',
                    {
                        y: -50,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.15
                    }, 1.4)
                .fromTo('.btn-1',
                    {
                        y: 50,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.4
                    }, 1.6)
                .fromTo('.btn-2',
                    {
                        y: 50,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.4
                    }, 1.8)
                .fromTo('.hero_text',
                    {
                        y: 50,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1
                    }, 0.8)
                .fromTo('.main_btn',
                    {
                        y: 50,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1
                    }, 1.8)
            gsap.to('.hero_title', {
                scrollTrigger: {
                    trigger: '.shapka',
                    // markers: 1,
                    start: 'top top',
                    scrub: 1,
                },
                // scale: 0.5,
                xPercent: -30,
            })
            gsap.to('[data-speed]',
                {
                    y: (i, el) =>
                        -(1 - parseFloat(el.getAttribute('data-speed'))) * ScrollTrigger.maxScroll(window),
                    scrollTrigger: {
                        scrub: 3,
                        end: "bottom top"
                    }
                })
            gsap.fromTo('.looper',
                {
                    scale: 0,
                    opacity: 0
                },
                {
                    scale: 1,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: '.shapka',
                        // markers: 1,
                        start: 'top top',
                        scrub: 1,
                    }
                })

        });

    }
}
</script>

<style scoped></style>