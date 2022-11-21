export interface CrossRefResponseInterface {
    [key: string]: any,
    status: string,
    "message-type": string,
    "message-version": string,
    message: {
        [key: string]: any,
        "total-results": number,
        items: Array<any>,
    }
  }