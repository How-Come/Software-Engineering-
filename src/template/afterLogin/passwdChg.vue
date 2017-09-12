<template>
    <div class="main">
        <h2>修改密码</h2>
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="100">
            <Form-item label="原密码" prop="passwd">
                <Input type="password" v-model="formCustom.passwd" placeholder="old password"></Input>
            </Form-item>
            <Form-item label="新密码" prop="newpasswd">
                <Input type="password" v-model="formCustom.newpasswd" placeholder="new password"></Input>
            </Form-item>
            <Form-item label="确认新密码" prop="renewpasswd">
                <Input type="password" v-model="formCustom.renewpasswd" placeholder="check password"></Input>
            </Form-item>
            <Form-item>
                <Button type="success" long @click="handleSubmit('formCustom')">提交</Button>
            </Form-item>
        </Form>
    </div>
</template>

<script>
export default {
    data() {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.formCustom.renewpasswd !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formCustom.validateField('renewpasswd');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.formCustom.newpasswd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };

        /*原密码检验部分 待修改*/
        const validateAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('原密码不能为空'));
            }
        };
        /*原密码检验部分 待修改*/
        return {
            formCustom: {
                passwd: '',
                newpasswd: '',
                renewpasswd: '',

            },
            ruleCustom: {
                passwd: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ],
                newpasswd: [
                    { required: true, message: '新密码不能为空', trigger: 'blur' }
                ],
                renewpasswd: [
                    { required: true, message: '请再次输入新密码', trigger: 'blur' }
                ]
            }
        }

    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    var that = this;
                    var instance = this.axios.create({
                        headers: { 'X-USER-TOKEN': this.$store.getters.getToken }
                    });
                    instance.put('/index.php/User/name/2', {
                        password: that.formCustom.passwd,
                        newpassword: that.formCustom.newpasswd,
                        renewpassword: that.formCustom.renewpasswd,
                    })
                        .then(function(response) {
                            console.log(response);
                            that.$Message.success(response.data.info);
                            that.$router.push({ name: 'signIn' })
                        })
                        .catch(function(error) {
                            console.log(error);
                            that.$Message.error(error);
                        });

                } else {
                    that.$Message.error('error');
                }
            })
        },
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
</style>