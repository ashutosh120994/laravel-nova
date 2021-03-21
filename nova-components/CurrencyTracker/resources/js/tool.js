Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'currency-tracker',
      path: '/currency-tracker',
      component: require('./components/Tool'),
    },
  ])
})
