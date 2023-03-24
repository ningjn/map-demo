import { type RouteComponent, type RouteLocationNormalized } from "vue-router";

/**
 * 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
 */
declare global {
    interface ServerConfigs {
        Version?: string;
        Title?: string;
        FixedHeader?: boolean;
        HiddenSideBar?: boolean;
        MultiTagsCache?: boolean;
        KeepAlive?: boolean;
        Locale?: string;
        Layout?: string;
        Theme?: string;
        DarkMode?: boolean;
        Grey?: boolean;
        Weak?: boolean;
        HideTabs?: boolean;
        SidebarStatus?: boolean;
        EpThemeColor?: string;
        ShowLogo?: boolean;
        ShowModel?: string;
        MenuArrowIconNoTransition?: boolean;
        CachingAsyncRoutes?: boolean;
        TooltipEffect?: Effect;
    }

    /**
     * @description 完整子路由配置表
     */
    interface RouteChildrenConfigsTable {
        /** 子路由地址 `必填` */
        path: string;
        /** 路由名字（对应不要重复，和当前组件的`name`保持一致）`必填` */
        name?: string;
        /** 路由重定向 `可选` */
        redirect?: string;
        /** 按需加载组件 `可选` */
        component?: RouteComponent;
        meta?: {
            /** 菜单名称（兼容国际化、非国际化，如何用国际化的写法就必须在根目录的`locales`文件夹下对应添加） `必填` */
            title: string;
            /** 菜单图标 `可选` */
            icon?: string | FunctionalComponent | IconifyIcon;
            /** 菜单名称右侧的额外图标，支持`fontawesome`、`iconfont`、`element-plus-icon` `可选` */
            extraIcon?: {
                svg?: boolean;
                name?: string;
            };
            /** 是否在菜单中显示（默认`true`）`可选` */
            showLink?: boolean;
            /** 是否显示父级菜单 `可选` */
            showParent?: boolean;
            /** 页面级别权限设置 `可选` */
            roles?: Array<string>;
            /** 按钮级别权限设置 `可选` */
            auths?: Array<string>;
            /** 路由组件缓存（开启 `true`、关闭 `false`）`可选` */
            keepAlive?: boolean;
            /** 内嵌的`iframe`链接 `可选` */
            frameSrc?: string;
            /** `iframe`页是否开启首次加载动画（默认`true`）`可选` */
            frameLoading?: boolean;
            /** 页面加载动画（有两种形式，一种直接采用vue内置的`transitions`动画，另一种是使用`animate.css`写进、离场动画）`可选` */
            transition?: {
                /**
                 * @description 当前路由动画效果
                 * @see {@link https://next.router.vuejs.org/guide/advanced/transitions.html#transitions}
                 * @see animate.css {@link https://animate.style}
                 */
                name?: string;
                /** 进场动画 */
                enterTransition?: string;
                /** 离场动画 */
                leaveTransition?: string;
            };
            // 是否不添加信息到标签页，（默认`false`）
            hiddenTag?: boolean;
            /** 动态路由可打开的最大数量 `可选` */
            dynamicLevel?: number;
        };
        /** 子路由配置项 */
        children?: Array<RouteChildrenConfigsTable>;
    }

    /**
     * @description 整体路由配置表（包括完整子路由）
     */
    interface RouteConfigsTable {
        /** 路由地址 `必填` */
        path: string;
        /** 路由名字（保持唯一）`可选` */
        name?: string;
        /** `Layout`组件 `可选` */
        component?: RouteComponent;
        /** 路由重定向 `可选` */
        redirect?: string;
        meta?: {
            /** 菜单名称（兼容国际化、非国际化，如何用国际化的写法就必须在根目录的`locales`文件夹下对应添加）`必填` */
            title: string;
            /** 菜单图标 `可选` */
            icon?: string | FunctionalComponent | IconifyIcon;
            /** 是否在菜单中显示（默认`true`）`可选` */
            showLink?: boolean;
            /** 菜单升序排序，值越高排的越后（只针对顶级路由）`可选` */
            rank?: number;
        };
        /** 子路由配置项 */
        children?: Array<RouteChildrenConfigsTable>;
    }
}

export default global;

/**
https://yiming_chang.gitee.io/pure-admin-doc/pages/config/#serverconfig-json
{
  "Version": "3.9.6", // 平台版本号
  "Title": "PureAdmin", // 平台标题
  "FixedHeader": true, // 是否固定页头和标签页（true 内容区超出出现纵向滚动条 false 页头、标签页、内容区可纵向滚动）
  "HiddenSideBar": false, // 隐藏菜单和页头，只显示标签页和内容区
  "MultiTagsCache": false, // 是否开启持久化标签 （会缓存）
  "KeepAlive": true, // 是否开启组件缓存（此处不同于路由的 keepAlive，如果此处为 true 表示设置路由的 keepAlive 起效，反之设置 false 屏蔽平台整体的 keepAlive，即使路由设置了keepAlive 也不再起作用）
  "Locale": "zh", // 默认国际化语言 （zh 中文、en 英文）（会缓存）
  "Layout": "vertical", // 导航菜单模式 （vertical 左侧菜单模式、horizontal 顶部菜单模式、mix 综合菜单模式）（会缓存）
  "Theme": "default", // 主题模式（会缓存）
  "DarkMode": false, // 是否开启暗黑模式 （会缓存）
  "Grey": false, // 灰色模式（会缓存）
  "Weak": false, // 色弱模式（会缓存）
  "HideTabs": false, // 是否隐藏标签页（会缓存）
  "SidebarStatus": true, // vertical左侧菜单模式模式下侧边栏状态（true 展开、false 收起）（会缓存）
  "EpThemeColor": "#409EFF", // 主题色（会缓存）
  "ShowLogo": true, // 是否显示logo（会缓存）
  "ShowModel": "smart", // 标签页风格（smart 灵动模式、card 卡片模式）（会缓存）
  "MenuArrowIconNoTransition": false, // 菜单展开、收起图标是否开启动画，如遇菜单展开、收起卡顿设置成 true 即可（默认 false，开启动画）
  "CachingAsyncRoutes": true, // 是否开启动态路由缓存本地的全局配置，默认 true
  "TooltipEffect": "light" // 可配置平台主体所有 el-tooltip 的 effect 属性，默认 light，不会影响业务代码
}
*/
