<template>
  <q-page class="bg-grey-1 row justify-center section">
    <div class="col-xs-10 section__wrapper limited-width">
      <div class="row justify-between q-my-xs full-width section__wrapper-view">
        <div class="col">
          <q-btn-group flat class="q-gutter-sm">
            <q-btn
              :color="settings.displayMode === 'grid' ? 'grey-6' : 'grey-4'"
              @click="settings.displayMode = 'grid'"
              align="right"
              class="q-px-none q-mx-none section__view-buttons"
              flat
              icon="apps"
              size="lg"
            />
            <q-btn
              :color="settings.displayMode === 'list' ? 'grey-6' : 'grey-4'"
              @click="settings.displayMode = 'list'"
              class="q-px-none q-mx-none section__view-buttons"
              flat
              icon="view_list"
              size="lg"
            />
          </q-btn-group>
        </div>
        <div class="col-auto row section__filter">
          <div class="text-grey-6 flex flex-center q-pb-xs q-px-md  section__filter-selected">{{ $t('sorting') }}:</div>
          <div
            class="q-mt-xs q-ml-xs"
          >
              <!-- dir="rtl" -->
            <q-select
              :options="sortOptions"
              dir="rtl"
              borderless
              dense
              dropdown-icon="expand_more"
              flat
              hide-bottom-space
              menu-anchor="bottom left"
              menu-self="top left"
              popup-content-style="transition-delay: 0.25s;"
              v-model="sort"
            ></q-select>
          </div>
        </div>
      </div>

      <div class="column items-stretch q-gutter-sm justify-between full-width section-list" v-if="settings.displayMode === 'list'">
      <div
        :key="assembly.id"
        class="full-width"
        v-for="assembly in assemblies"
      >
        <q-card
          class="light-shadow-10 bg-white hover-shadow full-width product-card__list"
          style="height: 146px;"
          :style="[assembly && assembly.showCharacteristics ? 'z-index: 999;' : '']"
          v-if="[...new Set(assembly.products.map(p => p.root_category.id))].length === 1"
        >
          <q-card-section horizontal style="height: 100%;"> 
            <q-card-section
              :class="{ 'no-pointer-events': !assembly.detectStatus }"
              @click="$router.push(`/sections/${sectionPath}/products/${assembly.id}`)"
              class="col-auto flex flex-center cursor-pointer q-px-sm product-card__list-image"
            >
              <div
                :style="`color: ${assembly.detectStatus ? '#72BA52' : '#F15A24'};`"
                class="absolute absolute-top-left q-px-xs product-status_mobile"
              >
                &#9679; {{ $t(`statusesNames.${assembly.detectStatus ? 'instock' : 'notAvailable'}`) }}
              </div>
              <q-img
                class="rounded-borders"
                :src="assembly.mainImage"
                width="115px"
              />
              <div class="justify-end row product-addCard">
                <q-btn
                  @click.stop.prevent="$store.dispatch('cart/addAssemblyToCart', assembly)"
                  :disable="!assembly.detectStatus"
                  :label="$t('toCart')"
                  class="q-px-xl q-mx-none q-mb-sm full-width"
                  dense
                  no-caps
                  no-wrap
                  outline
                ></q-btn>
              </div>
            </q-card-section>
            <q-card-section class="q-px-none q-py-xs col full-height overflow-hidden column  product-card__list-description wrap">
              <div class="flex flex-center justify-between no-wrap full-width">
                <span
                  :class="{ 'no-pointer-events': !assembly.detectStatus }"
                  @click="$router.push(`/sections/${sectionPath}/products/${assembly.id}`)"
                  class="ellipsis cursor-pointer product-link font-size-18 line-height-21"
                >{{ assembly.name }}</span>
                <q-btn
                  @click="$store.dispatch('main/copyToClipboard', {text: assembly.name, message: this.$t('copied')})"
                  class="flip-vertical q-px-none product-copy"
                  color="grey-5"
                  flat
                  icon="mdi-content-copy"
                  size="sm"
                ></q-btn>
              </div>
              <div class="flex flex-center justify-between no-wrap full-width">
                <span
                  :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"
                  class="text-grey text-body1 product-number"
                >
                  {{ $t('assemblyNumber') }} : {{ (assembly.products.find(p => p.pivot.main) || assembly.products[0]).sku_original }}
                </span>
                <q-btn
                  @click="$store.dispatch('main/copyToClipboard', {text: (assembly.products.find(p => p.pivot.main) || assembly.products[0]).sku_original, message: this.$t('copied')})"
                  class="flip-vertical q-px-none product-copy"
                  color="grey-5"
                  flat
                  icon="mdi-content-copy"
                  size="sm"
                ></q-btn>
              </div>
              <div class="flex flex-center justify-between no-wrap product-price">
                <span dir="ltr" class="text-grey text-body1">
                  {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.amount)) }} ₪
                </span>
                <div class="text-subtitle1 font-medium text-grey-6">
                  {{ $t('withoutVat') }} : {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.price)) }} ₪
                </div>
              </div>
              <div class="product-status text-subtitle1 line-height-22" :style="`color: ${assembly.detectStatus ? '#72BA52' : '#F15A24'};`">{{ $t(`statusesNames.${assembly.detectStatus ? 'instock' : 'notAvailable'}`) }}</div>
              <q-space />
              <div class="row items-end full-width product-price_mobile" style="max-width: 100%;">
                <div class="col ellipsis">
                  <div class="text-h6 font-medium line-height-17">
                    {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.amount)) }} ₪
                  </div>
                  <div class="text-subtitle1 font-medium text-grey-6"> <span class="gt-sm">{{ $t('withoutVat') }} : </span> {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.price)) }} ₪
                  </div>
                </div>
                <div class="col justify-end row">
                  <div class="row justify-end full-width no-wrap">
                    <q-btn
                      :label="$t('moreDetails')"
                      @click="$router.push(`/sections/${sectionPath}/products/${assembly.id}`)"
                      class="col-autoo q-px-md q-mx-sm q-mb-sm"
                      dense
                      no-caps
                      no-wrap
                      outline
                    ></q-btn>
                    <q-btn
                      @click.stop.prevent="$store.dispatch('cart/addAssemblyToCart', assembly)"
                      :disable="!assembly.detectStatus"
                      :label="$t('toCart')"
                      class="col-autoo q-px-md q-mx-none q-mb-sm"
                      dense
                      no-caps
                      no-wrap
                      outline
                    ></q-btn>
                  </div>
                </div>
              </div>
            </q-card-section>
            <q-separator vertical class="q-my-sm q-mx-md" />
            <div class="absolute full-width row justify-end q-px-md q-pb-md product-card__list-specifications-button">
              <q-btn
                @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: true}})"
                class="q-px-none q-mx-none"
                dense
                color="grey-6"
                icon="mdi-information-outline"
                no-caps
                no-wrap
                flat
              >
                <q-tooltip
                  :delay="1000"
                  :offset="[10, 10]"
                  anchor="top middle"
                  class="bg-grey-3 text-black shadow-3"
                  self="bottom middle"
                >
                  {{ $t('characteristics') }}
                </q-tooltip>
              </q-btn>
            </div>
            <q-card
              class="light-shadow-10 bg-white q-pa-none hover-shadow product-card__list-specifications_mobile"
              v-if="assembly && assembly.showCharacteristics"
              :style="[assembly && assembly.showCharacteristics ? 'z-index: 999' : '']"
            >
              <q-card-section
                class="q-pa-xs"
                style="height: 100%;"
              >
                <q-scroll-area style="height: 100%;" content-style="max-width: 100%;">
                  <div class="text-subtitle1">
                    {{ $t('characteristics') }}
                  </div>
                  <q-list>
                    <q-item
                      :key="characteristic.id"
                      v-for="characteristic in (assembly.products.find(p => p.pivot.main) || assembly.products[0]).product_specifications"
                      class="column q-pa-none q-ma-none"
                    >
                      <div class="font-meduim text-grey-7" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"> • {{ characteristic.name }}</div>
                      <div class="text-grey-5 q-px-sm" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">{{ characteristic.value }}</div>
                    </q-item>
                  </q-list>
                </q-scroll-area>
              </q-card-section>
              <q-btn
                @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: false}})"
                class="absolute-top-right bg-white"
                color="grey-4"
                flat
                icon="mdi-close"
                padding="0"
                size="xs"
                style="border-radius: 0;"
              />
            </q-card>
            <q-card-section class="q-pa-xs col product-card__list-specifications">
              <q-scroll-area style="height: 100%;">
                <div
                  class="row"
                  v-for="characteristic in (assembly.products.find(p => p.pivot.main) || assembly.products[0]).product_specifications"
                  :key="characteristic.id"
                >
                  <div class="col-xs-4 ellipsis font-meduim text-grey-7"> • {{ characteristic.name }}</div>
                  <div class="col ellipsis text-grey-5">{{ characteristic.value }}</div>
                </div>
              </q-scroll-area>
            </q-card-section>
          </q-card-section>
        </q-card>
        <q-card
          class="light-shadow-10 bg-white hover-shadow full-width product-card__list"
          style="height: 146px;"
          :style="[assembly && assembly.showCharacteristics ? 'z-index: 999;' : '']"
          v-else
        >
          <q-card-section horizontal style="height: 100%;">
            <q-card-section
              :class="{ 'no-pointer-events': !assembly.detectStatus }"
              @click="$router.push(`/sections/${sectionPath}/assemblies/${assembly.id}`)"
              class="col-auto flex flex-center cursor-pointer q-px-sm product-card__list-image"
            >
              <div
                :style="`color: ${assembly.detectStatus ? '#72BA52' : '#F15A24'};`"
                class="absolute absolute-top-left q-px-xs product-status_mobile"
              >
                &#9679; {{ $t(`statusesNames.${assembly.detectStatus ? 'instock' : 'notAvailable'}`) }}
              </div>
              <q-img
                class="rounded-borders"
                :src="assembly.mainImage"
                width="115px"
              />
              <div class="justify-end row product-addCard">
                <q-btn
                  @click.stop.prevent="$store.dispatch('cart/addAssemblyToCart', assembly)"
                  :disable="!assembly.detectStatus"
                  :label="$t('toCart')"
                  class="q-px-xl q-mx-none q-mb-sm full-width"
                  dense
                  no-caps
                  no-wrap
                  outline
                ></q-btn>
              </div>
            </q-card-section>
            <q-card-section class="q-px-none q-py-xs col full-height overflow-hidden column product-card__list-description wrap">
              <div class="flex flex-center justify-between no-wrap full-width">
                <span
                  :class="{ 'ellipsis-2-lines': $q.platform.is.mobile,  'ellipsis': !$q.platform.is.mobile, 'no-pointer-events': !assembly.detectStatus }"
                  @click="$router.push(`/sections/${sectionPath}/assemblies/${assembly.id}`)"
                  class="cursor-pointer product-link font-size-18 line-height-21"
                >{{ assembly.name }}</span>
                <q-btn
                  @click="$store.dispatch('main/copyToClipboard', {text: assembly.name, message: this.$t('copied')})"
                  class="flip-vertical q-px-none product-copy"
                  color="grey-5"
                  flat
                  icon="mdi-content-copy"
                  size="sm"
                ></q-btn>
              </div>
              <div class="flex flex-center justify-between no-wrap full-width">
                <span
                  :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"
                  class="text-grey text-body1 product-number"
                >
                  {{ $t('assemblyNumber') }} : {{ assembly.sku }}
                </span>
                <q-btn
                  @click="$store.dispatch('main/copyToClipboard', {text: assembly.sku, message: this.$t('copied')})"
                  class="flip-vertical q-px-none product-copy"
                  color="grey-5"
                  flat
                  icon="mdi-content-copy"
                  size="sm"
                ></q-btn>
              </div>
              <div class="flex flex-center justify-between no-wrap product-price">
                <span dir="ltr" class="text-grey text-body1">
                  {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.amount)) }} ₪
                </span>
                <div class="text-subtitle1 font-medium text-grey-6"> 
                  {{ $t('withoutVat') }} : {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.price)) }} ₪ 
                </div>
              </div>
              <div class="product-status text-subtitle1 line-height-22" :style="`color: ${assembly.detectStatus ? '#72BA52' : '#F15A24'};`">{{ $t(`statusesNames.${assembly.detectStatus ? 'instock' : 'notAvailable'}`) }}</div>
              <q-space />
              <div class="row items-end full-width product-price_mobile" style="max-width: 100%;">
                <div class="col ellipsis">
                  <div class="text-h6 font-medium line-height-17">
                    {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.amount)) }} ₪
                  </div>
                  <div class="text-subtitle1 font-medium text-grey-6"> <span class="gt-sm">{{ $t('withoutVat') }} : </span> {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.price)) }} ₪
                  </div>
                </div>
                <div class="col _buttons justify-end row">
                  <div class="row justify-end full-width no-wrap">
                    <q-btn
                      :label="$t('moreDetails')"
                      @click="$router.push(`/sections/${sectionPath}/assemblies/${assembly.id}`)"
                      class="col-auto q-px-md q-mx-sm q-mb-sm"
                      dense
                      no-caps
                      no-wrap
                      outline
                    ></q-btn>
                    <q-btn
                      @click.stop.prevent="$store.dispatch('cart/addAssemblyToCart', assembly)"
                      :disable="!assembly.detectStatus"
                      :label="$t('toCart')"
                      class="col-auto q-px-md q-mx-none q-mb-sm"
                      dense
                      no-caps
                      no-wrap
                      outline
                    ></q-btn>
                  </div>
                </div>
              </div>
            </q-card-section>
            <q-separator vertical class="q-my-sm q-mx-md" />
            <div class="absolute full-width row justify-end q-px-md q-pb-md product-card__list-specifications-button">
              <q-btn
                @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: true}})"
                class="q-px-none q-mx-none"
                dense
                color="grey-6"
                icon="mdi-information-outline"
                no-caps
                no-wrap
                flat
              >
                <q-tooltip
                  :delay="1000"
                  :offset="[10, 10]"
                  anchor="top middle"
                  class="bg-grey-3 text-black shadow-3"
                  self="bottom middle"
                >
                  {{ $t('characteristics') }}
                </q-tooltip>
              </q-btn>
            </div>
            <q-card
              class="light-shadow-10 bg-white q-pa-none hover-shadow product-card__list-specifications_mobile"
              v-if="assembly && assembly.showCharacteristics"
              :style="[assembly && assembly.showCharacteristics ? 'z-index: 999' : '']"
            >
              <q-card-section
                class="q-pa-xs"
                style="height: 100%;"
              >
                <q-scroll-area style="height: 100%;" content-style="max-width: 100%;">
                  <div class="text-subtitle1">
                    {{ $t('characteristics') }}
                  </div>
                  <q-list>
                    <q-item
                      :key="product.id"
                      class="column q-pa-none q-ma-none"
                      v-for="product in assembly.products.filter(p => !!p && p.pivot.main)"
                    >
                      <div class="font-meduim text-grey-7" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"> • {{ product.root_category.name[$q.lang.isoName] }}</div>
                      <div class="text-grey-5 q-px-sm" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">{{ product.name[$q.lang.isoName] }}</div>
                    </q-item>
                  </q-list>
                </q-scroll-area>
              </q-card-section>
              <q-btn
                @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: false}})"
                class="absolute-top-right bg-white"
                color="grey-4"
                flat
                icon="mdi-close"
                padding="0"
                size="xs"
                style="border-radius: 0;"
              />
            </q-card>
            <q-card-section class="q-pa-xs col product-card__list-specifications">
              <q-scroll-area style="height: 100%;" content-style="max-width: 100%;">
                <!-- <div>
                  {{assembly.products.map(p => p.pivot.image_id)}}
                </div>
                <div>
                  {{assembly.mainImage}}
                </div> -->
                <div
                  class="row"
                  v-for="product in assembly.products.filter(p => !!p && p.pivot.main)"
                  :key="product.id"
                >
                  <div class="col-xs-4 ellipsis font-meduim text-grey-7"> • {{ product.root_category.name[$q.lang.isoName] }}</div>
                  <div class="col-xs-8 ellipsis text-grey-5">{{ product.name[$q.lang.isoName] }}</div>
                </div>
              </q-scroll-area>
            </q-card-section>
          </q-card-section>
        </q-card>
        <div 
        class="product-card__list-specifications_outside" 
        @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: false}})"
        v-if="assembly && assembly.showCharacteristics"
        ></div>
      </div>
      </div>

      <div class="row q-col-gutter-sm justify-start items-stretch section-grid" v-if="settings.displayMode === 'grid'">
        <div
          :key="assembly.id"
          class="col-xs-4 col product-card__grid"
          style="width: 20%;"
          v-for="assembly in assemblies"
        >
          <q-card
            class="light-shadow-10 bg-white q-pa-none hover-shadow product-specifications"
            v-if="assembly && assembly.showCharacteristics"
            :style="[assembly && assembly.showCharacteristics ? 'z-index: 999' : '']"
          >
            <q-card-section
              class="q-pa-xs"
              style="height: 328px;"
            >
              <q-scroll-area style="height: 100%;">
                <div class="text-subtitle1">
                  {{ $t('characteristics') }}
                </div>
                <q-list v-if="[...new Set(assembly.products.map(p => p.root_category.id))].length === 1">
                  <q-item
                    :key="characteristic.id"
                    v-for="characteristic in (assembly.products.find(p => p.pivot.main) || assembly.products[0]).product_specifications"
                    class="column q-pa-none q-ma-none"
                  >
                    <div class="font-meduim text-grey-7" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"> • {{ characteristic.name }}</div>
                    <div class="text-grey-5 q-px-sm" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">{{ characteristic.value }}</div>
                  </q-item>
                </q-list>
                <q-list v-else>
                  <q-item
                    :key="product.id"
                    class="column q-pa-none q-ma-none"
                    v-for="product in assembly.products.filter(p => !!p && p.pivot.main)"
                  >
                    <div class="font-meduim text-grey-7" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"> • {{ product.root_category.name[$q.lang.isoName] }}</div>
                    <div class="text-grey-5 q-px-sm" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">{{ product.name[$q.lang.isoName] }}</div>
                  </q-item>
                </q-list>
              </q-scroll-area>
            </q-card-section>
            <q-btn
              @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: false}})"
              class="absolute-top-right bg-white"
              color="grey-4"
              flat
              icon="mdi-close"
              padding="0"
              size="xs"
              style="border-radius: 0;"
            />
          </q-card>
          <q-card
            class="light-shadow-10 bg-white q-pa-none hover-shadow product-card__grid-card"
            v-else-if="assembly"
          >
            <q-card-section
              :class="{ 'no-pointer-events': !assembly.detectStatus }"
              @click="$router.push([...new Set(assembly.products.map(p => p.root_category.id))].length === 1 ? `/sections/${sectionPath}/products/${assembly.id}` : `/sections/${sectionPath}/assemblies/${assembly.id}`)"
              class="flex flex-center cursor-pointer product-card__grid-image"
              style="height: 170px;"
            >
              <div
                :class="{'q-px-xs': !$q.platform.is.mobile}"
                :style="`color: ${assembly.detectStatus ? '#72BA52' : '#F15A24'};`"
                class="absolute absolute-top-left"
              >
                &#9679; {{ $t(`statusesNames.${assembly.detectStatus ? 'instock' : 'notAvailable'}`) }}
              </div>
              <q-img
                :src="assembly.mainImage"
                class="rounded-borders"
                style="height: auto; max-height: 153px; max-width: 153px;"
              />
            </q-card-section>
            <q-separator class="q-mx-sm" />
            <q-card-section class="q-pa-sm col q-pb-none product-description">
              <div
                class="flex flex-center justify-between no-wrap"
                style="height: 48px;"
              >
                <span
                  :class="{ 'no-pointer-events': !assembly.detectStatus }"
                  @click="$router.push([...new Set(assembly.products.map(p => p.root_category.id))].length === 1 ? `/sections/${sectionPath}/products/${assembly.id}` : `/sections/${sectionPath}/assemblies/${assembly.id}`)"
                  class="q-mt-none q-mb-xs ellipsis-2-lines cursor-pointer product-link"
                >{{ assembly.name }}</span>
              </div>
              <div class="text-h6 font-medium line-height-18 product-price">
                <div class="absolute full-width row justify-end q-px-md q-pb-md product-specifications-button_mobile" style="bottom: 30px;">
                  <q-btn
                    @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: true}})"
                    class="q-px-none q-mx-none"
                    dense
                    color="grey-6"
                    icon="mdi-information-outline"
                    no-caps
                    no-wrap
                    flat
                  >
                    <q-tooltip
                      :delay="1000"
                      :offset="[10, 10]"
                      anchor="top middle"
                      class="bg-grey-3 text-black shadow-3"
                      self="bottom middle"
                    >
                      {{ $t('characteristics') }}
                    </q-tooltip>
                  </q-btn>
                </div>
                {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.amount)) }} ₪
              </div>
              <div class="absolute full-width row justify-end q-px-md q-pb-md product-specifications-button" style="bottom: 55px;">
                <q-btn
                  @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: true}})"
                  class="q-px-none q-mx-none"
                  dense
                  color="grey-6"
                  icon="mdi-information-outline"
                  no-caps
                  no-wrap
                  flat
                >
                  <q-tooltip
                    :delay="1000"
                    :offset="[10, 30]"
                    anchor="top middle"
                    class="bg-grey-3 text-black shadow-3"
                    self="bottom middle"
                  >
                    {{ $t('characteristics') }}
                  </q-tooltip>
                </q-btn>
              </div>
              <div class="text-subtitle2 font-medium text-grey-6 full-width">
                {{ $t('withoutVat') }} : {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.price)) }} ₪
              </div>
              <div class="justify-end row product-addCard">
                <q-btn
                  @click.stop.prevent="$store.dispatch('cart/addAssemblyToCart', assembly)"
                  :disable="!assembly.detectStatus"
                  :label="$t('toCart')"
                  class="q-px-xl q-mx-none q-mb-sm full-width"
                  dense
                  no-caps
                  no-wrap
                  outline
                ></q-btn>
              </div>
            </q-card-section>
          </q-card>
          <div 
          class="product-card__list-specifications_outside" 
          @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: false}})"
          v-if="assembly && assembly.showCharacteristics"
          ></div>
        </div>
        <!-- <div
          :key="assembly.id"
          class="col-xs-4 col product-card__grid"
          style="width: 20%;"
          v-for="assembly in assemblies"
        >
          <q-card
            class="light-shadow-10 bg-white q-pa-none hover-shadow product-specifications"
            v-if="assembly && assembly.showCharacteristics"
            :style="[assembly && assembly.showCharacteristics ? 'z-index: 999' : '']"
          >
            <q-card-section
              class="q-pa-xs"
              style="height: 328px;"
            >
              <q-scroll-area style="height: 100%;">
                <div class="text-subtitle1">{{ $t('characteristics') }}</div>
                <q-list>
                  <q-item
                    :key="characteristic.id"
                    v-for="characteristic in assembly.products.filter(p => !!p && p.pivot.main)"
                    class="column q-pa-none q-ma-none"
                  >
                    <div class="font-meduim text-grey-7" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'"> • {{ characteristic.root_category.name[$q.lang.isoName] }}</div>
                    <div class="text-grey-5 q-px-sm" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">{{ characteristic.name[$q.lang.isoName] }}</div>
                  </q-item>
                </q-list>
              </q-scroll-area>
            </q-card-section>
            <q-btn
              @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: false}})"
              class="absolute-top-right bg-white"
              color="grey-4"
              flat
              icon="mdi-close"
              padding="0"
              size="xs"
              style="border-radius: 0;"
            />
          </q-card>
          <q-card
            class="light-shadow-10 bg-white q-pa-none hover-shadow product-card__grid-card"
            v-else
          >
            <q-card-section
              @click="$router.push(`/sections/${sectionPath}/assemblies/${assembly.id}`)"
              class="flex flex-center cursor-pointer product-card__grid-image"
              style="height: 170px;"
            >
              <div
                :style="`color: ${assembly.detectStatus ? '#72BA52' : '#F15A24'};`"
                class="absolute absolute-top-left q-px-xs"
              >
                &#9679; {{ $t(`statusesNames.${assembly.detectStatus ? 'instock' : 'notAvailable'}`) }}
              </div>
              <q-img
                :src="assembly.mainImage"
                class="rounded-borders"
                style="height: auto; max-height: 153px; max-width: 153px;"
              />
            </q-card-section>
            <q-separator class="q-mx-sm" />
            <q-card-section class="q-pa-sm col q-pb-none product-description">
              <div
                class="flex flex-center justify-between no-wrap"
                style="height: 48px;"
              >
                <span
                  @click="$router.push(`/sections/${sectionPath}/assemblies/${assembly.id}`)"
                  class="q-mt-none q-mb-xs ellipsis-2-lines cursor-pointer product-link"
                >{{ assembly.name }}</span>
              </div>
              <div class="text-h6 font-medium product-price">
                <div class="absolute full-width row justify-end q-px-md q-pb-md product-specifications-button_mobile" style="bottom: 30px;">
                  <q-btn
                    @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: true}})"
                    class="q-px-none q-mx-none"
                    dense
                    color="grey-6"
                    icon="mdi-information-outline"
                    no-caps
                    no-wrap
                    flat
                  >
                    <q-tooltip
                      :delay="1000"
                      :offset="[10, 10]"
                      anchor="top middle"
                      class="bg-grey-3 text-black shadow-3"
                      self="bottom middle"
                    >
                      {{ $t('characteristics') }}
                    </q-tooltip>
                  </q-btn>
                </div>
                {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.amount)) }} ₪
              </div>
              <div class="absolute full-width row justify-end q-px-md q-pb-md product-specifications-button" style="bottom: 30px;">
                <q-btn
                  @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: true}})"
                  class="q-px-none q-mx-none"
                  dense
                  color="grey-6"
                  icon="mdi-information-outline"
                  no-caps
                  no-wrap
                  flat
                >
                  <q-tooltip
                    :delay="1000"
                    :offset="[10, 10]"
                    anchor="top middle"
                    class="bg-grey-3 text-black shadow-3"
                    self="bottom middle"
                  >
                    {{ $t('characteristics') }}
                  </q-tooltip>
                </q-btn>
              </div>
              <div class="text-subtitle2 font-medium text-grey-6 full-width">
                {{ $t('withoutVat') }} : {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(assembly.price)) }} ₪
              </div>
              <div class="justify-end row product-addCard">
                <q-btn
                  @click.stop.prevent="$store.dispatch('cart/addAssemblyToCart', assembly)"
                  :label="$t('toCart')"
                  class="q-px-xl q-mx-none q-mb-sm full-width"
                  dense
                  no-caps
                  no-wrap
                  outline
                ></q-btn>
              </div>
            </q-card-section>
          </q-card>
          <div 
          class="product-card__list-specifications_outside" 
          @click="$store.dispatch('main/setAssemblyProperties', {assemblyId: assembly.id, properties: {showCharacteristics: false}})"
          v-if="assembly && assembly.showCharacteristics"
          ></div>
        </div> -->
      </div>

      <div class="row items-stretch q-gutter-sm justify-between q-mt-lg section__pagination">
        <q-pagination
          :max-pages="7"
          :max="assembliesMeta.last_page"
          color="grey"
          v-model="currentPage"
        />
        <div class="row justify-between section__pagination-perPage" dir="ltr">
          <div class="col row">
            <div class="text-grey-6 flex flex-center">{{ $t('productsPerPage') }}:</div>
            <div
              class="q-mt-xs q-ml-xs"
            >
                <!-- dir="rtl" -->
              <q-select
                :options="perPageOptions"
                dir="rtl"
                borderless
                dense
                dropdown-icon="expand_more"
                flat
                hide-bottom-space
                menu-anchor="top left"
                menu-self="bottom left"
                popup-content-style="transition-delay: 0.25s;"
                v-model="perPage"
              ></q-select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  methods: {
    updateUrl () {
      window.history.pushState('', '', `${window.location.origin}${this.$route.path}?page=${encodeURI(+this.currentPage)}&perPage=${encodeURI(+this.perPage)}&sort_by=${encodeURI(this.sort.value.sort_by)}&sort_in=${this.sort.value.sort_in}`)
    },
    async getAssemblies (meta = {}) {
      await this.$store.dispatch('main/getAssemblies', {
        page: meta.current_page || this.assembliesMeta.current_page,
        perPage: meta.per_page || this.assembliesMeta.per_page,
        sectionPath: this.sectionPath,
        sort_by: meta.sort_by || this.assembliesMeta.sort_by,
        sort_in: meta.sort_in || this.assembliesMeta.sort_in,
      })
    },
  },
  name: 'PageSection',
  computed: {
    currentPage: {
      get () {
        return this.assembliesMeta.current_page
      },
      async set (newVal) {
        await this.getAssemblies({current_page: +newVal})
        this.updateUrl()
      },
    },
    perPage: {
      get () {
        return this.assembliesMeta.per_page
      },
      async set (newVal) {
        await this.getAssemblies({
          current_page: 1,
          per_page: +newVal,
        })
        this.updateUrl()
      },
    },
    sort: {
      get () {
        return this.sortOptions.find(so => so.value.sort_by == this.assembliesMeta.sort_by && so.value.sort_in == this.assembliesMeta.sort_in) || this.sortOptions[0]
      },
      async set (newVal) {
        await this.getAssemblies({
          current_page: 1,
          sort_by: newVal.value.sort_by,
          sort_in: newVal.value.sort_in,
        })
        this.updateUrl()
      },
    },
    // settings: {
    //   get() {
    //     return this.$store.getters['main/settings']
    //   },
    //   set(newVal) {
    //     this.$store.dispatch('main/saveSettings', newVal)
    //   },
    // },
  },
  async created () {
    await this.getAssemblies(this.$route.query.page && this.$route.query.perPage ? {
      current_page: +this.$route.query.page,
      per_page: +this.$route.query.perPage,
      sort_by: this.$route.query.sort_by,
      sort_in: this.$route.query.sort_in,
    } : {})
  },
  data () {
    return {
      perPageOptions: [
        10,
        20,
        50,
        100,
      ],
      settings: {
        displayMode: 'list'
      },
      slide: 's1',
      sortOptions: [
        {
          label: this.$t('sortOptions.fromHiToLow'),
          value: {
            sort_by: 'amount',
            sort_in: 'desc',
          },
        },
        {
          label: this.$t('sortOptions.fromLowtoHigh'),
          value: {
            sort_by: 'amount',
            sort_in: 'asc',
          },
        },
        {
          label: this.$t('sortOptions.availability'),
          value: {
            sort_by: 'status',
            sort_in: 'asc',
          },
        },
        {
          label: this.$t('sortOptions.new'),
          value: {
            sort_by: 'created_at',
            sort_in: 'desc',
          },
        },
      ],
    }
  },
  setup () {
    const $store = useStore()
    const $route = useRoute()
    return {
      sections: computed(() => $store.getters['main/sections']),
      assemblies: computed(() => $store.getters['main/assemblies'].data),
      assembliesMeta: computed(() => $store.getters['main/assemblies'].meta),
      sectionPath: computed(() => $route.params.slug)
      // slide: 's1',
    }
  },
  watch: {
    // async perPage (newVal, oldVal) {
    //   this.updateUrl()
    //   await this.getAssemblies()
    // },
  },
})
</script>

<style lang="scss">
  .section-list {
    .product-price {
      display: none;
    }
  }
  
@media (max-width: 833px) {
  .section__filter {
    &-selected {
      margin-top: -1px !important;
      padding-bottom: 0 !important;
    }
    div {
      display: flex !important;
      align-items: center !important;
      &:last-child {
        margin: 0 !important;
      }
    }
  }
  .section-list {
    .product-price {
      display: block;
    }
  }
}
</style>
