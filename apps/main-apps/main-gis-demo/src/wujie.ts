import WujieVue from "wujie-vue3";
import type App from "@/App.vue";

export function useWujie(app: App) {
    const { setupApp } = WujieVue;

    // setupApp({
    //     name: "vue3",
    //     url: "//localhost:8090/",
    //     alive: true
    // });

    app.use(WujieVue);
}



