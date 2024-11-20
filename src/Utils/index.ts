import moment from 'moment';

export const formatCurrency = (amount: number): string => {
  return `Rp${amount.toLocaleString().replace(/,/g, '.')}`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('id-ID', options);
};

export const sortData = (selectedSort: any, data: any) => {
  let sorted = [...data];
  switch (selectedSort?.type) {
    case 'asc':
      sorted = sorted.sort((a, b) =>
        a.beneficiary_name.localeCompare(b.beneficiary_name)
      );
      break;
    case 'dsc':
      sorted = sorted.sort((a, b) =>
        b.beneficiary_name.localeCompare(a.beneficiary_name)
      );
      break;
    case 'new':
      sorted = sorted.sort((a, b) => {
        const dateA = moment(a.created_at).toDate();
        const dateB = moment(b.created_at).toDate();
        return dateB - dateA;
      });
      break;
    case 'old':
      sorted = sorted.sort((a, b) => {
        const dateA = moment(a.created_at).toDate();
        const dateB = moment(b.created_at).toDate();
        return dateA - dateB;
      });
      break;
    default:
      break;
  }
  return sorted;
};
