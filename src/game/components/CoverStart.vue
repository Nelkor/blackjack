<template>
  <div class="cover-item">
    <h2 v-html="$options.title"/>
    <p>Кликните по экрану для начала игры</p>
  </div>
</template>

<script>
export default {
  name: 'CoverStart',
  title: 'Добро пожаловать в&nbsp;"Блэкджек"',
}
</script>
