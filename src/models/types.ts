export type Sort = 'followers' | 'erPercent' | '';
export type SortDirection = 'asc' | 'desc' | '';
export interface InfluencerType {
  id?: string | null;
  name: string;
  fullName: string | null;
  profileUrl: string;
  avatarUrl: string;
  followers: number;
  er: number;
  erPercent: number;
}
