import ReactMarkdown from "react-markdown/with-html";
import Link from "next/link";
import { useRouter } from "next/router";

const sampleworks = [
  {
    title: `ResMed AirView`,
    description: `ResMed is an ASX-listed, NASDAG-listed health company who
        provides sleep-boosting products • I helped ResMed to develop a new interface for AirView, their
        online Clinician Portal • The refreshed interface has helped
        worldwide doctors to work more efficiently with their patient medical results`,
    imageSrc: "/images/KoalaDigital_SampleWork_ResMedAirView.jpg",
    imageAlt: "ResMed AirView",
  },
  {
    title: `Cochlear Clinician Portal`,
    description: `Cochlear is an ASX-listed, NASDAG-listed Australia company who
      provide hearing solutions • I helped Cochlear to extend their
      Remote Check Clinician Portal • The extended solution has helped clinicians
      worldwide to provide better remote support to their patients`,
    imageSrc: "/images/KoalaDigital_SampleWork_CochlearPortal.jpg",
    imageAlt: "Cochlear Clinician Portal",
  },
  {
    title: `CommSec Trading Platform`,
    description: `CommSec is an ASX-listed online trading platform owned by the
      Commonwealth Bank of Australia • I helped CommSec to develop
      their new digital Onboarding Flow for new customers • The new
      experience improved conversion rate by 40%`,
    imageSrc: "/images/KoalaDigital_SampleWork_CommSec.jpg",
    imageAlt: "CommSec Trading Platform",
  },
  {
    title: `Pepper Money Website and Portal`,
    description: `Pepper Money is an Australia non-bank lender with a
      down-to-earth approach • I helped Pepper to refresh their
      website and online customer portal • The new digital experience
      has helped Pepper gain more customers and provide better support
      to existing customers`,
    imageSrc: "/images/KoalaDigital_SampleWork_PepperMoney.jpg",
    imageAlt: "Pepper Money Website and Portal",
  },
  {
    title: `Rowmark Australia Wholesale Store`,
    description: `Rowmark Australia is the Australia official distributor of the
      world-renowned Rowmark laser engraving materials • I helped
      Rowmark Australia to develop their ecommerce store and landing
      pages to increase online sales and engage new markets`,
    imageSrc: "/images/KoalaDigital_SampleWork_RowmarkAustralia.jpg",
    imageAlt: "Rowmark Australia Wholesale Store",
  },
  {
    title: `Education Providers`,
    description: `I helped UTS, UNSW and ANMFSA to
      maintain and improve their Online Learning and Survey system. A well-integrated and well-maintained web application 
      plays an important role in helping both teachers and students achieve the best outcomes`,
    imageSrc: "/images/KoalaDigital_SampleWork_EducationProviders.jpg",
    imageAlt: "Australian Education Providers",
  },
  {
    title: `Online Retailers`,
    description: `I helped Bing Lee, Paddy Pallin, Costume Box and Princess Polly to
      maintain and improve their Online Stores. Professional Webmaster Service is crucial for these retailers to increase online sales.`,
    imageSrc: "/images/KoalaDigital_SampleWork_OnlineRetailers.jpg",
    imageAlt: "Australian Online Retailers",
  },
  {
    title: `Web Development Service`,
    description: `I can help you develop new websites, web apps or extensions for your existing websites. 
    Our software are built on robust technology stack and architecture with user-friendly interfaces.`,
    imageSrc: "",
    imageAlt: "",
  },
  {
    title: `Webmaster Service`,
    description: `I can help you maintain your existing websites or online stores with a fixed monthly fee.
    No need for an in-house web developer, yet always have someone available to do any work on your website 24/7.`,
    imageSrc: "",
    imageAlt: "",
  },
];

export default function HomePage({ experienceList, expertiseList, inspirationList }) {
  return (
    <div className="bg-white pt-12 text-gray-900">
      <header className="mt-6 lg:mt-64 bg-white px-8 lg:px-12">
        <div className="lg:max-w-full px-8">
          <h1 className="text-4xl lg:text-5xl font-black leading-tight">
            <span class="text-gray-900">KoalaDigital</span>
          </h1>
          <p className="mt-2 text-2xl lg:text-3xl lg:max-w-5xl leading-snug text-gray-700">
            My name is Bach, I design and develop websites, extensions and online stores that are fit and profitable.
          </p>
        </div>
      </header>

      <section id="expertise" className="mt-24 px-0 lg:mt-48 lg:px-12">
        <div className="mx-auto lg:max-w-full">
          <h2 className="text-3xl px-8 lg:text-4xl font-bold leading-tight">
            My Expertise
          </h2>
          <div className="flex flex-wrap mt-12 lg:mt-24">
            {expertiseList.map((project, index) => (
              <PostSnippet key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mt-24 px-0 lg:mt-48 lg:px-12">
        <div className="mx-auto lg:max-w-full">
          <h2 className="text-3xl px-8 lg:text-4xl font-bold leading-tight">
            My Experience
          </h2>
          <div className="mt-12 lg:mt-24 grid lg:grid-cols-3 gap-3">
            {experienceList.map((project, index) => (
              <div>
                <PostSnippet key={index} {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mt-24 px-0 lg:mt-48 lg:px-12">
        <div className="mx-auto lg:max-w-full">
          <h2 className="text-3xl px-8 lg:text-4xl font-bold leading-tight">
            My Inspirations
          </h2>
          <div className="flex flex-wrap mt-12 lg:mt-24">
            {inspirationList.map((project, index) => (
              <PostSnippet key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 lg:mt-48 px-0 lg:px-16 py-12 lg:py-24 bg-black text-gray-400">
        <div className="px-4 lg:max-w-full">
          <h2 className="text-xl md:text-2xl lg:text-5xl font-bold leading-tight">
            Chat with me instanstly on this website
          </h2>
        </div>
      </section>
    </div>
  );
}

HomePage.getInitialProps = async () => {
  const posts = await importPosts();

  const expertiseList = posts.filter(p => p.attributes.type === 'expertise');
  const experienceList = posts.filter(p => p.attributes.type === 'experience');
  const inspirationList = posts.filter(p => p.attributes.type === 'inspiration');

  return {
    expertiseList,
    experienceList,
    inspirationList,
  };
};

/**
 * React component to render Post Snippet
 */
function PostSnippet({ attributes, slug }) {
  const { title, description, images } = attributes;
  const { basePath } = useRouter();

  return (
    <Link href={`/post/${slug}`}>
      <a className="block hover:opacity-75 transition duration-200">
        <div className="relative">
          {images[0] ? (
            <img
              src={`${basePath}/${images[0].src}`}
              alt={title}
              className="object-cover rounded-sm border border-gray-300 shadow-md"
            />
          ) : (
              <div className="bg-gray-200 pt-2/3"></div>
            )}
        </div>
        <h3 className="text-xl lg:text-2xl mt-4 mb-2 font-bold">{title}</h3>
        <div className="text-lg lg:text-xl text-gray-900 leading-snug">
          <ReactMarkdown
            escapeHtml={false}
            source={description}></ReactMarkdown>
        </div>
      </a>
    </Link>
  );
}


/**********************************************************/
/******************* Support Functions ********************/
/**********************************************************/

/**
 * Reference:
 * https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
 * second flag in require.context function is TRUE if subdirectories should be searched
 * 
 * BE CAREFUL: 
 * Don't make the '../content/posts' into an external constant or variable. 
 * For some unknown reason, that will break the execution of require.context().
 * Only change the string here.
 */
async function importPosts() {
  const markdownFiles = require
    .context('../content/posts', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};
