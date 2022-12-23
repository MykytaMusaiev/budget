import React from 'react';
import Form from '.';

export default {
    title: 'Example/Form',
    component: Form,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <Form {...args} />;

export const Income = Template.bind({});
Income.args = {
    onChange: () => {}
};