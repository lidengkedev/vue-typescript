<template>
  <div class="login-warpper">
    <el-form ref="ref" :model="form" :rules="rules" @submit.prevent label-width="80px" class="login-form" size="large">
      <h1>后台管理系统</h1>
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名" @keyup.enter="handleLogin(ref)" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码" @keyup.enter="handleLogin(ref)" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="handleLogin(ref)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { login } from '@/api/user'
import { FormInstance } from 'element-plus'
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { InitForm } from '../types/login'
import { useRouter } from 'vue-router'

/*
const {form, ref} = reactive(new InitForm())
form.username = 'admin'
form.password = '123456'
const rules = reactive({
  username: [
    { required: true, message: '请输入', trigger: 'blur' },
    { min: 6, max: 24, message: '用户名长度在4~24之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入', trigger: 'blur' },
    { min: 6, max: 24, message: '用户名长度在4~24之间', trigger: 'blur' }
  ]
})
const handleLogin = () => {
  ref?.validate((valid) => {
    if (valid) {
      console.log('登录成功')
    } else {
      console.log('登录失败')
    }
  })
}*/

export default defineComponent({
  setup() {
    const form = reactive(new InitForm())
    const router = useRouter()
    const rules = reactive({
      username: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 4, max: 24, message: '用户名长度在4~24之间', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 4, max: 24, message: '用户名长度在4~24之间', trigger: 'blur' }
      ]
    })
    const handleLogin = (ref: FormInstance | undefined) => {
      ref?.validate((valid) => {
        if (valid) {
          login(form.form).then(res => {
            console.log('登录成功')
            // this.$router.push('/home')
            router.push('/')
          }).catch(err => {
            console.error(err)
          })
        } else {
          console.log('登录失败')
        }
      })
    }
    return {
      ...toRefs(form),
      rules,
      handleLogin
    }
  }
})
</script>

<style lang="scss" scoped>
.login-warpper {
  height: 100vh;
  overflow: hidden;
  background-color: #409eff;
}
.login-form {
  width: 400px;
  padding: 0 20px 20px;
  margin: 0 auto;
  margin-top: 15vh;
  border: 1px solid #eaeaea;
  border-radius: 20px;
  background-color: #FFFFFF;
  h1 {
    text-align: center;
    margin: 20px auto;
    font-size: 24px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>