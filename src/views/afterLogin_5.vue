<template>
    <div class="main">
        <my-head></my-head>
        <div class="layout">
            <div class="layout-content">
                <Row>
                    <Col span="5">
                    <Menu width="200px" :open-names="['1','2','3']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-paper"></Icon>
                                内容管理
                            </template>
                            <Menu-item name="1-1"><a @click="$router.push({name:'projectList'})">项目管理</a></Menu-item>
                            <Menu-item name="1-2">评论管理</Menu-item>
                            <Menu-item name="1-3">举报管理</Menu-item>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-people"></Icon>
                                成员管理
                            </template>
                            <Menu-item name="2-1">新增用户</Menu-item>
                            <Menu-item name="2-2">活跃用户</Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-pricetag-outline"></Icon>
                                权限管理
                            </template>
                            <Menu-item name="3-1"><a @click="$router.push({name:'viewData'})">查看成员资料</a></Menu-item>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">
                                <Icon type="social-wordpress-outline"></Icon>
                                关于我们
                            </template>
                            <Menu-item name="4-1">
                                <a href="http://www.west2gold.com/" style="color:#495060">西二在线</a>
                            </Menu-item>
                            <Menu-item name="4-2">意见反馈</Menu-item>
                        </Submenu>
                    </Menu>
                    </Col>
                    <Col span="19">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    },
    components: {
        'myHead': require('../template/afterLogin/header'),
    }
}
</script>

<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f2f2f3;
    height: 686px;
}

.layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 25px 0;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
</style>