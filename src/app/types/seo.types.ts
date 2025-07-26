export type MetaItem = {
    content: string;
    type: 'property' | 'name';
    value: string;
};

export type SchemaItem = {
    meta_name: string;
    meta_value: string;
    type: 'ld-json';
};