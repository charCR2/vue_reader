import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let state ={
	SourceId: '',
	isShowCatlog: false,
	isShowSource: false,
  isShowList: false,
  listScroll: 0,
	BookInfo: {},
	RankList: {},
	CategoryList: {},
	SearchResult: {}
}
let mutations ={
    setShowList(state,list){
    state.isShowList=list
    },
    SetListScroll(state,list){
      state.listScroll=list;
    },
		SetCategoryList(state,list){
			state.CategoryList=list;
		},
		SetRankList(state,list){
			state.RankList=list;
		},
		ChangeDetail(state,name){
			if(name == 'catlog'){
				state.isShowCatlog =true;
				state.isShowSource = false;
			}else if(name == 'source'){
				state.isShowSource = true;
				state.isShowCatlog =false;
			}else{
				state.isShowSource = false;
				state.isShowCatlog =false;
			}
		},
		SetSourceId(state,index){
			state.SourceId=index;
		},
		SetBookInfo(state,book){
			state.BookInfo=book;
		},
		SetSearchResult(state,books){
			state.SearchResult = books;
		}
	}

export default new Vuex.Store({
	state,
	mutations
})
