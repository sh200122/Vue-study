<template>
  <div class="table-case">
    <MyTable :data="goods">
      <template #header>
        <th>编号</th>
        <th>名称</th>
        <th>图片</th>
        <th width="100px">标签</th>
      </template>
      <template #body="{item,index}">
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>
          <img :src=item.picture />
        </td>
        <td>
          <!-- 标签组件 -->
          <MyTag v-model="item.tag"></MyTag>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
//  my-tag组件的封装
// 1.创建组件-初始化
// 2.实现功能
//  a.双击显示，并且自动聚焦
//    v-if v-else @dblclick
//    自动聚焦
//      1.$nextTick=>$refs获取到Dom，进行focus获取焦点
//      2.封装v-focus指令
//  b.失去焦点，隐藏输入框
//    @blur操作isEdit即可
//  c.回显标签信息
//    回显的标签信息是父组件传递过来的
//    v-model实现功能（简化代码）->:value 和 @input
//    组件内部通过props接收，:value设置给输入框
//  d.内容修改了，回车->修改标签信息
//    @keyUp.enter,触发事件 $emit('input',e.target.value)

/**
 * my-table表格组件的封装
 *  1.数据不能写死，动态传递表格渲染的数据 props
 *  2.结构不能写死-多处结构自定义（具名插槽）
 *    a.表头支持自定义
 *    b.主体支持自定义
 */
 
import MyTag from './components/MyTag.vue'
import MyTable from './components/MyTable.vue';
export default {
  name: 'TableCase',
  components: {
    MyTag,
    MyTable,
  },
  data() {
    return {
      // 测试组件功能的临时数据
      goods: [
        {
          id: 101,
          picture:
            'https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg',
          name: '梨皮朱泥三绝清代小品壶经典款紫砂壶',
          tag: '茶具',
        },
        {
          id: 102,
          picture:
            'https://yanxuan-item.nosdn.127.net/221317c85274a188174352474b859d7b.jpg',
          name: '全防水HABU旋钮牛皮户外徒步鞋山宁泰抗菌',
          tag: '男鞋',
        },
        {
          id: 103,
          picture:
            'https://yanxuan-item.nosdn.127.net/cd4b840751ef4f7505c85004f0bebcb5.png',
          name: '毛茸茸小熊出没，儿童羊羔绒背心73-90cm',
          tag: '儿童服饰',
        },
        {
          id: 104,
          picture:
            'https://yanxuan-item.nosdn.127.net/56eb25a38d7a630e76a608a9360eec6b.jpg',
          name: '基础百搭，儿童套头针织毛衣1-9岁',
          tag: '儿童服饰',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.table-case {
  width: 1000px;
  margin: 50px auto;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }

}
</style>