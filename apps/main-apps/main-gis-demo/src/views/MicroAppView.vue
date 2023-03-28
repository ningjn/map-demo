<!--微应用视图-->
<template>
  <div class="sub-app-view">
    <!--:sync="true"-->
    <WujieVue
        width="100%"
        height="100%"
        :name="appId"
        :url="appUrl"
        :fetch="fetch"
        :beforeLoad="beforeLoad"
        :beforeMount="beforeMount"
        :afterMount="afterMount"
        :beforeUnmount="beforeUnmount"
        :afterUnmount="afterUnmount"
    ></WujieVue>
  </div>
</template>

<script lang="ts">
export default {
  name: "MicroAppView",
  data() {
    return {
      name: '',
      appId: '',
      appUrl: '',
      isShow: false,
      props: {
        aa: 'aa'
      }
    }
  },
  mounted() {
    this.appId = this.$route.params.id
    this.setAppInfo()
  },
  methods: {
    setAppInfo() {
      console.log('------setAppInfo')
      console.log(`${this.appId}`)
      this.appUrl = 'http://127.0.0.1:20001/'
    },
    /**
     *
     * @param url
     * @param options
     */
    fetch(input: RequestInfo, init?: RequestInit) {
      console.log('-------in fetch')
      return window.fetch(input, { ...init, credentials: "omit" });
    },
    beforeLoad(appWindow: Window) {
      console.log(`${appWindow.__WUJIE.id} beforeLoad 生命周期`)
    },
    beforeMount(appWindow: Window) {
      console.log(`${appWindow.__WUJIE.id} beforeMount 生命周期`)
    },
    afterMount(appWindow: Window) {
      console.log(`${appWindow.__WUJIE.id} afterMount 生命周期`)
    },
    beforeUnmount(appWindow: Window) {
      console.log(`${appWindow.__WUJIE.id} beforeUnmount 生命周期`)
    },
    afterUnmount(appWindow: Window) {
      console.log(`${appWindow.__WUJIE.id} afterUnmount 生命周期`)
    },
    activated(appWindow: Window) {
      console.log(`${appWindow.__WUJIE.id} activated 生命周期`)
    },
    deactivated(appWindow: Window) {
      console.log(`${appWindow.__WUJIE.id} deactivated 生命周期`)
    },
    loadError(url: string, e: Error) {
      console.log(`${url} 加载失败`, e)
    },
  }
}
</script>

<style scoped>
.sub-app-view {
  height: 100%;
  width: 100%;
}
</style>
