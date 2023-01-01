<template>
  <div class="encode-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>Input:</span>
          <el-form-item label="Delimiter:">
            <el-select
              v-model="delimiter"
              filterable
              allow-create
              default-first-option
              :reserve-keyword="false"
              placeholder="Choose a delimiter"
            >
              <el-option
                v-for="item in delimiters"
                :key="item.label"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </div>
      </template>
      <el-input type="textarea" rows="5" v-model="textInput"></el-input>
    </el-card>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>Word split (can use drag-and-drop to sort):</span>
        </div>
      </template>
      <draggable
        v-model="wordSplit"
        group="people"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
      >
        <template #item="{ element }">
          <el-tag v-if="element.value" class="word" type="primary" size="large">
            {{ element.value }}
          </el-tag>
        </template>
      </draggable>
    </el-card>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>Output:</span>
          <el-form-item label="Algorithm:">
            <el-select
              v-model="algorithmSelect"
              filterable
              allow-create
              default-first-option
              :reserve-keyword="false"
              placeholder="Choose a delimiter"
            >
              <el-option
                v-for="item in algorithms"
                :key="item.label"
                :label="item.value"
                :value="item.label"
              />
            </el-select>
          </el-form-item>
        </div>
      </template>
      <div class="encode-container__output">{{ textOutput }}</div>
      <div class="encode-container__footer">
        <Button
          text="Encrypt"
          type="primary"
          :disabled="disabledEncrypt"
          @click="handleEncode"
        />
        <Button text="Copy" :disabled="disabledCopy" @click="copyOutput" />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { doGetSupportMethod, doEncode } from "../services";
import { ref, onMounted, computed, watch } from "vue";
import { useClipboard } from "@vueuse/core";
import { ElNotification, ElMessage } from "element-plus";
import Button from "../components/ButtonComponent.vue";
import draggable from "vuedraggable";
import { get, set } from "lodash";
const algorithms = ref([]);
const algorithmSelect = ref(null);
const textOutput = ref("");
const textInput = ref("");
const loading = ref(false);
const delimiter = ref(" ");
const { copy, copied } = useClipboard();

const dragOptions = {
  animation: 300,
  group: "description",
  disabled: false,
  ghostClass: "ghost",
};
const delimiters = ref([
  {
    label: "Space",
    value: " ",
  },
  {
    label: "Comma",
    value: ",",
  },
]);
watch(copied, (val) => {
  if (val)
    ElMessage({
      message: "Copied.",
      type: "success",
    });
});
const wordSplit = computed({
  get() {
    return textInput.value
      .split(delimiter.value)
      .map((i) => ({ id: i, value: i }));
  },
  set(newValue) {
    textInput.value = newValue.map((i) => i.value).join(delimiter.value);
  },
});
const disabledCopy = computed(() => {
  return !textOutput.value;
});
const disabledEncrypt = computed(() => {
  return wordSplit.value.filter((i) => i.value !== "").length === 0;
});

const handleEncode = async () => {
  try {
    loading.value = true;
    const resp = await doEncode({
      algorithm: algorithmSelect.value,
      data: wordSplit.value
        .filter((i) => i.value !== "")
        .map((i) => i.value)
        .join(""),
    });
    textOutput.value = resp.data;
  } catch (error) {
    ElNotification({
      title: "Error",
      message: "Has error when encode",
      type: "error",
    });
  } finally {
    loading.value = false;
  }
};
const copyOutput = () => {
  copy(textOutput.value);
};

onMounted(async () => {
  const resp = await doGetSupportMethod();
  algorithms.value = Object.keys(resp.algorithms).map((k) => ({
    label: k,
    value: resp.algorithms[k],
  }));
  algorithmSelect.value = algorithms.value[0].label;
});
</script>

<style lang="scss" scoped>
.encode-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .card-header {
    span {
      font-weight: 600;
    }
    display: flex;
    justify-content: space-between;
    :deep(.el-form-item) {
      margin-bottom: 0;
    }
  }
  :deep(.el-card__header) {
    padding-bottom: 0;
  }
  .word {
    cursor: pointer;
    & + .word {
      margin-left: 1rem;
    }
  }
  &__footer {
    padding-top: 40px;
    text-align: center;
  }
  &__output {
    word-break: break-all;
    font-weight: 600;
  }
}
</style>
