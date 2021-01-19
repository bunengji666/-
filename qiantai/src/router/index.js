import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 引入路由对应的组件

import Shouye from '@/pages/shouye/Shouye'
import Baoming from '@/pages/baoming/Baoming'
import Paihang from '@/pages/paihang/Paihang'
import Jiangpin from '@/pages/jiangpin/Jiangpin'
import Xiangqing from '@/pages/xiangqing/Xiangqing'
import Activi from '@/pages/activi/Activi'
import Cast  from '@/pages/cast/Cast'
import CastOne from '@/pages/cast/CastOne'
import CastTwo from '@/pages/cast/CastTwo'
import Liwu from '@/pages/liwu/Liwu'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: Shouye,
			meta:{
				keepAlive:true,
				tousu:true,
        tongzhi:true,
        Xia:true
			}
    },
		{
		  path: '/shouye',
		  name: 'shouye',
		  component: Shouye,
			meta:{
				keepAlive:true,
				tousu:true,
        tongzhi:true,
        Xia:true
			}
		},
		{
		  path: '/baoming',
		  name: 'baoming',
		  component: Baoming,
			meta:{
				keepAlive:true,
				tousu:true,
        tongzhi:true,
        Xia:true
			}
		},
		{
		  path: '/paihang',
		  name: 'paihang',
		  component: Paihang,
			meta:{
				keepAlive:true,
				tousu:false,
        tongzhi:true,
        Xia:true,
			}
		},
		{
		  path: '/jiangpin',
		  name: 'jiangpin',
		  component: Jiangpin,
			meta:{
				keepAlive:true,
				tousu:true,
        tongzhi:true,
        Xia:true
			}
		},
		{
		  path: '/xiangqing',
		  name: 'xiangqing',
		  component: Xiangqing,
			meta:{
				keepAlive:false,
				tousu:true,
        tongzhi:true,
        Xia:true
			}
		},
		{
		  path: '/activi',
		  name: 'activi',
		  component: Activi,
			meta:{
				keepAlive:false,
				tousu:true,
        tongzhi:false,
        Xia:true
			}
		},
		{
		  path: '/cast',
		  name: 'cast',
		  component: Cast,
			meta:{
				keepAlive:false,
				tousu:false,
        tongzhi:false,
        Xia:false
			}
		},
		{
		  path: '/castone',
		  name: 'castone',
		  component: CastOne,
			meta:{
				keepAlive:false,
				tousu:false,
        tongzhi:false,
        Xia:false
			}
		},
		{
		  path: '/casttwo',
		  name: 'casttwo',
		  component: CastTwo,
			meta:{
				keepAlive:false,
				tousu:false,
        tongzhi:false,
        Xia:false
			}
		},
    {
      path: '/liwu',
      name: 'liwu',
      component: Liwu,
    	meta:{
    		keepAlive:false,
    		tousu:false,
        tongzhi:false,
        Xia:false
    	}
    },
  ]
})
