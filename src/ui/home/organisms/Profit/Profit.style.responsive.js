import { css, cx } from "@emotion/css"
import { forsize, font, handleDimensions} from "@mixins";

export const container = cx(
    forsize({
        "tablet-landscape": css`
            flex-direction: column;
            gap: 30px;
        `
    })
)

export const img = cx(
    handleDimensions({
        max: 40,
        min: 30
    })
)