import { Post } from "@/models";
import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import { format } from "date-fns";

export interface PostCard {
  post: Post;
}

export function PostCard({ post }: PostCard) {
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>
        <Stack direction="row" my={2}>
          <Typography variant="body1">
            {format(new Date(post.publishedDate), "dd MMM yyyy")}
          </Typography>
          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
          <Typography>{post.tagList}</Typography>
        </Stack>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}
