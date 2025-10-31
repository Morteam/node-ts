export interface Ticket {
  id: string;
  number: number;
  createdAt: Date;
  handleAtDesk?: string;
  handelAt?: Date;
  done: boolean;
}
