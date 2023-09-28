import { Title, Text, Container, SimpleGrid } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./Home.module.css";
import Features from "@/components/Features";
import Template from "@/components/Template";

export default function Home() {
  const mockTemplates = [
    {
      title: "Java service",
      description: "Example description",
      tags: ["Java", "Container"],
    },
    {
      title: ".NET service",
      description: "Example description",
      tags: [".NET", "CSharp", "Container"],
    },
  ];

  return (
    <Container className={classes.wrapper} size="xl">
      <Dots className={classes.dotsLarge} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dotsLarge} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <Dots className={classes.dotsSmall} style={{ left: 0, bottom: 0 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Easily{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "#d04ed6", to: "#834d9b", deg: 90 }}
            inherit
          >
            Jumpstart
          </Text>{" "}
          your next project
        </Title>

        <Features />

        <Container size="lg" mt="lg">
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            {mockTemplates.map((template) => (
              <Template {...template} />
            ))}
          </SimpleGrid>
        </Container>
      </div>
    </Container>
  );
}
