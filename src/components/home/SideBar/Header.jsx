import {
  ActionIcon,
  Avatar,
  Flex,
  Menu,
  Button,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconLayoutSidebarLeftCollapse,
  IconBell,
  IconChevronDown,
} from "@tabler/icons-react";

const Header = ({ onSideBarClose }) => {
  const theme = useMantineTheme();

  const UserProfile = () => {
    return (
      <Menu shadow="md" width={300}>
        {/* User avatar, Name and dropdown */}
        <Menu.Target>
          <Button
            variant="subtle"
            size="compact-lg"
            px={6}
            c={theme.colors.gray[9]}
            color={theme.colors.gray[7]}
          >
            <Flex align={"center"} columnGap={"xs"}>
              <Avatar
                size={"sm"}
                src={
                  "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-an-indian-male-in-a-green-shirt-with-short-hair-image_2961300.jpg"
                }
                alt="user profile picture"
              />

              <Flex align={"center"} columnGap={4}>
                <Text size="sm" fw={500}>
                  Verseler
                </Text>
                <IconChevronDown
                  stroke={1.5}
                  size={17}
                  color={theme.colors.gray[7]}
                />
              </Flex>
            </Flex>
          </Button>
        </Menu.Target>

        {/* Menu Content that will be opened when user clicks on the user avatar */}
        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item
            leftSection={
              <IconSettings style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Settings
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Messages
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconPhoto style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Gallery
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconSearch style={{ width: rem(14), height: rem(14) }} />
            }
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item
            leftSection={
              <IconArrowsLeftRight
                style={{ width: rem(14), height: rem(14) }}
              />
            }
          >
            Transfer my data
          </Menu.Item>
          <Menu.Item
            color="red"
            leftSection={
              <IconTrash style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  };

  return (
    <Flex justify={"space-between"}>
      <UserProfile />

      <Flex columnGap={"xs"} align={"center"}>
        <ActionIcon
          variant="subtle"
          color={theme.colors.gray[7]}
          onClick={() => {}}
        >
          <IconBell stroke={1} size={22} color={theme.colors.gray[7]} />
        </ActionIcon>

        <ActionIcon
          variant="subtle"
          color={theme.colors.gray[7]}
          onClick={onSideBarClose}
        >
          <IconLayoutSidebarLeftCollapse
            stroke={1}
            size={22}
            color={theme.colors.gray[7]}
          />
        </ActionIcon>
      </Flex>
    </Flex>
  );
};

export default Header;
