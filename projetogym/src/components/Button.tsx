import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return(
    <ButtonNativeBase
      w="full"
      h={14}
      bg="green.700"
      rounded="sm"
      {...rest}
    >
      <Text
        color="white"
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}