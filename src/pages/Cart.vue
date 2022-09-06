<template>
  <q-page class="bg-grey-1 row justify-center card">
    <div 
    class="col-xs-10 limited-width card-wrapper" 
    v-if="cartMode === 'start'"
    >
      <div class="row q-col-gutter-md q-mt-xs card-item">
        <div class="col-xs-9 q-pb-lg q-mb-xl card-item__wrapper">
          <q-card flat class="q-pr-sm q-pl-md q-pb-sm card-item__block">
            <q-card-section class="q-py-none card-item__block-header">
              <div class="row justify-between">
                <div class="flex flex-center text-grey-6 text-body1 card-item__header-title">{{ $t('customerCart') }}</div>
                <div class="flex flex-center">
                  <q-btn
                    @click="openDeletingAssemblyDialog()"
                    class="q-pa-none"
                    color="grey-6"
                    flat
                    icon="mdi-cart-off"
                  >
                    <q-tooltip
                      :delay="1000"
                      :offset="[10, 10]"
                      anchor="top middle"
                      class="bg-grey-3 text-black shadow-3"
                      self="bottom middle"
                    >
                      {{ $t('clearCart') }}
                    </q-tooltip>
                  </q-btn>
                </div>
              </div>
            </q-card-section>
            <q-card-section 
            class="q-pa-xs"
            v-if="cartMode === 'start'"
            >
              <div class="q-px-none q-py-none column items-stretch q-gutter-sm justify-between card-item__block-wrapper">
                <q-card
                  :key="product.id"
                  v-for="product in cartProducts"
                  class="light-shadow-10 bg-white full-width q-pa-xs card-item__card"
                >
                  <q-card-section horizontal>
                    <q-card-section class="col-auto flex flex-center q-pa-none product-image">
                      <div
                        :style="`color: ${product.status === 'enabled' ? '#72BA52' : '#F15A24'};`"
                        class="absolute absolute-top-left q-px-xs product-status_mobile"
                      >
                        &#9679; {{ $t(`statusesNames.${product.status === 'enabled' ? 'instock' : 'notAvailable'}`) }}
                      </div>
                      <q-img
                        :src="product.mainImage || assemblyImages(product)[0] && assemblyImages(product)[0].src"
                        class="rounded-borders"
                        width="138px"
                      />
                      <QuantityInput
                        :quantity="product.quantity"
                        @click.stop.prevent
                        @update:quantity="(val) => changeQtyAssembly(product, val)"
                        class="product-quantity_mobile"
                      />
                    </q-card-section>
                    <q-card-section class="col q-pa-none" style="min-width: 170px;">
                      <div class="flex flex-center justify-between no-wrap">
                        <span class="q-mb-xs ellipsis-2-lines text-body1 line-height-19 product-name">{{ product.name }}</span>
                        <q-btn
                          @click="$store.dispatch('main/copyToClipboard', {text: product.name, message: this.$t('copied')})"
                          class="flip-vertical q-px-none copy-btn"
                          color="grey-5"
                          flat
                          icon="mdi-content-copy"
                          size="sm"
                        ></q-btn>
                      </div>
                      <div class="flex flex-center justify-between no-wrap product-assebmly">
                        <div class="text-body2 text-grey row" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
                          <div class="col-auto product-assebmlyNumber">
                            {{ $t('assemblyNumber') }} :
                          </div>
                          <div class="col q-px-xs product-number" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
                            {{ [...new Set(product.products.map(p => p.root_category.id))].length === 1 ? (product.products.find(p => p.pivot.main) || product.products[0]).sku_original : product.sku }}
                          </div>
                        </div>
                        <q-btn
                          @click="$store.dispatch('main/copyToClipboard', {text: [...new Set(product.products.map(p => p.root_category.id))].length === 1 ? (product.products.find(p => p.pivot.main) || product.products[0]).sku_original : product.sku, message: this.$t('copied')})"
                          class="flip-vertical q-px-none copy-btn"
                          color="grey-5"
                          flat
                          icon="mdi-content-copy"
                          size="sm"
                        ></q-btn>
                      </div>
                      <div class="text-subtitle2 q-mt-sm product-status" 
                      :style="`color: ${product.status === 'enabled' ? '#72BA52' : '#F15A24'};`">
                      {{ $t(`statusesNames.${product.status === 'enabled' ? 'instock' : 'notAvailable'}`) }}
                      </div>
                      <div class="row items-end">
                        <div class="col">
                          <div class="text-body1 font-medium line-height-19 product-price">
                            {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(product.amount)) }} ₪
                          </div>
                          <div class="text-subtitle2 font-medium text-grey-6 line-height-17 product-desc">
                            {{ $t('withoutVat') }} : {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(product.price)) }} ₪
                          </div>
                        </div>
                        <div class="col-auto text-start product-quantity">
                          <QuantityInput
                            :quantity="product.quantity"
                            @click.stop.prevent
                            @update:quantity="(val) => changeQtyAssembly(product, val)"
                          />
                        </div>
                      </div>
                    </q-card-section>
                    <q-separator vertical class="q-my-sm q-mx-sm" />
                    <q-card-section class="col q-pa-none product-specifications">
                      <q-scroll-area class="q-pa-none" style="height: 100%;" v-if="[...new Set(product.products.map(p => p.root_category.id))].length === 1">
                        <div
                          :key="characteristic.id"
                          class="q-mb-xs line-height-17"
                          v-for="characteristic in (product.products.find(p => p.pivot.main) || product.products[0]).product_specifications"
                        >
                          <div class="font-meduim content-stretch text-grey-7">{{ characteristic.name }}</div>
                          <div class="text-grey-5">{{ characteristic.value }}</div>
                        </div>
                      </q-scroll-area>
                      <q-scroll-area class="q-pa-none" style="height: 100%;" v-else>
                        <div
                          :key="characteristic.id"
                          class="q-mb-xs line-height-17"
                          v-for="characteristic in product.products.filter(p => !!p && p.pivot.main)"
                        >
                          <div class="font-meduim content-stretch text-grey-7">{{ characteristic.root_category.name[$q.lang.isoName] }}</div>
                          <div class="text-grey-5">{{ characteristic.name[$q.lang.isoName] }}</div>
                        </div>
                      </q-scroll-area>
                      <q-btn
                        @click="openDeletingAssemblyDialog(product.id)"
                        class="absolute-top-right bg-white"
                        color="grey-4"
                        flat
                        icon="mdi-close"
                        padding="0"
                        size="xs"
                        style="border-radius: 0;"
                      >
                        <q-tooltip
                          :delay="1000"
                          :offset="[10, 10]"
                          anchor="top middle"
                          class="bg-grey-3 text-black shadow-3"
                          self="bottom middle"
                        >
                          {{ $t('remove') }}
                        </q-tooltip>
                      </q-btn>
                    </q-card-section>
                  </q-card-section>
                  <q-btn
                    class="q-pa-none product-remove_mobile"
                    @click="openDeletingAssemblyDialog(product.id)"
                    color="grey-6"
                    flat
                    icon="mdi-cart-off"
                  >
                  </q-btn>
                </q-card>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    
    <q-card-section 
    class="q-pa-none q-px-xs card-ordering card-wrapper"
    v-if="cartMode === 'continue-ordering'"
    >
    <div class="card-item__block">
      <q-card-section class="q-py-none card-item__block-header card-item__header-title">
        <div class="row justify-between">
          <div 
          class="flex flex-center text-grey-6 text-body1"
          >{{ $t('customerCart') }}</div>
        </div>
      </q-card-section>
        <CartMini
          :cartProducts="cartProducts"
        />
      </div>
    </q-card-section>

    <div class="col-xs-10 limited-width card-continue" v-if="cartMode === 'continue-ordering'">
      <div class="row justify-between q-col-gutter-md q-mt-xs card-continue__wrapper">
        <div class="col-xs-7 card-continue__item">
          <q-form @submit="onSubmit" ref="preOrderFormRef">
          <q-card
            class="bg-white"
            flat
            style="overflow: hidden;"
          >
            <q-card-section class="q-py-xs">
              <div>
                <h4 class="q-ma-none q-pa-none text-grey-7 font-medium card-continue__title"> {{ $t('clientInformation') }} </h4>
                <h6 class="text-grey-7 font-medium card-continue__subtitle"> בזמן של הזמנה מוקדמת, החשבון האישי של הלקוח ייווצר אוטומטית. הכניסה והסיסמה מהחשבון יישלחו למאייל שלך </h6>
                <!-- <div class="text-grey-5">
                  {{ $t('preOrderAlert') }}
                </div> -->
              </div>
            </q-card-section>
            <q-card-section class="row q-col-gutter-sm q-py-xs dense-inputs card-continue__fields">
              <q-input
                :readonly="!!client.id"
                :rules="[val => !!val || '']"
                class="col-xs-6 col-sm-3 font-medium text-body1 card-continue__field card-continue__phone"
                color="grey"
                dense
                label-slot
                no-error-icon
                outlined
                type="tel"
                v-model="form.mobilePhone"
              >
                <template #label>
                  <div :class="{ 'text-right': form.mobilePhone }">{{ $t('mobilePhone') }} <span class="text-negative">*</span></div>
                </template>
              </q-input>
              <q-input
                :readonly="!!client.id"
                :rules="[val => !!val || '']"
                class="col-xs-6 col-sm-5 font-medium text-body1 card-continue__field card-continue__email"
                color="grey"
                dense
                label-slot
                no-error-icon
                outlined
                type="email"
                v-model="form.email"
              >
                <template #label>
                  <div :class="{ 'text-right': form.email }">{{ $t('email') }} <span class="text-negative">*</span></div>
                </template>
                <template #after>
                  <q-icon name="mdi-information-outline">
                    <q-tooltip
                      :delay="1000"
                      :offset="[10, 10]"
                      anchor="bottom left"
                      class="bg-grey-3 text-black shadow-3"
                      max-width="230px"
                      self="bottom right"
                    >
                      {{ $t('preOrderAlert') }}
                    </q-tooltip>
                  </q-icon>
                </template>
              </q-input>
              <div class="col-xs-12 q-pa-none q-ma-none"></div>
              <q-input
                :readonly="!!client.id"
                :rules="[val => !!val || '']"
                v-model="form.name"
                class="col-sm-3 font-medium text-body1 card-continue__field card-continue__name"
                color="grey"
                dense
                label-slot
                no-error-icon
                outlined
              >
                <template #label>
                  <div :class="{ 'text-right': form.name }">{{ $t('name') }} <span class="text-negative">*</span></div>
                </template>
              </q-input>
              <q-input
                :readonly="!!client.id"
                :rules="[val => !!val || '']"
                v-model="form.surname"
                class="col-sm-3 font-medium text-body1 card-continue__field card-continue__surname"
                color="grey"
                dense
                label-slot
                no-error-icon
                outlined
              >
                <template #label>
                  <div :class="{ 'text-right': form.surname }">{{ $t('surname') }} <span class="text-negative">*</span></div>
                </template>
              </q-input>
              <q-input
                :readonly="!!client.id"
                v-model="form.companyName"
                class="col-sm-3 font-medium text-body1 card-continue__field card-continue__company"
                color="grey"
                dense
                label-slot
                outlined
              >
                <template #label>
                  <div :class="{ 'text-right': form.companyName }">{{ $t('companyName') }}</div>
                </template>
              </q-input>
              <q-input
                :readonly="!!client.id"
                v-model="form.passport"
                class="col-sm-3 font-medium text-body1 card-continue__field card-continue__passport"
                color="grey"
                dense
                label-slot
                outlined
              >
                <template #label>
                  <div :class="{ 'text-right': form.passport }">{{ $t('passport') }}</div>
                </template>
              </q-input>
              <q-input
                :readonly="!!client.id"
                :rules="[val => !!val || '']"
                v-model="form.city"
                class="col-sm-3 font-medium text-body1 card-continue__field card-continue__city"
                color="grey"
                dense
                label-slot
                no-error-icon
                outlined
              >
                <template #label>
                  <div :class="{ 'text-right': form.city }">{{ $t('city') }} <span class="text-negative">*</span></div>
                </template>
              </q-input>
              <q-input
                :readonly="!!client.id"
                :rules="[val => !!val || '']"
                v-model="form.street"
                class="col-sm-3 font-medium text-body1 card-continue__field card-continue__street"
                color="grey"
                dense
                label-slot
                no-error-icon
                outlined
              >
                <template #label>
                  <div :class="{ 'text-right': form.street }">{{ $t('street') }} <span class="text-negative">*</span></div>
                </template>
              </q-input>
              <q-input
                :readonly="!!client.id"
                :rules="[val => !!val || '']"
                v-model="form.house"
                class="col font-medium text-body1 card-continue__field card-continue__house"
                color="grey"
                dense
                label-slot
                no-error-icon
                outlined
                stack-label
              >
                <template #label>
                  <div :class="{ 'text-right': form.house }">{{ $t('house') }} <span class="text-negative">*</span></div>
                </template>
              </q-input>
              <q-input
                :readonly="!!client.id"
                :rules="[val => !!val || '']"
                v-model="form.flat"
                class="col font-medium text-body1 card-continue__field card-continue__flat"
                color="grey"
                dense
                label-slot
                no-error-icon
                outlined
                stack-label
              >
                <template #label>
                  <div :class="{ 'text-right': form.flat }">{{ $t('flat') }} <span class="text-negative">*</span></div>
                </template>
              </q-input>
              <q-input
                :readonly="!!client.id"
                v-model="form.floor"
                class="col font-medium text-body1 card-continue__field card-continue__floor"
                color="grey"
                dense
                label-slot
                no-error-icon
                outlined
                stack-label
              >
                <template #label>
                  <div :class="{ 'text-right': form.floor }">{{ $t('floor') }}</div>
                </template>
              </q-input>
              <q-input
                :readonly="!!client.id"
                v-model="form.postAddress"
                class="col font-medium text-body1 card-continue__field card-continue__post"
                color="grey"
                dense
                label-slot
                outlined
                stack-label
              >
                <template #label>
                  <div :class="{ 'text-right': form.postAddress }">{{ $t('postAddress') }}</div>
                </template>
              </q-input>
              <div class="col-xs-12 q-pa-none q-ma-none"></div>
              <q-select
                :options="paymentTypeOptions"
                dir="rtl"
                :rules="[val => !!val || '']"
                class="col-xs-6 font-medium text-body1 q-pb-none card-continue__field card-continue__payment"
                dense
                label-slot
                menu-anchor="bottom left"
                menu-self="top left"
                no-error-icon
                outlined
                popup-content-style="transition-delay: 0.25s;"
                v-model="form.paymentType"
                hide-bottom-space
                input-class="ellipsis"
                input-style="padding-bottom: 5px; background-color: red !important;"
              >
                <template #label>
                  <div class="q-ma-none" :class="{ 'text-right': form.paymentType }">{{ $t('paymentType') }} <span class="text-negative">*</span></div>
                </template>
                <template #selected>
                  <div class="q-ma-none q-mb-sm ellipsis">{{ form.paymentType }}</div>
                </template>
              </q-select>
              <q-input
                v-model="form.comment"
                class="col-xs-6 font-medium text-body1 card-continue__field card-continue__comment"
                color="grey"
                dense
                label-slot
                outlined
              >
                <template #label>
                  <div :class="{ 'text-right': form.comment }">{{ $t('comment') }}</div>
                </template>
              </q-input>
            </q-card-section>
            <q-card-section class="row q-pt-xl q-px-sm card-continue__top-checkboxes">
              <q-checkbox
                :rules="[val => !!val || '']"
                class="col-xs-12 font-size-15"
                color="grey"
                v-model="form.agreeEmailBill"
              >
                {{ $t('agreeEmailBill') }} <span class="text-negative">*</span>
              </q-checkbox>
              <q-checkbox
                :rules="[val => !!val || '']"
                class="col-xs-12 font-size-15"
                color="grey"
                v-model="form.wantAnotherNameBill"
              >
                {{ $t('wantAnotherNameBill') }}
              </q-checkbox>
            </q-card-section>
            <q-card-section class="row q-py-none q-col-gutter-sm">
              <q-input
                :rules="[val => !!val || '']"
                class="col-xs-6 col-sm-3 font-medium line-height-17 text-body1 card-continue__field card-continue__billCompany"
                color="grey"
                dense
                label-slot
                no-error-icon
                outlined
                v-if="form.wantAnotherNameBill"
                v-model="form.billCompanyName"
              >
                <template #label>
                  <div :class="{ 'text-right': form.billCompanyName }">{{ $t('billCompanyName') }} <span class="text-negative">*</span></div>
                </template>
              </q-input>
              <q-input
                :rules="[val => !!val || '']"
                class="col-xs-6 col-sm-3 font-medium line-height-17 text-body1 card-continue__field card-continue__billPassport"
                color="grey"
                dense
                label-slot
                outlined
                v-if="form.wantAnotherNameBill"
                v-model="form.billPassport"
              >
                <template #label>
                  <div :class="{ 'text-right': form.billPassport }">{{ $t('billPassport') }} <span class="text-negative">*</span></div>
                </template>
              </q-input>
            </q-card-section>
            <q-card-section class="row q-col-gutter-sm q-pt-xl q-px-sm card-continue__bottom-checkboxes">
              <q-checkbox
                :rules="[val => !!val || '']"
                class="font-size-15 line-height-17"
                color="grey"
                v-model="form.agreement"
              >
                {{ $t('confirmReadUnderstoodAgreed') }}
                <a @click.stop target="_blank" href="/terms-of-use">{{ $t('usageAndPrivacyPolicy') }}</a> <span class="text-negative">*</span>
              </q-checkbox>
              <div class="col-xs-12 q-pa-none q-ma-none"></div>
              <div class="col-xs-6 col-sm-7 q-pa-none q-ma-none"></div>
              <q-btn
                :disabled="!form.agreement || !form.agreeEmailBill"
                :label="$t('makePreOrder')"
                class="col-xs-6 col-sm-5 q-mx-none hover-black-bg q-mt-xs order-button"
                flat
                no-caps
                no-wrap
                outline
                type="submit"
              ></q-btn>
            </q-card-section>
          </q-card>
          </q-form>
        </div>
        <div class="col-xs-5 card-continue__empty">
          <!-- <q-card
            class="bg-white"
            flat
            style="overflow: hidden;"
          >
            <q-card-section class="q-py-xs">
              <div>
                <h6 class="q-ma-none q-pa-none text-grey-7"> {{ $t('customerCart') }} </h6>
              </div>
            </q-card-section>
            <q-card-section style="max-height: 45vh; overflow-x: hidden;" class="scroll">
              <CartMini
                :cartProducts="cartProducts"
              />
            </q-card-section>
            <q-separator class="q-mx-md q-mt-md" />
            <q-card-section>
              <div class="text-grey-6 q-mb-xs">
                {{ $t('totalPayment') }} :
              </div>
              <div class="flex flex-center justify-between no-wrap">
                <div>
                  <div class="text-h6 font-medium">
                    {{ assembly.vat_price }} ₪
                  </div>
                  <div class="text-subtitle1 font-medium text-grey-6">
                    {{ $t('includeVat') }} : {{ assembly.price }} ₪
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card> -->
        </div>
      </div>
    </div>






<!-- <div class="full-width"><pre dir ="ltr">==={{JSON.stringify(cartP, undefined, 2)}}</pre></div> -->
<!-- <div class="full-width"><pre dir ="ltr">==={{JSON.stringify(cartProducts, undefined, 2)}}</pre></div> -->







    <!-- <div class="col-xs-10 limited-width" v-if="cartMode === 'make-preorder'">
      <div>
        <q-card
          class="bg-white q-mt-xl"
          flat
          style="overflow: hidden;"
        >
          <q-card-section class="q-py-xs">
            <div>
              <h6 class="q-ma-none q-pa-none text-grey-7 font-medium text-center">
                {{ $t('dear') }}
                {{ 'XXX' }},
                {{ $t('thanksForOrdering') }}
              </h6>
              <div class="row">
                <div class="text-grey-5 col-xs-7">
                  {{ 'Здесь прописывается какой-то текст, но его положат позже. заказ завершен. на вашу почту был выслан пароль и тдтд Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже. Здесь прописывается какой-то текст, но его положат позже.' }}
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="row q-col-gutter-sm q-pt-xl justify-end">
            <q-btn
              :label="$t('backToHome')"
              class="q-px-xl q-mx-none hover-black-bg q-mt-xs"
              flat
              no-caps
              no-wrap
              outline
              to="/"
            ></q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div> -->

    <q-dialog
      v-model="productDialog"
      persistent
      style="overflow: hidden;"
    >
      <q-card style="overflow: hidden; width: 80vw; max-width: 1100px;">
        <q-card-section>
          <q-btn flat square dense icon="close" v-close-popup />
        </q-card-section>
        <q-card-section style="max-height: 80vh" class="scroll">
          <div class="row justify-between q-col-gutter-md q-mt-xs">
            <div class="col-xs-6" style="position: sticky; top: 50px;">
              <q-carousel
                animated
                height="250px"
                infinite
                navigation-position="left"
                swipeable
                thumbnails
                v-model="slideProduct"
                v-model:fullscreen="slideProductFullscreen"
              >
                <q-carousel-slide
                  :img-src="image.src"
                  :key="image.id"
                  :name="image.id"
                  style="background-size: contain; background-repeat: no-repeat;"
                  v-for="image in product.images"
                />
                <template #control>
                <q-carousel-control
                  position="top-right"
                  :offset="[18, 18]"
                >
                  <q-btn
                    square dense color="grey" text-color="white"
                    :icon="slideProductFullscreen ? 'close_fullscreen' : 'open_in_full'"
                    @click="slideProductFullscreen = !slideProductFullscreen"
                  />
                </q-carousel-control>
              </template>
              </q-carousel>
              <q-separator color="grey-4" />
              <div class="flex flex-center justify-between no-wrap">
                <span
                  class="text-h6 q-mt-sm q-mb-xs ellipsis-2-lines cursor-pointer"
                >{{ product.name }}</span>
                <q-btn
                  @click="$store.dispatch('main/copyToClipboard', {text: product.name, message: this.$t('copied')})"
                  class="flip-vertical q-px-none"
                  color="grey-5"
                  flat
                  icon="mdi-content-copy"
                  size="sm"
                ></q-btn>
              </div>
              <div class="flex flex-center justify-between no-wrap">
                <span class="text-caption text-grey">
                  {{ assembly.sku }} : {{ $t('assemblyNumber') }}
                </span>
                <q-btn
                  @click="$store.dispatch('main/copyToClipboard', {text: assembly.sku, message: this.$t('copied')})"
                  class="flip-vertical q-px-none"
                  color="grey-5"
                  flat
                  icon="mdi-content-copy"
                  size="sm"
                ></q-btn>
              </div>
            </div>
            <!-- <q-separator color="grey-4" vertical /> -->
            <div class="col-xs-6">
              <q-list
                class="rounded-borders"
                dense
                padding
                separator
              >
                <q-item class="font-medium bg-grey-1">
                  <q-item-section>
                    {{ $t('characteristics') }}
                  </q-item-section>
                  <q-item-section>
                    {{ $t('values') }}
                  </q-item-section>
                </q-item>
                <q-item
                  :key="characteristic.id"
                  class="text-grey-6"
                  clickable
                  v-for="characteristic in (product.products.find(p => p.pivot.main) || product.products[0]).product_specifications"
                  v-ripple
                >
                  <q-item-section>
                    {{ characteristic.name }}
                  </q-item-section>
                  <q-item-section>
                    {{ characteristic.value }}
                  </q-item-section>
                </q-item>
              </q-list>
              <!-- <div>
                <div class="q-mb-sm bg-grey-1 font-medium">{{ $t('description') }}</div>
                <div class="text-body2 text-grey-6">{{ product.description }}</div>
              </div> -->
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

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

    <q-dialog v-model="showInfoDialog" persistent>
      <q-card class="q-pa-md" style="width: 330px;">
        <q-card-section class="row items-center full-width q-pa-xs q-pt-none">
          <div class="font-size-25 line-height-30 q-mb-md text-center full-width">
            {{ $t('thanksForOrdering') }}
          </div>
          <div class="font-size-15 line-height-17">
            {{ $t('infoAboutSendingEmails', {email: form.email}) }}
          </div>
        </q-card-section>
        <q-card-actions align="center" class="q-pa-xs q-pt-md">
          <q-btn
            :label="$t('backToHome')"
            no-caps
            outline
            to="/"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-sticky
      :offset="[18, 18]"
      class="full-width no-pointer-events card-price"
      expand
      position="top-right"
    >
      <div class="col-xs-10 limited-width card-price__item" v-if="cartMode === 'start'">
        <div class="row justify-between q-col-gutter-x-md q-mt-xs">
          <div class="col-3 offset-9 card-price__wrapper">
            <q-card
              class="bg-white all-pointer-events"
              flat
            >
              <q-card-section>
                <div class="text-grey-6 text-body1 q-mb-md card-price__payment">
                  {{ $t('totalPayment') }} :
                </div>
                <div class="justify-between no-wrap">
                  <div class="text-right">
                    <div class="font-size-25 font-medium line-height-30 card-price__price">
                      {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(cartAmount)) }} ₪
                    </div>
                    <div class="font-size-15 text-grey-6 card-price__desc">
                      {{ $t('withoutVat') }} : {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(cartVatAmount)) }} ₪
                    </div>
                  </div>
                </div>
                <div class="text-start q-mt-sm card-price__button">
                  <q-btn
                    :disabled="cartProducts.length === 0"
                    :label="$t('continueOrdering')"
                    @click="cartMode = 'continue-ordering'"
                    class="q-px-xl q-mx-none full-width hover-black-bg"
                    flat
                    no-caps
                    no-wrap
                    outline
                  ></q-btn>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-xs-10 limited-width card-price__item" v-if="cartMode === 'continue-ordering'">
        <div class="row justify-between q-col-gutter-x-md q-mt-xs">
          <div class="col-5 offset-7 card-price__wrapper">
            <q-card
              class="bg-white all-pointer-events"
              flat
            >
              <q-card-section class="q-pb-xs q-pt-md card-price__payment">
                <div class="text-grey-6 text-body1 line-height-19 card-price__payment">
                  {{ $t('customerCart') }}
                </div>
              </q-card-section>
              <q-separator class="q-mx-md q-mt-md" />
              <q-card-section class="q-pt-sm">
                <div class="text-grey-6 q-mb-xs text-body1 line-height-19 card-price__payment">
                  {{ $t('totalPayment') }} :
                </div>
                <div class="flex flex-center justify-between no-wrap line-height-19 card-price__price">
                  <div>
                    <div class="font-size-25 font-medium q-my-xs card-price__price">
                      {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(cartAmount)) }} ₪
                    </div>
                    <div class="text-subtitle1 font-medium text-grey-6 card-price__desc">
                      {{ $t('withoutVat') }} : {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(cartVatAmount)) }} ₪
                    </div>
                  </div>
                </div>
                <!-- <div class="text-start q-mt-sm card-price__button">
                  <q-btn
                    :disabled="!form.agreement || !form.agreeEmailBill"
                    :label="$t('makePreOrder')"
                    @click="$refs.preOrderFormRef.submit()"
                    class="q-px-xl q-mx-none full-width hover-black-bg"
                    flat
                    no-caps
                    no-wrap
                    outline
                  ></q-btn>
                </div> -->
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </q-page-sticky>
  </q-page>
</template>

<script>
import CartMini from '../components/CartMini.vue'
import QuantityInput from '../components/QuantityInput.vue'
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'

export default defineComponent({
  computed: {
    // cartP () {
    //   return [ ...this.cartProducts.map(cp => {
    //     return { ...cp, products: cp.products.filter(p => p.pivot.main) }
    //   }) ]
    // },
  },

  async created () {
    await this.getClient()
  },

  components: {
    CartMini,
    QuantityInput,
  },

  data () {
    return {
      assembly: {
        sku: '5878888886456',
        description: 'С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и бога',
        id: 3,
        image: 'images/town2.png',
        images: [
          {
            id: 1,
            src: 'images/town2.png',
          },
          {
            id: 2,
            src: 'images/monitor.png',
          },
          {
            id: 3,
            src: 'images/town2.png',
          },
          {
            id: 4,
            src: 'images/town.png',
          },
          {
            id: 5,
            src: 'images/town2.png',
          },
        ],
        name: 'ssd2TbRX580_ssd2Tb_RX5 _ssd2Tbd2Tb_RX580_ss ssd2TbRX580_ssd2Tb_RX5 ssd2TbRX580_ss fdfdfdfdfdf',
        price: 1151.00,
        status: 'instock',
        status_color: '#72BA52',
        vat_price: 1438.75,
        products: [
          {
            id: 1,
            category: 'קירור אוויר למעבד',
            name: 'Zalman CNPS90',
          },
          {
            id: 2,
            category: 'אם למעבדי אינטל דור ',
            name: 'GIGABYTE B365M H 91 8',
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
      cartMode: 'start',
      deletingAssemblyId: 0,
      errors: {
        email: false,
      },
      form: {
        // mobilePhone: '32156',
        // email: '@gmail.com',
        // name: 'dmi',
        // surname: 'bas',
        // companyName: 'jhghgvghv',
        // billCompanyName: 'bnvnbvnb',
        // billPassport: '87687687687',
        // passport: '897987987',
        // city: 'city',
        // street: 'street',
        // house: 'house',
        // flat: 'flat',
        // floor: 'floor',
        // postAddress: '454080',
        // paymentType: this.$t('paymentTypeOptions.cashUpTo12000'),
        // comment: 'comment comment',
        // agreement: true,
        // agreeEmailBill: true,
        // wantAnotherNameBill: false,
        mobilePhone: null,
        email: null,
        name: null,
        surname: null,
        companyName: null,
        billCompanyName: null,
        billPassport: null,
        passport: null,
        city: null,
        street: null,
        house: null,
        flat: null,
        floor: null,
        postAddress: null,
        paymentType: null,
        comment: null,
        agreement: false,
        agreeEmailBill: false,
        wantAnotherNameBill: false,
      },
      paymentTypeOptions: [
        this.$t('paymentTypeOptions.creditCard'),
        this.$t('paymentTypeOptions.bankTransfer'),
        this.$t('paymentTypeOptions.cashUpTo12000'),
        this.$t('paymentTypeOptions.checkDeletedUntilWeReceiveMoney'),
      ],
      product: {
        description: 'С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия.',
        id: 3,
        image: 'images/hdd.png',
        images: [
          {
            id: 1,
            src: 'images/hdd.png',
          },
          {
            id: 2,
            src: 'images/town2.png',
          },
          {
            id: 3,
            src: 'images/town2.png',
          },
        ],
        name: 'ssd2TbRX580_ssd2Tb_ RX580_ssd2Tb d2TbRX58 0_sX580_ssd2Tb',
        price: 1151.00,
        status: 'instock',
        status_color: '#72BA52',
        vat_price: 1438.75,
        characteristics: [
          {
            id: 1,
            name: 'מארז מארז',
            value: '0 TRAY PENTIUM 1151 8 מעבד דור',
          },
          {
            id: 2,
            name: 'מארז מארז',
            value: '0 TRAY PENTIUM 1151 8 מעבד דור',
          },
          {
            id: 3,
            name: 'מארז מארז',
            value: '0 TRAY PENTIUM 1151 8 מעבד דור',
          },
          {
            id: 4,
            name: 'מארז מארז',
            value: '0 TRAY PENTIUM 1151 8 מעבד דור',
          },
          {
            id: 5,
            name: 'מארז מארז',
            value: '0 TRAY PENTIUM 1151 8 מעבד דור',
          },
          {
            id: 6,
            name: 'מארז מארז',
            value: '0 TRAY PENTIUM 1151 8 מעבד דור',
          },
          {
            id: 7,
            name: 'מארז מארז',
            value: '0 TRAY PENTIUM 1151 8 מעבד דור',
          },
          {
            id: 8,
            name: 'מארז מארז',
            value: '0 TRAY PENTIUM 1151 8 מעבד דור',
          },
        ],
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
      showConfirmDelete: false,
      showInfoDialog: false,
      slide: 1,
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
    }
  },

  methods: {
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
    async getClient() {
      await this.$store.dispatch('main/getClient')
      if (this.client.person) {
        this.form.mobilePhone = this.client.person.mobile_phone
        this.form.email = this.client.person.email
        this.form.login = this.client.login
        this.form.name = this.client.person.he_name
        this.form.surname = this.client.person.surname
        this.form.companyName = this.client.company_name
        this.form.passport = this.client.passport
        this.form.city = this.client.city
        this.form.street = this.client.street
        this.form.house = this.client.house_number
        this.form.flat = this.client.flat
        this.form.floor = this.client.floor
        this.form.postAddress = this.client.post_address
      }
    },
    async onSubmit () {
      await this.$store.dispatch('cart/sendPreOrder', {
        client: {
          id: null,
          mobile_phone: this.form.mobilePhone,
          email: this.form.email,
          name: this.form.name,
          surname: this.form.surname,
          company_name: this.form.companyName,
          passport: this.form.passport,
          city: this.form.city,
          street: this.form.street,
          house_number: this.form.house,
          flat: this.form.flat,
          floor: this.form.floor,
          post_address: this.form.postAddress,
          payment_type: this.form.paymentType,
          comment: this.form.comment,
          send_mail: this.form.agreeEmailBill,
          want_another_name_bill: this.form.wantAnotherNameBill,
          bill_company_name: this.form.billCompanyName,
          bill_passport: this.form.billPassport,
        },
        assemblies: [ ...this.cartProducts.map(cp => {
          return { ...cp, products: cp.products.filter(p => p.pivot.main) }
        }) ],
      })
      this.showInfoDialog = true
    },
  },
  
  name: 'PageCart',

  setup () {
    const $store = useStore()
    return {
      cartAmount: computed(() => $store.getters['cart/amount']),
      cartProducts: computed(() => $store.getters['cart/products'] || []),
      cartVatAmount: computed(() => $store.getters['cart/vatAmount']),
      client: computed(() => $store.getters['main/client'] || {}),
    }
  },
})
</script>

<style lang="scss">
.card {
  &-ordering {
    display: none;
  }
  &-wrapper {
    .product-status_mobile,
    .product-quantity_mobile,
    .product-remove_mobile {
      display: none;
    }
  }
}
@media (max-width: 900px) {
  .card {
    &-wrapper {
      width: 100%;
      padding: 0 8px;  
    }
    &-price {
      justify-content: flex-end !important;
      right: 16px !important;
    }
  }
}
@media (max-width: 833px) {
  .card {
    flex-direction: column !important;
    justify-content: space-between !important;
    padding-bottom: 12px !important;
    &-ordering {
      display: block;
    }
    &-wrapper {
      .product-image {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-right: 10px;
        .q-img {
          width: 95% !important;
        }
      }
      .product-quantity {
        display: none !important;
        &_mobile {
          display: block;
        }
      }
      .product-status,
      .product-specifications {
        display: none !important;
      }
      .product-status_mobile {
        display: block;
        z-index: 99;
        top: -8px;
        left: -6px;
      }
      .copy-btn {
        display: none !important;
      }
      .product-remove_mobile {
        min-height: auto !important;
        display: block;
        position: absolute;
        bottom: 8px;
        right: 8px;
      }
    }
    &-wrapper,
    &-item  {
      width: 100% !important;
      margin: 0 !important;
    }
    &-item {
      &__wrapper {
        width: 100% !important;
        padding: 0 !important;
      }
      &__card {
        height: 140px !important;
        padding: 8px !important;
        border-radius: 12px !important;
        background: #fff !important;
        box-shadow: 0 0 10px -1px rgb(0, 0, 0, .1) !important;
        .q-card__section {
          padding: 0 !important
        }
        .product-name {
          font-size: 14px !important;
          line-height: 20px !important;
          margin-bottom: 12px !important;
          padding-right: 16px !important;
          overflow: hidden !important;
          line-break: anywhere !important;
          font-family: "rubik" !important
        }
        .product-number,
        .product-assebmly {
          height: 26px;
          overflow: hidden;
        }
        .product-assebmlyNumber,
        .product-number,
        .product-desc {
          font-size: 10px !important;
          line-height: 12px !important;
        }
        .product-price {
          width: 87%;
          font-size: 16px !important;
          line-height: 18px !important;
          margin: 14px 0 2px 0 !important;
        }
        .product-desc {
          width: 87%;
        }
        .q-card__section {
          height: 100%;
        }
      }
      &__block {
        margin-top: 2px;
        border-radius: 8px;
        padding: 4px !important;
        overflow: hidden;
        box-shadow: none !important;
        background: transparent !important;
        &-header {
          width: calc(100% - 8px);
          background-color: #fff;
          border-radius: 8px !important;
          box-shadow: none !important;
          background: #fafafa !important;
          margin: 0 auto !important;
          margin-bottom: 4px !important;
          padding: 0 8px !important;
          overflow: hidden !important;
          div {
            font-size: 16px !important;
            line-height: 20px !important;
            margin: 0 !important;
          }
        }
        &-wrapper {
          margin-left: 0 !important;
        }
      }
      &__header-title {
        height: 36px;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        margin-bottom: 12px !important;
      }
    }
    &-price {
      position: sticky !important;
      bottom: 0;
      left: 0 !important;
      transform: translate(0) !important;
      margin-bottom: 0 !important;
      z-index: 999;
      &__item {
        width: 100% !important;
      }
      &__wrapper {
        width: 100% !important;
        margin: 0 !important;
        .q-card {
          background-color: #333333 !important;
          &__section {
            height: 60px !important;
            display: flex;
            flex-direction: row-reverse !important;
            justify-content: flex-end !important;
            align-items: center;
            padding: 0 16px;
          }
        }
      }
      &__payment {
        display: none !important;
      }
      &__price {
        font-size: 16px !important;
        line-height: 18px !important;
        color: #fff;
        text-align: left;
        margin-bottom: 4px;
      }
      &__desc {
        font-size: 12px !important;
        line-height: 14px !important;
        color: #fff;
        text-align: left;
      }
      &__button {
        width: 50% !important;
        height: 40px !important;
        margin-right: 30px !important;
        margin-top: 0 !important;
        button {
          height: 100%;
          color: #fff;
          border-color: #fff;
        }
      }
    }
    .q-separator {
      display: none !important;
    }
    .q-field {
      .q-separator {
        display: block !important;
      }
    }
    &-continue {
      width: 100% !important;
      &__wrapper {
        margin: 0 !important;
        padding: 0 16px !important;
      }
      &__empty {
        display: none !important;
      }
      &__item {
        width: 100% !important;
        padding: 0 !important;
        margin-top: 3px;
        box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, .10) !important;
        border-radius: 8px;
        overflow: hidden;
      }
      &__title,
      &__subtitle {
        font-size: 12px !important;
        line-height: 14px !important;
        margin: 10px 0 15px 0;
      }
      &__subtitle {
        margin: 0;
        margin-bottom: 25px;
      }
      &__fields {
        margin-right: 0 !important;
        padding: 0 5px !important;
      }
      &__field {
        width: 100% !important;
        .q-field__control-container {
          padding-top: 4px !important;
        }
        input,
        .q-field__label {
          font-size: 16px !important;
          top: 16px !important;
          color: #9f9f9f !important;
        }
        .q-field__native {
          padding-bottom: 0 !important;
          color: rgba(0, 0, 0, 0.87) !important;
        }
        &.q-field--highlighted,
        &.q-field--float {
          .q-field__label {
            top: 8px !important;
          }
        }
        .q-field__label div {
          font-size: 16px !important;
        }
      }
      &__post,
      &__flat {
        width: 60% !important;
        flex: auto !important;
      }
      &__house,
      &__floor {
        width: 40% !important;
        flex: auto !important;
      }
      .q-checkbox__label {
        font-size: 12px !important;
      }
      &__top-checkboxes {
        padding-top: 25px !important;
      }
      &__bottom-checkboxes {
        padding-top: 12px !important;
      }
    }
    .order-button {
      display: none !important;
    }
    .confirm-delete {
      display: none !important;
      &_from-card {
        display: block !important;
      }
    }
  }
}
.q-field--error .q-field__bottom {
  display: none !important;
}
.q-field--with-bottom {
  padding-bottom: 0;
}

// .card-continue__field input:focus + .q-field__label > div {
//   text-align: right;
// }
// .card-continue__field input:focus + .q-field__label {
//   transform: translateY(-30%);
//   // transition: width .8s ease;
// }
</style>
