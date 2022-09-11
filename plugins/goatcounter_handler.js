export default ({ app }) => {
  if (typeof window !== 'undefined') {
    (function () {
      const goatcounter = document.createElement('script')
      goatcounter.setAttribute(
        'data-goatcounter',
        'https://upcycleyourstuff.goatcounter.com/count'
      )
      goatcounter.setAttribute('async', 'true')
      goatcounter.setAttribute("src","//gc.zgo.at/count.js");
      goatcounter.setAttribute("data-goatcounter-settings",'{"allow_local": true}')

      const s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(goatcounter, s)
    })()
  }
  app.router.afterEach((to, from) => {
    if (typeof window.goatcounter !== 'undefined'){
        window.goatcounter.count({path:to.path})
    }
  })

}
