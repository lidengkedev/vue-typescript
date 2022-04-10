import type { FormInstance } from 'element-plus'
import { ref } from 'vue'

export interface ILoginForm {
  username: string,
  password: string
}

export class InitForm {
  form: ILoginForm = {
    username: '',
    password: ''
  }
  ref = ref<FormInstance>()
}