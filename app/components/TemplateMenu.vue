<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="[{
      label: 'Using Dev',
      to: 'https://using-dev.vercel.app/',
      target: '_blank',
      icon: 'i-lucide-home'
    }, {
      label: 'Products',
      to: 'https://using-dev.vercel.app/product',
      target: '_blank',
      icon: 'i-lucide-package'
    }, {
      label: 'GitHub',
      to: 'https://github.com/maulana-tech',
      target: '_blank',
      icon: 'i-simple-icons-github'
    }, {
      label: 'Instagram',
      to: 'https://www.instagram.com/lana.dev_/',
      target: '_blank',
      icon: 'i-simple-icons-instagram'
    }]"
    :content="{ align: 'start' }"
    :ui="{ content: 'min-w-fit' }"
    size="xs"
  >
    <UButton
      label="Links"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class="-mb-1.5 font-semibold rounded-full truncate"
      :class="[open && 'bg-primary/15']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }"
    />
  </UDropdownMenu>
</template>
