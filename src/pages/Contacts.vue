<template>
  <q-page class="bg-grey-1 row justify-center contacts">
    <div class="col-xs-10 contacts__wrapper"
      style="max-width: 750px;"
    >
      <div class="contacts__item">
        <q-card
          class="bg-white q-mt-xl q-px-xl"
          flat
          style="overflow: hidden;"
        >
          <q-card-section class="q-pt-xl">
            <h6 class="q-ma-none q-pa-none text-grey-7 font-medium text-center q-my-sm">
              צור קשר
            </h6>
          </q-card-section>
          <q-card-section class="q-py-xs" style="max-width: 620px;">
            <span class="contact_us">
              צור קשר
            </span>
            <q-form @submit="sendMessage" ref="sendMessageFormRef">
              <!-- <q-input
              v-model="contact.name"
              class="col-xs-6 col-sm-3 font-medium text-body1 contacts__field contacts__name"
              color="grey"
              dense
              label-slot
              outlined
              label-color="grey-4"
            >
              <template #label>
                <div :class="{ 'text-right': contact.name }">כתובת דואר אלקטרוני</div>
              </template>
            </q-input>
            <q-input
              v-model="contact.email"
              class="col-xs-6 col-sm-3 font-medium text-body1 contacts__field contacts__email"
              color="grey"
              dense
              label-slot
              outlined
              label-color="grey-4"
            >
              <template #label>
                <div :class="{ 'text-right': contact.email }">כתובת דואר אלקטרוני</div>
              </template>
            </q-input> -->
            <!-- <span class="contact_us contact_us_second">
              צור קשר
            </span> -->
            <q-input
              :rules="[val => !!val || '']"
              class="col-xs-6 col-sm-3 font-medium text-body1 contacts__field contacts__problem"
              color="grey"
              dense
              label-color="grey-4"
              label-slot
              no-error-icon
              outlined
              type="email"
              v-model="contact.email"
            >
              <template #label>
                <div :class="{ 'text-right': contact.problem }">כתובת דואר אלקטרוני</div>
              </template>
            </q-input>
            <q-input
              :rules="[val => !!val || '']"
              class="col-xs-6 col-sm-3 font-medium text-body1 contacts__field contacts__message"
              color="grey"
              dense
              label-color="grey-4"
              label-slot
              no-error-icon
              outlined
              type="textarea"
              v-model="contact.message"
            >
              <template #label>
                <div :class="{ 'text-right': contact.message }">הודעתך</div>
              </template>
            </q-input>
            <q-btn
              @click="$refs.sendMessageFormRef.submit()"
              :label="$t('send')"
              class="q-mt-sm q-px-xl q-mx-none hover-black-bg"
              flat
              no-caps
              no-wrap
              outline
            ></q-btn>
            </q-form>
          </q-card-section>
          <q-card-section class="row q-pt-xl justify-end contacts-footer">
            <div dir="rtl">
              <span>כתובת :</span> הרצליה הדר 77/9
            </div>
            <div>
              <span>פלפון :</span> 054-3313081
            </div>
            <div>
               <span>: факс</span>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-dialog v-model="showInfoDialog" persistent>
      <q-card class="q-pa-md" style="width: 330px;">
        <q-card-section class="row items-center full-width q-pa-xs q-pt-none">
          <div class="font-size-25 line-height-30 q-mb-md text-center full-width">
            {{ $t('thanksForMessage') }}
          </div>
          <div class="font-size-15 line-height-17">
            {{ $t('weWillContactYouShortly') }}
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
      contact: {
        name: '',
        email: '',
        problem: '',
        message: ''
      },
      showInfoDialog: false,
    }
  },

  methods: {
    async sendMessage () {
      await this.$store.dispatch('main/sendMessage', this.contact)
      this.showInfoDialog = true
    }
  },
  
  name: 'Pagecontacts',

  setup () {
    const $store = useStore()
    return {
    }
  },
})
</script>

<style lang="scss">
  .contacts {
    background-color: #fff !important;
    &__wrapper {
      width: 100% !important;
    }
    &__field {
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
    &__name {
      margin-bottom: 8px;
    }
    &__message {
      min-height: 105px;
      height: auto;
      margin-top: 8px;
    }
    .contact_us {
      display: block;
      font-size: 14px;
      line-height: 18px;
      font-family: "rubikmedium";
      margin-bottom: 20px;
      &_second {
        margin: 25px 0;
      }
    }
    &-footer {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin: 0 16px;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #bababa;
      div {
        margin: 10px 0;
      }
      div,
      span {
        font-size: 12px;
        line-height: 16px;
      }
      span {
        margin-right: 50px;
      }
    }
  }
</style>
