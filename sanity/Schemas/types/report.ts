const report = {
    name: 'report',
    title: 'Report',
    type: 'object',
    fields: [
        {
            name: 'reportUrl',
            title: 'Report URL',
            type: 'url',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
        },
    ]
};

export default report;