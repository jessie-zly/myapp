<template>
  <div class="user-order">
    <ul class="order">
      <li class="order-detail">
        <div class="order-cash"> ¥ 28.00</div>
        <div class="order-info">
          <div class="info-time">
            <p>2017-12-28</p>
            <span>10:55</span>
          </div>
          <div class="info-desc">
            <span>至暗时刻</span>
            <p>上海宝山大光明影城</p>
            <p>座位 x 1</p>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "user-order"
  }
</script>

<style scoped>
  .user-order {
    background: #EBEBEB;
  }

  .user-order > .order {
    margin-top: 70px;
    padding: 0;
  }

  .user-order > .order > .order-detail {
    margin: 20px 16px;
    padding: 15px;
    background: #fff;
    border-radius: 5px;
    list-style: none;

  }

  .user-order > .order > .order-detail > .order-cash {
    font: 18px/24px '';
    color: #fe8233;
    text-align: right;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 10px;
  }

  .user-order > .order > .order-detail > .order-info {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
  }

  .user-order > .order > .order-detail > .order-info > .info-time {
    font-size: 12px;
  }

  .user-order > .order > .order-detail > .order-info > .info-time > p {
    display: block;
    font-size: 12px;
  }

  .user-order > .order > .order-detail > .order-info > .info-time > span {
    display: block;
    font: 24px/50px '';
    color: #fe8233;
  }

  .user-order > .order > .order-detail > .order-info > .info-desc {
    margin-left: 20px;
  }

  .user-order > .order > .order-detail > .order-info > .info-desc > span {
    display: block;
    font: 14px/38px '';
    color: #191919;
  }

  .user-order > .order > .order-detail > .order-info > .info-desc > p {
    display: block;
    font: 12px/16px '';
    color: #6e6e6e;
  }

</style>
