import { api } from '../../api'
import { EmailPostPayload } from './Email.types'

const postEmail = async (payload: EmailPostPayload) => {
  return await api.post(`/sending-email`, payload)
}

export default {
  post: postEmail
}
