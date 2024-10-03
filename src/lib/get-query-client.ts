import { isServer, QueryClient } from '@tanstack/react-query'

function makeQueryClient() {
  return new QueryClient()
}

let browserQueryClient: QueryClient | undefined

export function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}
