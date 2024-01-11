<template>
  <div class="card">
  <div class="title">
    <p class="heading">节能减排</p>
    
  </div>
  <div class="wrapper">
    <div class="color black">
      二氧化碳
      <span class="hex">8.45万吨</span>
    </div>
    <div class="color eerie-black">
      汽车里程
      <span class="hex">7.37km</span>
    </div>
    <div class="color chinese-black">
      等效植树
      <span class="hex">431.79万棵</span>
    </div>
     <div class="color night-rider">
      二氧化硫
      <span class="hex">2542.91吨</span>
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

<style>
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
 
  font-size: small;
}

.title {
  text-align: center;
  color: #1b1b1b;
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