export interface WorksItemsInterface {
    DOI: string,
    publisher: string,
    type: string,
    created: {
        "date-time": string,
        timestamp: number
    },
    URL: string,
    title?: Array<string>,
    author?: Array<{
        [key: string]: any
    }>
}