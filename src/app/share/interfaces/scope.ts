import { iUser } from './user';

interface iScopeStyles {
  url_to_main?: string,
  url_to_login?: string,
  url_to_registration?: string,
}

export interface iScope {
  styles?: iScopeStyles,
  author?: iUser,
  name?: string,
  title: string,
  description?: string,
  back_url: string,
  icon?: string,
  secret?: string,
}