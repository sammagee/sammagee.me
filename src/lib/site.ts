export const SITE_ORIGIN = 'https://sammagee.me'
export const SITE_URL = `${SITE_ORIGIN}/`
export const NAME = 'Sam Magee'
export const JOB_TITLE = 'Software Engineer'
export const X_HANDLE = '@sammagee'
export const PERSON_ID = `${SITE_URL}#person`
export const WEBSITE_ID = `${SITE_URL}#website`
export const AVATAR_URL = `${SITE_URL}images/social/avatar.png`
// Bump when public/images/social/card.png changes so X and other crawlers refetch it.
export const SOCIAL_CARD_VERSION = '2'
export const SOCIAL_CARD = {
  url: `${SITE_URL}images/social/card.png?v=${SOCIAL_CARD_VERSION}`,
  width: '1200',
  height: '630',
  alt: "Sam Magee, Software Engineer. Hey, my name is Sam! I'm a software engineer at Vanta, helping businesses build and prove trust.",
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function postPath(slug: string) {
  return `/thoughts/${slug}`
}

export function postTitleTransition(slug: string) {
  return `post-title-${slug}`
}
