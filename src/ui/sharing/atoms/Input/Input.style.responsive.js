import { cx, css } from "@emotion/css"
import { forsize, font, handleHeight } from "@mixins";

export const input_container = cx(
    forsize({
        "desktop": css`
            max-height: 48.8px;
            min-height: 48.8px;
        `
    })
);

