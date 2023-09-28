import { UnstyledButton, Flex, Text, rem, Badge, Stack } from "@mantine/core";
import classes from "./Template.module.css";

export default function Template({
  title,
  description,
  tags,
}: {
  title: string;
  description?: string;
  tags?: string[];
}) {
  return (
    <UnstyledButton className={classes.item} p="sm">
      <Stack h="100%" justify="space-between">
        <Stack>
          <Flex gap="md" align="center">
            <Text size={rem(40)}>
              <i
                className={`devicon-${
                  title.toLowerCase().includes("java") ? "java" : "dot-net"
                }-plain colored`}
              ></i>
            </Text>

            <Text size={rem(24)} fw="bold">
              {title}
            </Text>
          </Flex>

          <Text>{description}</Text>
        </Stack>

        <Flex gap="sm" wrap="wrap">
          {tags?.map((tag) => (
            <Badge variant="light" color="grape">
              {tag}
            </Badge>
          ))}
        </Flex>
      </Stack>
    </UnstyledButton>
  );
}
