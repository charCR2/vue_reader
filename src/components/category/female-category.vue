<template>
	<div class="female-category">
		<h3 class="category-title">女生</h3>
		<ul class="category-list">
			<li v-for="(list,index) in femaleCategory" class="category-list-item">
        <mu-row @click="golist(list)">
          <mu-col span="6" ><div class="imgbox"><img :src="Imageurl(index)"  /></div></mu-col>
          <mu-col span="6">
            <p class="category-list-number" style="font-size: 14px;font-weight: bold;line-height: 45px">{{list.name}}</p>
            <p class="category-list-number">{{list.bookCount}}本</p>
          </mu-col>
        </mu-row>
      </li>
		</ul>
	</div>
</template>
<script type="text/javascript">
  import util from '../../api/util'
	export default{
		props:['femaleCategory'],
		methods:{
			golist(list){
				this.$store.commit('SetCategoryList',list);
				this.$router.push({name:'categorylist',query:{gender:'female',type:'hot',major:list.name,start:0,limit:50}})
			},

        Imageurl(index){
          return util.staticPath+this.femaleCategory[index].bookCover[1]
        }

		}
	}
</script>
