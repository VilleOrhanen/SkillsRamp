export default {
    name: 'Styling',
    title: 'Styling',
    type: 'object',
    fields: [
        {
            name: 'css',
            title: 'Styling Options',
            type: 'code',
            options: {
                theme: 'solarized_dark',
                language: 'css',
                languageAlternatives: [
                  {title: 'SASS', value: 'sass'},
                ]
              }
        },
    ],
}