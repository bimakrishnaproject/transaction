export interface TransactionData {
  id: string;
  sender_bank: string;
  beneficiary_bank: string;
  beneficiary_name: string;
  account_number: string;
  amount: number;
  remark: string;
  unique_code: number;
  created_at: string;
}

export interface TransactionDetailProps {
  route: {
    params: {
      data: TransactionData;
    };
  };
}
