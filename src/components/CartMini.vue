<template>
  <div class="column q-pa-xs q-gutter-sm full-width card-item__wrapper" style="width: 100%;">
    <q-card
      :key="product.id"
      v-for="product in cartProducts"
      class="col light-shadow-10 bg-white full-width overflow-hidden card-item__block"
      style=""
    >
      <q-card-section horizontal style="width: 100%;" class="full-width card-item__card">
        <q-card-section class="col-auto flex flex-center q-pa-none product-image">
          <div
            :style="`color: ${product.status === 'enabled' ? '#72BA52' : '#F15A24'};`"
            class="absolute absolute-top-left q-px-xs product-status_mobile"
          >
            &#9679; {{ $t(`statusesNames.${product.status === 'enabled' ? 'instock' : 'notAvailable'}`) }}
          </div>
          <q-img
            class="rounded-borders"
            :src="product.mainImage || assemblyImages(product)[0] && assemblyImages(product)[0].src"
            width="90px"
          />
          <QuantityInput
            :quantity="product.quantity"
            @click.stop.prevent
            @update:quantity="(val) => changeQtyAssembly(product, val)"
            class="product-quantity_mobile"
          />
        </q-card-section>
        <q-card-section class="q-pa-xs col" style="w idth: 100%;">
          <div class="text-body2 ellipsis-2-lines font-medium product-name">
            {{ product.name }}
          </div>
          <div class="text-caption text-grey line-height-15 product-number">
            {{ $t('assemblyNumber') }} : {{ [...new Set(product.products.map(p => p.root_category.id))].length === 1 ? (product.products.find(p => p.pivot.main) || product.products[0]).sku_original : product.sku }}
          </div>
          <div
            class="text-caption line-height-19 product-status"
            :style="`color: ${product.status === 'enabled' ? '#72BA52' : '#F15A24'};`"
          >
            {{ $t(`statusesNames.${product.status === 'enabled' ? 'instock' : 'notAvailable'}`) }}
          </div>
          <div class="row full-width" style="">
            <div class="col">
              <div class="text-body2 font-medium line-height-15 product-price">
                {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(product.amount)) }} ₪
              </div>
              <div class="text-caption text-grey-6 product-desc">
                {{ $t('withoutVat') }} : {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(product.price)) }} ₪
              </div>
            </div>
            <div class="col-auto product-quantity">
              <QuantityInput
                :quantity="product.quantity"
                @click.stop.prevent
                @update:quantity="(val) => changeQtyAssembly(product, val)"
              />
            </div>
          </div>
        </q-card-section>
        <q-btn
          @click="openDeletingAssemblyDialog(product.id)"
          class="absolute-top-right bg-white icon_mobile"
          color="grey-4"
          dense
          flat
          icon="highlight_off"
          padding="0"
          size="sm"
          square
          style="border-radius: 0; background: #e8e8e8; color: #4d4d4d;"
        />
      </q-card-section>
    </q-card>

    <q-dialog v-model="showConfirmDelete" persistent>
      <q-card class="q-pa-md" style="width: 320px;">
        <q-card-section class="row items-center q-pa-xs">
          <div class="text-h6 text-center line-height-24 text-left">
            {{ $t('confirmRemoveProduct') }}
          </div>
        </q-card-section>
        <q-card-section class="q-pa-xs q-pt-md">
          <div class="row q-col-gutter-md justify-center confirm-delete__buttons">
            <div class="col-6">
              <q-btn @click="deleteAssembly" no-caps outline :label="$t('yes')" class="full-width" />
            </div>
            <div class="col-6">
              <q-btn no-caps outline :label="$t('no')" v-close-popup class="full-width" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import QuantityInput from '../components/QuantityInput.vue'
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    QuantityInput,
  },

  data () {
    return {
      deletingAssemblyId: 0,
    }
  },

  methods: {
    assemblyImagesIds (product) {
      return [...new Set(product.products.flatMap(({pivot}) => pivot.image_id ? pivot.image_id : [] ))]
    },
    assemblyImages (product) {
      let images = []
      if (this.assemblyImagesIds(product).length > 1) {
        !!product && product.products.map(p => {
          !!p && p.images && p.images.map((i, index) => {
            if (this.assemblyImagesIds(product).includes(i.id) && p.pivot.main || !this.assemblyImagesIds(product).includes(i.id) && p.pivot.main && index === 0) {
              images.push(i)
            }
          })
        })
      } else if (this.assemblyImagesIds(product).length == 1) {
        !!product && product.products.map(p => {
          // if ((p.images.map(i => i.id)).includes(this.assemblyImagesIds(product)[0])) {
          //   images = p.images
          // }
          if (p.pivot.main) {
            images = p.images
          }
        })
      } else {
        !!product && product.products.map(p => {
          !!p && p.images && p.images.map((i, index) => {
            if (p.pivot.main && index === 0) {
              images.push(i)
            }
          })
        })
      }
      return images
    },
    changeQtyAssembly (assembly, quantity) {
      this.$store.dispatch('cart/changeQtyAssembly', {
        quantity,
        id: assembly.id,
        mainProductsIds: assembly.products.filter(p => p.pivot.main && p.pivot.product_id).slice().sort(),
      })
    },
    closeDeletingAssemblyDialog () {
      this.deletingAssemblyId = 0
      this.showConfirmDelete = false
    },
    deleteAssembly () {
      this.$store.dispatch('cart/deleteAssemblyFromCart', this.deletingAssemblyId)
      this.showConfirmDelete = false
    },
    openDeletingAssemblyDialog (id = 0) {
      this.deletingAssemblyId = id
      this.showConfirmDelete = true
    },
  },

  name: 'CartMini',

  props: {
    cartProducts: {
      type: Array,
      default: function () {return []},
    },
  },

  setup () {
    const $store = useStore()
    const showConfirmDelete = computed({
      get: () => $store.getters['main/showConfirmDelete'],
      set: val => {
        $store.dispatch('main/setShowConfirmDelete', val)
      }
    })
    return {
      showConfirmDelete
    }
  },
})
</script>

<style lang="scss">
  .product-quantity_mobile {
    display: none !important;
  }
  .confirm-delete_from-card {
    display: none !important;
    min-height: auto !important;
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
  .product-status_mobile {
    display: none !important;
  }
  @media (max-width: 833px) {
    .product-quantity {
      display: none !important;
    }
    .product-image {
      display: flex !important;
      flex-direction: column !important;
      padding: 8px !important;
    }
    .product-quantity,
    .product-status {
      display: none !important;
      &_mobile {
        display: block !important;
        top: -8px;
        left: -6px;
        z-index: 999;
      }
    }
    .confirm-delete_from-card {
      display: block !important;
    }
  }
</style>
