<template>
  <div class="home-container">
    <div class="home-top">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="4" :lg="6">
          <div class="card-item">
            <div class="item-top">
              <div class="item-icon">
                <i class="el-icon-s-goods icon"></i>
              </div>
              <div class="item-text">
                <p class="text-label">出货量</p>
                <p class="text-val">1800</p>
              </div>
            </div>
            <div class="item-bottom">
              <p class="p1">有史以来</p>
              <p class="p2">↑</p>
            </div>
            <div class="item-subscript green">
              <p class="val">+ 11%</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="4" :lg="6">
          <div class="card-item">
            <div class="item-top">
              <div class="item-icon">
                <i class="el-icon-s-goods icon"></i>
              </div>
              <div class="item-text">
                <p class="text-label">收入</p>
                <p class="text-val">12345</p>
              </div>
            </div>
            <div class="item-bottom">
              <p class="p1">有史以来</p>
              <p class="p2">↑</p>
            </div>
            <div class="item-subscript red">
              <p class="val">+ 2%</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="4" :lg="6">
          <div class="card-item">
            <div class="item-top">
              <div class="item-icon">
                <i class="el-icon-s-goods icon"></i>
              </div>
              <div class="item-text">
                <p class="text-label">平均价格</p>
                <p class="text-val">300</p>
              </div>
            </div>
            <div class="item-bottom">
              <p class="p1">有史以来</p>
              <p class="p2">↑</p>
            </div>
            <div class="item-subscript blue">
              <p class="val">+ 30%</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="4" :lg="6">
          <div class="card-item">
            <div class="item-top">
              <div class="item-icon">
                <i class="el-icon-s-goods icon"></i>
              </div>
              <div class="item-text">
                <p class="text-label">已出货</p>
                <p class="text-val">900</p>
              </div>
            </div>
            <div class="item-bottom">
              <p class="p1">有史以来</p>
              <p class="p2">↑</p>
            </div>
            <div class="item-subscript yellow">
              <p class="val">+ 80%</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="home-middle">
      <el-row class="panel-group" :gutter="20">
        <el-col v-for="(item, index) in linkArr" :key="index" :xs="3" :sm="6" :lg="3" class="quick-link">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <el-link :href="item.link" class="quick-link-item">
              <div class="quick-link-item-img">
                <svg-icon :icon-class="item.icon" />
              </div>
              <div class="quick-link-item-btn">
                {{ item.name }}
              </div>
            </el-link>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="home-footer">
      <el-row class="panel-group panel-bottom" :gutter="10">
        <el-col :lg="12">
          <GoodsType :goodsType="goodsType" />
        </el-col>
        <el-col :lg="12">
          <GoodsTopTen :topTen="topTen" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import GoodsType from '#/Home/goods-type';
import GoodsTopTen from '#/Home/goods-topTen';
import { Rstatistics } from '@/api/home';

export default {
  name: 'HomeIndex',
  components: { GoodsType, GoodsTopTen },
  data() {
    return {
      linkArr: [
        {
          icon: 'board-schedule',
          name: '表格',
          link: '#/material'
        },
        {
          icon: 'board-template',
          name: '上传',
          link: '#/program?path=TemplateManagement'
        },
        {
          icon: 'board-program',
          name: '翻页',
          link: '#/program?path=ProgramManagement'
        },
        {
          icon: 'board-subtitle',
          name: '国际化',
          link: '#/program?path=SubtitlesManagement'
        },
        {
          icon: 'board-schedule',
          name: '图标',
          link: '#/play_control?path=ScheduleManagement'
        },
        {
          icon: 'board-publish',
          name: '树',
          link: '#/play_control?path=PublishManagement'
        },
        {
          icon: 'board-terminal',
          name: '图片',
          link: '#/equipment?path=TerminalManagement'
        },
        {
          icon: 'board-monitor',
          name: '视图',
          link: '#/equipment?path=TerminalMonitor'
        }
      ],
      goodsType: [],
      topTen: []
    };
  },
  created() {
    console.log(this.linkArr);
    this.fetchData();
  },
  methods: {
    fetchData() {
      Rstatistics().then((res) => {
        console.log('fetchData -> res', res);
        this.topTen = res.data.topTen;
        this.goodsType = res.data.goodsType;
      });
    }
  }
};
</script>
<style scoped lang="scss">
.home-container {
  > div {
    margin-top: 10px;
  }
  .home-top {
    .card-item {
      padding: 10px 20px;
      background-color: #575bcc;
      border-radius: 4px;
      position: relative;
      .item-top {
        display: flex;
        justify-content: center;
        align-items: center;
        .item-icon {
          .icon {
            width: 58px;
            height: 58px;
            line-height: 58px;
            font-size: 30px;
            background-color: rgba($color: #fff, $alpha: 0.5);
            border-radius: 4px;
            text-align: center;
            color: #fff;
          }
        }
        .item-text {
          flex: 1;
          margin-left: 20px;
          .text-label {
            color: #ddd;
            font-size: 14px;
            font-weight: bold;
            opacity: 0.5;
          }
          .text-val {
            font-size: 26px;
            color: #fff;
            margin-top: 10px;
          }
        }
      }
      .item-bottom {
        color: #fff;
        padding-top: 10px;
        overflow: hidden;
        .p1 {
          font-size: 14px;
          float: left;
        }
        .p2 {
          float: right;
        }
      }
      .item-subscript {
        position: absolute;
        right: 0;
        top: 18px;
        padding: 2px 10px 2px 32px;
        clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%, 24% 50%, 6% 0);
        .val {
          color: #fff;
        }
        &.green {
          background-color: #02a499;
        }
        &.red {
          background-color: #cc3536;
        }
        &.blue {
          background-color: #0094f4;
        }
        &.yellow {
          background-color: #ffaf2e;
        }
      }
    }
  }

  .home-middle {
    .panel-group {
      margin-bottom: 10px;
    }
    //快捷方式
    .quick-link {
      .quick-link-item {
        padding: 15px;
        display: block;
        .quick-link-item-img {
          font-size: 32px;
          color: rgb(105, 192, 255);
          text-align: center;
        }
        .quick-link-item-btn {
          margin-top: 8px;
          text-align: center;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
