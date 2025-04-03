import { defineString } from 'firebase-functions/params'

export const env = {
  JWT_SECRET: defineString('JWT_SECRET').value(),
}
