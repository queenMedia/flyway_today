import { css, cx } from "@emotion/css"
import { forsize, font } from "@mixins";

export const container = cx(
    forsize({
        "desktop": cx(
            css`
                padding: 60px 0px;
                gap: 30px;
            `
        ),
        "tablet-landscape": cx(
            css`
                padding: 30px 0px;
                gap: 25px;
            `
        )
    })
)

export const cards_container = cx(
    forsize({
        "tablet-landscape": cx(
            css`
                flex-direction: column;
                gap: 30px;
            `
        )
    })
)