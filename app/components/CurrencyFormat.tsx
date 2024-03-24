import { NumericFormat } from 'react-number-format';

interface Props {
  value: number;
  currencyId: string;
}

const CurrencyFormat = ({ value, currencyId }: Props) => {
  return (
    <span>
      {
        <NumericFormat
          prefix="$ "
          displayType="text"
          thousandSeparator={currencyId === 'ARS' ? '.' : ','}
          decimalSeparator={currencyId === 'ARS' ? ',' : '.'}
          value={value}
        />
      }
    </span>
  );
};

export default CurrencyFormat;
