import React from 'react';
import PropTypes from 'prop-types';

import { Button as BottonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
    title: string;
}

export function Button({title, ...rest}: Props) {
  return (
    <BottonNativeBase
        bg={"green.700"}
        h={14}
        fontSize="sm"
        rounded="sm"
        _pressed={{bg: "green.500"}}
        {...rest}
    >
        <Heading
            color="white"
            fontSize="sm"
        >
            {title}
        </Heading>
    </BottonNativeBase>
  );
}