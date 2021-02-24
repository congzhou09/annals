<!-- 年报活动页 -->
<template>
  <div id="app">
    <div style="position:absolute;z-index:2;background-color:cornsilk;border:1px solid;border-radius:8px;top:3px;left:3px;padding:4px;font-size:10px;opacity:0.7;">唤出vConsole: "ABCDB"</div>
    <swiper :options="swiperOption" ref="mySwiper" style="overflow-y: hidden;position:fixed;width:100vw;">
      <!-- 第1页 -->
      <swiper-slide style="color: #fff;">
        <img src="static/img/annals_bg.jpg" />
        <div @click="clickToSlideNext">
          <button :class="['btncls', animateVars[0]['page1-1']]">
            即 刻 开 始
          </button>
        </div>
        <div class="bt-animation">
          <img class="animation" src="static/img/down-arrow.png" alt="" />
        </div>
        <div v-if="browserTooOld || screenIncompat">
          <div class="browser-too-old animate__animated animate__swing">
            {{ this.browserTooOld ? '对不起，您的浏览器版本过低，此功能不支持！' : '对不起，当前不支持浏览，请使用手机竖屏访问！' }}
          </div>
          <div
            style="position:absolute;top:0;left:0;z-index:100;width:100vw;height:100vh;background-color:rgba(0,0,0,0.5);"
            @click="preventSlide"
            @touchmove="preventSlide"
          ></div>
        </div>
      </swiper-slide>
      <!-- 第2页 -->
      <swiper-slide>
        <div class="ba-color" style="background: #C83223 url('static/img/card_paper.png') no-repeat;background-size: 100% 100%;">
          <div style=" height: 100%;position: absolute; color: #fff; width:100%;">
            <p :class="['registerTime', animateVars[1]['page2-1']]">{{ dataList.paramPageOne.regYear }}年</p>
            <p
              style="position: absolute;top:23.5vh; left: 1.4rem; z-index: 999; color: #fff; font-weight: bold;"
              :class="animateVars[1]['page2-1']"
            >
              {{ dataList.paramPageOne.regMonth }} 月
            </p>
            <p
              style="position: absolute;top:23.5vh; right: 1.3rem; z-index: 999; color: #fff; font-weight: bold;"
              :class="animateVars[1]['page2-1']"
            >
              {{ dataList.paramPageOne.regDate }} 日
            </p>
            <p style="position: absolute;top:35vh;width:100%;text-align:center;font-size:0.18rem;" :class="animateVars[1]['page2-1']">
              {{ who }}注册了{{ title }}
            </p>
            <p
              :class="animateVars[1]['page2-1']"
              style="font-size: 0.2rem; font-weight:bold; position: absolute;top:40vh;width:100%;text-align:center;"
            >
              与麻友共度 {{ dataList.paramPageOne.days }} 天
            </p>
            <div :class="animateVars[1]['page2-2']" style="z-index:999;top:32vh;position:absolute;width:100vw;--animate-delay: 0.5s;">
              <ve-pie
                :judge-width="true"
                :tooltip-visible="true"
                :colors="['#2dd0c8', '#C83223', '#e4a535']"
                :legend-visible="false"
                :data="chartDatas"
                :extend="pieSettingExtend"
              ></ve-pie>
            </div>
            <div class="illustration2-1">
              <img src="static/img/illustration/page1/1.png" alt="" />
            </div>
            <div class="illustration2-2">
              <img src="static/img/illustration/page1/2.png" alt="" />
            </div>
            <div class="illustration2-3">
              <img src="static/img/illustration/page1/3.png" alt="" />
            </div>
          </div>
          <div class="logo">
            <img src="static/img/logo.png" alt="" />
          </div>
          <div class="bt-animation">
            <img class="animation" src="static/img/down-arrow.png" alt="" />
          </div>
        </div>
      </swiper-slide>
      <!-- 第3页 -->
      <swiper-slide>
        <div class="ba-color" style="background: #C83223 url('static/img/card_paper.png') no-repeat;background-size: 100% 100%;">
          <div style="height: 100%; position: absolute; color: #fff; left: 50%; transform: translate(-50%); width:90%; font-size: 20px;">
            <p :class="this.animateVars[2]['page3-1']" style="margin-top:16vh; font-size: 1em; font-weight: bold;">
              在这些难忘的日子里
            </p>
            <p :class="this.animateVars[2]['page3-1']" style=" font-size: 1.1em; font-weight: bold; margin-top: 2vh">
              {{ who }}一共参与 {{ dataList.paramPageTwo.totalRound }} 局游戏
            </p>
            <div style="position:absolute;top:35vh;width:100%;display:-webkit-box;display:flex;justify-content:center;">
              <p :class="this.animateVars[2]['page3-1']" style="font-size:0.19rem; font-weight: bold; z-index: 999; color: #fff;">
                胡牌 {{ dataList.paramPageTwo.victoryRound }} 次
              </p>
            </div>
            <div :class="['progressContainer', this.animateVars[2]['page3-1']]">
              <div class="progress" :style="{ width: progress + '%' }">
                <b>{{ progress }}%</b>
              </div>
            </div>
            <p :class="this.animateVars[2]['page3-1']" style="margin-top: 2vh; font-size: 1em; ">
              击败了 {{ dataList.paramPageTwo.beatNum }}% 的玩家
            </p>
            <p :class="this.animateVars[2]['page3-1']" style="margin-top: 1vh; font-size: 1.2em; font-weight: bold;">
              2019年也要再接再厉哦!
            </p>
            <div class="illustration3-1">
              <img src="static/img/illustration/page2/1.png" alt="" />
            </div>
            <div class="illustration3-2">
              <img src="static/img/illustration/page2/2.png" alt="" />
            </div>
            <div class="illustration3-3">
              <img src="static/img/illustration/page2/3.png" alt="" />
            </div>
          </div>
          <div class="logo">
            <img src="static/img/logo.png" alt="" />
          </div>
          <div class="bt-animation">
            <img class="animation" src="static/img/down-arrow.png" alt="" />
          </div>
        </div>
      </swiper-slide>
      <!-- 第4页 -->
      <swiper-slide>
        <div class="ba-color" style="background: #C83223 url('static/img/card_paper.png') no-repeat;background-size: 100% 100%;">
          <div
            style="position: absolute; color: #fff; width: 80%; left: 50%; transform: translate(-50%); margin-top: 13.5vh; overflow: hidden; "
          >
            <p :class="this.animateVars[3]['page4-1']" style=" font-size: 0.18rem;">
              {{ who }}一共与 {{ dataList.paramPageThree.amount }} 位玩家对局过
            </p>
            <p :class="this.animateVars[3]['page4-1']" style=" font-size: 0.18rem; margin-top: 0.02rem;">
              和{{ who }}对局次数前三名的玩家分别是:
            </p>
            <div :class="['player', this.animateVars[3]['page4-2']]" style="margin-top: 0.2rem;">
              {{ dataList.paramPageThree.fisrtNickname }}
            </div>
            <div :class="['player', this.animateVars[3]['page4-2']]">{{ dataList.paramPageThree.secondNickname }}</div>
            <div :class="['player', this.animateVars[3]['page4-2']]">{{ dataList.paramPageThree.thirdNickname }}</div>
            <div style="width:100%;">
              <ve-histogram
                :judge-width="true"
                :colors="['#C83223']"
                :class="this.animateVars[3]['page4-2']"
                :legend-visible="false"
                :data="roundChartData"
                :extend="histogramSettingExtend"
                :settings="chartSettings"
                height="230px"
                style=""
              ></ve-histogram>
            </div>
            <p :class="this.animateVars[3]['page4-2']" style="font-size:20px;font-weight:bold;margin-top:-25px;">
              确认过眼神, 你是对的人
            </p>
          </div>
          <div class="illustration4-1">
            <img src="static/img/illustration/page3/1.png" alt="" />
          </div>
          <div class="logo">
            <img src="static/img/logo.png" alt="" />
          </div>
          <div class="bt-animation">
            <img class="animation" src="static/img/down-arrow.png" alt="" />
          </div>
        </div>
      </swiper-slide>
      <!-- 第5页 -->
      <swiper-slide>
        <div class="ba-color" style="background: #C83223 url('static/img/card_paper.png') no-repeat;background-size: 100% 100%;">
          <div style=" position: absolute; color: #fff;  width: 80%; left: 50%; transform: translate(-50%);font-size: 0.18rem;">
            <div class="text-group" style="margin-top:20vh;">
              <p :class="this.animateVars[4]['page5-1']" style="font-size: 1em;">2018年{{ who }}最早开启捉鸡的时间是:</p>
              <p :class="this.animateVars[4]['page5-1']" style="margin-top:2vh;font-size: 1em;">
                {{ earlistLoginDate ? `${earlistLoginDate[1]}月${earlistLoginDate[2]}日` : '某月某日'
                }}{{ earlistLoginDate ? `${earlistLoginDate[3]}点${earlistLoginDate[4]}分` : '' }}
              </p>
            </div>
            <div class="illustration5-2">
              <img src="static/img/illustration/page4/2.png" alt="" />
            </div>
            <div class="text-group">
              <p :class="this.animateVars[4]['page5-1']" style="">{{ who }}最多的一天打牌 {{ dataList.paramPageFour.time }} 小时</p>
              <p :class="this.animateVars[4]['page5-1']" style="margin-top:2vh;">完成了 {{ dataList.paramPageFour.mostRound }} 局游戏</p>
            </div>
            <div class="illustration5-2">
              <img src="static/img/illustration/page4/2.png" alt="" />
            </div>
            <div class="text-group">
              <p :class="this.animateVars[4]['page5-1']" style="">
                最后一次登录是
                {{ lastLoginDate ? `${lastLoginDate[0]}年${lastLoginDate[1]}月${lastLoginDate[2]}日` : '某年某月某日' }}
              </p>
              <p :class="this.animateVars[4]['page5-1']" style="margin-top:2vh;">{{ title }}等待您再来一局哦</p>
            </div>
            <div class="illustration5-2">
              <img src="static/img/illustration/page4/2.png" alt="" />
            </div>
            <div class="illustration5-1">
              <img src="static/img/illustration/page4/1.png" alt="" />
            </div>
            <div class="illustration5-5">
              <img src="static/img/illustration/page4/4.png" alt="" />
            </div>
          </div>
          <div class="bt-animation">
            <img class="animation" src="static/img/down-arrow.png" alt="" />
          </div>
          <div class="illustration5-6">
            <img src="static/img/illustration/page4/3.png" alt="" />
          </div>
          <div class="logo">
            <img src="static/img/logo.png" alt="" />
          </div>
        </div>
      </swiper-slide>
      <!-- 第6页 -->
      <swiper-slide>
        <div class="ba-color" style="background: #C83223 url('static/img/card_paper.png') no-repeat;background-size: 100% 100%;">
          <div style="position:absolute;color:#fff;width:100%;font-size:0.18rem;text-align:center;">
            <p :class="this.animateVars[5]['page6-1']" style="font-size: 1em; margin-top: 14vh">2018已与我们告别</p>
            <p :class="this.animateVars[5]['page6-1']" style="font-size: 1em;">崭新的一年即将来临之际</p>
          </div>
          <div class="illustration6-1">
            <img src="static/img/illustration/page5/1.png" alt="" />
          </div>
          <div class="illustration6-2">
            <img src="static/img/illustration/page5/2.png" alt="" style="width:80%;" />
            <p :class="this.animateVars[5]['page6-1']" style="font-size: 1.2em; font-weight: bold;margin-top:1vh;">{{ title }}温馨提示</p>
            <p :class="this.animateVars[5]['page6-1']" style="font-size: 1em; font-weight:bold;margin-top:2vh;">
              以下麻将法则也适用于工作生活
            </p>
          </div>
          <div class="bt-animation">
            <img class="animation" src="static/img/down-arrow.png" alt="" />
          </div>
        </div>
        >
      </swiper-slide>
      <!-- 第7页 -->
      <swiper-slide>
        <div class="ba-color" style="background: #C83223 url('static/img/card_paper.png') no-repeat;background-size: 100% 100%;">
          <ul class="hint-list" style=" position: absolute; color: #fff; margin: 20vh 0; display: block; font-size: 0.18rem;">
            <li :class="animateVars[6]['page7-1']">● 随叫随到, 从不拖拉</li>
            <li :class="animateVars[6]['page7-1']">● 不在乎目前环境, 专心致志</li>
            <li :class="animateVars[6]['page7-1']">● 不抱怨, 经常反省自己, 哎又错了!</li>
            <li :class="animateVars[6]['page7-1']">● 永不言败, 推倒再来</li>
            <li :class="animateVars[6]['page7-1']">● 牌好牌坏都努力往好的方向调整</li>
            <li :class="animateVars[6]['page7-1']">● 始终抱着赢的心态</li>
            <li :class="animateVars[6]['page7-1']" style=" width: 100%; padding: 0; ">
              <p :class="animateVars[6]['page7-1']" style="font-size: 1em; font-weight: bold; margin-top: 0.4rem; ">
                {{ title }}祝您2019事事如意
              </p>
              <p :class="animateVars[6]['page7-1']" style="margin-top: 0.1rem; font-size: 1.2em; font-weight: bold;">
                把把捉鸡
              </p>
            </li>
          </ul>
          <div class="illustration7-1">
            <img src="static/img/illustration/page6/1.png" alt="" />
          </div>
          <div class="illustration7-2">
            <img src="static/img/illustration/page6/2.png" alt="" />
          </div>
          <div class="illustration7-3">
            <img src="static/img/illustration/page6/3.png" alt="" />
          </div>
          <div>
            <input type="button" :value="`立即揭晓${who}的2019关键字`" class="button_erweima" @click="clickToSlideNext" />
          </div>
          <div class="bt-animation">
            <img class="animation" src="static/img/down-arrow.png" alt="" />
          </div>
          <div class="logo">
            <img src="static/img/logo.png" alt="" />
          </div>
        </div>
      </swiper-slide>
      <!-- 第8页 -->
      <swiper-slide>
        <div class="ba-color" style="background: #C83223 url('static/img/card_paper2.png') no-repeat;background-size: 100% 98%;">
          <div
            :class="animateVars[7]['page8-1']"
            style="color:#BD3522;font-size:0.2rem;font-weight:bold;position:relative;margin:19vh auto auto auto;"
          >
            {{ who }}的2019{{ title }}关键字是
          </div>
          <div :class="['illustration8-1', animateVars[7]['page8-2']]">
            <img :src="`static/img/illustration/page7/${dataList.paramPageFive.keyWord + 1}.png`" />
          </div>
          <div
            :class="animateVars[7]['page8-2']"
            style="font-family:Microsoft YaHei,STXihei,sans-serif;color:#BD3522;font-size: 0.18rem;width:70%;margin:-1vh auto;"
          >
            <p style="text-align: left;width:fit-content;margin:0 auto;">
              {{ dataList.paramPageFive.greeting[dataList.paramPageFive.keyWord] }}
            </p>
          </div>
          <div
            v-if="!ISINGAME"
            style="display:flex;display:-webkit-flex;width:73%;justify-content:flex-end;position:absolute;right:13vw;bottom:20vh;"
          >
            <div style="align-self:flex-end;margin-right:3vw;font-family:Microsoft YaHei,STXihei,sans-serif;color:#BA864A;">
              <div style="font-size: 0.13rem;">
                长按扫描二维码下载游戏
              </div>
            </div>
            <div class="illustration8-2" id="qrcode">
              <img src="static/img/qrcode.png" alt="二维码图片" />
            </div>
          </div>
          <div class="logo">
            <img src="static/img/logo.png" alt="" />
          </div>
          <input
            type="button"
            :value="ISWEIXIN && !isMyself ? '查看我的2018关键字' : '点击分享给好友'"
            class="button_erweima"
            @click="onShare"
          />
        </div>
        <div v-if="popupVisible">
          <div class="popup">
            请点击右上角"..."
          </div>
          <div
            style="position:absolute;top:0;left:0;z-index:100;width:100vw;height:100vh;background-color:rgba(0,0,0,0.5);"
            @click="popupVisible = false"
            @touchmove="preventSlide"
          ></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { checkViewportUnit } from './utils/check_css_compat'; // css兼容检查
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'; // 轮播插件
import 'swiper/css/swiper.css';
import pie from 'v-charts/lib/pie.common'; // 饼图表插件
import histogram from 'v-charts/lib/histogram.common'; // 柱状图表插件

export default {
  components: {
    Swiper,
    SwiperSlide,
    've-pie': pie,
    've-histogram': histogram
  },
  data() {
    return {
      animateVars: [
        { 'page1-1': [] },
        {
          'page2-1': [],
          'page2-2': []
        },
        {
          'page3-1': []
        },
        {
          'page4-1': [],
          'page4-2': []
        },
        {
          'page5-1': []
        },
        {
          'page6-1': []
        },
        {
          'page7-1': []
        },
        {
          'page8-1': [],
          'page8-2': []
        }
      ],
      animateVarOrigs: {
        'page1-1': ['animate__bounceIn'],
        'page2-1': ['animate__animated', 'animate__bounceInDown'],
        'page2-2': ['animate__animated', 'animate__jackInTheBox'],
        'page3-1': ['animate__animated', 'animate__bounceInLeft'],
        'page4-1': ['animate__animated', 'animate__bounceInRight'],
        'page4-2': ['animate__animated', 'animate__tada'],
        'page5-1': ['animate__animated', 'animate__bounceInUp'],
        'page6-1': ['animate__animated', 'animate__bounceInDown'],
        'page7-1': ['animate__animated', 'animate__bounce'],
        'page8-1': ['animate__animated', 'animate__flash'],
        'page8-2': ['animate__animated', 'animate__zoomInDown', 'animate__delay-1s']
      },
      ISWEIXIN: false,
      ISINGAME: false,
      browserTooOld: false,
      screenIncompat: false,
      title: '麻友圈',
      chartSettings: {
        // metrics: ['访问用户', '下单用户'],
        // dimension: ['日期']
        radius: 2
      },
      histogramSettingExtend: {
        series: {}
      },
      pieSettingExtend: {
        series: {
          radius: '30%',
          center: ['53%', '50%']
        },
        tooltip: {
          position: ['25%', '65%']
        },
        label: {
          fontSize: 15
        }
      },
      progress: '',
      roundChartData: {
        columns: ['玩家', '对局次数'],
        rows: [
          { 玩家: '阿喵喵', 对局次数: 219 },
          { 玩家: '阿汪汪', 对局次数: 136 },
          { 玩家: '阿咩咩', 对局次数: 98 }
        ]
      },
      chartDatas: {
        radius: 5,
        columns: ['玩家', 'key'],
        rows: [
          {
            玩家: '金币场(天)',
            key: 51
          },
          {
            玩家: '俱乐部(天)',
            key: 102
          },
          {
            玩家: '比赛场(天)',
            key: 98
          }
        ]
      },
      swiperOption: {
        height: window.innerHeight, // 可视区高度
        effect: 'fade',
        direction: 'vertical',
        on: {
          init: () => {
            this.actAnimation(0, true);
          },
          slideChangeTransitionStart: () => {
            const swiper = this.$refs.mySwiper.$swiper;
            this.actAnimation(swiper.activeIndex, true);
            this.actAnimation(swiper.previousIndex, false);
          }
        }
      },
      dataList: {
        paramPageOne: {
          regYear: '',
          regMonth: '',
          regDate: '',
          days: 108
        },
        paramPageTwo: {
          totalRound: 1028,
          victoryRound: 887
        },
        paramPageThree: {
          amount: 152,
          fisrtRound: 12,
          fisrtNickname: '阿喵喵',
          secondNickname: '阿汪汪',
          thirdNickname: '阿咩咩'
        },
        paramPageFour: {
          time: 8.0,
          mostRound: 16,
          lastLoginDate: 1545321600000,
          timeAfter5: 1538604000000
        },
        paramPageFive: {
          keyWord: parseInt(Math.random() * 15),
          greeting: [
            '做人嘛，开开心心最重要啦！',
            '乐天派大概就是要这样给大家带来正能量吧！',
            '拼命三郎，大概说的就是我吧！',
            '不论是什么类型，都能自摸！',
            '跟我打牌，只求这一个字！',
            '顺风顺水，说的就是我啦！',
            '赢遍四方，没少偷着乐吧？',
            '牌风稳重，运筹帷幄那必须是我啊！',
            '运气好到爆棚，锦鲤大概就是我吧！',
            '他强任他强，我只负责貌美如花~',
            '要什么来什么，就一个准字了得！',
            '最重要的就是整整齐齐啦，我全都有！',
            '手气不是关键，技术升级了才是硬本领！',
            '无欲无求，其实我很佛系~'
          ]
        }
      },
      lastLoginDate: [],
      earlistLoginDate: [],
      popupVisible: false,
      isMyself: true,
      areaId: 0,
      playerId: 0
    };
  },
  computed: {
    who: function() {
      return this.isMyself ? '您' : 'TA';
    }
  },
  created() {
    this.fnResize();
    this.initData(this.areaId, this.playerId);
  },
  mounted() {
    checkViewportUnit(() => {
      this.browserTooOld = true;
    });
    if (screen.width > 500 || innerWidth > innerHeight) {
      this.screenIncompat = true;
    }
  },
  methods: {
    preventSlide(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    clickToSlideNext() {
      if (this.$refs.mySwiper) {
        this.$refs.mySwiper.$swiper.slideNext();
      }
    },
    onShare() {
      this.popupVisible = true;
    },
    initData(areaId, playerId, completeCallback) {
      // 获取数据
      this.isMyself = true;
      // 注册时间
      const regDate = new Date('2017-06-13');
      this.dataList.paramPageOne.regYear = regDate.getFullYear();
      this.dataList.paramPageOne.regMonth = regDate.getMonth() + 1;
      this.dataList.paramPageOne.regDate = regDate.getDate();
      // 击败百分比
      this.dataList.paramPageTwo.beatNum = 98.17;
      this.progress = this.dataList.paramPageTwo.beatNum;

      // 登录时间
      this.lastLoginDate = this.timestampToStringArr(this.dataList.paramPageFour.lastLoginDate);
      this.earlistLoginDate = this.timestampToStringArr(this.dataList.paramPageFour.timeAfter5);

      if (completeCallback) {
        completeCallback();
      }
    },
    add0(m) {
      return m < 10 ? '0' + m : m;
    },
    timestampToString(oTime) {
      const time = new Date(oTime);
      const y = time.getFullYear();
      const m = time.getMonth() + 1;
      const d = time.getDate();
      return y + '-' + this.add0(m) + '-' + this.add0(d);
    },
    timestampToStringArr(oneTime) {
      const theTime = new Date(oneTime);
      console.log(theTime);
      const retArr = [];
      retArr.push(theTime.getFullYear());
      const monthStr = theTime.getMonth() + 1 <= 9 ? `0${theTime.getMonth() + 1}` : `${theTime.getMonth() + 1}`;
      retArr.push(monthStr);
      const DateStr = theTime.getDate() <= 9 ? `0${theTime.getDate()}` : `${theTime.getDate()}`;
      retArr.push(DateStr);
      const HourStr = theTime.getHours() <= 9 ? `0${theTime.getHours()}` : `${theTime.getHours()}`;
      retArr.push(HourStr);
      const MinuteStr = theTime.getMinutes() <= 9 ? `0${theTime.getMinutes()}` : `${theTime.getMinutes()}`;
      retArr.push(MinuteStr);
      const SecondStr = theTime.getSeconds() <= 9 ? `0${theTime.getSeconds()}` : `${theTime.getSeconds()}`;
      retArr.push(SecondStr);

      return retArr;
    },
    fnResize() {
      // 100px=1rem,例如，宽度为100px时，可以直接写成1rem 自行换算
      let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
      if (deviceWidth >= 750) {
        deviceWidth = 750;
      }
      if (deviceWidth <= 320) {
        deviceWidth = 320;
      }
      document.documentElement.style.fontSize = (deviceWidth / 7.5) * 2 + 'px';
    },
    actAnimation(index, switchOn) {
      const animateMap = this.animateVars[index];
      for (const oneKey in animateMap) {
        if (animateMap.hasOwnProperty(oneKey)) {
          this.$set(animateMap, oneKey, switchOn ? this.animateVarOrigs[oneKey] : []);
        }
      }
    }
  }
};
</script>
<style lang="css" scoped>
.browser-too-old {
  position: absolute;
  z-index: 101;
  width: 260px;
  left: calc(50% - 130px);
  top: 30%;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 3px;
}
img {
  width: 100%;
  height: 100%;
}
.registerTime {
  position: absolute;
  top: 14vh;
  font-weight: bold;
  font-size: 1.3em;
  width: 100%;
  text-align: center;
}

.ba-color {
  height: 100%;
  overflow: hidden;
}
p {
  color: #bd3522;
}
.player {
  width: 90%;
  height: 5vh;
  line-height: 5vh;
  font-size: 2.2vh;
  background-color: #f1d3b1;
  margin-top: 2%;
  margin-left: 5%;
  border-radius: 0.6em;
  color: #bd3522;
}
.kong {
  width: 400px;
  height: 10px;
  margin: 7% auto;
}
li {
  color: #bd3522;
  margin-top: 6%;
  float: left;
  font-size: 20px;
  padding-left: 10%;
}
input {
  border: none;
  outline: none;
  -webkit-appearance: none;
}
.btncls {
  font-size: 25px;
  width: 3rem;
  height: 0.4rem;
  display: block;
  position: absolute;
  margin: 0px auto;
  right: 0px;
  left: 0px;
  color: #fff;
  border: 0;
  border-radius: 4px;
  background-color: #cf392e;
  bottom: 0.35rem;
}

.bt-animation {
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 1;
  bottom: 0.05rem;
  left: 50%;
  transform: translateX(-50%);
  margin-left: -10px;
  animation: updown 1.2s 1s ease-out infinite;
}
.bt-animation img {
  position: absolute;
}
@keyframes updown {
  from {
    transform: translateX(-50%) translateY(-30%);
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translateX(-50%);
    opacity: 0;
  }
}
.button_erweima {
  width: 80%;
  height: 50px;
  background-color: #fef5b7;
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translate(-50%);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  font-size: 20px;
  color: #bd3522;
  font-weight: bold;
}
.illustration2-1 {
  width: 3.8rem;
  height: 1rem;
  /*background:url("static/img/illustration/page1/1.png") no-repeat;*/
  position: absolute;
  top: 0rem;
  left: -0.2rem;
}
.illustration2-2 {
  width: 2.5rem;
  height: 17vh;
  position: absolute;
  top: 19vh;
  left: 50%;
  transform: translate(-50%);
}
.illustration2-3 {
  width: 100%;
  position: absolute;
  bottom: -0.1rem;
}
.illustration3-1 {
  width: 50%;
  position: absolute;
  top: 0.4rem;
  left: 1.9rem;
}

.illustration3-2 {
  width: 28vh;
  position: absolute;
  top: 28vh;
  left: 50%;
  transform: translate(-50%);
}

@keyframes happy-money {
  0% {
    transform: rotateZ(-2deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(2deg);
  }
}
.illustration3-3 {
  width: 100%;
  position: absolute;
  bottom: -0.2rem;
  transform-origin: 50% 100%;
  animation: happy-money linear infinite alternate 0.6s;
}

.ba-color div.progressContainer {
  width: 2.5rem;
  border-radius: 10px;
  background-color: #ddd;
  margin: 23vh auto 0;
  position: relative;
}
.ba-color div.progress {
  background-color: #c83223;
  border-radius: 10px;
  height: 20px;
  line-height: 20px;
}
.ba-color b {
  color: #fff;
  font-weight: 100;
  font-size: 12px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}

.illustration4-1 {
  width: 0.55rem;
  position: absolute;
  top: 0rem;
  right: 0.2rem;
  transform-origin: top;
  animation: happy-money linear infinite alternate 0.9s;
}
.illustration5-1 {
  width: 0.8rem;
  position: absolute;
  top: 0rem;
  right: -0.2rem;
  transform-origin: top;
  animation: happy-money linear infinite alternate 0.9s;
}
.text-group {
  margin: 1vh 0;
  font-size: 1em;
}

.illustration5-2 {
  width: 2.2rem;
  margin: auto;
}
.illustration5-3 {
  width: 2.2rem;
  position: absolute;
  top: 2.75rem;
  left: 50%;
  transform: translate(-50%);
}
.illustration5-4 {
  width: 2.2rem;
  position: absolute;
  top: 4.1rem;
  left: 50%;
  transform: translate(-50%);
}
.illustration5-5 {
  width: 100vw;
  position: absolute;
  top: 26vh;
  left: 50%;
  transform: translate(-50%);
}
.illustration5-6 {
  width: 3.8rem;
  position: absolute;
  bottom: -0.1rem;
  left: 50%;
  transform: translate(-50%);
}
.illustration6-1 {
  width: 100%;
  position: absolute;
  top: 0;
  animation: happy-fly linear infinite alternate 1.5s;
}
@keyframes happy-fly {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-2vh);
  }
}
.illustration6-2 {
  width: 100%;
  position: absolute;
  top: 1vh;
}
.hint-list li {
  margin-top: 2vh;
  font-size: 0.17rem;
  list-style: none;
}
.illustration7-1 {
  width: 1.8rem;
  position: absolute;
  top: 10vh;
  right: 0.3rem;
  animation: happy-money linear infinite alternate 0.9s;
}
.illustration7-2 {
  width: 1.5rem;
  position: absolute;
  bottom: 6vh;
  right: -0.15rem;
  transform-origin: right;
  animation: happy-money linear infinite alternate 0.9s;
}
.illustration7-3 {
  width: 1.5rem;
  position: absolute;
  bottom: 6vh;
  left: -0.15rem;
  transform-origin: left;
  animation: happy-moneyleft linear infinite alternate 0.9s;
}
@keyframes happy-moneyleft {
  0% {
    transform: rotateZ(2deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-2deg);
  }
}
.illustration8-1 {
  width: 40vh;
  position: relative;
  margin: -0.4vh auto;
}

.illustration8-2 {
  width: 8vh;
  height: 8vh;
}
.logo {
  width: 1rem;
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
}
</style>
<style lang="css">
.popup {
  position: absolute;
  top: 46px;
  right: 13px;
  transform: none;
  background-color: #fff;
  padding: 6px;
  z-index: 101;
}
.popup::before {
  display: inline-block;
  width: 0;
  height: 0;
  border: solid transparent;
  border-width: 10px;
  border-bottom-color: #fff;
  content: '';
  position: absolute;
  top: -20px;
  right: 0;
}
</style>
