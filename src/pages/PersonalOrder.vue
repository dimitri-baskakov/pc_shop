<template>
  <q-page class="bg-grey-1 row justify-center assembly">
    <div
      class="order-details__button"
      flat
    >
      <router-link to="/order-details">
          לחזור לדף הקודם
      </router-link>
    </div>
    <div class="col-xs-10 limited-width q-px-xs assembly-wrapper">
      <div class="row justify-start q-col-gutter-md assembly-specifications" style="padding-top: 45px;">

        <div class="col-xs-7 offset-5 assembly__specifications">
        <q-card 
          class="product__specifications-description"
          flat
          >
            <q-card-section class="q-pa-md">
              <div class="text-grey-6 text-body1 product__specifications-title">{{ $t('technicalCharacteristics')}}</div>
              <div class="q-pt-xs col">
                <div
                  class="row justify-start content-stretch product__specifications-item"
                  v-for="product in product.characteristics"
                  :key="product.id"
                >
                  <div style="max-width: 25%;" class="font-meduim content-stretch font-size-15 row justify-between no-wrap"> 
                        <span :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
                          • {{ product.category }} :
                        </span>
                      <span class="text-caption text-grey font-size-12" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">2 יחי</span>
                    </div>
                  <div class="ellipsis-2-lines text-grey-5 font-size-15 q-px-xs" @click.stop.prevent="productDialog = true">{{ product.name }}</div>
                </div>
                <div
                  class="row justify-start content-stretch product__specifications-item"
                  v-for="product in product.characteristics"
                  :key="product.id"
                >
                  <div class="font-meduim content-stretch font-size-15 row justify-between no-wrap"> 
                        <span :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
                          • {{ product.category }} :
                        </span>
                      <span class="text-caption text-grey font-size-12" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">2 יחי</span>
                    </div>
                  <div class="ellipsis-2-lines text-grey-5 font-size-15 q-px-xs" @click.stop.prevent="productDialog = true">{{ product.name }}</div>
                </div>
                <div
                  class="row justify-start content-stretch product__specifications-item"
                  v-for="product in product.characteristics"
                  :key="product.id"
                >
                  <div class="font-meduim content-stretch font-size-15 row justify-between no-wrap"> 
                      <span :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
                          • {{ product.category }} :
                      </span>
                      <span class="text-caption text-grey font-size-12" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">2 יחי</span>
                    </div>
                  <div class="ellipsis-2-lines text-grey-5 font-size-15 q-px-xs" @click.stop.prevent="productDialog = true">{{ product.name }}</div>
                </div>
                <div
                  class="row justify-start content-stretch product__specifications-item"
                  v-for="product in product.characteristics"
                  :key="product.id"
                >
                  <div class="font-meduim content-stretch font-size-15 row justify-between no-wrap"> 
                        <span :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
                          • {{ product.category }} :
                        </span>
                      <span class="text-caption text-grey font-size-12" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">2 יחי</span>
                    </div>
                  <div class="ellipsis-2-lines text-grey-5 font-size-15 q-px-xs" @click.stop.prevent="productDialog = true">{{ product.name }}</div>
                </div>
                <div
                  class="row justify-start content-stretch product__specifications-item"
                  v-for="product in product.characteristics"
                  :key="product.id"
                >
                  <div class="font-meduim content-stretch font-size-15 row justify-between no-wrap"> 
                        <span :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
                            • {{ product.category }} :
                        </span>
                      <span class="text-caption text-grey font-size-12" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">2 יחי</span>
                    </div>
                  <div class="ellipsis-2-lines text-grey-5 font-size-15 q-px-xs" @click.stop.prevent="productDialog = true">{{ product.name }}</div>
                </div>
                <div
                  class="row justify-start content-stretch product__specifications-item"
                  v-for="product in product.characteristics"
                  :key="product.id"
                >
                  <div class="font-meduim content-stretch font-size-15 row justify-between no-wrap"> 
                        <span :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
                            • {{ product.category }} :
                        </span>
                      <span class="text-caption text-grey font-size-12" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">2 יחי</span>
                    </div>
                  <div class="ellipsis-2-lines text-grey-5 font-size-15 q-px-xs" @click.stop.prevent="productDialog = true">{{ product.name }}</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
          <q-card 
          class="assembly__specifications-description"
          flat
          >
            <q-card-section class="q-pa-md">
              <div class="text-grey-6 text-body1">{{ $t('technicalCharacteristics') }}</div>
              <div class="q-pt-xs col">
                <div
                  :key="product.id"
                  class="row justify-start content-stretch"
                  v-for="product in assembly.products"
                >
                  <div style="max-width: 25%;" class="col font-meduim ellipsis content-stretch font-size-15"> • {{ product.category }} :</div>
                  <div class="col ellipsis text-grey-5 font-size-15 q-px-xs">{{ product.name }}</div>
                </div>
                <div
                  class="row justify-start content-stretch"
                  v-for="product in assembly.products"
                  :key="product.id"
                >
                  <div style="max-width: 25%;" class="col font-meduim ellipsis content-stretch font-size-15"> • {{ product.category }} :</div>
                  <div class="col ellipsis text-grey-5 font-size-15 q-px-xs">{{ product.name }}</div>
                </div>
                <div
                  class="row justify-start content-stretch"
                  v-for="product in assembly.products"
                  :key="product.id"
                >
                  <div style="max-width: 25%;" class="col font-meduim ellipsis content-stretch font-size-15"> • {{ product.category }} :</div>
                  <div class="col ellipsis text-grey-5 font-size-15 q-px-xs">{{ product.name }}</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-xs-7 text-grey-7 offset-5 assembly__description" style="margin-bottom: 40px;">
          <!-- <q-card
            class=""
            flat
          >
            <q-card-section>
              <div class="q-mb-sm assembly__description-title">{{ $t('description') }}</div>
              <div class="text-body2">{{ assembly.description }}</div>
            </q-card-section>
          </q-card> -->
        </div>

        <div class="flex flex-center flex-column justify-between no-wrap q-mt-sm text-left assembly-addToCard">
          <div class="assembly-addToCard__links">
            <a href="assemblies/1#" class="text-grey-5 text-caption assembly-addToCard__link">
              {{ $t('copyAssemblyLink') }}
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

    <q-dialog
      class="bg-transparent assembly__dialog"
      persistent
      style="overflow: hidden;"
      v-model="productDialog"
    >
      <q-card flat style="overflow: hidden; width: 80vw; max-width: 1100px;" class="bg-transparent assembly__dialog-card">
        <q-card-section class="row justify-end bg-transparent q-pa-none dialog__close">
          <q-btn
            class="icon_mobile"
            dense
            flat
            icon="highlight_off"
            square
            style="background: #e8e8e8; color: #4d4d4d;"
            v-close-popup
          />
        </q-card-section>
        <q-card-section
          class="bg-white q-pa-xs rounded-borders overflow-hidden assembly__dialog-wrapper"
          style="max-height: 80vh; border-radius: inherit;"
        >
          <div class="row justify-between assembly__dialog-block">
            <div class="col-xs-6 q-pa-md assembly__dialog-image" style="">
              <div class="row">
                <div class="col assembly__dialog-image-slider">
                  <span class="assembly-product__slider-counter" style="left: 0; top: 0;">
                    {{slideProduct}}/{{product.images.length}}
                  </span>
                  <q-carousel
                    :thumbnails="slideProductFullscreen"
                    animated
                    height="250px"
                    infinite
                    navigation-position="right"
                    swipeable
                    v-model:fullscreen="slideProductFullscreen"
                    v-model="slideProduct"
                  >
                    <q-carousel-slide
                      :img-src="image.src"
                      :key="image.id"
                      :name="image.id"
                      class="q-pa-none"
                      style="background-size: contain; background-repeat: no-repeat;"
                      v-for="image in product.images"
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
                </div>
                <div
                  class="col-auto column justify-center assembly__dialog-image-controls"
                  style="width: 78px;"
                >
                  <div class="col q-mb-sm flex flex-center">
                    <q-btn
                      @click="changeSlideRange(-1, 'product')"
                      icon="mdi-chevron-up"
                      round
                      size="xs"
                    />
                  </div>
                  <div
                    :key="image.id"
                    :style="slideProduct === image.id ? 'border: 1px solid #cccccc;' : 'border: 1px solid #f2f2f2;'"
                    class="flex flex-center q-mb-sm"
                    style="border-radius: 5px;"
                    v-for="image in productImages"
                  >
                    <q-img
                      :src="image.src"
                      @click="slideProduct = image.id"
                      class="cursor-pointer rounded-borders text-center"
                      fit="contain"
                      height="78px"
                    />
                  </div>
                  <div class="col q-mb-sm flex flex-center">
                    <q-btn
                      @click="changeSlideRange(1, 'product')"
                      icon="mdi-chevron-down"
                      round
                      size="xs"
                    />
                  </div>
                </div>
              </div>
              <q-separator color="grey-4" />
              <div class="flex flex-center justify-between no-wrap">
                <span
                  class="text-subtitle1 q-mt-sm q-mb-xs ellipsis-2-lines cursor-pointer assembly-product__name"
                >{{ product.name }}</span>
                <q-btn
                  @click="$store.dispatch('main/copyToClipboard', {text: product.name, message: this.$t('copied')})"
                  class="flip-vertical q-px-none"
                  color="grey-5"
                  flat
                  icon="mdi-content-copy"
                ></q-btn>
              </div>
              <div class="flex flex-center justify-between no-wrap assembly-product__number">
                <span class="text-caption text-grey" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
                  {{ $t('assemblyNumber') }} : {{ assembly.assembly_number }}
                </span>
                <q-btn
                  @click="$store.dispatch('main/copyToClipboard', {text: assembly.assembly_number, message: this.$t('copied')})"
                  class="flip-vertical q-px-none"
                  color="grey-5"
                  flat
                  icon="mdi-content-copy"
                ></q-btn>
              </div>
            </div>
            <div class="col-xs-6 assembly__dialog-content">
              <q-scroll-area class="q-px-md q-pb-md" visible style="height: 100%;">
                <q-list
                  class="rounded-borders"
                  dense
                  padding
                  separator
                >
                  <q-item class="font-medium bg-grey-1 assembly__dialog-chars">
                    <q-item-section>
                      {{ $t('characteristics') }}
                    </q-item-section>
                    <q-item-section class="assembly__dialog-content-values">
                      {{ $t('values') }}
                    </q-item-section>
                  </q-item>
                  <q-item
                    :key="characteristic.id"
                    class="text-grey-6 product__specifications-item"
                    clickable
                    v-for="characteristic in product.characteristics"
                    v-ripple
                  >
                    <q-item-section class="assembly__dialog-char" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
                      {{ characteristic.category }}
                    </q-item-section>
                    <q-item-section class="assembly__dialog-value" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
                      {{ characteristic.name }}
                    </q-item-section>
                  </q-item>
                </q-list>
                <!-- <div>
                  <div class="q-mb-sm bg-grey-1 font-medium assembly__dialog-content-cTitle">{{ $t('description') }}</div>
                  <div class="text-body2 text-grey-6 assembly__dialog-content-cDescription">{{ product.description }}</div>
                </div> -->
              </q-scroll-area>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-page-sticky 
    class="full-width no-pointer-events assembly-product"
    :offset="[0, 45]" 
    expand 
    position="top" 
    >
      <div 
      class="col-10 row limited-width justify-start q-col-gutter-md assembly-product__wrapper">
        <div class="col-xs-5 all-pointer-events assembly-product__item">
          <q-card
            class="bg-white q-pa-md"
            flat
          >
            <div class="row assembly-product__slider">
              <div class="col assembly-product__slide">
                <span class="assembly-product__slider-counter">
                  {{slide}}/{{assembly.images.length}}
                </span>
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
                    v-for="image in assembly.images"
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
                  :style="`color: ${assembly.status_color};`"
                >
                  {{ $t(`statusesNames.${assembly.status}`) }}
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
                    {{ assembly.vat_price }} ₪
                  </div>
                  <div class="font-size-15 font-medium text-grey-6">
                    {{ $t('includeVat') }} : {{ assembly.price }} ₪
                  </div>
                </div>
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
                  {{ $t('assemblyNumber') }} : {{ assembly.assembly_number }}
                </span>
                <q-btn
                  @click="$store.dispatch('main/copyToClipboard', {text: assembly.assembly_number, message: this.$t('copied')})"
                  class="flip-vertical q-px-none"
                  color="grey-5"
                  flat
                  icon="mdi-content-copy"
                ></q-btn>
              </div>
              <div class="text-start q-mt-lg">
                <q-btn
                  :label="$t('putToCart')"
                  class="q-px-xl q-mx-none full-width hover-black-bg"
                  flat
                  no-caps
                  no-wrap
                  outline
                ></q-btn>
              </div>
              <div class="flex flex-center justify-between no-wrap q-mt-sm text-left">
                <a href="assemblies/1#" class="text-grey-5 text-caption">
                  {{ $t('copyAssemblyLink') }}
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
              {{ assembly.vat_price }} ₪
            </div>
            <div class="font-size-15 font-medium text-grey-6 assembly-product__subprice">
              {{ $t('includeVat') }} : {{ assembly.price }} ₪
            </div>
          </div>
            <span class="text-caption text-grey font-size-15" :class="$q.platform.is.mobile ? 'ellipsis-2-lines' : 'ellipsis'">
                2 יחי
            </span>
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
            {{ $t('assemblyNumber') }} : {{ assembly.assembly_number }}
          </span>
          <q-btn
            @click="$store.dispatch('main/copyToClipboard', {text: assembly.assembly_number, message: this.$t('copied')})"
            class="flip-vertical q-px-none"
            color="grey-5"
            flat
            icon="mdi-content-copy"
          ></q-btn>
        </div>
        <div class="text-start q-mt-lg assembly-product__addToCard">
          <q-btn
            :label="$t('putToCart')"
            class="q-px-xl q-mx-none full-width hover-black-bg"
            flat
            no-caps
            no-wrap
            outline
          ></q-btn>
        </div>
        <div class="flex flex-center justify-between no-wrap q-mt-sm text-left assembly-product__socials">
          <a href="assemblies/1#" class="text-grey-5 text-caption">
            {{ $t('copyAssemblyLink') }}
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
    </q-page-sticky>
    <div class="order-details__breadcrumbs assembly__breadcrumbs" dir="rtr">
        הזמנות /  4516233248 הזמנות / פרטים
    </div>
  </q-page>
</template>

<script>
import { useStore } from 'vuex'
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    images () {
      return (this.assembly && this.assembly.images.slice(this.slideRange, this.slideRange + 3)) || []
    },
    productImages () {
      return (this.product && this.product.images.slice(this.slideRange, this.slideRange + 3)) || []
    },
  },

  data () {
    return {
      assembly: {
        assembly_number: '5878888886456',
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
      socialLinks: [
        {
          text: 'Telegram',
          icon: 'fab fa-telegram',
          link: 'https://web.telegram.org/k/'
        },
        {
          text: 'Whatsapp',
          icon: 'fab fa-whatsapp',
          link: 'https://www.whatsapp.com/?lang=ru'
        },
        {
          text: 'Viber',
          icon: 'fab fa-viber',
          link: 'https://www.viber.com/ru/'
        },
        {
          text: 'Facebook',
          icon: 'fab fa-facebook',
          link: 'https://www.facebook.com/'
        },
        {
          text: 'Twitter',
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/home?lang=ru'
        },
      ],
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
      } else if (!type && ((val > 0 && this.slideRange >= 0 && this.slideRange < this.assembly.images.length - 3) || (val < 0 && this.slideRange > 0 && this.slideRange < this.assembly.images.length - 2))) {
        this.slideRange += val
      }
    },
    changeActiveComponents(num) {
      this.activeComponents == num ? this.activeComponents = null : this.activeComponents = num
    }
  },
  
  name: 'PageAssembly',

  setup () {
    return {
    }
  },

  watch: {
    productDialog (newVal, oldVal) {
      this.slideRange = 0
    },
  },
})
</script>

<style lang="scss" scoped>
    .order-details__button {
        height: 60px;
        padding: 8px 16px !important;
        background: #333333;
        margin: 16px 0;
        position: sticky;
        bottom: 0;
        z-index: 99;
        a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #fff;
            border-radius: 8px;
            font-size: 12px;
            color: #fff;
            text-decoration: none;
            transition: .2s ease;
            &:hover {
                background: rgba(255, 255, 255, .5);
                color: #333;
            }
        }
    }

    @media only screen and (orientation: landscape) {
        .order-details__button {
            height: 32px;
            padding: 4px 16px;
            a {
                font-size: 10px;
            }
        }
    }
</style>
