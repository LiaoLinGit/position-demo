<template>
    <div class="relative">
      <div class="box">One</div>
      <div class="box" id="two">Two</div>
      <div class="box">Three</div>
      <div class="box">Four</div>
    </div>
</template>

<style scoped>
.relative {
    width: 500px;
    height: 200px;
    border: 1px solid #d2d2d2;
    margin: 0 auto;
}

.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
  margin-right: 2px;
}

#two {
  position: relative;
  top: 20px;
  left: 20px;
  background: blue;
}
</style>