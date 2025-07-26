import { MetaItem, SchemaItem } from "./seo.types";

export type Instructor = {
    name: string;
    description: string;
    image: string;
};

export type Feature = {
    icon: string;
    title: string;
    subtitle: string;
};

export type Pointer = {
    text: string;
};

export type FeatureExplanation = {
    checklist: string[];
    file_type: string;
    file_url: string;
    title: string;
    video_thumbnail: string;
};

export type About = {
    title: string;
    description: string;
}

export type Checklist = {
    icon: string;
    text: string;
}

export type ResponseData = {
    title: string;
    description: string;
    media: { name: string; thumbnail_url: string }[];
    cta_text: { name: string };
    checklist: Checklist[];
    sections: {
        type: string;
        values: Instructor[] | Feature[] | Pointer[] | FeatureExplanation[] | About[];
    }[];
    seo: {
        keywords: string[];
        defaultMeta: MetaItem[];
        schema: SchemaItem[];
    };
};

export type CourseDetailsType = {
    data: ResponseData | undefined;
};