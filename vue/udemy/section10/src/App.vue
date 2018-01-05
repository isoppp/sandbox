<template>
  <div class="container">
    <new-quote @quoteAdded="newQuote"></new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
  </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue'
  import NewQuote from './components/NewQuote.vue'

  export default {
    data: function () {
      return {
        quotes: [
          'Just a Quote to see something',
          'no2'
        ],
        maxQuotes: 10
      }
    },
    methods: {
      newQuote(quote){
        this.quotes.push(quote);
      }
    },
    components: {
      newQuote: NewQuote,
      appQuoteGrid: QuoteGrid
    }
  }
</script>

<style>
</style>
