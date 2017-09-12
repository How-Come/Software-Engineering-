<template>
    <header>
        <div class="container">
            <img class="logo" src="/src/img/logo-round.png"></img>
            <h1>Project Management</h1>
            <nav>
                <a @click="$router.push({name:'creatNew'})">
                    <Tooltip content="新建项目" placement="bottom-end">
                        <Icon type="plus-round"></Icon>
                    </Tooltip>
                </a>
                <Dropdown trigger="click" placement="bottom-end">
                    <Tooltip content="账户设置" placement="bottom-end" :disabled="disabled">
                        <a @click="disabled = true">
                            <Icon type="navicon-round"></Icon>
                        </a>
                    </Tooltip>
                    <Dropdown-menu slot="list" class="Dropdown-menu">
                        <Dropdown-item style="padding:7px 0">
                            <a @click="$router.push({name:'projectList'})">我的项目</a>
                        </Dropdown-item>
                        <Dropdown-item style="padding:7px 0">
                            <a @click="$router.push({name:'userInfoChg'})">个人资料</a>
                        </Dropdown-item>
                        <Dropdown-item style="padding:7px 0">
                            <a @click="$router.push({name:'passwdChg'})">修改密码</a>
                        </Dropdown-item>
                        <Dropdown-item style="padding:7px 0">
                            <a @click="handleLogout()">注销</a>
                        </Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </nav>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
                <Form-item prop="search">
                    <Input v-model="formValidate.search" placeholder="search here" class="search" @on-enter="handleSubmit('formValidate')"></Input>
                </Form-item>
            </Form>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            disabled: false,
            formValidate: {
                search: ''
            },
            ruleValidate: {
                search: [
                    { required: true, message: ' ', trigger: 'on-enter' }
                ]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (!valid) {
                    this.$Message.error('搜索不能为空');
                }
            })
        },
        handleLogout() {
            this.$store.commit('logout'),
                this.$router.push({ name: 'signIn' })
        }
    }
}
</script>

<style scoped>
header {
    height: 48px;
    background: #24292e;
    padding-left: 24px;
}

header .container {
    height: 34px;
    margin: 0 auto;
}

header h1 {
    line-height: 48px;
    font-size: 20px;
    float: left;
    color: white;
    font-family: Microsoft YaHei;
    font-weight: normal;
    letter-spacing: 0;
}

header img {
    width: 34px;
    height: 34px;
    border-radius: 100px;
    margin: 7px;
    float: left;
}

header nav {
    float: right;
    font-size: 26px;
    line-height: 48px;
    margin-right: 30px;
}

header .search {
    float: right;
    margin: 8px 24px;
    width: 170px;
}

header nav a {
    margin: 2px;
    color: white;
}

header nav a:hover {
    opacity: 0.9;
}

.Dropdown-menu a {
    color: #666;
    height: 100%;
    width: 100%;
    padding: 8px 26px;
}
</style>
