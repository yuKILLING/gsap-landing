<template>
    <button type="button"
        class="px-5 w-[96px] h-[40px] rounded-[10px] text-[15px] text-white bg-gradient-to-r from-purple-900 to-cyan-300 cursor-pointer">
        <slot> </slot>
    </button>
</template>

<script>
export default {
    name: 'myMainButton'
}
</script>

<style scoped></style>