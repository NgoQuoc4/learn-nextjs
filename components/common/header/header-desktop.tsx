"use client";
import { Container, Stack, Link as MuiLink } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ROUTES_LIST } from "./routes";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const HeaderDesktop = () => {
  const pathname = usePathname();

  return (
    <Box display={{ xs: "none", md: "block" }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {/* {ROUTES_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              <MuiLink sx={{ ml: 2 }}>{route.label}</MuiLink>
            </Link>
          ))} */}
          {ROUTES_LIST.map((route) => (
            <React.Fragment key={route.path}>
              <MuiLink
                sx={{ ml: 2, fontWeight: "medium" }}
                component={Link}
                href={route.path}
                passHref
                className={clsx({ active: pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </React.Fragment>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
