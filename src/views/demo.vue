<template>
  <div class="button-list">
    <div v-for="item in state.buttonList"  :key="item.id">
      <span>{{ item.name }}</span>
      <el-button link type="primary" @click="addContent(item)"> 引用</el-button>
    </div>
    <div style="margin: 10px 0;">
      <el-button v-for="item in state.operatorList" :key="item.id" @click="addContent(item)">
        {{ item.name }}
      </el-button>
    </div>
  </div>
  <div contenteditable ref="textarea" class="textarea"></div>
  <el-button type="primary" @click="save">保存</el-button>
  <div>
    保存的内容：{{ state.content }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { insertAtCursorInEditor } from '@/utils/index';

const state = ref({
  buttonList: [
    {
      id: 1,
      type: 1,
      name: '测试指标a1-1评分',
    },
    {
      id: 2,
      type: 1,
      name: '测试指标a2-1评分',
    },
    {
      id: 3,
      type: 1,
      name: '测试指标b1-1评分',
    }
  ],
  operatorList: [
    {
      id: 1,
      type: 2,
      name: '+',
    },
    {
      id: 2,
      type: 2,
      name: '-',
    },
    {
      id: 3,
      type: 2,
      name: '*',
    },
    {
      id: 4,
      type: 2,
      name: '/',
    },
    {
      id: 5,
      type: 2,
      name: '(',
    },
    {
      id: 6,
      type: 2,
      name: ')',
    },
  ],
  content: ''
})
const textarea = ref(null);

const addContent = (item) => {
  const text = item.type === 1 ? `{${item.name}}` : item.name;
  insertAtCursorInEditor(textarea.value, text);
}
const save = () => {
  state.value.content = textarea.value.textContent;
}
</script>

<style scoped>
.textarea {
  width: 500px;
  height: 300px;
  padding: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin-bottom: 20px;
  -webkit-user-modify: read-write-plaintext-only;
}
.textarea[contenteditable]:focus{
  outline: none;
  border-color: #409eff;
}
</style>

