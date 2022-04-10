<template>
    <el-form class="search-warpper" inline>
        <el-form-item label="用户名：" class="search-item">
            <el-input v-model="search.username" clearable class="search-input" placeholder="请输入关键字"></el-input>
        </el-form-item>
        <el-form-item label="手机号：" class="search-item">
            <el-input v-model="search.phone" clearable class="search-input" placeholder="请输入关键字"></el-input>
        </el-form-item>
        <el-form-item label="角色：">
            <el-select v-model="search.role" placeholder="请选择角色">
                <el-option
                    v-for="(item, index) in roles"
                    :key="index"
                    :value="item.roleId"
                    :label="item.roleName"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="search-btn" @click="handleSearch">
                <el-icon :size="14"><Search/></el-icon>查询
            </el-button>
        </el-form-item>
    </el-form>
    <el-table :data="userList" border height="76vh" size="small" highlight-current-row empty-text="暂无数据">
        <el-table-column type="index" label="序号" align="center" width="80px"></el-table-column>
        <el-table-column prop="id" label="用户ID" align="center" width="80px"></el-table-column>
        <el-table-column prop="username" label="用户名" align="center" width="100px"></el-table-column>
        <el-table-column prop="phone" label="手机号" align="center" width="120px"></el-table-column>
        <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
        <el-table-column prop="" label="角色" width="350px">
            <template #default="{row}">
                <el-button
                    v-for="(item, index) in row.roles"
                    :key="index"
                    type="text">{{ item.roleName }}</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { InitPage } from '../../types/user'
import { getUserList, getUserRoles } from '@/api/user'

export default defineComponent({
    components: {
        Search
    },
    setup() {
        const data = reactive(new InitPage)
        let userListAll = []
        onMounted(async () => {
            const { list } = await getUserList()
            data.userList = list.map(item => item)
            userListAll = list
            data.roles = await getUserRoles()
        })
        const handleSearch = () => {
            const { username, phone } = data.search
            let userList = userListAll.map(item => item)
            if (username) {
                userList = userList.filter(item => item.username.includes(username))
            }
            if (phone) {
                userList = userList.filter(item => item.phone.includes(phone))
            }
            data.userList = userList
        }
        return {
            ...toRefs(data),
            handleSearch
        }
    },
})
</script>

<style lang="scss" scoped>

</style>
