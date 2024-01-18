<template>
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">
              <img src="@/assets/css/logob.png" alt="Logo" />
            </div>
            <div class="layout-nav">
              <MenuItem name="1">
                <div class="demo-avatar">
                  <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                </div>
              </MenuItem>
              <router-link to="/login">
                <MenuItem name="2">
                  <Icon type="md-heart" />
                  牛牛成精历险记
                </MenuItem>
              </router-link>
              <MenuItem name="3">
                <div>
                  <p>{{ date }} {{ time }}</p>
                </div>
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <Layout>
          <Sider hide-trigger :style="{ background: '#fff' }">
            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
              <Menu :theme="theme3" active-name="1">
                <MenuItem name="1">
                  <Icon type="ios-navigate"></Icon>
                  首页
                </MenuItem>
                <MenuItem name="2">
                  <Icon type="md-crop" />
                  电力监控
                </MenuItem>
                <MenuItem name="3">
                  <Icon type="ios-desktop" />
                  光伏区监控
                </MenuItem>
                <MenuItem name="4">
                  <Icon type="ios-contract" />
                  设备分布图
                </MenuItem>
                <MenuItem name="5">
                  <Icon type="ios-analytics"></Icon>
                  故障告警
                </MenuItem>
                <MenuItem name="6">
                  <Icon type="ios-build" />
                  远程控制
                </MenuItem>
              </Menu>
            </Menu>
          </Sider>
          <Layout :style="{ padding: '0 24px 24px' }">
            <Breadcrumb :style="{ margin: '24px 0' }"></Breadcrumb>
            <Content :style="{ padding: '24px', minHeight: '280px', background: '#fff' }">
              <Tabs>
                <TabPane label="运行监控" icon="ios-eye">
                  <div class="grid-layout">
                    <el-row :gutter="20">
                      <el-col :xs="24" :sm="12" :md="8">
                        <el-card>
                          <div slot="header">发电与功率</div>
                          <biaoqian></biaoqian>
                        </el-card>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="8">
                        <el-card>
                          <div slot="header">节能减排</div>
                          <div>
                            <jn></jn>
                          </div>
                        </el-card>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="8">
                        <el-card>
                          <div slot="header">电站基本信息</div>
                          <div>
                            <dz></dz>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :xs="24" :sm="12">
                        <el-card>
                          <div slot="header">日功率-辐射强度</div>
                          <rgl></rgl>
                        </el-card>
                      </el-col>
                      <el-col :xs="24" :sm="12">
                        <el-card>
                          <div slot="header">
                            日累计发电量
                            <rl></rl>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                  </div>
                </TabPane>
                <TabPane label="生产管理" icon="ios-stats">
                  <!-- <logo></logo> -->
                </TabPane>
                <TabPane label="电站维护" icon="logo-euro">
                  <DZWH></DZWH>
                </TabPane>
                <TabPane label="系统管理" icon="md-settings">标签三的内容</TabPane>
              </Tabs>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </template>
  
  <script>
  import biaoqian from './biaoqian.vue'
  import rgl from './rgl.vue'
  import jn from './jn.vue'
  import dz from './dz.vue'
  import rl from './rl.vue'
  import DZWH from './DZWH.vue'
  
  export default {
    components: {
      biaoqian,
      rgl,
      jn,
      dz,
      rl,
      DZWH
      // logo
    },
    data() {
      return {
        time: '',
        date: ''
      };
    },
    mounted() {
      this.updateTime(); // 首次加载时立即更新时间
      setInterval(this.updateTime, 1000); // 每秒钟更新一次时间
    },
    methods: {
      updateTime() {
        const now = new Date();
        this.time = now.toLocaleTimeString(); // 更新时间
        this.date = now.toLocaleDateString(); // 更新日期
      }
    }
  };
  </script>
  
  <style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .layout-logo {
    width: 100px;
    height: 30px;
    background: #71c4ef;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 10px;
    left: 20px;
  }
  
  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  
  .bordered-row > .el-col {
    border: 1px solid #ccc;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .box {
    width: calc(33.33% - 10px);
    /* 计算每个格子的宽度，减去10px用于放置边框 */
    height: 400px;
    /* 设置盒子的高度 */
    border: 2px solid rgb(50, 63, 135);
    /* 添加红色边框 */
    margin: 5px;
    /* 设置盒子之间的间距 */
  }
  
  @media (max-width: 768px) {
    /* 响应式设置 */
    .box {
      width: calc(50% - 10px);
      /* 在小屏幕上，每行只有两个格子，宽度为50% */
    }
  }
  </style>
  