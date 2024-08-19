export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold my-7 text-gray-800 dark:text-white">
          About Animesh's Blog
        </h1>
        <div className="text-md text-gray-600 dark:text-gray-300 flex flex-col gap-6">
          <p>
            Animesh Kumar, a passionate developer, created this blog to share
            his thoughts and ideas on technology, coding, and more. Here, you'll
            find articles and tutorials on web development, software
            engineering, programming languages, and SEO, with new content added
            weekly.
          </p>

          <p>
            Expect concise, insightful content that covers the latest in tech.
            Animesh is always exploring new technologies, so there's always
            something fresh to learn, whether you're new to coding or a seasoned
            developer.
          </p>

          <p>
            We encourage you to engage with the content by leaving comments,
            liking, and replying to others. Join the conversation and become
            part of a community that learns and grows together.
          </p>
        </div>
      </div>
    </div>
  );
}
