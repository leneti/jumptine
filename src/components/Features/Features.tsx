import { Text, SimpleGrid, Container, rem } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconListCheck, IconCodeDots, IconDownload } from "@tabler/icons-react";
import classes from "./Features.module.css";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconListCheck,
    title: "Select features",
    description: "Choose only the features you need for your next project.",
  },
  {
    icon: IconCodeDots,
    title: "Preview source code",
    description:
      "Explore the codebase online, change your selected features and see updates instantly.",
  },
  {
    icon: IconDownload,
    title: "Download",
    description: "Generate the source code and download the zipped project.",
  },
];

export default function Features() {
  const matches = useMediaQuery("(max-width: 48em)");

  if (matches) {
    return null;
  }

  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={90} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
