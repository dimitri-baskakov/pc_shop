<template>
  <div class="quantity-input">
    <q-input
      :model-value="quantity"
      @input="$emit('update:quantity', $event.target.value)"
      color="grey-4"
      dense
      input-class="text-caption text-center q-pa-none q-ma-none"
      maxlength="2"
      outlined
      style="max-width: 90px; padding: 0; margin: 0;"
      input-style="padding: 0; margin: 0;"
      class="text-caption bg-white dense-quantity"
    >
      <template #prepend class="q-ma-none q-pa-none">
        <q-btn
          @click="$emit('update:quantity', quantity + 1)"
          class="q-ma-none text-caption"
          dense
          flat
          icon="add"
          style="height: 23px;"
        />
        <q-separator color="grey-4" vertical />
      </template>
      <template #append>
        <q-separator color="grey-4" vertical />
        <q-btn
          @click="$emit('update:quantity', quantity - 1)"
          class="q-ma-none text-caption"
          dense
          flat
          icon="remove"
          style="height: 23px;"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'QuantityInput',

  props: {
    quantity: {
      type: Number,
      default: 0,
    },
  },
})
</script>
