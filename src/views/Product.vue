<template>
  <v-row justify="center">
    <v-col cols="12" sm="4">
      <v-card>
        <v-img
          height="200"
          class="white--text align-end"
          :alt="product.name"
          :src="'https://source.unsplash.com/400x200/?' + product.name"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
          <v-card-title>{{ product.name }}, price: {{ product.price }}</v-card-title>
        </v-img>
        <v-card-text>
          <span class="font-weight-bold">created:</span> {{ product.created_at }} <br/>
          <span class="font-weight-bold">updated:</span> {{ product.updated_at }} <br/>
          <span class="font-weight-bold">code:</span> {{ product.code }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  async mounted() {
    await this.$store.dispatch('GET_PRODUCT', this.$route.params.id);
  },
  computed: {
    ...mapState([
      'product',
    ]),
  },
};
</script>
