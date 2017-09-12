<template>
    <div class="main">
        <div class="project">
            <div class="head">
                <h2>{{name}}</h2>
            </div>
            <p>项目描述：</p>
            <p>{{description}}</p>
            <div class="IP">
                <p>项目地址：</p>
                <p>
                    <a>{{address}}</a>
                </p>
            </div>
            <div class="contribute">
                <p>项目成员：</p>
                <Tag v-for="item in members" v-bind:key="item.name" @on-close="handleClose" style="height: 30px; line-height: 30px; padding: 0 15px;">{{ item.name }}</Tag>
            </div>
            <Button class="outside">修改</Button>
            <Button type="error" @click="modal2 = true" class="outside">删除</Button>
            <Modal v-model="modal2" width="20">
                <p slot="header" style="color:#f17d01; text-align:center;">
                    <Icon type="information-circled"></Icon>
                    <span>删除确认</span>
                </p>
                <div style="text-align:center;">d
                    <p>是否确认删除该项目？</p>
                </div>
            </Modal>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'fe-project',
            description: '111111111111111111111111111111111111',
            address: 'https://git.coding.net/Travaill/fetest5.git',
            modal2: false,
            members: [
                {
                    name: '我是谁'
                },

                {
                    name: '123'
                },
                {
                    name: '我在哪'
                },
                {
                    name: '123'
                },

            ]
        }
    },

    methods: {
        handleClose(event, name) {
            const index = this.formRep.members.indexOf(name);
            this.formRep.members.splice(index, 1);
        }
    }
}

</script>

<style scoped>
.project {
    float: left;
    width: 50%;
    min-height: 500px;
}

.leave-words {
    float: left;
    width: 30%;
    margin-left: 10%;
}

.head {
    padding-bottom: 6px;
    border-bottom: 1px solid rgb(225, 228, 232);
}

.head h2 {
    font-size: 24px;
    font-weight: normal;
}

p {
    margin: 15px 4px 15px 0;
    font-size: 14px;
}

.IP {
    margin-top: 50px;
}

.IP p {
    float: left;
}

.contribute {
    clear: both;
}

.contribute p {
    line-height: 3px;
    float: left;
}

.contribute tag {
    float: left;
}

button {
    color: white;
    font-size: 14px;
    background-color: #fe8e08;
    border-color: #fe8e08;
}

button:hover {
    color: white;
    background-color: #fe8e08;
    border-color: #fe8e08;
}

.outside {
    margin: 20px 5px 20px 0;
    width: 70px;
    height: 30px;
    line-height: 0px;
    color: #fff;
    background-color: #18be6a;
    border-color: #18be6a;
}

.lew-head {
    text-align: center;
    font-size: 18px;
    margin: 7.5px 1px;
}

#submit {
    width: 100%;
    border: 1px solid #24292e;
    background-color: #24292e;
}
</style>
