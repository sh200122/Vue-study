<template>
  <li class="footer-service-item">
    <span></span>
    <p>价格亲民</p>
  </li>
</template>

<script>
export default {

}
</script>

<style>
.footer-service-item {
  display: flex;
  line-height: 58px;
}
.footer-service-item span {
  display: block;
  margin-right: 20px;
  width: 58px;
  height: 58px;
  background-image: url(~@/assets/images/sprite.png);
}
.footer-service-item li:nth-child(2) span {
  background-position: 0 -58px;
}
.footer-service-item li:nth-child(3) span {
  background-position: 0 -116px;
}
.footer-service-item li:nth-child(4) span {
  background-position: 0 -174px;
}
.footer-service-item p {
  font-size: 28px;
}
</style>