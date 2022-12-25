<template>
  <el-card shadow="always" class="encode-container">
    <el-row :gutter="20">
      <el-col :span="10">
        <el-input type="textarea" v-model="input" rows="10" />
      </el-col>
      <el-col :span="4">
        <div class="encode-container__control">
          <el-select placeholder="Algorithms" v-model="algorithmSelect">
            <template v-for="(alg, k) in algorithms" :key="k">
              <el-option :label="alg.key" :value="alg.value" />
            </template>
          </el-select>
          <el-button
            type="primary"
            @click="handleEncode"
            :disabled="disabledBtn"
            >Encode</el-button
          >
        </div>
      </el-col>
      <el-col :span="10">
        <el-input
          :model-value="output"
          :readonly="true"
          type="textarea"
          rows="10"
        />
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import { doGetSupportMethod, doEncode } from "../services";
import { ref, onMounted, computed, watch } from "vue";
import { ElNotification } from "element-plus";

const algorithms = ref([]);
const algorithmSelect = ref(null);
const output = ref("");
const input = ref("");
const loading = ref(false);
const disabledBtn = computed(() => {
  return !input.value || !algorithmSelect.value;
});
watch(input, () => {
  output.value = "";
});

const handleEncode = async () => {
  try {
    loading.value = true;
    const resp = await doEncode({
      algorithm: algorithmSelect.value,
      data: input.value,
    });
    output.value = resp.data;
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

onMounted(async () => {
  const resp = await doGetSupportMethod();
  algorithms.value = Object.keys(resp.algorithms).map((k) => ({
    key: k,
    value: resp.algorithms[k],
  }));
  algorithmSelect.value = algorithms.value[0].value;
});
</script>

<style lang="scss" scoped>
.encode-container {
  border: none;
  height: 100%;
  /*border-radius: 8px;
  :deep(.el-card__body) {
    border-radius: 8px;
  }*/
  &__control {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
