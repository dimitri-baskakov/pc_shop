<template>
  <q-page class="bg-grey-1 row justify-center personal" style="padding-bottom: 60px; padding-top: 60px;">
    <div class="col-xs-10 limited-width personal__top">
      <q-card
        class="bg-white q-pa-md personal__item"
        flat
        style="overflow: hidden;"
      >
<!-- <pre dir="ltr"> -->
<!-- ={{JSON.stringify(orderAssemblies, undefined, 2)}} -->
<!-- ={{JSON.stringify(clientOrder.products, undefined, 2)}} -->
<!-- ={{JSON.stringify(client.person, undefined, 2)}} -->
<!-- </pre> -->
<!-- ={{client}} -->
        <q-card-section class="q-pa-xs personal__header">
          <div>
            <div class="q-ma-none q-pa-none text-grey-7 font-medium text-body1 q-mb-md personal__client">
              {{ $t('clientInformation') }}
            </div>
            <div class="text-grey-5 line-height-15 personal__fill">
              {{ $t('fillUpPersonalData') }}
            </div>
            <div class="text-grey-5 line-height-15 personal__notification">
              {{ $t('notificationAboutData') }}
            </div>
          </div>
        </q-card-section>
        <q-card-section class="row q-col-gutter-sm q-pa-xs q-pt-md dense-inputs personal__fields">
          <div class="col-xs-6 col-sm-3 row justify-between items-stretch personal__field personal__reset _mobile">
            <q-btn
              :label="$t('resetPassword')"
              @click="form.showConfirmReset = true"
              class="col q-ml-xs font-medium text-body1 q-mr-sm"
              color="grey"
              dense
              no-caps
              outline
            />
            <q-btn
              @click="form.createPassword = true"
              color="grey"
              label="?"
              outline
            >
              <q-tooltip
                :delay="1000"
                :offset="[10, 10]"
                anchor="top middle"
                class="bg-grey-3 text-black shadow-3"
                self="bottom middle"
                max-width="200px"
              >
                {{ $t('resetPasswordNotification') }}
              </q-tooltip>
            </q-btn>
          </div>
          <q-input
            v-model="form.mobilePhone"
            class="col-xs-6 col-sm-3 font-medium text-body1 personal__field personal__phone"
            color="grey"
            dense
            label-slot
            outlined
            type="tel"
          >
            <template #label>
              <div :class="{ 'text-right': form.mobilePhone }">{{ $t('mobilePhone') }}</div>
            </template>
          </q-input>
          <q-input
            v-model="form.email"
            class="col-xs-6 col-sm-3 font-medium text-body1 personal__field personal__email"
            color="grey"
            dense
            outlined
            type="email"
            label-slot
            label-color="grey-4"
            readonly
          >
            <template #label>
              <div :class="{ 'text-right': form.email }">{{ $t('email') }}</div>
            </template>
          </q-input>
          <q-input
            v-model="form.login"
            class="col-xs-6 col-sm-3 font-medium text-body1 personal__field personal__login"
            color="grey"
            dense
            label-slot
            outlined
            label-color="grey-4"
            readonly
          >
            <template #label>
              <div :class="{ 'text-right': form.login }">{{ $t('login') }}</div>
            </template>
          </q-input>
          <div class="col-xs-6 col-sm-3 row justify-between items-stretch personal__field personal__reset">
            <q-btn
              :label="$t('resetPassword')"
              @click="form.showConfirmReset = true"
              class="col q-ml-xs font-medium text-body1 q-mr-sm"
              color="grey"
              dense
              no-caps
              outline
            />
            <q-btn
              @click="form.createPassword = true"
              color="grey"
              label="?"
              outline
            >
              <q-tooltip
                :delay="1000"
                :offset="[10, 10]"
                anchor="top middle"
                class="bg-grey-3 text-black shadow-3"
                self="bottom middle"
                max-width="200px"
              >
                {{ $t('resetPasswordNotification') }}
              </q-tooltip>
            </q-btn>
          </div>
          <div class="col-xs-12 q-pa-none q-ma-none"></div>
          <q-input
            v-model="form.name"
            class="col-xs-6 col-sm-3 font-medium text-body1 personal__field personal__name"
            color="grey"
            label-slot
            dense
            outlined
            label-color="grey-4"
            readonly
          >
            <template #label>
              <div :class="{ 'text-right': form.name }">{{ $t('name') }}</div>
            </template>
          </q-input>
          <q-input
            v-model="form.surname"
            class="col-xs-6 col-sm-3 font-medium text-body1 personal__field personal__surname"
            color="grey"
            label-slot
            dense
            outlined
            label-color="grey-4"
            readonly
          >
            <template #label>
              <div :class="{ 'text-right': form.surname }">{{ $t('surname') }}</div>
            </template>
          </q-input>
          <q-input
            v-model="form.companyName"
            class="col-xs-6 col-sm-3 font-medium text-body1 personal__field personal__company"
            color="grey"
            label-slot
            dense
            outlined
            label-color="grey-4"
            readonly
          >
            <template #label>
              <div :class="{ 'text-right': form.companyName }">{{ $t('companyName') }}</div>
            </template>
          </q-input>
          <q-input
            v-model="form.passport"
            class="col-xs-6 col-sm-3 font-medium text-body1 personal__field personal__passport"
            color="grey"
            label-slot
            dense
            outlined
            label-color="grey-4"
            readonly
          >
            <template #label>
              <div :class="{ 'text-right': form.passport }">{{ $t('passport') }}</div>
            </template>
          </q-input>
          <q-input
            v-model="form.city"
            class="col-xs-6 col-sm-3 font-medium text-body1 personal__field personal__city"
            color="grey"
            label-slot
            dense
            outlined
          >
            <template #label>
              <div :class="{ 'text-right': form.city }">{{ $t('city') }}</div>
            </template>
          </q-input>
          <q-input
            v-model="form.street"
            class="col-xs-6 col-sm-3 font-medium text-body1 personal__field personal__street"
            color="grey"
            label-slot
            dense
            outlined
          >
            <template #label>
              <div :class="{ 'text-right': form.street }">{{ $t('street') }}</div>
            </template>
          </q-input>
          <q-input
            v-model="form.house"
            class="col font-medium text-body1 personal__field personal__house"
            color="grey"
            label-slot
            dense
            outlined
          >
            <template #label>
              <div :class="{ 'text-right': form.house }">{{ $t('house') }}</div>
            </template>
          </q-input>
          <q-input
            v-model="form.flat"
            class="col font-medium text-body1 personal__field personal__flat"
            color="grey"
            label-slot
            dense
            outlined
          >
            <template #label>
              <div :class="{ 'text-right': form.flat }">{{ $t('flat') }}</div>
            </template>
          </q-input>
          <q-input
            v-model="form.floor"
            class="col font-medium text-body1 personal__field personal__floor"
            color="grey"
            label-slot
            dense
            outlined
          >
            <template #label>
              <div :class="{ 'text-right': form.floor }">{{ $t('floor') }}</div>
            </template>
          </q-input>
          <q-input
            v-model="form.postAddress"
            class="col font-medium text-body1 personal__field personal__infopost"
            color="grey"
            label-slot
            dense
            outlined
          >
            <template #label>
              <div :class="{ 'text-right': form.postAddress }">{{ $t('postAddress') }}</div>
            </template>
          </q-input>
          <div class="col-xs-12 q-pa-none q-ma-none"></div>
          <div
            class="col-xs-6 col-sm-3 row justify-between items-stretch personal__field"
            v-if="client.id"
          >
            <q-btn
              :label="$t('logout')"
              @click="logoutClient"
              class="col font-medium text-body1"
              color="grey"
              dense
              no-caps
              outline
            />
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12"></div>

    <div class="col-xs-10 limited-width personal__bottom">
      <div>
        <q-card
          class="bg-white q-mt-md"
          flat
          style="overflow: hidden;"
        >
          <q-card-section class="row justify-end q-py-xs">
            <div class="text-grey-6 flex flex-center q-mx-md font-size-15">{{ $t('sorting') }}:</div>
            <q-select
              :options="sortOptions"
              dir="rtl"
              borderless
              class="font-size-15"
              dense
              dropdown-icon="expand_more"
              flat
              hide-bottom-space
              menu-anchor="bottom left"
              menu-self="top left"
              popup-content-style="transition-delay: 0.25s;"
              v-model="sort"
            ></q-select>
          </q-card-section>
          <q-card-section class="q-pt-none">
              <!-- :rows="[...clientOrdersList, ...(client.offers || [])]" -->
            <q-table
              :columns="clientOrdersListColumns"
              :rows-per-page-options="[0]"
              :rows="client.offers || []"
              class="text-grey-6 font-size-15 q-ma-xs personal__table"
              flat
              hide-bottom
              row-key="id"
              table-header-class="bg-grey-1 font-size-15"
              table-header-style="color: #1A1A1A;"
            >
              <template #body="props">
                <q-tr class="highlighted-row" no-hover :props="props">
                  <q-td key="date" :props="props">
                    <div class="font-size-15">
                      {{ props.row.date }}
                    </div>
                  </q-td>
                  <q-td key="orderNumber" :props="props">
                    <div class="font-size-15">
                      {{ props.row.offer_number }}
                    </div>
                  </q-td>
                  <q-td key="quantity" :props="props">
                    <div class="font-size-15">
                      {{ $t('quantity') }} : {{ [...new Set(props.row.products && props.row.products.map(p => p.pivot.sku_id) || [])].length }}
                      <!-- {{ $t('quantity') }} : {{ props.row.products_count }} -->
                    </div>
                  </q-td>
                  <q-td key="price" :props="props">
                    <div class="font-size-15">
                      {{ new Intl.NumberFormat('he', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(props.row.amount)) }} ₪
                    </div>
                  </q-td>
                  <q-td key="status" :props="props">
                    <div :style="`color: ${props.row.status_color};`" class="font-size-15">
                      {{ props.row.type === 'preorder' ? $t('statusesNames.preOrder') : $t('statusesNames.' + props.row.status) }}
                    </div>
                  </q-td>
                  <q-td key="moreDetails" :props="props">
                    <q-btn
                      @click="openOrderDialog(props.row)"
                      flat
                      no-caps
                      class="font-size-15"
                    >{{ $t('moreDetails') }}</q-btn>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
            <div
            class="personal-orders">
              <div
              class="personal-orders__wrapper"
              v-for="order of clientOrdersList"
              :key="order.id"
              >
                <div class="personal-orders__button">
                  <span>
                    {{order.price}}
                  </span>
                  <router-link
                    exact
                    flat
                    to="/order-details"
                  >
                    פרטי הזמנה
                  </router-link>
                </div>
                <div class="personal-orders__item">
                  <span
                  class="personal-orders__status"
                  :style="{color: order.status_color}"
                  >
                    {{ order.status }}
                  </span>
                  <span class="personal-orders__number">
                    {{ order.orderNumber }}
                  </span>
                  <span class="personal-orders__date">
                    {{ order.date }}
                  </span>
                  <span class="personal-orders__count">
                    {{ order.quantity }}
                  </span>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-dialog
      class="bg-transparent"
      persistent
      style="overflow: hidden;"
      v-model="orderDialog"
    >
      <q-card flat style="overflow: hidden; width: 80vw; max-width: 1200px;" class="bg-transparent q-pa-none">
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
          class="bg-white q-pa-xs rounded-borders full-height"
          style="border-radius: inherit;"
        >
          <div class="row justify-end q-py-sm">
            <div class="col text-center text-h6">{{ $t('orderNumber') }} : מס {{ order.offer_number }}</div>
          </div>
          <div>
            <q-scroll-area class="q-px-md " style="height: 60vh; max-height: 650px;" visible>
              <q-list
                class="rounded-borders"
                dense
                padding
                separator
              >
                <q-item class="q-mb-xs font-medium bg-grey-1 text-caption rounded-borders">
                  <q-item-section avatar class="flex-center" style="width: 80px;">
                    {{ $t('image') }}
                  </q-item-section>
                  <q-item-section>
                    <div>{{ $t('productName') }}</div>
                    <div>{{ $t('productCode') }}</div>
                  </q-item-section>
                  <q-item-section>
                    {{ $t('price') }}
                  </q-item-section>
                  <q-item-section class="text-center" style="max-width: 100px;">
                    {{ $t('quantity') }}
                  </q-item-section>
                  <q-item-section class="col-auto text-center q-px-md q-mx-xs">
                    {{ $t('moreDetails') }}
                  </q-item-section>
                </q-item>
                  <!-- v-for="product in clientOrder.products" -->
                  <!-- v-for="product in orderAssemblies.filter(p => !!p)" -->
                <q-item
                  :key="assembly.id"
                  class="text-grey-6 highlighted-row"
                  v-for="assembly in order.assemblies"
                >
                  <q-item-section avatar class="flex flex-center" style="width: 80px;">
                    <q-img
                      :src="assembly.mainImage"
                      class="rounded-borders"
                      width="69px"
                    />
                  </q-item-section>
                  <q-item-section>
                    <div class="flex flex-center justify-between no-wrap">
                      <span
                        @click="()=>{}"
                        class="ellipsis-2-lines text-grey-7 font-medium font-size-15 line-height-17"
                      >{{ assembly.name }}</span>
                      <!-- <span
                        @click="()=>{}"
                        class="ellipsis-2-lines text-grey-7 font-medium font-size-15 line-height-17"
                      >{{ assembly.name.he }}</span> -->
                      <q-btn
                        @click="$store.dispatch('main/copyToClipboard', {text: assembly.name, message: this.$t('copied')})"
                        class="flip-vertical q-px-none"
                        color="grey-5"
                        flat
                        icon="mdi-content-copy"
                      ></q-btn>
                    </div>
                    <div class="flex flex-center justify-between no-wrap">
                      <span class="text-caption text-grey">
                        {{ $t('assemblyNumber') }} : {{ [...new Set(assembly.products.map(p => p.root_category.id))].length === 1 ? (assembly.products.find(p => p.pivot.main) || assembly.products[0]).sku_original : assembly.sku }}
                      </span>
                      <q-btn
                        @click="$store.dispatch('main/copyToClipboard', {text: [...new Set(assembly.products.map(p => p.root_category.id))].length === 1 ? (assembly.products.find(p => p.pivot.main) || assembly.products[0]).sku_original : assembly.sku, message: this.$t('copied')})"
                        class="flip-vertical q-px-none"
                        color="grey-5"
                        flat
                        icon="mdi-content-copy"
                      ></q-btn>
                    </div>
                  </q-item-section>
                  <q-item-section>
                    <div class="text-caption q-mt-sm" :style="`color: ${product.status_color};`">{{ product.status_text }}</div>
                    <div class="text-subtitle1 font-medium line-height-17">
                      {{ assembly.amount }} ₪
                    </div>
                    <div class="text-caption font-medium text-grey-5"> {{ $t('withoutVat') }} : {{ assembly.price }} ₪
                    </div>
                  </q-item-section>
                  <q-item-section class="text-center text-caption col" style="max-width: 100px;">
                    {{ assembly.products && assembly.products.length }} {{ $t('pcs') }}
                  </q-item-section>
                  <q-item-section class="col-auto">
                    <q-btn
                      @click="openAssemblyDialog(assembly)"
                      color="grey"
                      flat
                      no-caps
                    >{{ $t('moreDetails') }}</q-btn>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
          </div>
          <!-- <div>
            <q-table
              :columns="clientOrderProductsColumns"
              :rows-per-page-options="[0]"
              :rows="clientOrder.products || []"
              class="text-grey-6 font-size-15 q-ma-xs"
              flat
              hide-bottom
              row-key="id"
              table-header-class="bg-grey-1 font-size-15"
              table-header-style="color: #1A1A1A;"
            >
              <template #body-cell-image="props">
                <q-td no-hover key="image" :props="props">
                  <q-img
                    :src="props.value"
                    class="rounded-borders"
                    width="69px"
                  />
                </q-td>
              </template>
              <template #body-cell-name="props">
                <q-td no-hover :auto-width="false" key="name" :props="props">
                  <div class="flex flex-center justify-between no-wrap">
                    <span
                      @click="()=>{}"
                      class="q-mt-sm q-mb-xs ellipsis-2-lines cursor-pointer text-grey-7 font-medium text-subtitle1"
                    >{{ props.value }}</span>
                    <q-btn
                      @click="()=>{}"
                      class="flip-vertical q-px-none"
                      color="grey-5"
                      flat
                      icon="mdi-content-copy"
                    ></q-btn>
                  </div>
                  <div class="flex flex-center justify-between no-wrap">
                    <span class="text-caption text-grey">
                      {{ props.row.product_code }} : {{ $t('assemblyNumber') }}
                    </span>
                    <q-btn
                      @click="()=>{}"
                      class="flip-vertical q-px-none"
                      color="grey-5"
                      flat
                      icon="mdi-content-copy"
                    ></q-btn>
                  </div>
                </q-td>
              </template>
              <template #body-cell-price="props">
                <q-td no-hover key="price" :props="props">
                  <div class="text-subtitle1 q-mt-sm" :style="`color: ${props.row.status_color};`">{{ props.row.status_text }}</div>
                  <div class="text-h6 font-medium">
                    {{ props.row.vat_price }} ₪
                  </div>
                  <div class="text-subtitle1 font-medium text-grey-6"> {{ $t('withoutVat') }} : {{ props.row.price }} ₪
                  </div>
                </q-td>
              </template>
              <template #body-cell-quantity="props">
                <q-td no-hover key="quantity" :props="props">
                  <div class="text-grey-6">
                    {{ props.row.quantity }} {{ $t('pcs') }}
                  </div>
                </q-td>
              </template>
              <template #body-cell-moreDetails="props">
                <q-td no-hover key="moreDetails" :props="props">
                  <q-btn
                    @click="assemblyDialog = true"
                    color="grey"
                    flat
                    no-caps
                  >{{ $t('moreDetails') }}</q-btn>
                </q-td>
              </template>
            </q-table>
          </div> -->
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog
      class="bg-transparent"
      persistent
      style="overflow: hidden;"
      v-model="assemblyDialog"
    >
      <q-card flat style="overflow: hidden; width: 76vw; max-width: 1100px;" class="bg-transparent q-pa-none">
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
          class="bg-white q-pa-none rounded-borders full-height"
          horizontal
          style="border-radius: inherit;"
        >
          <q-card-section class="q-pa-md">
            <div class="row" style="width: 21rem;">
              <div class="col">
                <q-carousel
                  :thumbnails="slideProductFullscreen"
                  animated
                  height="250px"
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
                <div class="text-grey-6 q-my-none font-size-10">
                  {{ $t('imageMayBeUnoriginal') }}
                </div>
                <div
                  class="font-size-12 q-my-none"
                  :style="`color: ${assembly.status_color};`"
                >
                  {{ $t(`statusesNames.${assembly.status}`) }}
                </div>
              </div>
              <div
                class="col-auto column justify-center"
                style="width: 70px;"
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
                    height="65px"
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
            <div class="flex flex-center justify-between no-wrap">
              <div>
                <div class="text-h6 font-medium line-height-15">
                  {{ activeAssembly.price }} ₪
                </div>
                <div class="text-caption font-medium text-grey-6">
                  {{ $t('includeVat') }} : {{ activeAssembly.amount }} ₪
                </div>
              </div>
            </div>
            <q-separator color="grey-4" />
            <div class="flex flex-center justify-between no-wrap">
              <span
                class="text-body1 q-mt-sm q-mb-xs ellipsis-2-lines cursor-pointer line-height-22"
              >{{ activeAssembly.name }}</span>
              <q-btn
                @click="$store.dispatch('main/copyToClipboard', {text: activeAssembly.name, message: this.$t('copied')})"
                class="flip-vertical q-px-none"
                color="grey-5"
                flat
                icon="mdi-content-copy"
              ></q-btn>
            </div>
            <div class="flex flex-center justify-between no-wrap">
              <span class="text-caption text-grey ellipsis">
                {{ $t('assemblyNumber') }} : {{ [...new Set(activeAssembly.products.map(p => p.root_category.id))].length === 1 ? (activeAssembly.products.find(p => p.pivot.main) || activeAssembly.products[0]).sku_original : activeAssembly.sku }}
              </span>
              <q-btn
                @click="$store.dispatch('main/copyToClipboard', {text: [...new Set(activeAssembly.products.map(p => p.root_category.id))].length === 1 ? (activeAssembly.products.find(p => p.pivot.main) || activeAssembly.products[0]).sku_original : activeAssembly.sku, message: this.$t('copied')})"
                class="flip-vertical q-px-none"
                color="grey-5"
                flat
                icon="mdi-content-copy"
              ></q-btn>
            </div>
          </q-card-section>
          <q-separator class="q-my-md" vertical />
          <q-card-section class="q-pa-xs" style="width: 100%;">
            <q-scroll-area class="q-pa-md full-width" style="height: 65vh; max-height: 480px; min-height: 100%;" visible>
              <q-list
                class="q-pa-none rounded-borders"
                dense
                padding
                separator
              >
                <q-item
                  class="q-mb-xs font-medium bg-grey-1 text-caption rounded-borders"
                  style="padding: 4px;"
                >
                  <q-item-section style="max-width: 50px;">
                    {{ $t('num') }}
                  </q-item-section>
                  <q-item-section>
                    {{ $t('categoryName') }}
                  </q-item-section>
                  <q-item-section>
                    {{ $t('nomination') }}
                  </q-item-section>
                  <q-item-section class="text-center" style="max-width: 70px;">
                    {{ $t('quantity') }}
                  </q-item-section>
                </q-item>
                <q-item
                  :key="characteristic.id"
                  class="text-grey-6 highlighted-row cursor-pointer all-pointer-events"
                  v-for="(characteristic, i) in activeAssembly.products"
                  style="padding: 4px;"
                >
                  <q-item-section @click="openProductDialog(characteristic)" style="max-width: 50px;">
                    {{ +i + 1 }}
                  </q-item-section>
                  <q-item-section @click="openProductDialog(characteristic)">
                    {{ characteristic.root_category.name[$q.lang.isoName] }}
                  </q-item-section>
                  <q-item-section @click="openProductDialog(characteristic)">
                    {{ characteristic.name[$q.lang.isoName] }}
                  </q-item-section>
                  <q-item-section @click="openProductDialog(characteristic)" class="text-center" style="max-width: 70px;">
                    {{ characteristic.pivot.qty }} {{ $t('pcs') }}
                  </q-item-section>
                </q-item>
              </q-list>
              <div>
                <!-- <div class="q-mt-md bg-grey-1 font-medium q-px-sm q-py-xs rounded-borders">{{ $t('description') }}</div> -->
                <!-- <div class="text-body2 text-grey-6">{{ product.description }}</div> -->
              </div>
            </q-scroll-area>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog
      class="bg-transparent"
      persistent
      style="overflow: hidden;"
      v-model="productDialog"
    >
      <q-card flat style="overflow: hidden; width: 72vw; max-width: 1000px;" class="bg-transparent q-pa-none">
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
          class="bg-white q-pa-none rounded-borders full-height"
          horizontal
          style="border-radius: inherit;"
        >
          <q-card-section class="q-pa-md">
            <div class="row" style="width: 21rem;">
              <div class="col">
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
                    v-for="image in activeProduct.images"
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
                <!-- <div class="text-grey-6 q-my-none font-size-10">
                  {{ $t('imageMayBeUnoriginal') }}
                </div>
                <div
                  class="font-size-12 q-my-none"
                  :style="`color: ${assembly.status_color};`"
                >
                  {{ $t(`statusesNames.${assembly.status}`) }}
                </div> -->
              </div>
              <div
                class="col-auto column justify-center"
                style="width: 70px;"
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
                    height="65px"
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
            <!-- <div class="flex flex-center justify-between no-wrap">
              <div>
                <div class="text-h6 font-medium line-height-15">
                  {{ assembly.vat_price }} ₪
                </div>
                <div class="text-caption font-medium text-grey-6">
                  {{ $t('includeVat') }} : {{ assembly.price }} ₪
                </div>
              </div>
            </div> -->
            <q-separator color="grey-4" />
            <div class="flex flex-center justify-between no-wrap">
              <span
                class="text-body1 q-mt-sm q-mb-xs ellipsis-2-lines cursor-pointer line-height-22"
              >{{ activeProduct.name[$q.lang.isoName] }}</span>
              <q-btn
                @click="$store.dispatch('main/copyToClipboard', {text: activeProduct.name[$q.lang.isoName], message: this.$t('copied')})"
                class="flip-vertical q-px-none"
                color="grey-5"
                flat
                icon="mdi-content-copy"
              ></q-btn>
            </div>
            <div class="flex flex-center justify-between no-wrap">
              <span class="text-caption text-grey ellipsis">
                {{ $t('assemblyNumber') }} : {{ activeProduct.sku_original }}
              </span>
              <q-btn
                @click="$store.dispatch('main/copyToClipboard', {text: activeProduct.sku_original, message: this.$t('copied')})"
                class="flip-vertical q-px-none"
                color="grey-5"
                flat
                icon="mdi-content-copy"
              ></q-btn>
            </div>
          </q-card-section>
          <q-separator class="q-my-md" vertical />
          <q-card-section class="q-pa-xs" style="width: 100%;">
            <q-scroll-area class="q-pa-md full-width" style="height: 60vh; max-height: 430px; min-height: 100%;" visible>
              <q-list
                class="q-pa-none rounded-borders"
                dense
                padding
                separator
              >
                <q-item
                  class="q-mb-xs font-medium bg-grey-1 text-caption rounded-borders"
                  style="padding: 4px;"
                >
                  <q-item-section>
                    {{ $t('characteristics') }}
                  </q-item-section>
                  <q-item-section>
                    {{ $t('values') }}
                  </q-item-section>
                </q-item>
                <q-item
                  :key="characteristic.id"
                  class="text-grey-6 highlighted-row cursor-pointer all-pointer-events"
                  v-for="characteristic in activeProduct.product_specifications"
                  style="padding: 4px;"
                >
                  <q-item-section @click="()=>{}">
                    {{ characteristic.name }}
                  </q-item-section>
                  <q-item-section @click="()=>{}">
                    {{ characteristic.value }}
                  </q-item-section>
                </q-item>
              </q-list>
              <div>
                <!-- <div class="q-mt-md bg-grey-1 font-medium q-px-sm q-py-xs rounded-borders">{{ $t('description') }}</div> -->
                <!-- <div class="text-body2 text-grey-6">{{ product.description }}</div> -->
              </div>
            </q-scroll-area>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="form.showConfirmReset" persistent>
      <q-card class="q-pa-md" style="width: 320px;">
        <q-card-section class="row items-center q-pa-xs">
          <div class="text-h6 text-center line-height-24 text-left">
            {{ $t('shureResetPassword') }}
          </div>
        </q-card-section>
        <q-card-section class="q-pa-xs q-pt-md">
          <div class="row q-col-gutter-md justify-center confirm-delete__buttons">
            <div class="col-6">
              <q-btn no-caps outline :label="$t('yes')" v-close-popup class="full-width" />
            </div>
            <div class="col-6">
              <q-btn no-caps outline :label="$t('no')" v-close-popup class="full-width" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="form.createPassword" persistent>
      <q-card class="q-pa-md" style="width: 320px; overflow: visible;">
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
        <q-card-section class="full-width row justify-end bg-transparent q-pa-none q-pb-md assembly__dialog-close">
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
        <q-card-section class="row items-center q-pa-xs">
          <div class="text-h6 text-center line-height-24" style="text-align: right;">
            כתובת המייל שלך: {{ client.login }} , עודכנה אצלנו במערכת.
            כדי להציע לך שירות מהיר, נוח וירוק יותר, נשלח
            מהיום אל המייל הזה, עדכונים ומידע שירותי עבור הזמנתך שלך.
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showLoginDialog" persistent>
      <q-card class="q-pa-md" style="width: 320px; overflow: visible;">
        <q-card-section class="row justify-end bg-transparent q-pa-none dialog__close">
          <q-btn
            class="icon_mobile"
            dense
            flat
            icon="highlight_off"
            square
            style="background: #e8e8e8; color: #4d4d4d;"
            @click="$router.push('/')"
          />
            <!-- v-close-popup -->
        </q-card-section>
        <q-form @submit="loginClient">
          <q-card-section class="full-width row justify-end bg-transparent q-pa-none q-pb-md" v-if="showLoginDialog">
            <div class="row q-col-gutter-sm">
              <q-input
                :rules="[val => !!val || '']"
                class="col-xs-6 col-sm-6 font-medium text-body1 personal__field personal__email"
                color="grey"
                dense
                label-slot
                outlined
                type="email"
                v-model="form.email"
              >
                <template #label>
                  <div :class="{ 'text-right': form.email }">{{ $t('email') }}</div>
                </template>
              </q-input>
              <q-input
                :rules="[val => !!val || '']"
                class="col-xs-6 col-sm-6 font-medium text-body1 personal__field personal__email"
                color="grey"
                dense
                label-slot
                outlined
                type="password"
                v-model="form.password"
              >
                <template #label>
                  <div :class="{ 'text-right': form.password }">{{ $t('password') }}</div>
                </template>
              </q-input>
            </div>
            <!-- <q-btn
              class="icon_mobile"
              dense
              flat
              icon="highlight_off"
              square
              style="background: #e8e8e8; color: #4d4d4d;"
              v-close-popup
            /> -->
          </q-card-section>
          <q-card-section class="column items-center q-pa-xs q-gutter-sm">
            <!-- <div class="row text-h6 text-center line-height-24" style="text-align: right;"> -->
              <q-btn
                :label="$t('login')"
                class="col-xs-6 full-width"
                no-caps
                outline
                type="submit"
              />
              <!-- <q-btn
                :label="$t('register')"
                class="col-xs-6 full-width"
                no-caps
                outline
                color="grey"
                v-close-popup
              /> -->
            <!-- </div> -->
          </q-card-section>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
// import CartMini from '../components/CartMini.vue'
// import QuantityInput from '../components/QuantityInput.vue'
import { date } from 'quasar'
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  computed: {
    images () {
      return (this.assembly && this.assemblyImages.slice(this.slideRange, this.slideRange + 3)) || []
    },
    productImages () {
      return (this.activeProduct && this.activeProduct.images.slice(this.slideRange, this.slideRange + 3)) || []
    },
    assemblyImagesIds () {
      return [...new Set(this.activeAssembly.products.flatMap(({pivot}) => pivot.image_id ? pivot.image_id : [] ))]
    },
    assemblyImages () {
      let images = []
      if (this.assemblyImagesIds.length > 1) {
        !!this.activeAssembly && this.activeAssembly.products.map(p => {
          !!p && p.images && p.images.map((i, index) => {
            if (this.assemblyImagesIds.includes(i.id) && p.pivot.main || !this.assemblyImagesIds.includes(i.id) && p.pivot.main && index === 0) {
              images.push(i)
            }
          })
        })
      } else if (this.assemblyImagesIds.length == 1) {
        let rootCategoryId = 0
        let rootProduct = !!this.activeAssembly && this.activeAssembly.products.find(p => p.images.length && p.images[0].id === this.assemblyImagesIds[0])
        rootCategoryId = rootProduct && rootProduct.root_category.id
        let product = !!this.activeAssembly && this.activeAssembly.products.find(p => p.pivot.main && p.root_category.id === rootCategoryId)
        images = product && product.images || []
      } else {
        !!this.activeAssembly && this.activeAssembly.products.map(p => {
          !!p && p.images && p.images.map((i, index) => {
            if (p.pivot.main && index === 0) {
              images.push(i)
            }
          })
        })
      }
      return images
    },
  },

  components: {
    // CartMini,
    // QuantityInput,
  },

  async created () {
    await this.getClient()
    if (!this.client.id) {
      this.showLoginDialog = true
    }
  },

  data () {
    return {
      activeAssembly: {},
      activeProduct: {},
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
            num: 1,
            category: 'קירור אוויר למעבד',
            name: 'Zalman CNPS90',
            quantity: 1,
          },
          {
            id: 2,
            num: 2,
            category: 'אם למעבדי אינטל דור ',
            name: 'GIGABYTE B365M H 91 8',
            quantity: 1,
          },
          {
            id: 3,
            num: 3,
            category: 'מעבד דור',
            name: 'TEL G5400 TRAY PENTIUM 1151 8',
            quantity: 1,
          },
          {
            id: 4,
            num: 4,
            category: 'מארז וספק',
            name: 'SOLID 1700 12CM 500W ATX',
            quantity: 1,
          },
          {
            id: 5,
            num: 5,
            category: 'צורב פנימי למחשב ניי',
            name: 'LG DVD-RW BLACK',
            quantity: 1,
          },
          {
            id: 6,
            num: 6,
            category: 'דיסק קשיח פנימי',
            name: 'WD 1TB Blue 7200rpm 64MB 3.5',
            quantity: 1,
          },
          {
            id: 7,
            num: 7,
            category: 'סק פנימי',
            name: 'выпыSSD 240GB GSTFS31240 GNTD',
            quantity: 1,
          },
          {
            id: 8,
            num: 8,
            category: 'זכרון לניי •סק פנימי',
            name: 'INNGSTON KVR26N19S6-4 4GB DDR4 2666',
            quantity: 1,
          },
        ],
        quantity: 2,
      },
      assemblyDialog: false,
      clientOrder: {
        id: 1,
        date: '12.07.2019',
        orderNumber: 'מס  8484848484',
        quantity: '8 פריטים',
        price: '1,438.75 ₪',
        status: 'הזמנה',
        status_color: '#F15A24',
        products: [
          {
            id: 1,
            image: 'images/town.png',
            name: 'апввпвппКомпьютерная апввпвп пКомпьютерная сборка ххх',
            product_code: '5878888886456',
            price: '1,151.00',
            vat_price: '1,438.75',
            quantity: 16,
            moreDetails: 'Подробнее',
            status_text: 'במלאי',
            status: 'available',
            status_color: '#72BA52',
          },
          {
            id: 2,
            image: 'images/town.png',
            name: 'апввпвппКомпьютерная апввпвп пКомпьютерная сборка ххх',
            product_code: '5878888886456',
            price: '1,151.00',
            vat_price: '1,438.75',
            quantity: 16,
            moreDetails: 'Подробнее',
            status_text: 'לא במלאי',
            status: 'notAvailable',
            status_color: '#F15A24',
          },
          {
            id: 3,
            image: 'images/town.png',
            name: 'апввпвппКомпьютерная апввпвп пКомпьютерная сборка ххх',
            product_code: '5878888886456',
            price: '1,151.00',
            vat_price: '1,438.75',
            quantity: 16,
            moreDetails: 'Подробнее',
            status_text: 'לא במלאי',
            status: 'notAvailable',
            status_color: '#F15A24',
          },
          {
            id: 4,
            image: 'images/town.png',
            name: 'апввпвппКомпьютерная апввпвп пКомпьютерная сборка ххх',
            product_code: '5878888886456',
            price: '1,151.00',
            vat_price: '1,438.75',
            quantity: 6,
            moreDetails: 'Подробнее',
            status_text: '',
            status: 'notAvailable',
            status_color: '#F15A24',
          },
          {
            id: 5,
            image: 'images/town.png',
            name: 'апввпвппКомпьютерная апввпвп пКомпьютерная сборка ххх',
            product_code: '5878888886456',
            price: '1,151.00',
            vat_price: '1,438.75',
            quantity: 16,
            moreDetails: 'Подробнее',
            status_text: 'לא במלאי',
            status: 'notAvailable',
            status_color: '#F15A24',
          },
        ],
      },
      clientOrderProductsColumns: [
        {
          name: 'image',
          required: true,
          label: this.$t('image'),
          align: 'right',
          field: row => row.image,
          format: val => `${val}`,
          sortable: false,
        },
        {
          name: 'name',
          required: true,
          label: this.$t('productName') + ' ' + this.$t('productCode'),
          align: 'right',
          field: row => row.name,
          format: val => `${val}`,
          sortable: false,
        },
        {
          name: 'price',
          required: true,
          label: this.$t('price'),
          align: 'right',
          field: row => row.price,
          format: val => `${val}`,
          sortable: false,
        },
        {
          name: 'quantity',
          required: true,
          label: this.$t('quantity'),
          align: 'center',
          field: row => row.quantity,
          format: val => `${val}`,
          sortable: false,
        },
        {
          name: 'moreDetails',
          required: true,
          label: this.$t('moreDetails'),
          align: 'center',
          field: row => row.moreDetails,
          format: val => `${val}`,
          sortable: false,
        },
      ],
      clientOrdersList: [
        {
          id: 1,
          date: '12.07.2019',
          orderNumber: '451233248',
          quantity: 'פריטים : 2',
          price: '1,438.75 ₪',
          status: 'הזמנה מס :',
          status_color: '#F15A24',
          moreDetails: 'Подробнее',
        },
        {
          id: 2,
          date: '12.07.2019',
          orderNumber: '451233248',
          quantity: 'פריטים : 2',
          price: '1,438.75 ₪',
          status: 'הזמנה מס :',
          status_color: '#F15A24',
          moreDetails: 'Подробнее',
        },
        {
          id: 3,
          date: '12.07.2019',
          orderNumber: '451233248',
          quantity: 'פריטים : 2',
          price: '1,438.75 ₪',
          status: 'הזמנה מס :',
          status_color: '#F15A24',
          moreDetails: 'Подробнее',
        },
        {
          id: 4,
          date: '12.07.2019',
          orderNumber: '451233248',
          quantity: 'פריטים : 2',
          price: '1,438.75 ₪',
          status: 'הזמנה מס :',
          status_color: '#F15A24',
          moreDetails: 'Подробнее',
        },
        {
          id: 5,
          date: '12.07.2019',
          orderNumber: '451233248',
          quantity: 'פריטים : 2',
          price: '1,438.75 ₪',
          status: 'הזמנה מס :',
          status_color: '#F15A24',
          moreDetails: 'Подробнее',
        },
        {
          id: 6,
          date: '12.07.2019',
          orderNumber: '451233248',
          quantity: 'פריטים : 2',
          price: '1,438.75 ₪',
          status: 'הזמנה מס :',
          status_color: '#F15A24',
          moreDetails: 'Подробнее',
        },
      ],
      clientOrdersListColumns: [
        {
          name: 'date',
          required: true,
          label: this.$t('date'),
          align: 'center',
          field: row => row.date,
          format: val => `${val}`,
          sortable: false,
        },
        {
          name: 'orderNumber',
          required: true,
          label: this.$t('orderNumber'),
          align: 'center',
          field: row => row.orderNumber,
          format: val => `${val}`,
          sortable: false,
        },
        {
          name: 'quantity',
          required: true,
          label: this.$t('quantity'),
          align: 'center',
          field: row => row.quantity,
          format: val => `${val}`,
          sortable: false,
        },
        {
          name: 'price',
          required: true,
          label: this.$t('price'),
          align: 'center',
          field: row => row.price,
          format: val => `${val}`,
          sortable: false,
        },
        {
          name: 'status',
          required: true,
          label: this.$t('status'),
          align: 'center',
          field: row => row.status,
          format: val => `${val}`,
          sortable: false,
        },
        {
          name: 'moreDetails',
          required: true,
          label: this.$t('moreDetails'),
          align: 'center',
          field: row => row.moreDetails,
          format: val => `${val}`,
          sortable: false,
        },
      ],
      form: {
        mobilePhone: null,
        email: '',
        login: '',
        password: null,
        hidePassword: true,
        name: '',
        surname: '',
        companyName: '',
        passport: '',
        city: '',
        street: '',
        house: '',
        flat: '',
        floor: null,
        postAddress: '',
        paymentType: null,
        agreement: false,
        showConfirmReset: false,
        createPassword: false
      },
      orderAssemblies: [],
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
      showLoginDialog: false,
      orderDialog: false,
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
      sort: 'חדש',
      sortOptions: [
        this.$t('sortOptions.fromHiToLow'),
        this.$t('sortOptions.fromLowtoHigh'),
        this.$t('sortOptions.availability'),
        this.$t('sortOptions.new'),
      ],
    }
  },

  methods: {
    changeSlideRange(val, type = null) {
      if (type === 'product' && ((val > 0 && this.slideRange >= 0 && this.slideRange < this.activeProduct.images.length - 3) || (val < 0 && this.slideRange > 0 && this.slideRange < this.activeProduct.images.length - 2))) {
        this.slideRange += val
      } else if (!type && ((val > 0 && this.slideRange >= 0 && this.slideRange < this.assemblyImages.length - 3) || (val < 0 && this.slideRange > 0 && this.slideRange < this.assemblyImages.length - 2))) {
        this.slideRange += val
      }
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
    // formatDate (dateString) {
    //   return date.formatDate(dateString, 'DD.MM.YYYY')
    // },
    async openOrderDialog (order) {
      // this.clientOrder = order
      // let assemblies = {}
      // order.products.map(p => {
      //   if (p.pivot.sku_id && (!assemblies[p.pivot.sku_id] || !assemblies[p.pivot.sku_id].length)) {
      //     assemblies[p.pivot.sku_id] = []
      //   }
      //   if (assemblies[p.pivot.sku_id]) {
      //     assemblies[p.pivot.sku_id].push(p)
      //   }
      // })
      // this.orderAssemblies = assemblies
      await this.$store.dispatch('main/getOrderAssemblies', {id: order.id})
      this.orderDialog = true
    },
    async loginClient () {
      await this.$store.dispatch('main/loginClient', this.form)
      await this.getClient()
      if (this.client.id) {
        this.showLoginDialog = false
      }
    },
    async logoutClient () {
      await this.$store.dispatch('main/logoutClient')
    },
    async openAssemblyDialog (assembly) {
      this.activeAssembly = assembly
      this.assemblyDialog = true
      // let assemblyProducts = []
      // let main = []
      // let qty = []
      // let id = assembly.id
      // assembly.products.map(s => {
      //   main.push(parseInt(s.match(/.{1,4}/g), 36).toString(10))
      //   qty.push(parseInt(s.split('').pop(), 36).toString(10))
      // })
      // main.forEach((m, indx) => {
      //   assemblyProducts.push({
      //     id: +m,
      //     name: {},
      //     root_category: {
      //       name: {},
      //     },
      //     pivot: {
      //       main: true,
      //       product_id: +m,
      //       qty: +qty[indx],
      //     },
      //   })
      // })
      // this.$store.commit('main/setAssembly', {
      //   id: this.assemblyId,
      //   name: {},
      //   products: assemblyProducts,
      // })
      // await $store.dispatch('main/getAssembly', {id: this.assemblyId})
    },
    openProductDialog (product) {
      this.activeProduct = product
      this.productDialog = true
    },
  },

  name: 'PagePersonalArea',

  setup () {
    const $store = useStore()
    return {
      cartProducts: computed(() => $store.getters['cart/products'] || []),
      client: computed(() => $store.getters['main/client'] || {}),
      order: computed(() => $store.getters['main/order'] || {}),
    }
  },

  watch: {
    productDialog (newVal, oldVal) {
      this.slideRange = 0
    },
    'activeAssembly.id': function (newVal, oldVal) {
      // const $store = useStore()
      // if (newVal) {
      //   this.$store.commit('main/setAssembly', {
      //     id: this.assemblyId,
      //     name: {},
      //     products: [],
      //   })
      //   this.$store.dispatch('main/getAssembly', {id: this.assemblyId})
      // } else {
      //   this.$store.commit('main/setAssembly', {
      //     id: this.assemblyId,
      //     name: {},
      //     products: [],
      //   })
      // }
      this.slide = (this.assemblyImages[0] && this.assemblyImages[0].id) || 0
    },
    'activeProduct.id': function (newVal, oldVal) {
      this.slideProduct = (this.productImages[0] && this.productImages[0].id) || 0
    },
  },
})
</script>

<style lang="scss">
.personal {
  &__password,
  &__reset {
    &._mobile {
      display: none !important;
    }
  }
  &-orders {
    display: none;
  }
}
@media (max-width: 900px) {
  .personal {
    &__top {
      width: calc(100% - 32px) !important;
    }
  }
}
@media (max-width: 833px) {
  .personal {
    padding: 0 !important;
    padding-top: 8px !important;
    background: #fff !important;
    &__top {
      width: calc(100% - 32px) !important;
    }
    &__bottom {
      width: 100% !important;
      .q-card__section:first-child {
        padding: 0 16px !important;
      }
    }
    &__client,
    &__notification {
      font-size: 12px !important;
      line-height: 14px !important;
    }
    &__client {
      margin-top: 8px !important;
      margin-bottom: 20px !important;
    }
    &__item {
      padding: 5px !important;
      box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, .10) !important;
    }
    &__fields {
      padding-top: 25px !important;
    }
    &__field {
      width: 100% !important;
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
    &__password,
    &__reset {
      display: none !important;
      &._mobile {
        display: block !important;
      }
    }
    &__reset {
      button {
        &:first-child {
          width: calc(100% - 58px) !important;
          height: 100% !important;
          margin-left: 0 !important;
        }
        &:last-child {
          width: 50px !important;
          flex-shrink: 0;
        }
      }
    }
    &__infopost,
    &__flat {
      width: 60% !important;
      flex: auto !important
    }
    &__floor,
    &__house {
      width: 40% !important;
      flex: auto !important
    }
    &__table {
      display: none;
    }
    &__bottom {
      .q-card {
        background: transparent !important;
        &__section {
          padding: 0px !important;
        }
      }
    }
    &-orders {
      display: block;
      max-height: 392px;
      overflow: hidden;
      overflow-y: auto;
      padding: 0 16px;
      &::-webkit-scrollbar {
        display: none;
      }
      &__wrapper {
        width: 100%;
        height: 88px;
        margin: 8px 0;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        box-shadow: 0px 0px 9px -4px rgb(0, 0, 0, .20);
      }
      &__item,
      &__button {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      &__item {
        padding-left: 16px;
        position: relative;
        span {
          font-size: 12px;
          color: #808080;
        }
        &::after {
          content: '';
          width: 1px;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: #8e8e8e;
          border-radius: 50px;
        }
      }
      &__button {
        padding: 0 16px;
        align-items: center;
        font-size: 14px;
        color: #8e8e8e;
        a {
          width: 100%;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          border: 1px solid #8e8e8e;
          border-radius: 8px;
          font-size: 12px;
          color: #8e8e8e;
          margin-top: 10px;
          transition: .2s ease;
          &:hover {
            background: rgba(142, 142, 142, .5);
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
