import React from "react";
import { IconChevronLeft } from "../../components/Icons";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useRouter } from 'next/router';
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

export default function PostPage({ post }) {
    if (!post) return <div>PAGE NOT FOUND</div>;

    const {
        title,
        content
    } = post;

    const { basePath } = useRouter();

    return (
        <Layout pageName='PostPage' title={title} description={content}>
            <header className="py-4 px-2 border-b border-gray-200">
                <Link href="/">
                    <a className="flex items-center hover:opacity-50 transition duration-200">
                        <span className="w-6 h-6 mr-2"><IconChevronLeft /></span> Home
                    </a>
                </Link>
            </header>
            <article className="my-8 px-8 max-w-2xl mx-auto">
                {/* <div>
                    <img className="block" src={`${basePath}/${images[0].src}`} />
                </div> */}
                <div className="mt-8">
                    <h1 className="text-4xl leading-tight font-black mb-2 lg:mb-6">{title}</h1>
                    <div className="markdown-content leading-relaxed text-xl">
                    </div>
                </div>
            </article>
        </Layout>
    );
}

// PostPage.getInitialProps = async ({ query }) => {
//     const { slug } = query;
//     const post = await import(`../../content/posts/${slug}.md`);
//     return { post, attributes: post.attributes };
// };

export async function getStaticProps({ params }) {

    console.log("params", params);

    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}