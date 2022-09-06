<template>
  <q-page class="bg-grey-1 row justify-center order-details">
      <div class="order-details__wrapper">
          <div class="order-details__item">
            <div class="order-details__breadcrumbs" dir="ltr">
                4516233248 הזמנות / הזמנות
            </div>
            <q-card
            class="light-shadow-10 bg-white hover-shadow full-width product-card__list"
            style="height: 146px;"
            v-for="product in products"
            :key="product.id"
            >
            <q-card-section horizontal style="height: 100%;"> 
                <q-card-section
                @click="$router.push(`/personal-order/${product.id}`)"
                class="col-auto flex flex-center cursor-pointer q-px-sm product-card__list-image"
                >
                <div
                    :style="`color: ${product.status_color};`"
                    class="absolute absolute-top-left q-px-xs product-status_mobile"
                >
                    &#9679; {{ $t(`statusesNames.${product.status}`) }}
                </div>
                <q-img
                    class="rounded-borders"
                    :src="product.image"
                    width="115px"
                />
                <div class="justify-end row product-addCard">
                    <q-btn
                    class="q-px-xl q-mx-none full-width"
                    dense
                    no-caps
                    no-wrap
                    outline
                    >
                        פרטים
                    </q-btn>
                </div>
                </q-card-section>
                <q-card-section class="q-px-none q-py-xs col full-height overflow-hidden column  product-card__list-description">
                <div class="flex flex-center justify-between no-wrap">
                    <span
                    @click="$router.push(`/personal-order/${product.id}`)"
                    class="ellipsis-2-lines cursor-pointer product-link font-size-18 line-height-21"
                    >
                        {{ product.name }}
                    </span>
                </div>
                <div class="flex flex-center justify-between no-wrap">
                    <span dir="ltr" class="text-grey text-body1 product-number">
                    {{ product.assembly_number }} : {{ $t('assemblyNumber') }}
                    </span>
                </div>
                <div class="flex flex-center justify-between no-wrap product-price">
                    <span dir="ltr" class="text-grey text-body1">
                    {{ product.vat_price }} ₪
                    </span>
                </div>
                <div class="text-subtitle1 font-medium text-grey-6 product-vat"> 
                    {{ $t('withoutVat') }} : {{ product.price }} ₪ 
                </div>
                <div class="text-subtitle1 font-medium text-grey-6 product-items"> 
                    <span>
                        : פריטים
                    </span>
                    <br>
                    {{product.items}} יחי 
                </div>
                <q-space />
                </q-card-section>
            </q-card-section>
            </q-card>
          </div>
      </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'OrderDetails',
    setup() {
        return {
             products: [
                 {
                    assembly_number: '5878888886456',
                    id: 235,
                    image: 'images/monitor.png',
                    name: 'одиночный товар INTEL Core i9-11900K up to 4GHz 16MB Cache Processor',
                    price: 1151.00,
                    status: 'instock',
                    status_color: '#72BA52',
                    vat_price: 1438.75,
                    items: 5
                },
                 {
                    assembly_number: '5878888886456',
                    id: 235,
                    image: 'images/monitor.png',
                    name: 'одиночный товар INTEL Core i9-11900K up to 4GHz 16MB Cache Processor',
                    price: 1151.00,
                    status: 'instock',
                    status_color: '#72BA52',
                    vat_price: 1438.75,
                    items: 5
                },
                 {
                    assembly_number: '5878888886456',
                    id: 235,
                    image: 'images/monitor.png',
                    name: 'одиночный товар INTEL Core i9-11900K up to 4GHz 16MB Cache Processor',
                    price: 1151.00,
                    status: 'instock',
                    status_color: '#72BA52',
                    vat_price: 1438.75,
                    items: 5
                },
             ]
        }
    },
})
</script>

<style lang="scss">
    .order-details {
        padding-bottom: 0 !important;
        &__wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &__item {
            padding: 0 16px !important;
            .product-price,
            .product-vat {
                width: 74% !important;
                padding-bottom: 0 !important;
            }
            .produvt-vat {
                height: 12px;
                overflow: hidden;
            }
            .product-items {
                position: absolute;
                bottom: 8px;
                right: 8px;
                span {
                    color: #333333;
                    font-weight: 600 !important;
                }
            }
        }
        &__breadcrumbs {
            font-size: 12px;
            text-align: left;
            margin: 22px 0 16px 0;
            color: #808080;
        }
    }
</style>
