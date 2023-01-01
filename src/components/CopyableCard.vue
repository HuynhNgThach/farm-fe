<template>
  <el-card
    class="copy-card"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <p v-if="readonly" class="text-readonly">{{ textarea }}</p>
    <el-input v-else type="textarea" v-model="textarea" rows="5"></el-input>
    <div class="copy-card__controls" v-if="isHover">
      <el-icon ref="copyBtn" @click="copyHandler"><DocumentCopy /></el-icon>
      <el-popover
        trigger="hover"
        ref="copyBtnPopover"
        :virtual-ref="copyBtn"
        virtual-triggering
        placement="top"
      >
        {{ popoverText }}
      </el-popover>
    </div>
  </el-card>
</template>

<script setup>
import { DocumentCopy } from "@element-plus/icons-vue";
import { useClipboard } from "@vueuse/core";
import { watch, ref, watchEffect } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
  readonly: {
    type: Boolean,
  },
});
const emit = defineEmits(["update:modelValue"]);
const isHover = ref(false);
const copyBtn = ref(null);
const copyBtnPopover = ref(null);
const popoverText = ref("Click to copy");
const textarea = ref("");
const { copy, copied } = useClipboard();

watchEffect(() => {
  textarea.value = props.modelValue;
});
watch(copied, (val) => {
  popoverText.value = val ? "Copied" : "Click to copy";
});
watch(textarea, (val) => {
  emit("update:modelValue", val);
});
const copyHandler = () => {
  copy(props.modelValue);
};
</script>

<style lang="scss" scoped>
.copy-card {
  position: relative;
  padding-right: 50px;
  &__controls {
    position: absolute;
    right: 1rem;
    top: 1rem;
    i {
      font-size: 30px;
      color: #bbb;
      cursor: pointer;
      font-weight: bold;
    }
  }
  .text-readonly {
    word-break: break-all;
  }
}
</style>
