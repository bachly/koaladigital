import Icon from "../components/Icon";

const services = [
  {
    title: `Rebranding`,
    description: `One of the most cost-effective ways to drives sales is to rebrand. By rebranding, your business can reach 
    a new group of customers. Existing customers can also see increased values in their dealings with you.`,
    iconName: "magic-wand"
  },
  {
    title: `Logo design`,
    description: `If rebranding the whole website seems daunting to you, you can start with a rebranded logo. Our designed logo
    can work in many mediums and formats, ranging from digital to print, from website to uniforms.`,
    iconName: "coffee-cup"
  },
  {
    title: `Bespoke Lead capture website`,
    description: `Not ready to launch? Just want to test the water? Fear not! By creating a custom Lead capture website, you can give
    your customers a taste of what is coming, and capture their email address into a CRM for future follow-up.`,
    iconName: "users"
  },
  {
    title: `Custom Shopify plugin`,
    description: `We can create custom Shopify frontend and backend plugin. Backend plugins help ease the management of your store.
    Frontend plugins, such as a Smart Calculator of some sort, give values to your customers.`,
    iconName: "chart-bars"
  },
  {
    title: `Bespoke Shopify store`,
    description: `We can create a bespoke Shopify store from scratch, to match any requirements you can think of. Give your customers
    a unique shopping experience and stay ahead of your competition.`,
    iconName: "store"
  },
  {
    title: `Custom Multi-platform App`,
    description: `Multi-platform App is the best way to turn an idea into an app or an online business. Your Multi-platform App
    can be deployed to the web and/or as a desktop application, and/or as a native phone app.`,
    iconName: "laptop-phone"
  },
  {
    title: `Webmaster Service`,
    description: `We can help you maintain and improve your existing websites.
    No need to hire an in-house web developer, and pay super and salary. Yet always have someone available to do any work 24/7.`,
    iconName: "cog"
  },
  {
    title: `Social Media & SEO Service`,
    description: `We can help you reach new audience, generates leads and follows from paid media and organic traffic, including 
    Facebook and Instagram Ads, Google Ads and Search Engine optimisation.`,
    iconName: "bullhorn"
  }
]

const sampleworks = [
  {
    title: `ResMed AirView`,
    description: `ResMed is an ASX-listed, NASDAG-listed health company who
        provides sleep-boosting products • Bach helped ResMed to develop a new interface for AirView, their
        online Clinician Portal • The refreshed interface has helped
        worldwide doctors to work more efficiently with their patient medical results`,
    imageSrc: "/images/KoalaDigital_SampleWork_ResMedAirView.jpg",
    imageAlt: "ResMed AirView",
  },
  {
    title: `Cochlear Clinician Portal`,
    description: `Cochlear is an ASX-listed, NASDAG-listed Australia company who
      provide hearing solutions • Bach helped Cochlear to extend their
      Remote Check Clinician Portal • The extended solution has helped clinicians
      worldwide to provide better remote support to their patients`,
    imageSrc: "/images/KoalaDigital_SampleWork_CochlearPortal.jpg",
    imageAlt: "Cochlear Clinician Portal",
  },
  {
    title: `CommSec Trading Platform`,
    description: `CommSec is an ASX-listed online trading platform owned by the
      Commonwealth Bank of Australia • Bach helped CommSec to develop
      their new digital Onboarding Flow for new customers • The new
      experience improved conversion rate by 40%`,
    imageSrc: "/images/KoalaDigital_SampleWork_CommSec.jpg",
    imageAlt: "CommSec Trading Platform",
  },
  {
    title: `Pepper Money Website and Portal`,
    description: `Pepper Money is an Australia non-bank lender with a
      down-to-earth approach • Bach helped Pepper to refresh their
      website and online customer portal • The new digital experience
      has helped Pepper gain more customers and provide better support
      to existing customers`,
    imageSrc: "/images/KoalaDigital_SampleWork_PepperMoney.jpg",
    imageAlt: "Pepper Money Website and Portal",
  },
  {
    title: `Rowmark Australia Wholesale Store`,
    description: `Rowmark Australia is the Australia official distributor of the
      world-renowned Rowmark laser engraving materials • Bach helped
      Rowmark Australia to develop their ecommerce store and landing
      pages to increase online sales and engage new markets`,
    imageSrc: "/images/KoalaDigital_SampleWork_RowmarkAustralia.jpg",
    imageAlt: "Rowmark Australia Wholesale Store",
  },
  {
    title: `Education Providers`,
    description: `Bach helped UTS, UNSW and ANMFSA to
      maintain and improve their Online Learning and Survey system. A well-integrated and well-maintained web application 
      plays an important role in helping both teachers and students achieve the best outcomes`,
    imageSrc: "/images/KoalaDigital_SampleWork_EducationProviders.jpg",
    imageAlt: "Australian Education Providers",
  },
  {
    title: `Online Retailers`,
    description: `Bach helped Bing Lee, Paddy Pallin, Costume Box and Princess Polly to
      maintain and improve their Online Stores. Professional Webmaster Service is crucial for these retailers to increase online sales.`,
    imageSrc: "/images/KoalaDigital_SampleWork_OnlineRetailers.jpg",
    imageAlt: "Australian Online Retailers",
  },
  {
    title: `Rebranding`,
    description: `Bach has helped several local busineses to rebrand their websites. After rebranding, they are able to drive more online visitors, retain
    more customers and increase values to their existing customers`,
    imageSrc: "",
    imageAlt: "",
  },
];
function HomePage() {
  return (
    <div className="bg-white pt-12 text-gray-900">
      <header className="mt-6 lg:mt-64 bg-white lg:px-12">
        <h1 className="text-3xl lg:text-5xl font-black leading-tight">
          KoalaDigital helps your business GROW. Full stop.
          </h1>
        <div className="max-w-5xl mt-1 text-2xl leading-tight">
          Based in Ryde Sydney Australia, we create custom Ecommerce Stores and Smart Web-based Applications that give values to your customers, which in turn generate leads and revenues.
          </div>
      </header>

      <section className="mt-24 px-0 lg:mt-48 lg:px-12">
        <div className="mx-auto lg:max-w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Our services
          </h2>
          <div className="mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
            {services.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 px-0 lg:mt-48 lg:px-12">
        <div className="mx-auto lg:max-w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Sample work
          </h2>
          <div className="mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
            {sampleworks.map((workpiece, index) => (
              <SampleWork key={index} {...workpiece} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 lg:mt-48 px-0 lg:px-8 py-12 lg:py-24 bg-black text-gray-400">
        <div className="px-4 lg:max-w-full">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
            Chat with Bach directly on this page, or send an email to{" "}
            <a className="text-gray-700" href="mailto:bach@koaladigital.com.au">
              bach@koaladigital.com.au
            </a>
          </h2>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

/****************************************************
 * 
 * Components
 * 
 ****************************************************/

function Service({ title, description, iconName }) {
  return (
    <div className="w-full">
      <div className="relative">
        {iconName ? (
          <div class="w-12 h-12">
            <Icon name={iconName} />
          </div>
        ) : (
          <div className="bg-gray-200 pt-2/3"></div>
        )}
      </div>
      <h3 className="text-xl mt-4 mb-2 font-extrabold leading-tight">{title}</h3>
      <p className="text-lg text-gray-900 leading-snug">
        {description}
      </p>
    </div>
  );
}

function SampleWork({ title, description, imageSrc, imageAlt }) {
  return (
    <div className="w-full">
      <div className="relative">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover rounded-sm border border-gray-300 shadow-md"
          />
        ) : (
          <div className="bg-gray-200 pt-2/3"></div>
        )}
      </div>
      <h3 className="text-xl mt-4 mb-2 font-extrabold leading-tight">{title}</h3>
      <p className="text-lg text-gray-900 leading-snug">
        {description}
      </p>
    </div>
  );
}
