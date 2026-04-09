import Link from "next/link";

 const blogs = [
  {
    id: 1,
    title: "Learning React as a Beginner",
    author: "Jihad",
    content: "React is one of the most popular JavaScript libraries for building user interfaces. Beginners often start with components, props, and state management. Once you understand these basics, you can create dynamic web applications that respond to user input and deliver a smooth experience."
  },
  {
    id: 2,
    title: "Why Tailwind CSS is Powerful",
    author: "Sadia",
    content: "Tailwind CSS provides utility-first classes that make styling faster and more consistent. Instead of writing custom CSS, developers can use pre-defined classes to build responsive layouts. This approach saves time, reduces complexity, and ensures a clean design system across projects."
  },
  {
    id: 3,
    title: "Getting Started with PHP & MySQL",
    author: "Rahim",
    content: "PHP and MySQL together form the backbone of many dynamic websites. PHP handles server-side logic, while MySQL stores and retrieves data. Learning how to connect them allows you to build login systems, blogs, and e-commerce platforms with real-time database interaction."
  },
  {
    id: 4,
    title: "JavaScript ES6 Features You Should Know",
    author: "Al Amin",
    content: "ES6 introduced powerful features like arrow functions, template literals, and destructuring. These make code cleaner and more readable. Understanding ES6 is essential for modern web development, as most frameworks and libraries rely on these features for efficient coding practices."
  },
  {
    id: 5,
    title: "Responsive Design Principles",
    author: "Nusrat",
    content: "Responsive design ensures websites look good on all devices. Using flexible grids, media queries, and scalable images, developers can adapt layouts to different screen sizes. This improves user experience and accessibility, making websites more professional and user-friendly."
  },
  {
    id: 6,
    title: "Version Control with Git",
    author: "Jihad",
    content: "Git is a version control system that helps developers track changes in code. With GitHub, teams can collaborate, review pull requests, and manage projects effectively. Learning Git commands like commit, push, and merge is crucial for professional development workflows."
  },
  {
    id: 7,
    title: "Introduction to React Hooks",
    author: "Sadia",
    content: "Hooks like useState and useEffect simplify React development by allowing functional components to manage state and side effects. They reduce the need for class components and make code more concise. Hooks are now the standard approach in modern React applications."
  },
  {
    id: 8,
    title: "Building REST APIs with Node.js",
    author: "Rahim",
    content: "Node.js allows developers to build scalable backend applications. Using Express.js, you can create REST APIs that handle requests and responses efficiently. These APIs connect frontend applications with databases, enabling dynamic features like authentication, data storage, and real-time updates."
  }
];

const BlogDetelsPage = async({params}) => {
    const { blogid } =  await params;
    const blog = blogs.find(blog => blog.id == blogid);
    console.log(blogid);
    return (
        <div className="container mx-auto flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-3xl font-bold text-center p-2">{blog.title}</h1>
            <p className="text-center text-green-600">Author : {blog.author}</p>
            <p className="text-center">{blog.content}</p>
            <Link href="/blog" className="p-4 text-blue-600 hover:underline">Go Back</Link>
        </div>
    )
}

export default BlogDetelsPage
