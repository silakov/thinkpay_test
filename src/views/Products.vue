<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-text-field v-model="name" type="text" label="Filter by name"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field v-model="price" type="text" label="Filter by price"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
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
                    <v-text-field
                      label="Name"
                      v-model.trim="editedProduct.name"
                      @blur="$v.editedProduct.name.$touch()"
                      :error="$v.editedProduct.name.$error"
                      :messages="$v.editedProduct.name.$error
                        ? 'Required. Any string'
                        : ''"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Code"
                      v-model.trim="editedProduct.code"
                      @blur="$v.editedProduct.code.$touch()"
                      :error="$v.editedProduct.code.$error"
                      :messages="$v.editedProduct.code.$error
                        ? 'Required. Must be numbers in format ####-####'
                        : ''"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Price"
                      type="number"
                      v-model.trim="editedProduct.price"
                      @blur="$v.editedProduct.price.$touch()"
                      :error="$v.editedProduct.price.$error"
                      :messages="$v.editedProduct.price.$error
                        ? 'Required. Must be numbers'
                        : ''"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDialog">Cancel</v-btn>
              <v-btn
                color="blue darken-1"
                :disabled="$v.$invalid"
                text
                @click="saveProduct"
              >
                Save
              </v-btn>
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
        <router-link :to="'/product/' + item['_id']">{{ item.name }}</router-link>
      </template>
      <template v-slot:item.created_at="{ item }">
        {{ showDate(item.created_at) }}
      </template>
      <template v-slot:item.updated_at="{ item }">
        {{ showDate(item.updated_at) }}
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn icon @click="editProduct(item, item._id)">
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn icon @click="deleteProduct(item._id)">
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
import { helpers, required, decimal } from 'vuelidate/lib/validators';

const code = helpers.regex('code', /^[0-9]{4}[-][0-9]{4}$/);

export default {
  name: 'home',
  data: () => ({
    dialog: false,
    name: '',
    code: '',
    price: null,
    isEdit: '',
    editedProduct: {
      name: '',
      code: '',
      price: null,
    },
    defaultProduct: {
      name: '',
      code: '',
      price: null,
    },
  }),
  validations() {
    return {
      editedProduct: {
        name: {
          required,
        },
        code: {
          required,
          code,
        },
        price: {
          required,
          decimal,
        },
      },
    };
  },
  computed: {
    ...mapState([
      'products',
    ]),
    formTitle() {
      return this.isEdit !== '' ? 'Edit Item' : 'New Item';
    },
    headers() {
      return [
        {
          text: 'Name',
          value: 'name',
        },
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
        },
        {
          text: 'Created',
          value: 'created_at',
        },
        {
          text: 'Updated',
          value: 'updated_at',
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
  async mounted() {
    await this.$store.dispatch('GET_PRODUCTS');
  },
  methods: {
    showDate(date) {
      const currentDate = new Date(date);
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString('default', { month: 'long' }).slice(0, 3);
      const year = currentDate.getFullYear().toString();
      const hours = currentDate.getHours().toString().padStart(2, '0');
      const minutes = currentDate.getMinutes().toString().padStart(2, '0');
      const formattedDate = `${hours}.${minutes} - ${day} ${month} ${year}`;

      return formattedDate;
    },
    editProduct(product, id) {
      this.isEdit = id;
      this.editedProduct = Object.assign({}, product);
      this.dialog = true;
    },
    async deleteProduct(product) {
      await this.$store.dispatch('DELETE_PRODUCT', product);
      await this.$store.dispatch('GET_PRODUCTS');
    },
    closeDialog() {
      this.dialog = false;
      this.isEdit = '';
      this.editedProduct = Object.assign({}, this.defaultProduct);
    },
    async saveProduct() {
      const newEditedProduct = {
        ...this.editedProduct,
        price: Number(this.editedProduct.price), // Преобразование строки в число
      };
      if (this.isEdit !== '') {
        await this.$store.dispatch('EDIT_PRODUCT', { id: this.isEdit, product: newEditedProduct });
      } else {
        await this.$store.dispatch('ADD_PRODUCT', newEditedProduct);
      }
      await this.$store.dispatch('GET_PRODUCTS');
      this.closeDialog();
    },
  },
};
</script>
