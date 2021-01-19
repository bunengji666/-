import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);





export default new Vuex.Store({
	state:{
		 musicOut:true,//音乐默认
    // hdMusic:,//活动音乐
    // qtMusic:,//其它音乐
     dataList:"",//学生信息

		dataTs:""//投诉选项

	},
	mutations:{},
	actions:{},
	getters:{}
})
