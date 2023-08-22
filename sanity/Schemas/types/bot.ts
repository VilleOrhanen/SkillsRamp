import { defineField } from "sanity";

const bot = {
    name: 'bot',
    title: 'Bot',
    type: 'object',
    fields: [
        defineField({
            name: 'tenantId',
            title: 'Tenant id',
            type: 'string',
          }),
      defineField({
            name: 'instanceId',
            title: 'Instance id',
            type: 'string',
          }),
      defineField({
            name: 'subscriptionKey',
            title: 'Subscription key',
            type: 'string',
          }),
      defineField({
            name: 'debug',
            title: 'Debug',
            type: 'boolean',
          }),
      defineField({
            name: 'autoScroll',
            title: 'Auto-scroll',
            type: 'boolean',
          }),
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            }),
    ]
}

export default bot;