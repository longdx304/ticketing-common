import { Subjects } from '..';

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  dat: {
    id: string;
    orderId: string;
    stripeId: string;
    version: number;
  };
}
