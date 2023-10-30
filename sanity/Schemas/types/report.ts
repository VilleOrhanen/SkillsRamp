const report = {
    name: 'report',
    title: 'Report',
    type: 'object',
    fields: [
        {
            name: 'reportUrl',
            title: 'Report URL',
            type: 'url',
            description: 'Link to the report',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: 'Company Logo',
        },
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            description: 'Name of the company',
        }
    ]
};

export default report;