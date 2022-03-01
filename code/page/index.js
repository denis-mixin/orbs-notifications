import React from "react";
import animations from "../../assets/js/animations";
import images from "../../assets/js/images";

const Page = ({ title, navbar, hero, _relativeURL, _ID, projects, contribute, integrations, alerts, apps, footer }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          content="The Open DeFi Notifications Protocol: Get Real-time Notifications on your DeFi Positions"
          name="description"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href={generateUrl(images.favicon)}
          rel="shortcut icon"
          type="image/x-icon"
        />
        <meta content={title} property="og:title" />
        <meta
          content="The Open DeFi Notifications Protocol: Get Real-time Notifications on your DeFi Positions"
          property="og:description"
        />
        <meta content="https://defi.org/social.png" property="og:image" />
        <meta content={title} property="twitter:title" />
        <meta
          property="og:image:secure_url"
          content="https://defi.org/social.png"
        />
        <meta
          content="The Open DeFi Notifications Protocol: Get Real-time Notifications on your DeFi Positions"
          property="twitter:description"
        />
        <meta name="twitter:creator" content="@defi" />
        <meta content="https://defi.org/social.png" property="twitter:image" />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />


        <title>{title}</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        <link rel="stylesheet" href={generateUrl(`/assets/css/index.css`)} />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>



      </head>
      <body>
        <div className="app">
          {navbar}
          {hero}
          {contribute}
          {integrations}
          {alerts}
          {apps}
          {footer}
        </div>

      </body>
      <script
        type='module'
        src={generateUrl('/assets/js/main/index.js')}
      />
    </html>
  );
};
export default Page;
