<template>
  <q-page class="bg-grey-1 row justify-center assembly">
    <div class="text-start q-mt-lg assembly-addToCard__button">
      <div class="assembly-addToCard__button-price">
        <div class="text-h5 font-medium assembly-addToCard__button--price">
          {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.amount)) }} ₪
        </div>
        <div class="font-size-15 font-medium text-grey-6 assembly-addToCard__button--subprice">
          {{ $t('includeVat') }} : {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.price)) }} ₪
        </div>
      </div>
      <q-btn
        @click="$store.dispatch('cart/addAssemblyToCart', assembly)"
        :disable="!assembly.detectStatus"
        :label="$t('putToCart')"
        class="q-px-xl q-mx-none hover-black-bg"
        flat
        no-caps
        no-wrap
        outline
      ></q-btn>
    </div>
    <div class="col-xs-10 limited-width q-px-xs assembly-wrapper">
      <div class="row justify-between q-col-gutter-md assembly-specifications" style="padding-top: 45px;">
        <div class="col-xs-7 offset-5 assembly__specifications">
          <q-card 
          class="product__specifications-description"
          flat
          >
            <q-card-section class="q-pa-md">
              <div class="text-grey-6 text-body1 product__specifications-title">{{ $t('technicalCharacteristics')}}</div>
              <div class="q-pt-xs col" v-if="assembly.products && assembly.products.length">
                <div
                  class="row justify-start content-stretch product__specifications-item"
                  v-for="characteristic in (assembly.products.find(p => p.pivot.main) || assembly.products[0]).product_specifications"
                  :key="characteristic.id"
                >
                  <div style="max-width: 25%;" class="col font-meduim content-stretch font-size-15" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"> • {{ characteristic.name }} :</div>
                  <div class="col text-grey-5 font-size-15 q-px-xs" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">{{ characteristic.value }}</div>
                </div>
                <!-- <div
                  class="row justify-start content-stretch product__specifications-item"
                  v-for="product in product.characteristics"
                  :key="product.id"
                >
                  <div style="max-width: 25%;" class="col font-meduim content-stretch font-size-15" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"> • {{ product.category }} :</div>
                  <div class="col text-grey-5 font-size-15 q-px-xs" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">{{ product.name }}</div>
                </div>
                <div
                  class="row justify-start content-stretch product__specifications-item"
                  v-for="product in product.characteristics"
                  :key="product.id"
                >
                  <div style="max-width: 25%;" class="col font-meduim content-stretch font-size-15" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"> • {{ product.category }} :</div>
                  <div class="col text-grey-5 font-size-15 q-px-xs" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">{{ product.name }}</div>
                </div>
                <div
                  class="row justify-start content-stretch product__specifications-item"
                  v-for="product in product.characteristics"
                  :key="product.id"
                >
                  <div style="max-width: 25%;" class="col font-meduim content-stretch font-size-15" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"> • {{ product.category }} :</div>
                  <div class="col text-grey-5 font-size-15 q-px-xs" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">{{ product.name }}</div>
                </div>
                <div
                  class="row justify-start content-stretch product__specifications-item"
                  v-for="product in product.characteristics"
                  :key="product.id"
                >
                  <div style="max-width: 25%;" class="col font-meduim content-stretch font-size-15" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"> • {{ product.category }} :</div>
                  <div class="col text-grey-5 font-size-15 q-px-xs" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">{{ product.name }}</div>
                </div>
                <div
                  class="row justify-start content-stretch product__specifications-item"
                  v-for="product in product.characteristics"
                  :key="product.id"
                >
                  <div style="max-width: 25%;" class="col font-meduim content-stretch font-size-15" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"> • {{ product.category }} :</div>
                  <div class="col text-grey-5 font-size-15 q-px-xs" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">{{ product.name }}</div>
                </div> -->
              </div>
            </q-card-section>
          </q-card>
          <!-- <q-card
            class="q-mt-md assembly__specifications-categories product__specifications-categories"
            flat
          >
            <q-card-section class="q-pa-md assembly__components">
              <div class="text-grey-6 text-body1 assembly__components-title">
                {{ $t('chooseComponentsForComputer') }}
                <q-btn
                  icon="mdi-restart"
                  round
                  size="xs"
                  :class="{active: activeComponents !== null}"
                  @click="activeComponents = null"
                />
              </div>
              <q-list 
              :class="{active: activeComponents == 1}"
              dense
              >
                <q-item-label 
                class="text-body1 font-medium q-py-sm q-px-none assembly__components-label"
                header 
                >
                {{ 'מארז מארז' }}
                <div 
                class="assembly__components-button"
                @click="changeActiveComponents(1)"
                >
                  <span class="change">
                    שינוי
                  </span>
                  <span class="close">
                    סגור
                  </span>
                  <q-btn
                    icon="mdi-chevron-right"
                    round
                    size="xs"
                  />
                </div>
                </q-item-label>
                <div 
                class="col ellipsis row justify-start assembly__components-subtitle"
                v-if="activeComponents !== 1"
                >
                  <div class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                </div>
                <q-item 
                class="q-pa-none" 
                tag="label" 
                v-ripple active-class="bg-grey-3 text-black" 
                :active="product1.val === '1'" 
                style="padding: 0; height: 20px;"
                >
                  <q-item-section 
                  class="q-pa-none order-last" 
                  avatar 
                  style="padding: 0; min-width: auto;"
                  >
                    <q-radio 
                    v-model="product1.val" 
                    val="1" 
                    color="primary" 
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="row no-wrap justify-start">
                      <div class="flex flex-center q-mx-xs assembly__components-image">
                        <q-img
                          :src="product.image"
                          width="25px"
                        ></q-img>
                      </div>
                      <div class="col ellipsis row justify-start assembly__components-name">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                      </div>
                      <div class="flex flex-center q-mx-xs" @click.stop.prevent>
                        <div>
                          <QuantityInput
                            @click.stop.prevent
                            v-model:quantity.sync="product1.quantity"
                          />
                        </div>
                      </div>
                      <div
                        class="text-grey-6 full-height vertical-middle text-left"
                        style="width: 70px;"
                      >
                        <div class="q-mt-xs text-right">{{ '16516' }} {{ '+' }}</div>
                      </div>
                    </q-item-label>
                    <div class="col ellipsis row justify-start assembly__components-name_mobile">
                      <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                    </div>
                  </q-item-section>
                </q-item>

                <q-item 
                class="q-pa-none row" 
                tag="label" 
                v-ripple 
                active-class="bg-grey-3 text-black" 
                :active="product1.val === '2'" 
                style="padding: 0; height: 20px;"
                >
                  <q-item-section avatar class="q-pa-none order-last" style="padding: 0; min-width: auto;">
                    <q-radio v-model="product1.val" val="2" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="row no-wrap justify-start">
                      <div class="flex flex-center q-mx-xs assembly__components-image">
                        <q-img
                          :src="product.image"
                          width="25px"
                        ></q-img>
                      </div>
                      <div class="col ellipsis row justify-start assembly__components-name">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                      </div>
                      <div class="flex flex-center q-mx-xs" @click.stop.prevent>
                        <QuantityInput
                          @click.stop.prevent
                          v-model:quantity.sync="product2.quantity"
                        />
                      </div>
                      <div
                        class="text-grey-6 full-height vertical-middle text-left"
                        style="width: 70px;"
                      >
                        <div class="q-mt-xs text-right">{{ '0' }} {{ '' }}</div>
                      </div>
                    </q-item-label>
                      <div class="col ellipsis row justify-start assembly__components-name_mobile">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                      </div>
                  </q-item-section>
                </q-item>

                <q-item 
                class="q-pa-none" 
                tag="label" 
                v-ripple 
                active-class="bg-grey-3 text-black" 
                :active="product1.val === '3'" 
                style="padding: 0; height: 20px;"
                >
                  <q-item-section avatar class="q-pa-none order-last" style="padding: 0; min-width: auto;">
                    <q-radio v-model="product1.val" val="3" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="row no-wrap justify-start">
                      <div class="flex flex-center q-mx-xs assembly__components-image">
                        <q-img
                          :src="product.image"
                          width="25px"
                        ></q-img>
                      </div>
                      <div class="col ellipsis row justify-start assembly__components-name">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                      </div>
                      <div class="flex flex-center q-mx-xs" @click.stop.prevent>
                        <QuantityInput
                          @click.stop.prevent
                          v-model:quantity.sync="product3.quantity"
                        />
                      </div>
                      <div
                        class="text-grey-6 full-height vertical-middle text-left"
                        style="width: 70px;"
                      >
                        <div class="q-mt-xs text-right">{{ '200' }} {{ '-' }}</div>
                      </div>
                    </q-item-label>
                      <div class="col ellipsis row justify-start assembly__components-name_mobile">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                      </div>
                  </q-item-section>
                </q-item>
              </q-list>

              <q-separator class="q-my-xs" />

              <q-list 
              dense
              :class="{active: activeComponents == 2}"
              >
                <q-item-label 
                header 
                class="text-body1 font-medium q-py-sm q-px-none assembly__components-label">
                {{ 'מארז מארז' }}
                <div 
                class="assembly__components-button"
                @click="changeActiveComponents(2)"
                >
                  <span class="change">
                    שינוי
                  </span>
                  <span class="close">
                    סגור
                  </span>
                  <q-btn
                    icon="mdi-chevron-right"
                    round
                    size="xs"
                  />
                </div>
                </q-item-label>
                <div class="col ellipsis row justify-start assembly__components-subtitle">
                  <div 
                  class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines"
                  v-if="activeComponents !== 2"
                  >{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                </div>
                <q-item 
                class="q-pa-none" 
                tag="label" 
                v-ripple 
                active-class="bg-grey-3 text-black" 
                :active="product1.val === '1'" 
                style="padding: 0; height: 20px;"
                >
                  <q-item-section avatar class="q-pa-none order-last" style="padding: 0; min-width: auto;">
                    <q-radio v-model="product1.val" val="1" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="row no-wrap justify-start">
                      <div class="flex flex-center q-mx-xs assembly__components-image">
                        <q-img
                          :src="product.image"
                          width="25px"
                        ></q-img>
                      </div>
                      <div class="col ellipsis row justify-start assembly__components-name">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                      </div>
                      <div class="flex flex-center q-mx-xs" @click.stop.prevent>
                        <QuantityInput
                          @click.stop.prevent
                          v-model:quantity.sync="product1.quantity"
                        />
                      </div>
                      <div
                        class="text-grey-6 full-height vertical-middle text-left"
                        style="width: 70px;"
                      >
                        <div class="q-mt-xs text-right">{{ '16516' }} {{ '+' }}</div>
                      </div>
                    </q-item-label>
                    <div class="col ellipsis row justify-start assembly__components-name_mobile">
                      <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                    </div>
                  </q-item-section>
                </q-item>

                <q-item class="q-pa-none" tag="label" v-ripple active-class="bg-grey-3 text-black" :active="product1.val === '2'" style="padding: 0; height: 20px;">
                  <q-item-section avatar class="q-pa-none order-last" style="padding: 0; min-width: auto;">
                    <q-radio v-model="product1.val" val="2" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="row no-wrap justify-start">
                      <div class="flex flex-center q-mx-xs assembly__components-image">
                        <q-img
                          :src="product.image"
                          width="25px"
                        ></q-img>
                      </div>
                      <div class="col ellipsis row justify-start assembly__components-name">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                      </div>
                      <div class="flex flex-center q-mx-xs" @click.stop.prevent>
                        <QuantityInput
                          @click.stop.prevent
                          v-model:quantity.sync="product2.quantity"
                        />
                      </div>
                      <div
                        class="text-grey-6 full-height vertical-middle text-left"
                        style="width: 70px;"
                      >
                        <div class="q-mt-xs text-right">{{ '0' }} {{ '' }}</div>
                      </div>
                    </q-item-label>
                      <div class="col ellipsis row justify-start assembly__components-name_mobile">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                      </div>
                  </q-item-section>
                </q-item>

                <q-item class="q-pa-none" tag="label" v-ripple active-class="bg-grey-3 text-black" :active="product1.val === '3'" style="padding: 0; height: 20px;">
                  <q-item-section avatar class="q-pa-none order-last" style="padding: 0; min-width: auto;">
                    <q-radio v-model="product1.val" val="3" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="row no-wrap justify-start">
                      <div class="flex flex-center q-mx-xs assembly__components-image">
                        <q-img
                          :src="product.image"
                          width="25px"
                        ></q-img>
                      </div>
                      <div class="col ellipsis row justify-start assembly__components-name">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                      </div>
                      <div class="flex flex-center q-mx-xs" @click.stop.prevent>
                        <QuantityInput
                          @click.stop.prevent
                          v-model:quantity.sync="product3.quantity"
                        />
                      </div>
                      <div
                        class="text-grey-6 full-height vertical-middle text-left"
                        style="width: 70px;"
                      >
                        <div class="q-mt-xs text-right">{{ '200' }} {{ '-' }}</div>
                      </div>
                    </q-item-label>
                    <div class="col ellipsis row justify-start assembly__components-name_mobile">
                      <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>

              <q-separator class="q-my-xs" />

              <q-list 
              dense
              :class="{active: activeComponents == 3}"
              >
                <q-item-label 
                header 
                class="text-body1 font-medium q-py-sm q-px-none assembly__components-label">
                {{ 'מארז מארז' }}
                <div 
                class="assembly__components-button"
                @click="changeActiveComponents(3)"
                >
                  <span class="change">
                    שינוי
                  </span>
                  <span class="close">
                    סגור
                  </span>
                  <q-btn
                    icon="mdi-chevron-right"
                    round
                    size="xs"
                  />
                </div>
                </q-item-label>
                <div 
                class="col ellipsis row justify-start assembly__components-subtitle"
                v-if="activeComponents !== 3"
                >
                  <div 
                  @click.stop.prevent="productDialog = true" 
                  class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">
                  {{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}
                  </div>
                </div>
                <q-item class="q-pa-none" tag="label" v-ripple active-class="bg-grey-3 text-black" :active="product2.val === '1'" style="padding: 0; height: 20px;">
                  <q-item-section avatar class="q-pa-none order-last" style="padding: 0; min-width: auto;">
                    <q-radio v-model="product2.val" val="1" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="row no-wrap justify-start">
                      <div class="flex flex-center q-mx-xs assembly__components-image">
                        <q-img
                          :src="product.image"
                          width="25px"
                        ></q-img>
                      </div>
                      <div class="col ellipsis row justify-start assembly__components-name assembly__components-name">
                        <div 
                        @click.stop.prevent="productDialog = true" 
                        class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">
                        {{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}
                        </div>
                      </div>
                      <div class="flex flex-center q-mx-xs" @click.stop.prevent>
                        <QuantityInput
                          @click.stop.prevent
                          v-model:quantity.sync="product1.quantity"
                        />
                      </div>
                      <div
                        class="text-grey-6 full-height vertical-middle text-left"
                        style="width: 70px;"
                      >
                        <div class="q-mt-xs text-right">{{ '16516' }} {{ '+' }}</div>
                      </div>
                    </q-item-label>
                    <div class="col ellipsis row justify-start assembly__components-name_mobile">
                      <div 
                      @click.stop.prevent="productDialog = true" 
                      class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">
                      {{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}
                      </div>
                    </div>
                  </q-item-section>
                </q-item>

                <q-item class="q-pa-none" tag="label" v-ripple active-class="bg-grey-3 text-black" :active="product2.val === '2'" style="padding: 0; height: 20px;">
                  <q-item-section avatar class="q-pa-none order-last" style="padding: 0; min-width: auto;">
                    <q-radio v-model="product2.val" val="2" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="row no-wrap justify-start">
                      <div class="flex flex-center q-mx-xs assembly__components-image">
                        <q-img
                          :src="product.image"
                          width="25px"
                        ></q-img>
                      </div>
                      <div class="col ellipsis row justify-start assembly__components-name">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                      </div>
                      <div class="flex flex-center q-mx-xs" @click.stop.prevent>
                        <QuantityInput
                          @click.stop.prevent
                          v-model:quantity.sync="product2.quantity"
                        />
                      </div>
                      <div
                        class="text-grey-6 full-height vertical-middle text-left"
                        style="width: 70px;"
                      >
                        <div class="q-mt-xs text-right">{{ '0' }} {{ '' }}</div>
                      </div>
                    </q-item-label>
                    <div class="col ellipsis row justify-start assembly__components-name_mobile">
                      <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                    </div>
                  </q-item-section>
                </q-item>

                <q-item class="q-pa-none" tag="label" v-ripple active-class="bg-grey-3 text-black" :active="product2.val === '3'" style="padding: 0; height: 20px;">
                  <q-item-section avatar class="q-pa-none order-last" style="padding: 0; min-width: auto;">
                    <q-radio v-model="product2.val" val="3" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="row no-wrap justify-start">
                      <div class="flex flex-center q-mx-xs assembly__components-image">
                        <q-img
                          :src="product.image"
                          width="25px"
                        ></q-img>
                      </div>
                      <div class="col ellipsis row justify-start assembly__components-name">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                      </div>
                      <div class="flex flex-center q-mx-xs" @click.stop.prevent>
                        <QuantityInput
                          @click.stop.prevent
                          v-model:quantity.sync="product3.quantity"
                        />
                      </div>
                      <div
                        class="text-grey-6 full-height vertical-middle text-left"
                        style="width: 70px;"
                      >
                        <div class="q-mt-xs text-right">{{ '200' }} {{ '-' }}</div>
                      </div>
                    </q-item-label>
                    <div class="col ellipsis row justify-start assembly__components-name_mobile">
                      <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>

              <q-separator class="q-my-xs" />

              <q-list 
              dense
              :class="{active: activeComponents == 4}"
              >
                <q-item-label header class="text-body1 font-medium q-py-sm q-px-none assembly__components-label">
                  {{ 'מארז מארז' }}
                <div 
                class="assembly__components-button"
                @click="changeActiveComponents(4)"
                >
                  <span class="change">
                    שינוי
                  </span>
                  <span class="close">
                    סגור
                  </span>
                  <q-btn
                    icon="mdi-chevron-right"
                    round
                    size="xs"
                  />
                </div>
                </q-item-label>
                <div 
                class="col ellipsis row justify-start assembly__components-subtitle"
                v-if="activeComponents !== 4"
                >
                  <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                </div>
                <q-item class="q-pa-none" tag="label" v-ripple active-class="bg-grey-3 text-black" :active="product3.val.includes('1')" style="padding: 0; height: 20px;">
                  <q-item-section avatar class="q-pa-none order-last" style="padding: 0; min-width: auto;">
                    <q-checkbox v-model="product3.val" val="1" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="row no-wrap justify-start">
                      <div class="flex flex-center q-mx-xs assembly__components-image">
                        <q-img
                          :src="product.image"
                          width="25px"
                        ></q-img>
                      </div>
                      <div class="col ellipsis row justify-start assembly__components-name">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                      </div>
                      <div class="flex flex-center q-mx-xs" @click.stop.prevent>
                        <QuantityInput
                          @click.stop.prevent
                          v-model:quantity.sync="product1.quantity"
                        />
                      </div>
                      <div
                        class="text-grey-6 full-height vertical-middle text-left"
                        style="width: 70px;"
                      >
                        <div class="q-mt-xs text-right">{{ '1516' }} {{ '+' }}</div>
                      </div>
                    </q-item-label>
                    <div class="col ellipsis row justify-start assembly__components-name_mobile">
                      <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">{{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}</div>
                    </div>
                  </q-item-section>
                </q-item>

                <q-item class="q-pa-none" tag="label" v-ripple active-class="bg-grey-3 text-black" :active="product3.val.includes('2')" style="padding: 0; height: 20px;">
                  <q-item-section avatar class="q-pa-none order-last" style="padding: 0; min-width: auto;">
                    <q-checkbox v-model="product3.val" val="2" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="row no-wrap justify-start">
                      <div class="flex flex-center q-mx-xs assembly__components-image">
                        <q-img
                          :src="product.image"
                          width="25px"
                        ></q-img>
                      </div>
                      <div class="col ellipsis row justify-start assembly__components-name">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines assembly__components-label">
                          {{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}
                          <div class="assembly__components-button">
                            <span class="change">
                              שינוי
                            </span>
                            <span class="close">
                              סגור
                            </span>
                            <q-btn
                              icon="mdi-chevron-right"
                              round
                              size="xs"
                              @click="activeComponents = 5"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-center q-mx-xs" @click.stop.prevent>
                        <QuantityInput
                          @click.stop.prevent
                          v-model:quantity.sync="product2.quantity"
                        />
                      </div>
                      <div
                        class="text-grey-6 full-height vertical-middle text-left"
                        style="width: 70px;"
                      >
                        <div class="q-mt-xs text-right">{{ '500' }} {{ '+' }}</div>
                      </div>
                    </q-item-label>
                      <div class="assembly__components-name_mobile">
                        <div 
                        @click.stop.prevent="productDialog = true" 
                        class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines">
                          {{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}
                        </div>
                      </div>
                  </q-item-section>
                </q-item>

                <q-item class="q-pa-none" tag="label" v-ripple active-class="bg-grey-3 text-black" :active="product3.val.includes('3')" style="padding: 0; height: 20px;">
                  <q-item-section avatar class="q-pa-none order-last" style="padding: 0; min-width: auto;">
                    <q-checkbox v-model="product3.val" val="3" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="row no-wrap justify-start">
                      <div class="flex flex-center q-mx-xs assembly__components-image">
                        <q-img
                          :src="product.image"
                          width="25px"
                        ></q-img>
                      </div>
                      <div class="col ellipsis row justify-start assembly__components-name">
                        <div @click.stop.prevent="productDialog = true" class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines assembly__components-label">
                          {{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}
                          <div class="assembly__components-button">
                            <span class="change">
                              שינוי
                            </span>
                            <span class="close">
                              סגור
                            </span>
                            <q-btn
                              icon="mdi-chevron-right"
                              round
                              size="xs"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-center q-mx-xs" @click.stop.prevent>
                        <QuantityInput
                          @click.stop.prevent
                          v-model:quantity.sync="product3.quantity"
                        />
                      </div>
                      <div
                        class="text-grey-6 full-height vertical-middle text-left"
                        style="width: 70px;"
                      >
                        <div class="q-mt-xs text-right">{{ '300' }} {{ '+' }}</div>
                      </div>
                    </q-item-label>
                    <div class="col ellipsis row justify-start assembly__components-name_mobile">
                      <div 
                      class="product-link q-mt-xs q-mx-xs font-size-15 ellipsis-2-lines"
                      @click.stop.prevent="productDialog = true" 
                      >
                        {{ '0 TRAY PENTIUM 1151 8 מעבד דור' }}
                      </div>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
              <q-separator class="q-my-xs" />
            </q-card-section>
          </q-card> -->
        </div>

        <div class="col-xs-7 text-grey-7 offset-5 assembly__description" style="margin-bottom: 40px;">
          <!-- <q-card
            class=""
            flat
          >
            <q-card-section v-if="assembly.products && assembly.products.length">
              <div class="q-mb-sm assembly__description-title">{{ $t('description') }}</div>
              <div class="text-body2" v-html="(assembly.products.find(p => p.pivot.main) || assembly.products[0]).description[$q.lang.isoName] || (assembly.products.find(p => p.pivot.main) || assembly.products[0]).description.ru"></div>
            </q-card-section>
          </q-card> -->
        </div>

        <div class="flex flex-center flex-column justify-between no-wrap q-mt-sm text-left assembly-addToCard">
          <div class="assembly-addToCard__links">
            <a @click="copyUrlToClipboard" tag="a" target="_blank" rel="noopener noreferrer" class="text-grey-5 text-caption" style="cursor: pointer; text-decoration: underline;">
              {{ $t('copyProductLink') }}
            </a>
            <div class="assembly-addToCard__socials">
              <div class="social-links">
                <a 
                :href="link.link"
                v-for="link in socialLinks"
                :key="link.link"
                >
                  <i :class="link.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <q-page-sticky 
    class="row full-width no-pointer-events assembly-product"
    :offset="[0, 45]" 
    expand 
    position="top" 
    >
      <div class="col-10 row limited-width justify-start q-col-gutter-md assembly-product__wrapper">
        <div class="col-xs-5 all-pointer-events assembly-product__item">
          <q-card
            class="bg-white q-pa-md"
            flat
          >
            <div class="row assembly-product__slider">
              <div class="col assembly-product__slide">
                <span class="assembly-product__slider-counter">
                  {{assemblyImages.map(ai => ai.id).indexOf(slide) + 1}}/{{assemblyImages.length}}
                </span>
                <div
                :style="`color: ${assembly.detectStatus ? '#72BA52' : '#F15A24'};`"
                class="absolute absolute-top-left q-px-xs assembly-product__status_mobile"
                >
                  &#9679; {{ $t(`statusesNames.${assembly.detectStatus ? 'instock' : 'notAvailable'}`) }}
                </div>
                <q-carousel
                  :thumbnails="slideProductFullscreen"
                  animated
                  height="300px"
                  infinite
                  navigation-position="right"
                  swipeable
                  v-model:fullscreen="slideProductFullscreen"
                  v-model="slide"
                >
                  <q-carousel-slide
                    :img-src="image.src"
                    :key="image.id"
                    :name="image.id"
                    class="q-pa-none"
                    style="background-size: contain; background-repeat: no-repeat;"
                    v-for="image in assemblyImages"
                    @click="slideProductFullscreen = !slideProductFullscreen"
                  />
                  <template #control>
                    <q-carousel-control
                      :offset="slideProductFullscreen ? [18, 18] : [0, 0]"
                      position="top-left"
                    >
                      <q-btn
                        square dense color="grey" text-color="white"
                        :icon="slideProductFullscreen ? 'close_fullscreen' : 'open_in_full'"
                        @click="slideProductFullscreen = !slideProductFullscreen"
                      />
                    </q-carousel-control>
                  </template>
                </q-carousel>
                <div class="text-grey-6 q-my-none text-caption assembly-product__original">
                  {{ $t('imageMayBeUnoriginal') }}
                </div>
                <div
                  class="font-size-15 q-my-none assembly-product__status"
                  :style="`color: ${assembly.detectStatus ? '#72BA52' : '#F15A24'};`"
                >
                  {{ $t(`statusesNames.${assembly.detectStatus ? 'instock' : 'notAvailable'}`) }}
                </div>
              </div>
              <div
                class="col-auto column justify-center assembly-product__slider-buttons"
                style="width: 78px;"
              >
                <div class="col q-mb-sm flex flex-center">
                  <q-btn
                    @click="changeSlideRange(-1)"
                    icon="mdi-chevron-up"
                    round
                    size="xs"
                  />
                </div>
                <div
                  :key="image.id"
                  :style="slide === image.id ? 'border: 1px solid #cccccc;' : 'border: 1px solid #f2f2f2;'"
                  class="flex flex-center q-mb-sm"
                  style="border-radius: 5px;"
                  v-for="image in images"
                >
                  <q-img
                    :src="image.src"
                    @click="slide = image.id"
                    class="cursor-pointer rounded-borders text-center"
                    fit="contain"
                    height="78px"
                  />
                </div>
                <div class="col q-mb-sm flex flex-center">
                  <q-btn
                    @click="changeSlideRange(1)"
                    icon="mdi-chevron-down"
                    round
                    size="xs"
                  />
                </div>
              </div>
            </div>
            <q-card-section class="q-pa-none assembly-product__slider-info">
              <div class="flex flex-center justify-between no-wrap">
                <div>
                  <div class="text-h5 font-medium">
                    {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.amount)) }} ₪
                  </div>
                  <div class="font-size-15 font-medium text-grey-6">
                    {{ $t('withoutVat') }} : {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.price)) }} ₪
                  </div>
                </div>
                <QuantityInput
                  :quantity="assembly.quantity"
                  @click.stop.prevent
                  @update:quantity="(val) => changeQtyAssembly(val)"
                />
              </div>
              <q-separator class="q-my-sm" />
              <div class="flex flex-center justify-between no-wrap">
                <span
                  class="text-h6 q-mt-sm q-mb-xs ellipsis-2-lines cursor-pointer"
                >{{ assembly.name }}</span>
                <q-btn
                  @click="$store.dispatch('main/copyToClipboard', {text: assembly.name, message: this.$t('copied')})"
                  class="flip-vertical q-px-none"
                  color="grey-5"
                  flat
                  icon="mdi-content-copy"
                ></q-btn>
              </div>
              <div class="flex flex-center justify-between no-wrap">
                <span class="text-caption text-grey font-size-15 ellipsis">
                  {{ $t('assemblyNumber') }} : {{ (assembly.products.find(p => p.pivot.main) || assembly.products[0]).sku_original }}
                </span>
                <q-btn
                  @click="$store.dispatch('main/copyToClipboard', {text: (assembly.products.find(p => p.pivot.main) || assembly.products[0]).sku_original, message: this.$t('copied')})"
                  class="flip-vertical q-px-none"
                  color="grey-5"
                  flat
                  icon="mdi-content-copy"
                ></q-btn>
              </div>
              <div class="text-start q-mt-lg">
                <q-btn
                  @click="$store.dispatch('cart/addAssemblyToCart', assembly)"
                  :disable="!assembly.detectStatus"
                  :label="$t('putToCart')"
                  class="q-px-xl q-mx-none full-width hover-black-bg"
                  flat
                  no-caps
                  no-wrap
                  outline
                ></q-btn>
              </div>
              <div class="flex flex-center justify-between no-wrap q-mt-sm text-left">
                <a @click="copyUrlToClipboard" tag="a" target="_blank" rel="noopener noreferrer" class="text-grey-5 text-caption" style="cursor: pointer; text-decoration: underline;">
                  {{ $t('copyProductLink') }}
                </a>
                <div class="social-links">
                  <a 
                  :href="link.link"
                  v-for="link in socialLinks"
                  :key="link.link"
                  >
                    <i :class="link.icon"></i>
                  </a>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <q-card-section class="q-pa-none assembly-product__slider-info_mobile">
        <div class="flex flex-center justify-between no-wrap">
          <div>
            <div class="text-h5 font-medium assembly-product__price">
              {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.amount)) }} ₪
            </div>
            <div class="font-size-15 font-medium text-grey-6 assembly-product__subprice">
              {{ $t('includeVat') }} : {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.price)) }} ₪
            </div>
          </div>
          <QuantityInput
            :quantity="assembly.quantity"
            @click.stop.prevent
            @update:quantity="(val) => changeQtyAssembly(val)"
          />
        </div>
        <q-separator class="q-my-sm" />
        <div class="flex flex-center justify-between no-wrap">
          <span
            class="text-h6 q-mt-sm q-mb-xs ellipsis-2-lines cursor-pointer assembly-product__name"
          >{{ assembly.name }}</span>
          <q-btn
            @click="$store.dispatch('main/copyToClipboard', {text: assembly.name, message: this.$t('copied')})"
            class="flip-vertical q-px-none"
            color="grey-5"
            flat
            icon="mdi-content-copy"
          ></q-btn>
        </div>
        <div class="flex flex-center justify-between no-wrap assembly-product__number">
          <span class="text-caption text-grey font-size-15" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
            {{ $t('assemblyNumber') }} : {{ (assembly.products.find(p => p.pivot.main) || assembly.products[0]).sku_original }}
          </span>
          <q-btn
            @click="$store.dispatch('main/copyToClipboard', {text: (assembly.products.find(p => p.pivot.main) || assembly.products[0]).sku_original, message: this.$t('copied')})"
            class="flip-vertical q-px-none"
            color="grey-5"
            flat
            icon="mdi-content-copy"
          ></q-btn>
        </div>
        <div class="text-start q-mt-lg assembly-product__addToCard">
          <q-btn
            @click="$store.dispatch('cart/addAssemblyToCart', assembly)"
            :disable="!assembly.detectStatus"
            :label="$t('putToCart')"
            class="q-px-xl q-mx-none full-width hover-black-bg"
            flat
            no-caps
            no-wrap
            outline
          ></q-btn>
        </div>
        <div class="flex flex-center justify-between no-wrap q-mt-sm text-left assembly-product__socials">
          <a @click="copyUrlToClipboard" tag="a" target="_blank" rel="noopener noreferrer" class="text-grey-5 text-caption" style="cursor: pointer; text-decoration: underline;">
            {{ $t('copyProductLink') }}
          </a>
          <q-img
            src="images/social.png"
            width="172px"
          />
        </div>
      </q-card-section>
    </q-page-sticky> 
    <div class="order-details__breadcrumbs assembly__breadcrumbs" dir="rtr">
      товар единичный / сборка
    </div>   
  </q-page>
</template>

<script>
import QuantityInput from '../components/QuantityInput.vue'
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  computed: {
    // images () {
    //   return (this.product && this.product.images.slice(this.slideRange, this.slideRange + 3)) || []
    // },
    images () {
      return (this.assembly && this.assemblyImages && this.assemblyImages.slice(this.slideRange, this.slideRange + 3)) || []
    },
    assemblyImagesIds () {
      return [...new Set(this.assembly.products.flatMap(({pivot}) => pivot.image_id ? pivot.image_id : [] ))]
    },
    assemblyImages () {
      let images = []
      if (this.assemblyImagesIds.length > 1) {
        !!this.assembly && this.assembly.products.map(p => {
          !!p && p.images && p.images.map(i => {
            if (this.assemblyImagesIds.includes(i.id)) {
              images.push(i)
            }
          })
        })
      } else if (this.assemblyImagesIds.length == 1) {
        !!this.assembly && this.assembly.products.map(p => {
          if ((p.images.map(i => i.id)).includes(this.assemblyImagesIds[0])) {
            images = p.images
          }
        })
      } else {
        !!this.assembly && this.assembly.products.map(p => {
          !!p && p.images && p.images.map((i, index) => {
            if (p.pivot.main && index == 0) {
              images.push(i)
            }
          })
        })
      }
      return images
    },
    productImages () {
      return (this.product && this.product.images.slice(this.slideRange, this.slideRange + 3)) || []
    },
    socialLinks () {
      return [
        {
          text: 'Telegram',
          icon: 'fab fa-telegram',
          link: `https://telegram.me/share/url?url=${window.location.origin}${this.$route.path}`
        },
        {
          text: 'Whatsapp',
          icon: 'fab fa-whatsapp',
          link: `https://api.whatsapp.com/send?text=${window.location.origin}${this.$route.path}`
        },
        {
          text: 'Viber',
          icon: 'fab fa-viber',
          link: `viber://forward?text=${window.location.origin}${this.$route.path}`
        },
        {
          text: 'Facebook',
          icon: 'fab fa-facebook',
          link: `https://www.facebook.com/sharer.php?u=${window.location.origin}${this.$route.path}`
        },
        {
          text: 'Twitter',
          icon: 'fab fa-twitter',
          link: `https://twitter.com/intent/tweet?url=${window.location.origin}${this.$route.path}`
        },
      ]
    },
  },

  components: {
    QuantityInput,
  },

  async created () {
    const $store = useStore()
    let assemblyProducts = []
    if (this.$route.query.main && this.$route.query.main.length) {
      let main = decodeURI(this.$route.query.main).split(',')
      let qty = decodeURI(this.$route.query.qty).split(',')
      main.forEach((m, indx) => {
        assemblyProducts.push({
          id: +m,
          name: {},
          root_category: {
            name: {},
          },
          pivot: {
            main: true,
            product_id: +m,
            qty: +qty[indx],
          },
        })
      })
      this.$store.commit('main/setAssembly', {
        id: this.assemblyId,
        name: {},
        products: assemblyProducts,
      })
    }
    await $store.dispatch('main/getAssembly', {id: this.assemblyId})
    this.slide = (this.assemblyImages[0] && this.assemblyImages[0].id) || 0
  },

  data () {
    return {
      product: {
        assembly_number: '5878888886456',
        description: 'С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и бога',
        id: 3,
        image: 'images/monitor.png',
        images: [
          {
            id: 1,
            src: 'images/monitor.png',
          },
          {
            id: 2,
            src: 'images/town2.png',
          },
          {
            id: 3,
            src: 'images/monitor.png',
          },
          {
            id: 4,
            src: 'images/town2.png',
          },
          {
            id: 5,
            src: 'images/monitor.png',
          },
        ],
        name: 'ssd2TbRX580_ssd2Tb_RX5 _ssd2Tbd2Tb_RX580_ss ssd2TbRX580_ssd2Tb_RX5 ssd2TbRX580_ss fdfdfdfdfdf',
        price: 1151.00,
        status: 'instock',
        status_color: '#72BA52',
        vat_price: 1438.75,
        characteristics: [
          {
            id: 1,
            category: 'קירור אוויר למעבד',
            name: 'Тут у нас Значения характеристик',
          },
          {
            id: 2,
            category: 'אם למעבדי אינטל דור ',
            name: 'Одиночного товара',
          },
          {
            id: 3,
            category: 'מעבד דור',
            name: 'TEL G5400 TRAY PENTIUM 1151 8',
          },
          {
            id: 4,
            category: 'מארז וספק',
            name: 'SOLID 1700 12CM 500W ATX',
          },
          {
            id: 5,
            category: 'צורב פנימי למחשב ניי',
            name: 'LG DVD-RW BLACK',
          },
          {
            id: 6,
            category: 'דיסק קשיח פנימי',
            name: 'WD 1TB Blue 7200rpm 64MB 3.5',
          },
          {
            id: 7,
            category: 'סק פנימי',
            name: 'выпыSSD 240GB GSTFS31240 GNTD',
          },
          {
            id: 8,
            category: 'זכרון לניי •סק פנימי',
            name: 'INNGSTON KVR26N19S6-4 4GB DDR4 2666',
          },
        ],
        quantity: 2,
      },
      product1: {
        val: '2',
        quantity: 2,
      },
      product2: {
        val: '3',
        quantity: 1,
      },
      product3: {
        val: ['1', '2', '3'],
        quantity: 1,
      },
      productDialog: false,
      slide: 1,
      slideRange: 0,
      slideProduct: 1,
      slideProductFullscreen: false,
      socialNetworks: [
        {
          id: 1,
          name: 'telegram',
          icon: '',
        },
        {
          id: 2,
          name: 'whatsapp',
          icon: '',
        },
        {
          id: 3,
          name: 'viber',
          icon: '',
        },
        {
          id: 3,
          name: 'facebook',
          icon: '',
        },
        {
          id: 3,
          name: 'twitter',
          icon: '',
        },
      ],
      activeComponents: null
    }
  },

  methods: {
    changeSlideRange(val, type = null) {
      if (type === 'product' && ((val > 0 && this.slideRange >= 0 && this.slideRange < this.product.images.length - 3) || (val < 0 && this.slideRange > 0 && this.slideRange < this.product.images.length - 2))) {
        this.slideRange += val
      } else if (!type && ((val > 0 && this.slideRange >= 0 && this.slideRange < this.assemblyImages.length - 3) || (val < 0 && this.slideRange > 0 && this.slideRange < this.assemblyImages.length - 2))) {
        this.slideRange += val
      }
    },
    changeActiveComponents(num) {
      this.activeComponents == num ? this.activeComponents = null : this.activeComponents = num
    },
    changeQtyAssembly (quantity) {
      this.$store.dispatch('main/getAssembly', {
        quantity,
        id: this.assembly.id,
      })
    },
    copyUrlToClipboard () {
      this.$store.dispatch('main/copyToClipboard', {text: `${window.location.origin}${this.$route.path}`, message: this.$t('copied')})
      // window.history.pushState('', '', `${window.location.origin}${this.$route.path}`)
    },
  },

  name: 'PageProduct',

  setup () {
    const $route = useRoute()
    const $store = useStore()
    return {
      assemblyId: computed(() => $route.params.id),
      assembly: computed(() => $store.getters['main/assembly'] || {}),
      assemblySections: computed(() => $store.getters['main/assemblySections'])
    }
  },

  watch: {
    assemblyId (newVal, oldVal) {
      const $store = useStore()
      if (newVal) {
        // let assemblyProducts = []
        // if (this.$route.query.main && this.$route.query.main.length) {
        //   let main = decodeURI(this.$route.query.main).split(',')
        //   let qty = decodeURI(this.$route.query.qty).split(',')
        //   main.forEach((m, indx) => {
        //     assemblyProducts.push({
        //       id: +m,
        //       name: {},
        //       root_category: {
        //         name: {},
        //       },
        //       pivot: {
        //         main: true,
        //         product_id: +m,
        //         qty: +qty[indx],
        //       },
        //     })
        //   })
        //   // this.$store.commit('main/setAssembly', {
        //   //   id: this.assemblyId,
        //   //   name: {},
        //   //   products: assemblyProducts,
        //   // })
        // }
        this.$store.commit('main/setAssembly', {
          id: this.assemblyId,
          name: {},
          products: [],
        })
        this.$store.dispatch('main/getAssembly', {id: this.assemblyId})
      } else {
        this.$store.commit('main/setAssembly', {
          id: this.assemblyId,
          name: {},
          products: [],
        })
      }
      this.slide = (this.assemblyImages[0] && this.assemblyImages[0].id) || 0
    }
  },
})
</script>
