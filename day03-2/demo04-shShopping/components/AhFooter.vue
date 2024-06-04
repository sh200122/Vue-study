<template>
  <!-- 版权底部 -->
  <div class="footer">
      <div class="wrapper">
        <div class="service">
          <ul>
            <FooterServiceItem></FooterServiceItem>
            <FooterServiceItem></FooterServiceItem>
            <FooterServiceItem></FooterServiceItem>
            <FooterServiceItem></FooterServiceItem>
          </ul>
        </div>
        <div class="help">
          <div class="left">
            <FooterLeftItem></FooterLeftItem>
            <FooterLeftItem></FooterLeftItem>
            <FooterLeftItem></FooterLeftItem>
            <FooterLeftItem></FooterLeftItem>
            <FooterLeftItem></FooterLeftItem>
            <FooterLeftItem></FooterLeftItem>
            
          </div>
          <div class="right">
            <ul>
              <li>
                <div><img src="@/assets/images/wechat.png" alt="" /></div>
                <p>微信公众号</p>
              </li>
              <li>
                <div><img src="@/assets/images/app.png" alt="" /></div>
                <p>APP下载二维码</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>
            <a href="#">关于我们</a>|<a href="#">帮助中心</a>|<a href="#"
              >售后服务</a
            >|<a href="#">配送与验收</a>|<a href="#">商务合作</a>|<a href="#"
              >搜索推荐</a
            >|<a href="#">友情链接</a>
          </p>
          <p>CopyRight © 小兔鲜</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* 版权底部 */
.footer {
  height: 580px;
  background-color: #F5F5F5;
}
.footer .service {
  padding: 60px 0;
  height: 180px;
  border-bottom: 1px solid #E8E8E8;
}
.footer .service ul {
  display: flex;
  justify-content: space-around;
}

.footer .help {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
.footer .help .left {
  display: flex;
}

.footer .help .right ul {
  display: flex;
  align-items: flex-start;
}
.footer .help .right li:nth-child(1) {
  margin-right: 55px;
  text-align: center;
}
.footer .help .right div {
  margin-bottom: 10px;
  width: 120px;
  height: 120px;
  color: #969696;
}
.icon-customer-service {
  margin-left: 3px;
  color: #00BE9A;
}
.copyright {
  margin-top: 100px;
  text-align: center;
  color: #A1A1A1;
}
.copyright p {
  margin-bottom: 15px;
}
.copyright a {
  margin: 0 10px;
  color: #A1A1A1;
}
</style>