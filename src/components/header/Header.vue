<template>
  <header>
    <div class="title">
      <h1>Manga Journey</h1>
    </div>
    <navbar :links="navLinks" />
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em;
  background-color: #32333a;
  color: white;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
