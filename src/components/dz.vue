<template>
  <div class="card">
  <div class="title">
    <p class="heading">电站基本信息</p>
    
  </div>
  <div class="wrapper">
    <div class="color black">
      电站名称
      <span class="hex">三十岗电站</span>
    </div>
    <div class="color eerie-black">
      经度/纬度
      <span class="hex">东经117 北纬23</span>
    </div>
    <div class="color chinese-black">
      装机功率
      <span class="hex">123.23kw</span>
    </div>
     <div class="color night-rider">
      组件数量
      <span class="hex">2000块</span>
    </div>
    <div class="color chinese-white">
      电站类型
      <span class="hex">分布式电站</span>
    </div>
    <div class="color anti-flash-white">
      投运时间
      <span class="hex">2018年5月10日</span>
    </div>
    <div class="color white">
      生命周期
      <span class="hex">25年</span>
    </div>
  
  </div>
</div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" >
.card {
  width: 500px;
  height: 400px;
  --black: #000000;
  --ch-black: #141414;
  --eer-black: #1b1b1b;
  --night-rider: #2e2e2e;
  --white: #ffffff;
  --af-white: #f3f3f3;
  --ch-white: #e1e1e1;
  font-family: Helvetica, sans-serif;
}

.wrapper {
  margin: 2rem auto;
  width: 250px;
  font-size: small;
}

.title {
  font-size: 18px;
  margin-bottom: 10px;
  background-color: #333;
  color: #fff;
  padding: 10px;
}
.heading {
  font-weight: bold;
  letter-spacing: 7px;
  font-size: 1.5rem;
  position: relative;
  margin-bottom: 6px;
}

.heading::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #e8e8e8;
  z-index: -1;
  filter: blur(50px);
  height: 50px;
}

.color {
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.hex {
  text-align: end;
  font-family: monospace;
  text-transform: uppercase;
}

.black {
  background: var(--black);
  color: var(--ch-white);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.eerie-black {
  background: var(--ch-black);
  color: var(--ch-white);
}

.chinese-black {
  background: var(--eer-black);
  color: var(--ch-white);
}

.night-rider {
  background: var(--night-rider);
  color: var(--ch-white);
}

.chinese-white {
  background: var(--ch-white);
  color: var(--night-rider);
}

.anti-flash-white {
  background: var(--af-white);
  color: var(--night-rider);
}

.white {
  background: var(--white);
  color: var(--night-rider);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.border {
  color: var(--night-rider);
  padding: 10px 10px;
  text-align: center;
}

.border span {
  border-radius: 5px;
  color: var(--ch-white);
  padding: 2px 4px;
  background-color: var(--night-rider);
}
</style>