const Metadata = {
    Home: {
        metatitle: "HexaBells | A New-Age Web and App Development Company",
        description: "Get end-to-end website, mobile apps, and custom software development solutions tailored to help modern businesses to explore unprecedented online opportunities.",
        pagetitle: "HexaBells | A New-Age Web and App Development Company",
        metakeyword: "Website Development, Android/iOS App Development,Custom Software Development",
        canonical: 'https://www.hexabells.com/',
    },
    About: {
        metatitle: "About HexaBells | Mobile and Web Development Solutions",
        description: "A Noida-based technology and innovation company, HexaBells offers end-to-end website, mobile and software development solutions to growing businesses across the globe.",
        pagetitle: "About HexaBells | Mobile and Web Development Solutions",
        metakeyword: "Website Development, Android/iOS App Development,Custom Software Development",
        canonical: 'https://www.hexabells.com/about/',
    },
    Blogs: {
        metatitle: "Hexabells Blogs- Web and App development in India",
        description: "We share our experience with you about modern-age strategic digital and tech innovative solutions.",
        pagetitle: "Hexabells Blogs- Web and App development in India",
        metakeyword: "Website Development, Android/iOS App Development,Custom Software Development",

        canonical: "https://www.hexabells.com/blogs/"
    },
    Expertise: {
        metatitle: "HexaBells | Technologies We Work On",
        description: "We augment human intelligence and creativity with the latest web technologies powered by AI, Machine Learning, and Predictive Analytics to create business-focused solutions.",
        pagetitle: "HexaBells | Technologies We Work On",
        metakeyword: "Website Development, Android/iOS App Development,Custom Software Development",

        canonical: "https://www.hexabells.com/expertise/"
    },
    ContactUs: {
        metatitle: "HexaBells | Reach Out to Us ",
        description: "We are here to help. Feel free to reach out to us with your query for technologies, pricing details and technical support.",
        pagetitle: "HexaBells | Reach Out to Us ",
        metakeyword: "Website Development, Android/iOS App Development,Custom Software Development",

        canonical: "https://www.hexabells.com/contact-us/"
    },
    Services: {
        metatitle: "HexaBells | A New-Age Web and App Development Company",
        description: "Get end-to-end website, mobile apps, and custom software development solutions tailored to help modern businesses to explore unprecedented online opportunities.",
        pagetitle: "HexaBells | A New-Age Web and App Development Company",
        metakeyword: "Website Development, Android/iOS App Development,Custom Software Development",

        canonical: "https://www.hexabells.com/services/"
    }


}

export default function GetMetaData(page) {
    return Metadata[page]
}