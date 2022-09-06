<template>
  <q-page class="bg-grey-1 row justify-center homepage">
    <!-- <q-carousel
      :arrows="false"
      :autoplay="false"
      :navigation-position="'bottom'"
      :navigation="false"
      :padding="true"
      :swipeable="false"
      :vertical="false"
      animated
      class="bg-grey-1 text-black rounded-borders no-pointer-events non-selectable"
      height="620px"
      infinite
      transition-next="scale"
      transition-prev="scale"
      v-model="slide"
    >
      <q-carousel-slide name="s1" class="column no-wrap flex-center">
        <div class="row" style="overflow: hidden;">
          <div class="col-xs-6 col-md-7 flex flex-center">
            <q-img
              src="/images/slider/slide4.png"
              width="350px"
              style="opacity: 30%;"
            ></q-img>
          </div>
          <div class="col-xs-6 col-md-5">
            <h2 class="font-medium">{{ $t('computersLatestEquipment') }}</h2>
            <h4 class="text-grey-6">{{ $t('computersRequirementBudget') }}</h4>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="s2" class="column no-wrap flex-center">
        <div class="row" style="overflow: hidden;">
          <div class="col-xs-6 col-md-7 flex flex-center">
            <q-img
              src="/images/slider/slide2.png"
              width="350px"
            ></q-img>
          </div>
          <div class="col-xs-6 col-md-5">
            <h2 class="font-medium">{{ $t('computersLatestEquipment') }}</h2>
            <h4 class="text-grey-6">{{ $t('computersRequirementBudget') }}</h4>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="s3" class="column no-wrap flex-center">
        <div class="row" style="overflow: hidden;">
          <div class="col-xs-6 col-md-7 flex flex-center">
            <q-img
              src="/images/slider/slide3.png"
              width="350px"
            ></q-img>
          </div>
          <div class="col-xs-6 col-md-5">
            <h2 class="font-medium">{{ $t('computersLatestEquipment') }}</h2>
            <h4 class="text-grey-6">{{ $t('computersRequirementBudget') }}</h4>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel> -->

    <div
      class="col-12 row relative-position q-ml-xl homepage__main"
      style="max-width: 1550px;"
    >
      <q-img
        src="/images/hero.svg"
        height="620px"
        style="max-width: 1470px;"
        position="right"
      >
        <div class="absolute-top-right bg-transparent homepage__title">
          <h3 class="font-medium line-height-58 q-mb-md text-black" style="max-width: 383px;">{{ $t('computersLatestEquipment') }}</h3>
          <h5 class="text-grey-6 font-size-25 line-height-30 q-mt-sm" style="max-width: 270px;">{{ $t('computersRequirementBudget') }}</h5>
        </div>
      </q-img>
    </div>

    <div class="col-12">
      <hr style="width: 85%; max-width: 1600px; margin-top: 0;">
    </div>

    <div class="q-px-lg q-mt-xl column items-center homepage__wrapper">
      <h3 class="text-center text-grey-8 font-size-45 homepage__wrapper-title">{{ $t('assemblies.readySolutions') }}</h3>
      <div
        class="row items-center justify-center q-mb-xl homepage__wrapper-item"
        style="max-width: 1200px;"
      >
        <div
          :key="section.id"
          ratio="1"
          class="col-auto homepage__card"
          v-for="section in sections"
          style="width: 260px; margin: 60px;"
        >
          <div class="sections-card">
            <q-card
              :bordered="false"
              @click="$router.push(`/sections/${section.path}`)"
              class="flex flex-center bg-white rounded-borders-10 assembly-card light-shadow-15 hover-shadow-blue"
            >
              <q-card-section class="full-width flex flex-center">
                <q-img
                  :src="section.image"
                  fit="fill"
                  :width="section.img_width"
                ></q-img>
              </q-card-section>
            </q-card>
            <div class="homepage__card--title" style="height: 50px;">
              <h5 class="q-mt-md">{{ section[`name_${$q.lang.isoName}`] }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useStore } from 'vuex'
import { defineComponent, computed } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      slide: 's1',
    }
  },
  async created () {
    // const $store = useStore()
    // await $store.dispatch('main/getSections')
  },
  setup () {
    const $q = useQuasar()
    const $store = useStore()
    $q.platform.is.mobile
    return {
      sections: computed(() => $store.getters['main/sections']),
      // slide: 's1',
    }
  },
  updated() {
    if (this.$q.platform.is.mobile)
      console.log('mobile');
  }
})
</script>

<style lang="scss">
.assembly-card {
  height: 210px;
  cursor: pointer;
}
.homepage__main {
  .q-img__image {
    object-fit: contain !important;
  }
}

@media (max-width: 833px) {
  .homepage {
    padding-bottom: 0 !important;
    &__card {
      margin: auto !important;
    }
    hr {
      display: none;
    }
    &__main {
      max-height: 280px;
      padding: 0 !important;
      margin: 0 !important;
      h3 {
        max-width: 100% !important;
        font-size: 36px;
        line-height: 46px;
        text-align: center;
        margin: 0 !important;
        color: #fff !important;
      }
      h5 {
        max-width: 85% !important;
        font-size: 24px;
        line-height: 34px;
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
        color: #fff !important;
      }
      .q-img {
        height: 100% !important;
        position: relative;
        &__container {
          &:after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .5);
          }
        }
      }
    }
    &__title {
      position: relative !important;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__wrapper {
      padding: 0 4px !important;
      margin: 0 !important;
      &-title {
        font-size: 21px !important;
        line-height: 31px !important;
        padding: 0 16px;
        text-align: center;
      }
      &-item {
        margin-bottom: 0 !important;
      }
    }
    &__card {
      width: calc(50% - 8px) !important;
      height: auto !important;
      margin: 0 4px !important;
      .q-card {
        height: 135px !important;
        &__section {
          width: 100% !important;
          height: 100% !important;
          padding: 0 !important;
        }
        .q-img {
          width: 60% !important;
          height: 60% !important;
        }
      }
      &--title {
        height: 20px !important;
        margin: 12px 0 24px 0 !important;
        h5 {
          font-size: 12px !important;
          line-height: 18px;
          margin: 0 !important;
          text-align: center;
          padding: 0 18px;
        }
      }
    }
  }
}
</style>
