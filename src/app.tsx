/**
 * 返回权限数据
 * allPermissions：所有的权限 Code 列表
 * userPermissions：当前用户的权限 Code 列表
 */
export async function getInitialState() {
    return Promise.resolve({ allPermissions: [], userPermissions: [] })
    // return Promise.resolve({ allPermissions: [''], userPermissions: [''] })
}

// export const patchRoutes = generateDelayRoute()

const qiankunConfig = {
    apps: [
        {
            name: 'umiMicroapp',
            entry: 'http://local.shizhuang-inc.net:8001/'
        },
    ],
    sandbox: {
        // strictStyleIsolation: true,
        // experimentalStyleIsolation: true,
    },
    // sandbox: false,
    // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
    lifeCycles: {
        afterMount: (props) => {
            console.log('afterMount', props)
        },
    },
    // prefetch: 'all',
    // 不被 qiankun 拦截
    // excludeAssetFilter(assetUrl: string) {
    //     let exclude = false
    //     if (typeof REACT_APP_ENV !== 'undefined' && /test|pre|production/.test(REACT_APP_ENV)) {
    //         // 子应用资源 false
    //         exclude = !/(monoproject\/)|(iwork-learning-mono\/)/.test(assetUrl)
    //     }

    //     // console.log('excludeAssetFilter: ', exclude, assetUrl)
    //     return exclude
    // },
}

// console.log('process.env.NODE_ENV', process?.env?.NODE_ENV)
// // 开发环境不启用该配置
// if (process?.env?.NODE_ENV !== 'development') {
//     qiankunConfig.prefetch = 'all'
// }

// if (typeof REACT_APP_ENV !== 'undefined' && /(local)|(dev)/.test(REACT_APP_ENV)) {
//     qiankunConfig.fetch = async (url: any) => {
//         return window.fetch(url, {
//             headers: {
//                 accept: 'text/html',
//             },
//         })
//     }
// }

export const qiankun = Promise.resolve(qiankunConfig)
