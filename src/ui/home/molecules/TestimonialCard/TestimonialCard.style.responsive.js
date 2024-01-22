import { css, cx } from "@emotion/css"
import { forsize, handleDimensions } from "@mixins";

export const card = cx(
    forsize({
        "desktop-mid": cx(
            css`
                padding: 0 30px 0 20px;
            `
        ),
        "tablet-landscape": cx(
            css`
                border-left: none;
                border-bottom: 3px solid #1070FF;
                padding: 0 20px 20px 10px;
            `
        )
    })
)

export const img = cx(
    handleDimensions({
        max: 130,
        min: 100,
        square: true
    })
)