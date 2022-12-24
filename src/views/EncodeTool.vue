<template>
  <v-card class="card">
    <v-alert
      :model-value="alert"
      color="pink"
      dark
      border="top"
      transition="scale-transition"
    >
      Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In
      dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque
      posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
      imperdiet, leo. Phasellus nec sem in justo pellentesque facilisis.
      Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac,
      leo. In hac habitasse platea dictumst. Praesent turpis.
    </v-alert>
    <div class="encode">
      <div class="left-col">
        <v-textarea
          label="Input"
          :auto-grow="true"
          variant="outlined"
          bg-color="blockColor"
          v-model="input"
        ></v-textarea>
      </div>
      <div class="center-col">
        <v-btn
          rounded="pill"
          color="primary"
          :loading="loading"
          append-icon="arrow_forward_ios"
          @click="handleEncode"
          >Encrypt</v-btn
        >

        <v-select
          :items="algorithms"
          v-model="algorithmSelect"
          item-title="key"
          item-value="value"
          label="Algorithms"
          return-object
          bg-color="blockColor"
          variant="underlined"
        ></v-select>
      </div>
      <div class="right-col">
        <v-textarea
          bg-color="blockColor"
          variant="outlined"
          label="Output"
          :readonly="true"
          :auto-grow="true"
          :model-value="output"
        ></v-textarea>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { doGetSupportMethod, doEncode } from "../services";
import { ref, onMounted } from "vue";

const algorithms = ref([]);
const algorithmSelect = ref(null);
const output = ref("");
const input = ref("");
const loading = ref(false);
const alert = ref(false);

const handleEncode = async () => {
  console.log("encode", input.value, algorithmSelect.value.value);
  try {
    loading.value = true;
    const resp = await doEncode({
      algorithm: algorithmSelect.value.value,
      data: input.value,
    });
    console.log(resp);
  } catch (error) {
    console.log("in catch", error);
    alert.value = true;
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
  algorithmSelect.value = algorithms.value[0];
});
</script>

<style lang="scss">
.encode {
  display: flex;
  gap: 20px;
  align-items: center;
  .left-col,
  .right-col {
    flex-basis: 40%;
  }
  .center-col {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-shrink: 0;
    height: fit-content;
  }
}
</style>
