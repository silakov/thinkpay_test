<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field v-model="name" type="text" label="Filter by name"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field v-model="code" type="text" label="Filter by code"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field v-model="price" type="text" label="Filter by price"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mt-3" block v-on="on">New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.code" label="Code"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-data-table
      dense
      :headers="headers"
      :items="products"
      :search="name"
      disable-pagination
      hide-default-footer
    >
      <template v-slot:item.name="{ item }">
        <router-link :to="'/product/' + item.id">{{ item.name }}</router-link>
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn icon @click="editItem(item)">
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn icon @click="deleteItem(item)">
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  data: () => ({
    dialog: false,
    name: '',
    code: '',
    price: '',
    editedId: -1,
    editedItem: {
      name: '',
      code: 0,
      price: 0,
    },
    defaultItem: {
      name: '',
      code: 0,
      price: 0,
    },
  }),
  computed: {
    ...mapState([
      'products',
    ]),
    formTitle() {
      return this.editedId === -1 ? 'New Item' : 'Edit Item';
    },
    headers() {
      return [
        { text: 'Name', value: 'name' },
        {
          text: 'Code',
          value: 'code',
          filter: (value) => {
            if (!this.code) return true;
            return value === this.code;
          },
        },
        {
          text: 'Price',
          value: 'price',
          filter: (value) => {
            if (!this.price) return true;
            return value === parseInt(this.price, 10);
          },
        },
        {
          text: 'Actions',
          value: 'action',
          sortable: false,
          align: 'right',
        },
      ];
    },
  },
  watch: {
    dialog(val) {
      return val || this.close();
    },
  },
  async mounted() {
    await this.$store.dispatch('GET_PRODUCTS');
  },
  methods: {
    editItem(item) {
      this.editedId = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    async deleteItem(item) {
      await this.$store.dispatch('DELETE_PRODUCT', item.id);
    },
    close() {
      this.dialog = false;
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedId = -1;
    },
    async save() {
      if (this.editedId > -1) {
        await this.$store.dispatch('EDIT_PRODUCT', { id: this.editedId, item: this.editedItem });
      } else {
        await this.$store.dispatch('ADD_PRODUCT', this.editedItem);
      }
      this.close();
    },
  },
};
</script>
