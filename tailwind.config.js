// tailwind.config.js
import pluginCapsize from "tailwindcss-capsize";

export default {
    theme: {
        fontFamily: {
            plexmono: ["IBM Plex Mono", "monospace"],
        },
        fontMetrics: {
            plexmono: {
                capHeight: 698,
                ascent: 1025,
                descent: -275,
                lineGap: 0,
                unitsPerEm: 1000,
            },
        },
    },
    plugins: [pluginCapsize],
};