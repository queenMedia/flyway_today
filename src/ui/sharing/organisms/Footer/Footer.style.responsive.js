import { css, cx } from "@emotion/css"
import { forsize, font, handlePaddings, grid, flex } from "@mixins";

export const title = cx(
    font({
        max: 16,
        min: 13
    })

)

export const text = cx(
    font({
        max: 14,
        min: 12
    })
)

export const button = cx(
    font({
        max: 20,
        min: 14
    }),
    handlePaddings({
        maxX: 15,
        maxY: 20,
    })
)

export const top_footer = cx(
    forsize({
        "tablet-portrait": cx(
            grid({
                columns: "repeat(2, 1fr)",
                rows:  "repeat(2, 1fr)",
                areas: `"item1 item4"
                        "item2 item3"
                `
            }),
            css`
                justify-content: center;
                align-items: center;
            `
        ),
        "phone-xbig": cx(
            flex({
                direction: "column",
                align: "flex-start"
            }),
            css`
                width: 100%;
                gap: 20px
            `
        )

    })
)

export const contact_container = cx(
    forsize({
        "tablet-portrait": cx(
            css`
                align-self: start;
            `
        )
    })
)