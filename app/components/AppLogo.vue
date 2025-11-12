<template>
  <div class="flex items-center gap-3">
    <img 
      :src="isDark ? '/logo-dark.svg' : '/logo-light.svg'" 
      alt="Using Dev" 
      class="h-8 w-auto"
    />
    <span class="text-xl font-bold">Using Dev</span>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>
