<template>
  <q-page padding>
    <div>
      <div v-if="!showCamera" class="col-12 text-center q-pt-md">
        <img
          style="width: 340px"
          class="full-width"
          src="https://www.pngitem.com/pimgs/m/115-1150464_mobile-phone-scan-qr-code-png-transparent-png.png"
        />
      </div>
    </div>
    <div class="row justify-center q-pt-lg">
      <div class="col-12 text-center">
        <q-btn
          color="primary"
          icon="camera_alt"
          label="Search QRCode"
          @click="CameraOn()"
          class="full-width"
          v-show="!showCamera"
        />

        <div class="row justify-center q-pt-xl ">
          <div class="col-12 text-center">
            <q-card class="my-card" v-if="output">
              <q-card-section>
                <div class="text-h6">Your QR Code Details</div>
                <div class="text-subtitle2">{{ output }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <div v-if="showCamera">
          <qrcode-stream :camera="camera" @decode="onDecode"> </qrcode-stream>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  name: "PageIndex",
  components: { QrcodeStream },
  data() {
    return {
      isValid: undefined,
      camera: "auto",
      output: null,
      showCamera: false
    };
  },

  methods: {
    async onDecode(content) {
      this.output = content;
      this.CameraOff();
    },
    CameraOn() {
      this.camera = "auto";
      this.showCamera = true;
    },
    CameraOff() {
      this.camera = "off";
      this.showCamera = false;
    }
  }
};
</script>

<style></style>
