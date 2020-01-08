<template>
<div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Jsx :prop-msg="msg"/>
    <el-button type="primary">elementUI</el-button>
    <HelloWorld :msg="msg" />
</div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import Jsx from '@/components/Jsx.tsx'
@Component({
  components: {
    HelloWorld,
    Jsx
  }
})
export default class Home extends Vue {
  msg = 'props黎在亚';
  mounted (): void {
    console.log('123')
  }
}
</script>
