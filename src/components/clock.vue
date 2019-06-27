<template>
  <div id="clock1">
    <div id="time"></div>
  </div>
</template>

<script>
  export default {
    name: "clock1",
    data() {
      return {
        isCircle: false,
        clock: String,
        hourList: [],
        minuteList: [],
        secondsList: [],
        hourText: ["十二点", "一点", "两点", "三点", "四点", "五点", "六点", "七点", "八点", "九点", "十点", "十一点"],
        minuteText: [" ", "一分", "二分", "三分", "四分", "五分", "六分", "七分", "八分", "九分", "十分", "十一分", "十二分", "十三分", "十四分", "十五分", "十六分", "十七分", "十八分", "十九分", "二十分", "二十一分", "二十二分", "二十三分", "二十四分", "二十五分", "二十六分", "二十七分", "二十八分", "二十九分", "三十分", "三十一分", "三十二分", "三十三分", "三十四分", "三十五分", "三十六分", "三十七分", "三十八分", "三十九分", "四十分", "四十一分", "四十二分", "四十三分", "四十四分", "四十五分", "四十六分", "四十七分", "四十八分", "四十九分", "五十分", "五十一分", "五十二分", "五十三分", "五十四分", "五十五分", "五十六分", "五十七分", "五十八分", "五十九分"],
        secondsText: [" ", "一秒", "二秒", "三秒", "四秒", "五秒", "六秒", "七秒", "八秒", "九秒", "十秒", "十一秒", "十二秒", "十三秒", "十四秒", "十五秒", "十六秒", "十七秒", "十八秒", "十九秒", "二十秒", "二十一秒", "二十二秒", "二十三秒", "二十四秒", "二十五秒", "二十六秒", "二十七秒", "二十八秒", "二十九秒", "三十秒", "三十一秒", "三十二秒", "三十三秒", "三十四秒", "三十五秒", "三十六秒", "三十七秒", "三十八秒", "三十九秒", "四十秒", "四十一秒", "四十二秒", "四十三秒", "四十四秒", "四十五秒", "四十六秒", "四十七秒", "四十八秒", "四十九秒", "五十秒", "五十一秒", "五十二秒", "五十三秒", "五十四秒", "五十五秒", "五十六秒", "五十七秒", "五十八秒", "五十九秒"],
        weekday: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
      };
    },
    components: {}, //模版
    computed: {},//计算
    methods: {
      init() {
        let _this = this;
        _this.textSet = [[_this.hourText, _this.hourList], [_this.minuteText, _this.minuteList], [_this.secondsText, _this.secondsList]];
        this.clock = document.getElementById("clock1");
        for (let i = 0; i < this.textSet.length; i++) {
          for (let j = 0; j < this.textSet[i][0].length; j++) {
            let div = document.createElement('div');
            div.classList.add('label');
            div.innerText = this.textSet[i][0][j];
            this.clock.appendChild(div);
            this.textSet[i][1].push(div);
          }
        }
        this.clock.style.display = "block";
        for (let i = 0; i < this.textSet.length; i++) {
          for (let j = 0; j < this.textSet[i][1].length; j++) {
            let tempX = this.textSet[i][1][j].offsetLeft + "px";
            let tempY = this.textSet[i][1][j].offsetTop + "px";
            this.textSet[i][1][j].style.position = "absolute";
            this.textSet[i][1][j].style.left = tempX;
            this.textSet[i][1][j].style.top = tempY;
          }
        }
        this.time();
        this.clock.style.transform = "rotate(90deg)";
        this.clock.style.height = "100%";
        setInterval(() => {
          _this.time();
        }, 1000);
      },
      time() {
        let now = new Date();
        let hour = now.getHours() - 12;
        let minute = now.getMinutes();
        let seconds = now.getSeconds();
        let nowValue = [hour, minute, seconds];
        let label = document.getElementsByClassName('label');
        for (let i = 0; i < label.length; i++) {
          label[i].style.color = '#4d4d4d';
        }
        for (let i = 0; i < nowValue.length; i++) {
          let num = nowValue[i];
          this.textSet[i][1][num].style.color = '#fff';
        }
        let widthMid = document.body.clientWidth / 2;
        let heightMid = document.body.clientHeight / 2;
        for (let i = 0; i < this.textSet.length; i++) {
          for (let j = 0; j < this.textSet[i][0].length; j++) {
            let r = (i + 2.5) * 50 + 50 * i;
            let deg = 360 / this.textSet[i][1].length * (j - nowValue[i]);
            let x = r * Math.sin(deg * Math.PI / 180) + widthMid;
            let y = heightMid - r * Math.cos(deg * Math.PI / 180);
            let temp = this.textSet[i][1][j];
            temp.style.transform = 'rotate(' + (-90 + deg) + 'deg)';
            temp.style.left = x + 'px';
            temp.style.top = y + 'px';
            let time = document.getElementById("time");
            time.style.position = "absolute";
            time.style.left = "46%";
            time.style.top = "45%";
            time.innerHTML = "<span style='font-size: 50px;'>" + this.dateFtt('hh:mm', now) + "</span><br/>" + "<span>" + this.dateFtt("MM.dd", now) + "&nbsp;" + this.weekday[this.dateFtt("D", now)] + "</span>";
          }
        }
      },
      dateFtt(fmt, date) {
        //author: meizz
        let o = {
          "M+": date.getMonth() + 1,                 //月份
          "d+": date.getDate(),                    //日
          "h+": date.getHours(),                   //小时
          "m+": date.getMinutes(),                 //分
          "s+": date.getSeconds(),                 //秒
          "q+": Math.floor((date.getMonth() + 3) / 3), //季度
          "S": date.getMilliseconds(),          //毫秒
          "D": date.getDay()
        };
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
      }
    },//方法
    mounted() {
      this.init();

    }//加载完毕执行
  };
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: hidden
  }

  #clock {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000;
    display: none;
  }

  .label {
    display: inline-block;
    color: #4d4d4d;
    text-align: center;
    padding: 0 5px;
    font-size: 10px;
    transition: left 1s, top 1s;
    transform-origin: 0 0
  }

  #time {
    color: aliceblue;
    transform: rotate(270deg);
    text-align: left;
    position: absolute;
  }
</style>
