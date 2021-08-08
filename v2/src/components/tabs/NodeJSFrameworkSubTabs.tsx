import React from "react";
let Tabs = require("@theme/Tabs").default;

export default function NodeJSFrameworkSubTabs(props) {
    return (
        <Tabs
            isSubTab={true}
            groupId="nodejs-framework"
            defaultValue="express"
            values={[
                { label: 'Express', value: 'express' },
                { label: 'Hapi', value: 'hapi' },
                { label: 'Fastify', value: 'fastify' },
                { label: 'AWS Lambda', value: 'awsLambda' },
                { label: 'Koa', value: 'koa' },
                { label: 'Loopback', value: 'loopback' },
            ]}>
            {props.children}
        </Tabs>
    );
}