import { Box, useMantineTheme } from "@mantine/core";
import { IconCirclePlusFilled } from "@tabler/icons-react";

import ListItem from "./SideBar/ListItem";

const AddTaskButton = ({
  gap = 4,
  iconSize = "base",
  iconOnly = false,
  onClick,
}) => {
  const theme = useMantineTheme();

  const ICON_SIZE = {
    xs: 13,
    sm: 20,
    base: 27,
    lg: 34,
    xl: 41,
  };

  if (iconOnly) {
    return (
      <Box onClick={onClick} style={{ cursor: "pointer" }}>
        <IconCirclePlusFilled
          size={ICON_SIZE[iconSize]}
          color={theme.colors.primary[5]}
        />
      </Box>
    );
  }

  return (
    <Box mt={14} mb={8}>
      <ListItem
        label="Add task"
        labelColor={theme.colors.primary[7]}
        labelFontWeight={600}
        gap={gap}
        icon={
          <IconCirclePlusFilled
            size={ICON_SIZE[iconSize]}
            color={theme.colors.primary[5]}
          />
        }
        onClick={onClick}
      />
    </Box>
  );
};

export default AddTaskButton;
