<template>
  <q-layout view="HHH lpr fff">
    <q-header
    class="flex flex-center homepage-header"
    style="background: #333333; padding-bottom: 1px;"
    >
      <q-toolbar class="q-px-none text-grey-3 light-shadow" style="max-width: 1910px;">
        <q-input
        class="homepage-header__search"
        bottom-slots
        v-model="search"
        label="חיפוש"
        counter
        dense="dense"
        v-if="openSearch"
        >
          <template v-slot:append>
            <q-icon
            name="close"
            @click="search = ''"
            class="cursor-pointer"
            />
          </template>
          <template v-slot:prepend>
            <q-icon name="mdi-magnify" />
          </template>
        </q-input>
        <div
        class="homepage-header__search-outline"
        v-if="openSearch"
        @click="closeInput"
        ></div>
        <q-img
          class="q-mx-md homepage-header__home"
          src="~assets/logo2-black.png"
          width="34px"
        ></q-img>
        <q-tabs
          align="center"
          class="q-mx-sm homepage-header__home-link"
          indicator-color="grey-3"
          no-caps
          shrink
          stretch
        >
          <q-route-tab
            class="text-h5"
            exact
            flat
            to="/"
          >
            <span>
              {{ $t('main') }}
            </span>
          </q-route-tab>
        </q-tabs>
        <q-space></q-space>
        <q-tabs
          align="center"
          indicator-color="grey-3"
          class="category-tabs"
          no-caps
          shrink
          dense
          stretch
        >
          <q-route-tab
            :key="section.id"
            :to="`/sections/${section.path}`"
            class="text-white"
            flat
            size="xl"
            style="max-width: 82px;"
            v-for="section in sections"
          >
            <!-- <div :style="`width: ${section.img_width};`">
              <div
                :style="`background-image: url(${section.image});`"
                style="width: 100%; background-size: cover; height: 0; padding: 0; padding-bottom: 92%;"
              ></div>
            </div> -->
            <!-- <object
              :data="section.image"
              :width="section.img_width"
              :style="`width: ${parseInt(section.img_width) / 2.8}px; fill: white;`"
              class="svgClass"
              type="image/svg+xml"
            ></object> -->
            <!-- <q-icon
              :name="`img:images/${section.name}.svg`"
              :size="section.size"
            ></q-icon> -->
            <q-icon
              :name="`img:${section.image}`"
              :size="`${parseInt(section.img_width) / 2.8}px`"
              class="filter-white"
            ></q-icon>
          </q-route-tab>
        </q-tabs>
        <q-space></q-space>
        <div class="q-mx-sm q-icons">
          <q-btn
          class="menu__mobile-btn"
          dense
          flat
          icon="menu"
          @click="toggleRightDrawer"
          />
          <q-btn
          class="q-px-0 q-mx-0 homepage-header__mobile-logo"
          color="grey-5"
          flat
          size="27"
          style="max-width: 44px;"
          to="/"
          >
            <q-img
              src="~assets/logo2-black.png"
              width="27px"
            ></q-img>
          </q-btn>
          <q-btn
            :key="mainAction.id"
            class="q-px-0 q-mx-0"
            :class="mainAction.class"
            color="grey-5"
            flat
            size="30"
            v-for="mainAction in mainActions"
            :to="mainAction.to"
            style="max-width: 44px;"
            @click="openInput(mainAction.name)"
          >
            <q-icon
              :name="mainAction.icon"
              size="27px"
            >
              <q-badge
                align="bottom"
                color="red"
                floating
                rounded
                v-if="mainAction.badge && cartProducts"
              >
                <template #default>
                  <div style="font-style: normal;">
                    {{ cartProducts.length }}
                  </div>
                </template>
              </q-badge>
            </q-icon>
            <q-menu v-if="mainAction.languages">
              <q-list style="min-width: 100px">
                <q-item
                  :active="language.locale == 'he'"
                  :key="language.id"
                  clickable
                  v-close-popup
                  v-for="language in mainAction.languages"
                >
                  <q-item-section>
                    {{ language.name }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
            <q-menu
              :persistent="showConfirmDelete"
              class="overflow-hidden"
              ref="cartMenu"
              style="height: 100%; max-height: 480px !important;"
              v-if="mainAction.cart"
            >
              <q-card
                class="bg-white all-pointer-events full-height"
                flat
                style="width: 460px; max-width: 460px;"
              >
                <q-card-section class="q-pb-xs q-pt-md row justify-between">
                  <div class="text-grey-6 text-body1 line-height-19">
                    {{ $t('customerCart') }}
                  </div>
                  <div class="flex items-start">
                    <q-btn
                      @click="showConfirmDelete = true"
                      class="q-pa-none q-ma-none"
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
                </q-card-section>
                <q-card-section
                  class="q-pa-none q-px-xs"
                  style="height: calc(100% - 140px);"
                >
                  <q-scroll-area visible class="q-px-md q-py-xs full-width full-height" style="width: 100%;">
                    <CartMini
                      :cartProducts="cartProducts"
                    />
                  </q-scroll-area>
                </q-card-section>
                <q-separator class="q-mx-md q-my-sm" />
                <q-card-section class="q-pt-sm">
                  <div class="flex flex-center justify-between no-wrap line-height-19">
                    <div>
                      <div class="font-size-25 font-medium q-my-xs">
                        {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(cartAmount)) }} ₪
                      </div>
                      <div class="text-subtitle1 font-medium text-grey-6">
                        {{ $t('withoutVat') }} : {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(cartVatAmount)) }} ₪
                      </div>
                    </div>
                    <div class="col-6 text-start">
                      <q-btn
                        :label="$t('goToCart')"
                        @click="$refs.cartMenu.hide()"
                        class=""
                        no-caps
                        outline
                        size="lg"
                        to="/cart"
                      ></q-btn>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
    v-model="rightDrawerOpen"
    class="menu__mobile"
    side="right"
    overlay
    behavior="mobile"
    :breakpoint="400"
    >
      <q-tabs
        align="center"
        indicator-color="grey-3"
        class="category-tabs menu__mobile-tabs"
        no-caps
        shrink
        dense
        stretch
      >
        <q-route-tab
          :key="section.id"
          :to="`/sections/${section.path}`"
          class="text-white q-px-xl-none  menu__mobile-tab"
          flat
          size="xl"
          style="max-width: 82px;"
          v-for="section in sections"
        >
          <span>
            {{ section[`name_${$q.lang.isoName}`] }}
          </span>
          <q-icon
            class="icon-nonActive"
            :name="`img:${section.image}`"
            :size="`${parseInt(section.img_width) / 2.8}px`"
          ></q-icon>
          <q-icon
            class="icon-active filter-blue"
            :name="`img:${section.image}`"
            :size="`${parseInt(section.img_width) / 2.8}px`"
          ></q-icon>
        </q-route-tab>
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view :key="$route.fullPath" class="q-pb-lg" />
    </q-page-container>

    <q-footer
      class="text-grey-6 light-shadow q-mt-xl flex flex-center footer"
      style="background: #333333; height: 45px;"
    >
      <q-tabs
        active-color="grey"
        align="justify"
        class="text-grey-5 full-width"
        indicator-color="white"
        no-caps
        dense
        style="background: #333333; max-width: 1910px; height: 46px;"
      >
        <q-route-tab to="/copyright" class="text-grey-7 no-pointer-events footer__rules" style="height: 45px;">
          <h6 class="q-my-lg">{{ $t('copyright') }}</h6>
        </q-route-tab>
        <q-space></q-space>
        <q-route-tab
          :key="mainRoute.id"
          :to="mainRoute.to"
          class="footer-tab"
          v-for="mainRoute in mainRoutes"
          style="height: 45px;"
        >
          <h6 class="q-my-lg">{{ $t(`mainRoutes.${mainRoute.name}`) }}</h6>
        </q-route-tab>
      </q-tabs>
      <div class="footer__rules_mobile">
        <h3>
          כל הזכויות שמורות © ר.ב. פיסי מחשבים
        </h3>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { useStore } from 'vuex'
import { defineComponent, computed } from 'vue'
import CartMini from '../components/CartMini.vue'
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'MainLayout',

  components: {
    CartMini,
  },

  created () {
    const $store = useStore()
    const $q = useQuasar()
    $store.dispatch('main/getSections')
    const cart = $q.localStorage.getItem('cart')
    if (cart && cart.assemblies && cart.assemblies.length &&
    $store.getters['cart/products'].length == 0) {
      // cart.assemblies.forEach(a => {
      // })
      $store.dispatch('cart/getSelected', cart)
    }
  },

  data() {
    return {
      search: '',
      openSearch: false
    }
  },

  setup () {
    const $store = useStore()
    const rightDrawerOpen = ref(false)
    const $q = useQuasar()
    $q.platform.is.mobile
    const showConfirmDelete = computed({
      get: () => $store.getters['main/showConfirmDelete'],
      set: val => {
        $store.dispatch('main/setShowConfirmDelete', val)
      }
    })
    return {
      mainActions: $store.getters['main/mainActions'],
      mainRoutes: $store.getters['main/mainRoutes'],
      sections: computed(() => $store.getters['main/sections']),
      cartProducts: computed(() => $store.getters['cart/products'] || []),
      cart: computed(() => $store.getters['cart/amount'] || []),
      cartAmount: computed(() => $store.getters['cart/amount']),
      cartVatAmount: computed(() => $store.getters['cart/vatAmount']),
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      showConfirmDelete,
    }
  },

  methods: {
    openInput(type) {
      if (type == 'search' && window.innerWidth < 768) {
        this.openSearch = true
        document.body.style.overflow = 'hidden'
      }
    },
    closeInput() {
      this.openSearch = false
      document.body.style.overflow = ''
    },
  }
})
</script>

<style lang="scss">
.filter-white {
  filter: invert(100%) sepia(1%) saturate(458%) hue-rotate(220deg) brightness(116%) contrast(80%);
}
.filter-blue {
  filter: invert(65%) sepia(15%) saturate(6066%) hue-rotate(165deg) brightness(94%) contrast(88%);
}
.homepage-header {
  &__search,
  &__mobile-logo {
    display: none;
  }
}
.q-page-container {
  background: #9e9e9e !important;
}
.q-drawer-container {
  display: none !important;
}
.homepage-header {
  .card-link_mobile,
  .home-link_mobile,
  .personel-link_mobile {
    display: none;
  }
}
.footer {
  &__rules_mobile {
    display: none;
  }
}
.menu__mobile {
  display: none !important;
  &-btn {
    display: none !important;
  }
}
@media (max-width: 900px) {
  .homepage-header {
    .q-tabs {
      .q-tab {
        padding: 0 4px !important;
      }
      .q-icon {
        font-size: 24px !important;
      }
    }
    .q-icons {
      .q-btn {
        max-width: 20px !important;
        padding: 0 12px !important;
      }
      .q-icon {
        font-size: 18px !important;
      }
    }
  }
}
@media (max-width: 833px) {
  .q-page-container {
    padding-bottom: 0 !important;
  }
  .q-footer {
    height: auto !important;
    background: transparent !important;
    box-shadow: none !important;
    position: relative;
    &::before {
      content: '';
      width: 90%;
      height: 1px;
      position: absolute;
      top: 0;
      left: 5%;
      background: #B3B3B3;
    }
  }
  .footer {
    margin: 0 !important;
    padding-top: 18px;
    &__rules {
      display: none !important;
      &_mobile {
        display: block;
        h3 {
          font-size: 12px;
          line-height: 14px;
          color: #B3B3B3;
        }
      }
    }
    .q-tabs {
      height: auto !important;
      background: transparent !important;
      &__content {
        flex-wrap: wrap !important;
      }
      .q-space {
        display: none !important;
      }
    }
    .q-tab {
      width: calc(100% / 3);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      min-height: auto !important;
      height: 28px !important;
      border-right: 1px solid #B3B3B3;
      &:last-child {
        border: none;
      }
      &:nth-child(5) {
        border: none;
      }
    }
    h6 {
      font-size: 12px !important;
      line-height: 16px !important;
      margin: 0 !important;
      color: #666666 !important;
    }
  }
}

@media only screen and (max-width: 833px) and (orientation: landscape),
screen and (max-width: 568px) {
  .q-drawer-container {
    display: block !important;
  }
  .menu__mobile {
    display: flex !important;
    justify-content: center;
    align-items: center;
    &-tabs {
      width: 100% !important;
      flex: auto !important;
      .q-tabs__content {
        display: block !important;
      }
      .q-tab {
        max-width: 100% !important;
        width: 100% !important;
        display: flex !important;
        justify-content: flex-start !important;
        min-height: auto !important;
        position: relative !important;
        height: 52px !important;
        padding: 8px 16px !important;
        margin: 0 !important;
        &::after {
          content: '';
          width: calc(100% - 32px);
          height: 1px;
          position: absolute;
          left: 16px;
          bottom: 0;
          background-color: #ebe8e8;
        }
        span {
          color: #000;
          font-size: 14px;
          margin-left: 20px;
        }
        .q-icon {
          font-size: 30px !important;
        }
        .q-tab__indicator  {
          display: none !important;
        }
        .icon-active {
          display: none !important;
        }
        &.q-router-link--exact-active {
          span {
            color: #29ABE2;
          }
          .icon-nonActive {
            display: none !important;
          }
          .icon-active {
            display: block !important;
          }
        }
      }
      .q-tab__content {
        height: 100% !important;
        flex-direction: row-reverse !important;
        flex-wrap: nowrap !important;
      }
    }
    &-btn {
      display: flex !important;
    }
  }
  .homepage-header {
    padding: 0 7px;
    &__home {
      display: none;
    }
    &__mobile-logo {
      display: flex;
    }
    &__search {
      width: calc(100% + 14px);
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: -7px;
      padding: 0 !important;
      z-index: 99;
      background-color: #000;
      &-outline {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 50px;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9;
      }
      i {
        color: #999999;
      }
      .q-field {
        &__control,
        &__append,
        &__prepend {
          height: 44px !important;
        }
        &__control {
          &:before,
          &::after {
            display: none !important;
          }
        }
        &__append {
          position: absolute;
          top: 3px;
          right: 22px;
          z-index: 999;
        }
        &__prepend {
          position: absolute;
          top: 3px;
          left: 22px;
          z-index: 999;
        }
        &__label {
          top: 16px !important;
          padding: 0 52px !important;
          color: #999999 !important;
          font-weight: 600 !important;
        }
        &__native {
          width: calc(100% - 32px) !important;
          height: 37px !important;
          padding: 0 34px !important;
          margin-left: 16px !important;
          margin-top: 7px !important;
          border-radius: 6px;
          color: #999999 !important;
          font-weight: 600 !important;
          background: rgb(51, 51, 51);
        }
        &__bottom {
          display: none !important;
        }
      }
      &.q-field--float {
        .q-field__label {
          display: none !important;
        }
      }
    }
    &__home-link {
      display: none;
    }
    .personel-link_pc {
      display: none;
    }
    .home-link_mobile,
    .personel-link_mobile {
      display: flex;
    }
    .card-link {
      &_pc {
        display: none;
      }
      &_mobile {
        display: flex;
      }
    }
    .q-toolbar {
      display: flex;
      align-items: center;
    }
    .q-space {
      display: none;
    }
    .category-tabs {
      display: none;
    }
    &__icon {
      display: none;
    }
    .q-icons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 0 !important;
      .q-btn {
        max-width: 100% !important;
        padding: 0 7px !important;
      }
      .q-icon {
        font-size: 28px !important;
      }
    }
  }
}

@media only screen and (max-width: 833px) and (orientation: landscape) {
  .homepage {
    &-header {
      .q-toolbar {
        min-height: auto;
        height: 32px;
      }
      .q-icons {
        justify-content: center;
        .q-btn:nth-child(3) {
          margin-right: auto;
        }
        .q-icon {
          font-size: 20px !important;
        }
      }
      .q-img__image {
        width: 70%;
        object-fit: contain !important;
      }
      &__search {
        width: calc(100% - 141px);
        left: 72px;
        background: transparent;
        .q-field__native {
          width: 100% !important;
          height: 27px !important;
          margin-left: 0 !important;
          margin: 2.5px 0 0 0 !important;
          padding: 0 30px !important;
          background: #4b4a4a;
        }
        .q-field__append,
        .q-field__prepend {
          top: -6px;
        }
        .q-field__append {
          right: 4px;
        }
        .q-field__prepend {
          left: 4px;
        }
        .q-field__label {
          top: 7px !important;
          padding: 0 32px !important;
        }
        &-outline {
          top: 0;
        }
      }
    }
  }
}
</style>
