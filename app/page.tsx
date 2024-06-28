import { HeroSection, RecentPosts } from "@/components/home";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
    </Box>
  );
}
