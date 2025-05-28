export class CreateTodoDTO {
  /*
    public readonly text: string in the constructor

    is similar to 

    public readonly text: string

    constructor(text) {
      this.text = text
    }
  */


  private constructor(
    public readonly text: string
  ) {

  }

  // Receive req.body in this case and return a string with a message/error and todo
  static create(props: {[key:string]: any} ): [string?, CreateTodoDTO?] {
    const { text = '' } = props || {};

    if(!text) return ['The text is required']
    if(text.trim().length < 0) return ['No valid text']

    return [undefined, new CreateTodoDTO(text)]
  }
}
