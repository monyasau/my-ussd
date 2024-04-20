// posthog.ts
import PostHog from 'posthog-react-native'

export const posthog = new PostHog('phc_4YljC73RPgHC2OT8FUHJFQRzQL87TcsNyGjli4CxMzH', {
host: 'https://app.posthog.com',
flushAt: number = 8,  
flushInterval: number = 10000,
})