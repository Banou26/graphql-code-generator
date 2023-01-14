import { gql } from './generated'

import { GetUserQuery, GetUser2Query, GetUser3Query } from './generated/graphql'

export const USER_FRAGMENT = gql(`

fragment UserFragment on User {
  id
  name
  email
}

`)

export const GET_USER = gql(`
  query GetUser($id: String!) {
    user(id: $id) {
      ...UserFragment
    }
  }
`)

export const GET_USER2 = gql(`
  ${USER_FRAGMENT}
  query GetUser2($id: String!) {
    user(id: $id) {
      ...UserFragment
    }
  }
`)

export const GET_USER3 = gql(`
  query GetUser3($id: String!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`)

// Property 'id' does not exist on type '{ __typename?: "User" | undefined; } & { ' $fragmentRefs'?: { UserFragmentFragment: UserFragmentFragment; } | undefined; }'.
const test = undefined as unknown as GetUserQuery
test.user?.id

// Property 'id' does not exist on type '{ __typename?: "User" | undefined; } & { ' $fragmentRefs'?: { UserFragmentFragment: UserFragmentFragment; } | undefined; }'.
const test2 = undefined as unknown as GetUser2Query
test2.user?.id

const test3 = undefined as unknown as GetUser3Query
test3.user?.id
