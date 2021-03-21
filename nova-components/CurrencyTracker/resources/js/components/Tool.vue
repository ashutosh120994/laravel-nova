<template>
    <div class="w-full">
        <heading class="mb-6">Currency Tracker</heading>
          <card class="m-2 p-6" style="float:left;text-align:left;" v-for="(rate, index) in rates" :key="index">
              <div class="">
                <table>
                  <thead>
                    <tr class="m-2 p-2">
                      <th>INR</th>
                      <th>{{ index }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="m-2 p-2">
                      <td>1</td>
                      <td>{{ rate }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rates: [],
        }
    },
    mounted() {
        this.getRates();
    },
    methods: {
        getRates() {
            Nova.request().get('/nova-vendor/currency-tracker/rates').then(response => {
                const result = JSON.parse(response.data);
                console.log(result);
                const cus = result['rates'];
                const allowed = ['USD', 'GBP', 'EUR'];
                this.rates = allowed.reduce((result, key) => ({ ...result, [key]: cus[key] }), {});
            });
        },
    },
}
</script>

<style>
/* Scoped Styles */
</style>
