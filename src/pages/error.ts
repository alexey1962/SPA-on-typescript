import Page from "../modules/page";

export const enum ErrorTypes {
  Error_404 = 404
}

class ErrorPage extends Page {
  static TextObject: { [prop: string]: string } = {
    '404': 'Error 404! The page was not found',
  }

  constructor(id: string, private errorType: ErrorTypes | string) {
    super(id)
    this.errorType = errorType
  }

  render() {
    const title = this.createHeaderTitle(ErrorPage.TextObject[this.errorType])
    this.container.append(title)
    return this.container
  }
}

export default ErrorPage