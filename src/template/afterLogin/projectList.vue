<template>
    <div class="project-list">
        <Card style="width:280px;height:280px;margin:20px auto;right:100px;top:110px;position:fixed">
            <div style="text-align:center">
                <img src="/src/img/logo.png" width="100px" height="100px" style="margin:40px; margin-bottom: 15px;">
                <h3>西二在线</h3>
                <p>引领潮流，当仁不让</p>
            </div>
        </Card>
        <div class="head">
            <h2>我的项目</h2>   
        </div>
        <ul>
            <li v-for="item in list" v-bind:key="item.name">
                <a @click="$router.push({name:'projectDetail',params: { projectId: item.name }})">
                    <img src="/src/img/1111468.jpg" width="122px" height="122px"></img>
                    <span>{{item.name}}</span>
                </a>
            </li>
            <li>
                <a @click="$router.push({name:'creatNew'})">
                    <Icon type="plus" size="60" style="padding: 32px 38px;border:1px dashed #ccc;border-radius: 8px;"></Icon>
                    <span>添加项目</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    name: 'fe-project'
                },

                {
                    name: 'vue-iview'
                },
            ]
        }
    },
     mounted: function() {
        var instance = this.axios.create({
            headers: { 'X-USER-TOKEN': this.$store.getters.getToken }
        });
        var that = this;
        instance.get('/index.php/Project/name/page')
            .then(function(response) {
                console.log(response);
                
            })
            .catch(function(error) {
                console.log(error);
            });

    },
}
</script>

<style scoped>
.project-list {
    width: 58%;
    margin: 9px 0;
    line-height: 1.5;
    min-height: 457px;
}

.head {
    padding-bottom: 6px;
    border-bottom: 1px solid rgb(225, 228, 232);
}

.head h2 {
    font-weight: normal;
    display: inline;
}


ul li {
    width: 122px;
    height: 140px;
    margin: 15px 26px 15px 0px;
    display: inline-block;
}

ul li a {
    color: #666;
}

ul li:hover {
    opacity: 0.8;
}

ul li img {
    border-radius: 10px;
}

.project-list span {
    font-size: 14px;
    display: block;
    line-height: 1.5;
    text-align: center;
}
</style>