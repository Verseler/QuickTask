import { Flex, Text, Button, useMantineTheme } from "@mantine/core";

const ListItem = ({
  label,
  labelColor,
  labelFontWeight,
  icon,
  onClick,
  gap = 4,
}) => {
  const theme = useMantineTheme();

  return (
    <Button
      variant="subtle"
      size="compact-lg"
      c={labelColor}
      color={theme.colors.gray[7]}
      fullWidth
      justify="flex-start"
      px={4}
      onClick={onClick}
    >
      <Flex gap={gap} align={"center"}>
        {icon}
        <Text size="sm" fw={labelFontWeight}>
          {label}
        </Text>
      </Flex>
    </Button>
  );
};

export default ListItem;
