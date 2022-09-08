const redirects = require('../data/redirects.json') // update to your file path

export default function ({route, redirect}) {
  // find the redirect if it exists where the from === the requested url
  const toRedirect = redirects.find(({ from }) => from === route.name)
  // If it exists, redirect the page with a 301 response else carry on
  if (toRedirect) {
    return redirect(301, toRedirect.to)
  }
}
