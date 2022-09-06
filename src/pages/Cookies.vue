<template>
  <q-page class="bg-grey-1 row justify-center cookies">
    <div class="col-xs-10 cookies__wrapper"
      style="max-width: 780px;"
    >
      <div class="cookies__item">
        <q-card
          class="bg-white q-mt-xl q-px-xl"
          flat
          style="overflow: hidden;"
        >
          <q-card-section class="q-py-xl">
            <div>
              <h6 class="q-ma-none q-pa-none text-grey-7 font-medium text-center q-my-md">
                עוגיות (COOKIES)
              </h6>
              <div class="q-my-md font-medium text-body2">
                מה זה בעצם קוקיז
              </div>
              <div class="column justify-start items-start">
                <div class="text-grey-6">
                  <p>
                  המחשב שלכם שומר באמצעות הדפדפן (גוגל לדוגמה) בדיסק הקשיח את קבצי טקסט אשר נקראים קוקיז. רוב האתרי
                  <br>
                  אינטרנט מבקשים מהמשתמשים שלהם לאשר שימוש בקוקיז על מנת לאסוף מידה. מידה זה אינו אישי ואין שום סכנ
                  <br>
                  לחדירת פרטיות ושימוש כנגד הלקוח.
                  </p>
                  <p>
                  אנו נעזרים בקוקיז בכדי לדעת מה מעניין את הלקוחות שלנו, איזה מוצרים, איזה עמודים ובאיזה טווך הם גולשים באותם
                  <br>
                  דפי נחיתה. תמורת מידה זה ללקוח קל יותר להשתמש באתר, לחפש מידה, לבצע פעולות וכדומה.
                  </p>
                  <p>
                  במידה ואינך מעוניין לאשר שימוש בקוקיז עליך להיכנס להגדרות הדפדפן שלך ולקבוע פקודה מתאימה לאתר הספציפי.
                  </p>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="row q-col-gutter-sm q-pt-xl justify-end">
            <q-btn
              :label="$t('backToHome')"
              class="q-mx-none hover-black-bg q-mt-xs text-center"
              flat
              no-caps
              no-wrap
              outline
              to="/"
            ></q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex'

export default defineComponent({
  computed: {
  },

  data () {
    return {
    }
  },
  
  name: 'PageCookies',

  setup () {
    const $store = useStore()
    return {
    }
  },
})
</script>

<style lang="scss" scoped>
  @media (max-width: 833px) {
    .cookies {
      background-color: #fff !important;
      &__wrapper {
        width: 100% !important;
      }
      .q-card {
        width: calc(100% - 32px) !important;
        box-shadow: 0px 0px 19px -5px rgba(0, 0, 0, .2) !important;
        margin: 0 auto !important;
        margin-top: 16px !important;
        padding: 8px !important;
        &__section {
          padding: 8px !important;
          h6{
            font-size: 16px !important;
            line-height: 20px !important;
            margin-top: 4px !important;
            border-bottom: 1px solid #bababa;
            padding-bottom: 26px !important;
            margin-bottom: 26px !important;
          }
          .text-body2 {
            font-size: 12px !important;
            line-height: 18px !important;
          }
          p {
            font-size: 12px !important;
            line-height: 16px !important;
          }
          .q-btn {
            width: 100% !important;
            padding: 0 !important;
            font-size: 12px !important;
          }
        }
      }
    }
  }
</style>