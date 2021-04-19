<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary">
        <q-btn
          class="absolute-left"
          v-if="$route.fullPath.includes('/index')"
          v-go-back="'/'"
          icon="arrow_back"
          label="back"
          dense
          flat
        />

        <q-toolbar-title class="absolute-center">
          QR Code Scanner
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-list>
      <q-item clickable to="/" exact>
        <q-item-section avatar>
          <q-icon name="camera_alt" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Search QRCode</q-item-label>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
export default {
  name: "MyLayout",
  data() {
    return {};
  }
};
</script>

<style></style>
