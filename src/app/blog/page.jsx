import Link from 'next/link';
import React from 'react'

function BlogPage() {
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
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl text-red-600 text-center font-bold">Blog Page</h1>
            {blogs.map((blog) => (
                <div key={blog.id} className="border border-gray-300 p-4 mb-4">
                    <h2 className='text-2xl font-bold'>{blog.title}</h2>
                    <p className="text-gray-600">{blog.author}</p>
                    <Link href={`/blog/${blog.id}`} className="text-blue-600 hover:underline">Read More</Link>
                </div>
            ))}
        </div>
    )
}

export default BlogPage
