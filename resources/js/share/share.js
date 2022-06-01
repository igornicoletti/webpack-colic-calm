/* 
Init function with your container selector
initSocialShare('.headerFullCtnGridSubShare')
initSocialShare('.headerMbCtnGridMenuSliceSliceCtSubShare')
 */

/* 
Social Share Links
WhatsApp: https://wa.me/?text=[post-title] [post-url]
Facebook: https://www.facebook.com/sharer.php?u=[post-url]
Twitter: https://twitter.com/share?url=[post-url]&text=[post-title]
LinkedIn: https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
Pinterest: https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
 */

let thumbUrl = document.querySelector('[data-thumb-url]')
let pageTitle = document.querySelector('[data-page-title]')

function initSocialShare(sharebtnContainer) {
  let shareBtnContainer = document.querySelector(sharebtnContainer)

  if (!pageTitle) return
  if (!shareBtnContainer) return
  if (!thumbUrl || !pageTitle) return

  let thumbData = thumbUrl.getAttribute('data-thumb-url')
  let titleData = pageTitle.getAttribute('data-page-title')

  let pinterestBtn = document.querySelector(".pinterest-btn")
  let twitterBtn = document.querySelector('[data-share="twitter-btn"]')

  let postImg = encodeURI(thumbData)
  let postTitle = encodeURI(titleData)
  let postUrl = encodeURI(document.location.href)

  let facebookBtn = shareBtnContainer.querySelector('[data-share="facebook-btn"]')
  let linkedinBtn = shareBtnContainer.querySelector('[data-share="linkedin-btn"]')
  let whatsappBtn = shareBtnContainer.querySelector('[data-share="whatsapp-btn"]')

  if (whatsappBtn) {
    whatsappBtn.setAttribute(
      "href",
      'https://wa.me/?text=' + postTitle + ' ' + postUrl
    )
  }

  if (facebookBtn) {
    facebookBtn.setAttribute(
      "href", 'https://www.facebook.com/sharer.php?u=' + postUrl
    )
  }

  if (twitterBtn) {
    twitterBtn.setAttribute(
      "href",
      'https://twitter.com/share?url=' + postUrl + '&text=' + postTitle
    )
  }

  if (linkedinBtn) {
    linkedinBtn.setAttribute(
      "href",
      'https://www.linkedin.com/shareArticle?url=' + postUrl + '&title=' + postTitle
    )
  }

  if (pinterestBtn) {
    pinterestBtn.setAttribute(
      "href",
      'https://pinterest.com/pin/create/bookmarklet/?media=' + postImg + '&url=' + postUrl + '&description=' + postTitle
    )
  }
}
