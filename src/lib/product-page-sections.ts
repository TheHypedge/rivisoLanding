import type { ProductCenterFeatureProps } from "@/components/sections/product/ProductCenterFeature";
import type { ProductSplitFeatureProps } from "@/components/sections/product/ProductSplitFeature";
import type { FaqItem } from "@/components/sections/product/ProductFaqSection";

export type ProductPageSectionsContent = {
  center: ProductCenterFeatureProps;
  split: ProductSplitFeatureProps;
  faqs: FaqItem[];
};

/** Default lorem sections — replace per page when final copy and images are ready */
export const defaultProductPageSections: ProductPageSectionsContent = {
  center: {
    headline: "Integrate your GTM stack with a single SEO operating layer",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageLabel: "Product screenshot",
  },
  split: {
    eyebrow: "Unlock the power",
    headline: "Lorem ipsum dolor sit amet consectetur",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageLabel: "Feature image",
  },
  faqs: [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    },
    {
      question: "Consectetur adipiscing elit?",
      answer:
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla.",
    },
    {
      question: "Sed do eiusmod tempor incididunt?",
      answer:
        "Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis.",
    },
    {
      question: "Ut labore et dolore magna aliqua?",
      answer:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.",
    },
    {
      question: "Quis nostrud exercitation ullamco?",
      answer:
        "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes.",
    },
    {
      question: "Duis aute irure dolor in reprehenderit?",
      answer:
        "Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus.",
    },
    {
      question: "Excepteur sint occaecat cupidatat?",
      answer:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    },
  ],
};
