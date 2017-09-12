<template>
    <div>
        <Card style="width:280px;height:280px;margin:20px auto;right:100px;top:110px;position:fixed">
            <div style="text-align:center">
                <img src="/src/img/logo.png" width="100px" height="100px" style="margin:40px; margin-bottom: 15px;">
                <h3>西二在线</h3>
                <p>引领潮流，当仁不让</p>
            </div>
        </Card>

        <div class="main">
            <h2>修改资料</h2>
            <Form ref="formRep" :model="formRep" label-position="top" :rules="formRule">
                <Form-item label="项目名称" prop="name">
                    <Input v-model="formRep.name"></Input>
                </Form-item>
                <Form-item label="项目描述" prop="description">
                    <Input v-model="formRep.description"></Input>
                </Form-item>
                <Form-item label="项目地址" prop="address">
                    <Input v-model="formRep.address"></Input>
                </Form-item>
                <Form-item label="项目成员" prop="members">
                    <Input v-model="formRep.newName" @on-enter="handleAdd" @on-click="handleAdd" style="width:220px;dispaly:inline-block" icon="plus"></Input>
                    <Tag v-for="item in formRep.members" v-bind:key="item.name" closable @on-close="handleClose" type="dot" color="blue">{{ item.name }}</Tag>
                </Form-item>
                <Form-item>
                    <Button type="success" @click="handleSubmit('formRep')">确认修改</Button>
                </Form-item>
            </Form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formRep: {
                name: '',
                description: '',
                address: '',
                newName: '',
                members: []
            },
            formRule: {
                name: [
                    { required: true, message: '项目名称不能为空', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: '项目地址不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('success');
                } else {
                    this.$Message.error('error');
                }
            })
        },
        handleAdd() {
            if (this.formRep.newName != '') {
                this.formRep.members.push({
                    name: this.formRep.newName
                })
                this.formRep.newName = ''
            }
        },
        handleClose(event, name) {
            const index = this.formRep.members.indexOf(name);
            this.formRep.members.splice(index, 1);
        }
    }

}
</script>


<style scoped>
.main {
    width: 600px;
    margin: 9px 0;
    line-height: 1.5;
}

h2 {
    padding-bottom: 6px;
    font-weight: normal;
    border-bottom: 1px solid rgb(225, 228, 232);
}

Form {
    padding-top: 20px;
}

button {
    width: 140px;
    height: 32px;
    font-size: 14px;
}
</style>


