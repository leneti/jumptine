import { Outlet } from "react-router-dom";
import { AppShell, Container, Center, Text } from "@mantine/core";
import Header from "./components/Header";
import { HEADER_HEIGHT, FOOTER_HEIGHT } from "./constants/sizes";
import "@mantine/core/styles.css";

export default function App() {
  return (
    <AppShell
      header={{ height: HEADER_HEIGHT }}
      footer={{ height: FOOTER_HEIGHT }}
      padding="md"
      style={{ minWidth: "20rem" }}
    >
      <AppShell.Header p="md">
        <Container size="xl" h="100%">
          <Header />
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="xl">
          <Outlet />
        </Container>
      </AppShell.Main>

      <AppShell.Footer p="md">
        <Container size="xl" h="100%">
          <Center h="100%">
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "#d04ed6", to: "#834d9b", deg: 90 }}
              inherit
            >
              Jumpstart Ultra
            </Text>
          </Center>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}
