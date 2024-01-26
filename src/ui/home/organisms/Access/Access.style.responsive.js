import { css, cx } from "@emotion/css"
import { forsize, font } from "@mixins";

export const section = cx(
    forsize({
        "desktop": cx(
            css`
                padding: 30px;
            `
        ),
        "tablet-landscape": cx(
            css`
                padding: 30px 20px;
            `
        )
    })
)

export const container = cx(
    forsize({
        "desktop": css`
            padding: 40px;
        `,
        "tablet-landscape": css`
            flex-direction: column;
            gap: 30px;
            padding: 30px;
        `
    })
)