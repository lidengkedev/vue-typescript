<template>
  <el-container>
    <el-header height="60px">
      <el-row :gutter="20">
        <el-col :span="4">
          <img src="../assets/logo.png" alt="" class="logo" />
        </el-col>
        <el-col :span="16">
          <h2>后台管理系统</h2>
        </el-col>
        <el-col :span="4" class="header-right">
          <el-button type="text" class="logout-btn" @click="handleLogout">
            登出
          </el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          :default-active="defaultActive"
          text-color="#fff"
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="aside-menu"
        >
          <el-sub-menu index="1">
            <template #title>
              <!-- <el-icon><icon-menu></icon-menu></el-icon> -->
              <span>商品列表</span>
            </template>
            <el-menu-item
              v-for="(item, index) in menuList"
              :key="index"
              :index="item.path"
            >
              {{ item.meta.title }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute()
    const defaultActive = computed(() => route.path)
    
    const menuList = router.getRoutes().filter((item) => item.meta.aside);
    console.log(menuList)
    const handleLogout = () => {
      router.push("/login");
    };
    return {
      menuList,
      defaultActive,
      handleLogout,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-header {
  line-height: 60px;
  background-color: rgba($color: #545c64, $alpha: 1);
}
.logo {
  width: 60px;
  height: 60px;
}
h2 {
  text-align: center;
  color: #ffffff;
}
.header-right {
  text-align: right;
  .logout-btn {
    color: #ffffff;
  }
}
.aside-menu {
  height: calc(100vh - 60px);
}
</style>
