import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import { components, DropdownIndicatorProps } from 'react-select';
import { IndicatorProps } from './SelectInput.types';

const Indicator = (props: DropdownIndicatorProps & IndicatorProps) => {
  const {
    selectProps: { menuIsOpen },
  } = props;

  return (
    <components.DropdownIndicator {...props}>
      {props.isFocused || menuIsOpen
        ? props.iconOpen || (
            <SvgIcon
              src={IconsEnum.menuOpen}
              size={12}
              color={props.error ? 'error' : 'primary'}
            />
          )
        : props.iconClosed || (
            <SvgIcon
              src={IconsEnum.menuClosed}
              size={12}
              color={'ultra-light-gray'}
            />
          )}
    </components.DropdownIndicator>
  );
};

export default Indicator;
