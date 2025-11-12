<template>
  <img 
    :src="isDark ? '/logo-dark.svg' : '/logo-light.svg'" 
    alt="Using Dev" 
    class="h-8 w-auto"
  />
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>
