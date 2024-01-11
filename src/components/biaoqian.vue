<template>
  <div class="card">
    <div class="title">
      发电与功率
    </div>
    <div class="content">
      <div class="row">
        <div class="label">累计发电</div>
        <Progress :percent="45" :stroke-width="20" status="active" text-inside />
      </div>
      <div class="row">
        <div class="label">今日发电</div>
        <Progress :percent="65" :stroke-width="20" status="wrong" text-inside />
      </div>
      <div class="row">
        <div class="label">当前功率</div>
        <Progress :percent="100" :stroke-width="20" text-inside />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style scoped>
.card {
  width: 510px;
  height: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 18px;
  margin-bottom: 10px;
  background-color: #333;
  color: #fff;
  padding: 10px;
}

.content {
  background-color: #f0f0f0;
  padding: 10px;
}

.row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.label {
  flex: 1;
}
</style>
