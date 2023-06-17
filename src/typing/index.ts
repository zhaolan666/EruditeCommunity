
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  descriptions: string;
}

export interface RuleProp {
  type: 'required' | 'email' | 'password';
  message: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createAt: string;
  columnId: number;
}

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

export type RulesProp = RuleProp[]
