<template>
  <q-page class="bg-grey-1 row justify-center pravicy">
    <div class="col-xs-10 pravicy__wrapper"
      style="max-width: 780px;"
    >
      <div class="pravicy__item">
        <q-card
          class="bg-white q-mt-xl q-px-xl"
          flat
          style="overflow: hidden;"
        >
          <q-card-section class="q-pt-xl">
            <div>
              <h6 class="q-ma-none q-pa-none text-grey-7 font-medium text-center q-my-sm">
                מדיניות פרטיות
              </h6>
              <div class="q-my-lg font-medium text-caption">
                מדיניות פרטיות באתר - RBpc פתרונות מחשוב
              </div>
              <div class="row">
                <div class="text-grey-6">
<p>
האתר נמצא בבלדיות חברת RBpc  והחברה הינה המפעילה היחידה של החנות הוירטואלית.
</p>
<p>
בכל שאלה ולכל בירור נוסף ניתן לפנות בטלפון או בדואר אלקטרוני אשר מופיעים בדף <a href="/contacts">"צור קשר"</a>.
</p>
<p>
אנחנו דואגים לפרטיות שלכם ודף זה נוצר במיוחד כדי להבהיר אופן בטיחות ושימוש בפרטיכם.
</p>
<p>
כדי להשתמש באתר ולבצע רכישות הינכם מתבקשים לרשום מספר נתונים אישיים. כדוגמה: שם משפחה, מספר טלפון,
<br>
כתובת וכתובת דואר אלקטרוני . פרטים אלה נשמרים במערכת של החברה על מנת לבצעה פעולות והזמנות. על פי החוק
<br>
להגנת הפרטיות, התשמ"א - 1981 ("החוק") מובהר , כי מסירת פרטים אישיים הנ"ל אינה מחויבת , אך בכדי לבצע
<br>
רכישות מרחוק נדרשת אימות זהות ופרטי תשלום.
</p>
<br>
<br>
<p>
החברה עושה את מירב המאמצים על מנת לאבטח את הפרטים האישיים של הגולשים באתר.
</p>
<p>
חברת RBpc משתמשת בטכנולוגיות הצפנה, נוהלי אבטחה ,SSL  ואמצעי אבטחה מקובלים אחרים כדי להגן על המידע שבאתר.
</p>
<p>
החברה לא תישא באחריות לכל נזק שייגרם במישרין או בעקיפין מן נסיבות המכונות "חמת כוח עליון". לדוגמה, מלחמה, אירועי טבע חריגים, חבלת סייבר,תוכנות זדוניות , תקלה באתר החברה, שביתות והשבתות וכ"ד.
</p>
<p>
מובהר בזאת כי המשתמש אשר ינסה לבצע שינויים באתר החברה או יגרום נזק למשתמשים אחרים יעמוד בפני דין.
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
  
  name: 'PagePrivacyPolicy',

  setup () {
    const $store = useStore()
    return {
    }
  },
})
</script>

<style lang="scss" scoped>
  @media (max-width: 833px) {
    .pravicy {
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
