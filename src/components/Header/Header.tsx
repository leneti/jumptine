import { Link } from "react-router-dom";
import { Image } from "@mantine/core";

export default function Header() {
  return (
    <Link to="/" aria-label="Jumpstart home page" style={{ display: "contents" }}>
      <Image src="/logo.png" h="100%" w="auto" fit="contain" />
    </Link>
  );
}
