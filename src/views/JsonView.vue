<template>
  <div class="json-tool" v-auto-animate="{ duration: 500 }">
    <template v-for="item of renderOrder" :key="item">
      <el-card v-if="item === 'json'">
        <JsonEditorVue
          v-model="json"
          mode="text"
          ref="editors"
          :readOnly="isJsonReadOnly"
          :class="{ 'jse-theme-dark': isDark }"
          @Error="handleErr"
          @Change="onchange"
        />
      </el-card>
      <div class="json-tool__control" v-if="item === 'control'">
        <Button
          type="primary"
          :disabled="disabledBtn"
          @click="handleTransform"
          text="Convert"
          icon="md-keyboardarrowright"
        />

        <Button
          type="primary"
          @click="swapHandler"
          text="Swap"
          icon="co-swap-horizontal"
        />
      </div>
      <CopyCard
        v-model="text"
        v-if="item === 'text'"
        ref="editor"
        :readonly="isTextReadOnly"
      />
    </template>
  </div>
</template>

<script setup>
import "vanilla-jsoneditor/themes/jse-theme-dark.css";
import { ref, computed } from "vue";
import JsonEditorVue from "json-editor-vue";
import { ElNotification } from "element-plus";
import CopyCard from "../components/CopyableCard.vue";
import Button from "../components/ButtonComponent.vue";
import { useDark } from "@vueuse/core";

const editors = ref([]);
const json = ref();
const text = ref(null);
const renderOrder = ref(["json", "control", "text"]);
const isDark = useDark();

const handleTransform = () => {
  try {
    if (renderOrder.value[0] === "json") {
      const jsonError = editors.value[0].jsonEditor.validate();
      if (jsonError && jsonError.parseError)
        throw new Error(jsonError.parseError.message);
      const jsonObject = JSON.parse(json.value);
      let queryString = "";
      Object.keys(jsonObject).forEach((key) => {
        let value = jsonObject[key];
        if (Array.isArray(value)) {
          value = value.flat(Infinity);
          for (const v of value) {
            queryString += `${key}=${v}&`;
          }
        } else if (typeof value === "object") {
          queryString += `${key}=${JSON.stringify(value)}&`;
        } else {
          queryString += `${key}=${
            typeof value === "string" ? value.trim() : value
          }&`;
        }
        console.log(queryString);
      });
      text.value = queryString.slice(0, queryString.length - 1);
    } else {
      const jsonObj = Object.fromEntries(new URLSearchParams(text.value));
      console.log("transform", jsonObj);
      json.value = jsonObj;
    }
  } catch (error) {
    ElNotification({
      title: "Error",
      message: error || "Cannot parse! Try again",
      type: "error",
    });
  }
};
const swapHandler = () => {
  const tmp = renderOrder.value[0];
  renderOrder.value[0] = renderOrder.value[renderOrder.value.length - 1];
  renderOrder.value[renderOrder.value.length - 1] = tmp;

  json.value = "";
  text.value = "";
};
const handleErr = (e) => {
  console.log("onerr", e);
};
const onchange = (e) => {
  console.log("onchange", e);
};
const isTextReadOnly = computed(() => {
  return renderOrder.value.indexOf("text") === renderOrder.value.length - 1;
});
const isJsonReadOnly = computed(() => !isTextReadOnly.value);
</script>

<style lang="scss" scoped>
.json-tool {
  display: flex;
  gap: 20px;
  .el-card {
    flex-basis: 50%;
  }
  &__control {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-self: center;
    button {
      width: 100%;
      margin: 0;
    }
  }
  :deep(.jse-menu) {
    background-color: var(--el-color-primary) !important;
  }
}
</style>
