import { HasFormatter } from "../interfaces/HasFormatter";

// classes
export class Payments implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {
    this.recipient = recipient;
    this.details = details;
    this.amount = amount;
  }

  format() {
    return `${this.recipient} owed $${this.amount} for ${this.details}`;
  }
}
