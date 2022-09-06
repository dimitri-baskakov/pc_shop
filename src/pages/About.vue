<template>
  <q-page class="bg-grey-1 row justify-center about">
    <div class="col-xs-10 about__wrapper"
      style="max-width: 750px;"
    >
      <div class="about__item">
        <q-card
          class="bg-white q-mt-xl q-px-xl"
          flat
          style="overflow: hidden;"
        >
          <q-card-section class="q-pt-xl">
            <h6 class="q-ma-none q-pa-none text-grey-7 font-medium text-center q-my-sm">
              אודותינו
            </h6>
          </q-card-section>
          <q-card-section class="q-py-xs" style="max-width: 620px;">
            <div>
              <div class="row">
                <div class="text-grey-6">
                  <p>
                  <b>RBPC</b> פתרונות מיחשוב-הינה חנות/מעבדה עם רוח חדשה ומתקדמת בתחום המיחשוב העכשיוי והעומד
                  בראשה הוא בעל נסיון רב בבניית מחשבים ומתן פיתרונות לכל סוגי המחשבים והתאמתם ללקוח לפי בקשותיו
                  </p>
                  <p>
                  החברה שלנו <b>הוקמה בשנת 2017</b>, והיא עוסקת בהרכבת ובמכירת מחשבים חזקים במיוחד,
                  <br>
                  לשימוש לכל מטרה , לרוב אנו מתמחים ב בניית מחשבים בתחום <b>העבודה עם סאונד, גרפיקה, וידאו</b>
                  <br>
                  ומחשבים <b>למשחקים</b>.
                  </p>
                  <p>
                  מחשבי שאנו בונים ידועים ביופיים ובביצועם חזקים .מחשבים שלנו - זה המחשבים 
                  <br>
                  שונים גם ויזואלי וגם ברכיביהם הפנימיים - אותם לא תמצאו במחשבי הביתי או משרדי הממוצע.
                  </p>
                  <p>
                  לדוגמא: תחנת עבודה סאונד -  אנו במיוחד נשתמש במאווררים מבית <b>NOCTUA</b> , 
                  <br>
                  למחשבים של גיימרים קירורי מים , מארזים עם חלונות שקופים , כרטיסי מסך
                  <br>
                  חזקים לפי דרישות הלקוח - המיועדים לגרפיקה תלת מימדית, ספקי כוח המתואמים
                  <br> 
                  ותמידי + 20 או 30 אחוזים יותר לאתיד לביצועים כבדים , ומאווררים גדולים ושקטים במיוחד,
                  <br>
                  השומרים על טמפרטורות נמוכות של הרכיבים ובכך משפרים את ביצועם.
                  </p>
                  <p>
                  <b>מייסדי החברה הם גם "גיימרים"</b> נלהבים וכבר שנים, החברה מצליחה לספק
                  <br>
                  את רצון הציבור, ולכבוש את ליבם של חובבי עובדי פיתוח סאונד,וידאו וגיימרים. אצלנו במחירים
                  <br>
                  האטרקטיבים ביותר אפשרי לקנות מחשב לפי דרישותכם. אצלנו מקבלים <b>אמינות , מקצועיות ושירות ,
                  <br>
                  ולאורך כל הדרך</b>.
                  </p>
                </div>
                <div class="q-mt-md text-caption">
                  כל הזכויות שמורות ל-RBPC
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
  
  name: 'PageAbout',

  setup () {
    const $store = useStore()
    return {
    }
  },
})
</script>

<style lang="scss" scoped>
  @media (max-width: 833px) {
    .about {
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
          h6 {
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
