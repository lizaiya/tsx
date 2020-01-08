import { Component, Watch, Vue } from 'vue-property-decorator'
import style from '../assets/style.scss'
@Component({})
export default class Jsx extends Vue {
  public value = ''
          msg=''
  @Watch('value')
          protected valueWatch (newValue:any, oldValue:any) {
            this.msg = `监听到属性value发生变化，新的值为：${newValue}`
          }
  public get valueLength () {
    return this.value.length
  }
  public handleClick (data:string) {
    console.log(data, '我被点击了')
  }
  protected render () {
    return (
      <div class='class1'>
        <input type="text" v-model={this.value}/>
        <el-button onClick={() => this.handleClick('参数')}>按钮</el-button>
        <p class={style.class1}>{this.msg}</p>
        <p>{this.valueLength}</p>
      </div>
    )
  }
}
