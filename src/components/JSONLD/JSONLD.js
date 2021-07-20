import React from "react";
import { Helmet } from "react-helmet";

const JSONLD = ({ children }) => {
    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(children)}</script>
        </Helmet>
    )
}
export default JSONLD