import { BaseEntity } from './BaseEntity.models';

export interface Planetary extends BaseEntity {
  explanation: string;
  title: string;
  url: string;
}
