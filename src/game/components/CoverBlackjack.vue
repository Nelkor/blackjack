<template>
  <div class="cover-item">
    <h2 v-html="$options.title"/>
    <p>
      Это больше чем победа. Обыграв дилера до стадии принятия решения,
      Вы увеличиваете выигрыш в полтора раза.
    </p>
  </div>
</template>

<script>
export default {
  name: 'CoverBlackjack',
  title: 'Блэкджек!',
}
</script>
