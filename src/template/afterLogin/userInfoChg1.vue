<template>
    <div class="main">
        <h2>个人资料</h2>
        <Form ref="formValidate" :model="formValidate" :label-width="90">
            <Form-item label="姓名" prop="name">
                <Input type="text" v-model="formValidate.user" placeholder="Username">
                </Input>
            </Form-item>
            <Form-item label="QQ" prop="QQ">
                <Input type="text" v-model="formValidate.QQ" placeholder="QQ">
                </Input>
            </Form-item>
            <Form-item label="微信" prop="weixin">
                <Input type="text" v-model="formValidate.wechat" placeholder="weixin">
                </Input>
            </Form-item>
            <Form-item label="方向" prop="direct">
                <Select v-model="formValidate.direct" placeholder="period">
                    <Option value="fe">fe</Option>
                    <Option value="php">php</Option>
                    <Option value="java">java</Option>
                    <Option value="unity">unity</Option>
                    <Option value="ios">ios</Option>
                </Select>
            </Form-item>
            <Form-item label="届级">
                <Select v-model="formValidate.grade" placeholder="period">
                    <Option value="2017">2017</Option>
                    <Option value="2016">2016</Option>
                    <Option value="2015">2015</Option>
                    <Option value="2014">2014</Option>
                </Select>
            </Form-item>
            <Form-item>
                <Button  type="success" long @click="handleSubmit('formValidate')">确认</Button>
            </Form-item>
        </Form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: 1,
            formValidate: {
                user: '',
                QQ: '',
                wechat: '',
                direct:'',
                grade: '',
            },
        }
    },  
    mounted: function() {
        var instance = this.axios.create({
            headers: { 'X-USER-TOKEN': this.$store.getters.getToken }
        });
        var that = this;
        instance.get('/index.php/User/name')
            .then(function(response) {
                console.log(response);
                that.formValidate.user = response.data.data.name;
                that.formValidate.QQ = response.data.data.qq;
                that.formValidate.wechat = response.data.data.wechat;
                that.formValidate.direct = response.data.data.direct;
                that.formValidate.grade = response.data.data.grade;
                that.formValidate.right = response.data.data.right;
            })
            .catch(function(error) {
                console.log(error);
            });

    },
    computed: {

    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    var that = this;
                    var instance = this.axios.create({
                        headers: { 'X-USER-TOKEN': this.$store.getters.getToken }
                    });
                    instance.put('/index.php/User/name/1', {
                        name: that.formValidate.user,
                        qq: that.formValidate.QQ,
                        wechat: that.formValidate.wechat,
                        direct: that.formValidate.direct,
                        grade: that.formValidate.grade
                    })
                        .then(function(response) {
                            console.log(response);
                            that.$Message.success(response.data.info)
                            that.$router.push({ name: 'projectList' })
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                } else {
                    that.$Message.error('error');
                }
            })
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>

<style scoped>
.main {
    width: 92%;
    min-height: 457px;
    margin: 9px 0;
    line-height: 1.5;
}

h2 {
    padding-bottom: 6px;
    font-weight: normal;
    border-bottom: 1px solid rgb(225, 228, 232);
}

Form {
    width: 360px;
    height: 80px;
    margin: 0 auto;
    margin-top: 50px;
}

.steps-list {
    width: 750px;
    margin: 20px 90px;
}

button {
    font-size: 14px;
}
</style>
