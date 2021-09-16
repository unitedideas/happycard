<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>

    <div class="blog_card_wrap">
      <h3>View More Recent Blogs</h3>
      <div class="blog_cards">
        <BlogCard :post="post" v-for="{post, index} in sampleBlogCards" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";
import BlogCard from "@/components/BlogCard";

export default {
  name: "Home",
  components: {BlogCard, BlogPost},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "Weekly blog articles with all things programming.....",
        welcomeScreen: true,
        photo: "coding.jpg",
      },
      sampleBlogPost: [
        {
          title: " This is the title of post 1",
          blogHTML: "This is the filler blog post title",
          blogCoverPhoto: "beautiful-stories.jpg",
        },
        {
          title: " This is the title of post 1",
          blogHTML: "This is the filler blog post title",
          blogCoverPhoto: "designed-for-everyone.jpg",
        }
      ],
      sampleBlogCards: [
        {blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1.jpg", blogDate: "May 1, 2021"},
        {blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2.jpg", blogDate: "May 1, 2021"},
        {blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3.jpg", blogDate: "May 1, 2021"},
        {blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4.jpg", blogDate: "May 1, 2021"},
      ],
    }
  }
}
</script>

<style lang="scss">
.blog_card_wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }

  .blog_cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;

    @media(min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media(min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>