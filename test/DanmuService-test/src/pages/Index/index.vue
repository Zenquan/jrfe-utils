<template>
  <div class="header-wrapper">
    <div class="header">
      <danmaku :danmakuData="danmuData" class="danmaku"></danmaku>
    </div>
  </div>
</template>
<script>
import Danmaku from "./danmaku.vue";
import {
  getPopUpList
} from 'services/activity'
const assetsPath = process.env.assetsPath;
export default {
  data () {
    return {
      danmuData: [],
    }
  },
  props: {
  },
  methods: {
    async getPopUpList () {
      const popList = await getPopUpList();
      this.danmuData = popList.map(pop => {
        return {
          title: `
            <div class='danma'>
              用户&nbsp;<p class='user-name ellipse'>${pop.userName}</p>&nbsp;获得赠品&nbsp;
              <p class="speci-txt ellipse">${pop.commodityName}</p>
            </div>
          `,
          faceUrl: pop.faceUrl
        }
      })
    },
    goToRank () {
      if (!this.isShowGo) {
        Toast('快选购心仪的商品吧，排行榜马上公布')
        return
      }
      this.$router.push("/rank");
    }
  },
  computed: {
  },
  components: {
    Danmaku
  },
  created() {
    this.getPopUpList();
  },
  mounted() {
  },
  destroyed() {
  }
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  position: relative;
  height: 15.6rem;
}
.header {
  background: url(#{$assetsPath}img/bg_top@2x.png) 0 0 / 100% 100%
    no-repeat;
  content: '';
  height: 6.2rem;
}
.danmaku {
  position: absolute;
  top: .44rem;
}
/deep/ .danma {
  display: flex;
  width: 4rem;
  margin-left: .14rem;
}
/deep/ .user-name {
  width: 1rem;
}
/deep/ .speci-txt {
  margin-left: .1rem;
  color: red;
  width: 1rem;
}
/deep/ .ellipse {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>