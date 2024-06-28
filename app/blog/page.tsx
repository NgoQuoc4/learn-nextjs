import { MainLayout } from "@/components/layout";
import { Box, Typography } from "@mui/material";
import React from "react";

const BlogPage = () => {
  return (
    <Box>
      <Typography
        component="h2"
        variant="h1"
        color="primary.main"
        sx={{
          fontSize: "30px",
        }}
      >
        BlogPage
      </Typography>
    </Box>
  );
};

export default BlogPage;
